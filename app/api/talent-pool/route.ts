

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Extract form fields
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const currentPosition = formData.get('currentPosition') as string;
    const company = formData.get('company') as string;
    const experience = formData.get('experience') as string;
    const skills = formData.get('skills') as string;
    const location = formData.get('location') as string;
    const availability = formData.get('availability') as string;
    const salaryExpectation = formData.get('salaryExpectation') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const portfolio = formData.get('portfolio') as string;
    const linkedin = formData.get('linkedin') as string;
    const github = formData.get('github') as string;
    const additionalInfo = formData.get('additionalInfo') as string;
    const termsAccepted = formData.get('termsAccepted') === 'true';
    const privacyAccepted = formData.get('privacyAccepted') === 'true';
    const contactSharingAccepted = formData.get('contactSharingAccepted') === 'true';
    const isMobileDevice = formData.get('isMobileDevice') === 'true';
    const userAgent = formData.get('userAgent') as string;
    const mobileContacts = JSON.parse(formData.get('mobileContacts') as string || '[]');
    
    // Handle resume file upload
    const resume = formData.get('resume') as File;
    let resumeFileName = null;
    let resumeUrl = null;
    
    if (resume && resume.size > 0) {
      const bytes = await resume.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Create uploads directory if it doesn't exist
      const uploadDir = join(process.cwd(), 'uploads', 'resumes');
      if (!existsSync(uploadDir)) {
        await mkdir(uploadDir, { recursive: true });
      }
      
      // Generate unique filename
      const timestamp = Date.now();
      const fileExtension = resume.name.split('.').pop();
      resumeFileName = `${firstName}_${lastName}_${timestamp}.${fileExtension}`;
      const filePath = join(uploadDir, resumeFileName);
      
      // Save file
      await writeFile(filePath, buffer);
      resumeUrl = `/uploads/resumes/${resumeFileName}`;
    }
    
    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !currentPosition || !experience || !skills || !location || !availability) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    if (!termsAccepted || !privacyAccepted || !contactSharingAccepted) {
      return NextResponse.json(
        { error: 'All terms and agreements must be accepted' },
        { status: 400 }
      );
    }
    
    // Check if email already exists
    const existingApplication = await prisma.talentApplication.findUnique({
      where: { email }
    });
    
    if (existingApplication) {
      return NextResponse.json(
        { error: 'An application with this email already exists' },
        { status: 409 }
      );
    }
    
    // Create talent application
    const application = await prisma.talentApplication.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        currentPosition,
        company,
        experience,
        skills,
        location,
        availability,
        salaryExpectation,
        resumeFileName,
        resumeUrl,
        coverLetter,
        portfolio,
        linkedin,
        github,
        additionalInfo,
        termsAccepted,
        privacyAccepted,
        contactSharingAccepted,
        isMobileDevice,
        userAgent,
        mobileContacts: {
          create: mobileContacts.map((contact: {
            name?: string;
            number?: string;
            tel?: string;
            email?: string;
            isProfessional?: boolean;
            networkStrength?: number;
          }) => ({
            contactName: contact.name || null,
            contactNumber: contact.number || contact.tel || '',
            contactEmail: contact.email || null,
            isProfessional: contact.isProfessional || false,
            networkStrength: contact.networkStrength || null,
          }))
        }
      },
      include: {
        mobileContacts: true
      }
    });
    
    // TODO: Send notification email to admin
    // TODO: Send confirmation email to applicant
    
    return NextResponse.json({
      success: true,
      applicationId: application.id,
      message: 'Application submitted successfully'
    });
    
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const applications = await prisma.talentApplication.findMany({
      include: {
        mobileContacts: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    return NextResponse.json(applications);
  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

