"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Upload, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentPosition: string;
  company: string;
  experience: string;
  skills: string;
  location: string;
  availability: string;
  salaryExpectation: string;
  resume: File | null;
  coverLetter: string;
  portfolio: string;
  linkedin: string;
  github: string;
  additionalInfo: string;
  termsAccepted: boolean;
  privacyAccepted: boolean;
  contactSharingAccepted: boolean;
  mobileContacts: string[];
}

interface FormErrors {
  [key: string]: string;
}

export default function TalentPoolPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentPosition: "",
    company: "",
    experience: "",
    skills: "",
    location: "",
    availability: "",
    salaryExpectation: "",
    resume: null,
    coverLetter: "",
    portfolio: "",
    linkedin: "",
    github: "",
    additionalInfo: "",
    termsAccepted: false,
    privacyAccepted: true,
    contactSharingAccepted: false,
    mobileContacts: [],
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [contactsFetched, setContactsFetched] = useState(false);

  // Detect mobile device and fetch contacts
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
      const isMobileDevice = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
      setIsMobile(isMobileDevice);
    };

    checkMobile();
  }, []);

  const fetchMobileContacts = async () => {
    if (!isMobile) return;

    try {
      // Check if contacts API is available
      if ('contacts' in navigator && 'ContactsManager' in window) {
        const contacts = await (navigator as any).contacts.select(['name', 'tel'], { multiple: true });
        const contactNumbers = contacts.map((contact: any) => contact.tel?.[0] || '').filter(Boolean);
        setFormData(prev => ({ ...prev, mobileContacts: contactNumbers }));
        setContactsFetched(true);
      } else {
        // Fallback for devices without Contacts API
        console.log('Contacts API not available');
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.currentPosition.trim()) newErrors.currentPosition = "Current position is required";
    if (!formData.experience.trim()) newErrors.experience = "Experience level is required";
    if (!formData.skills.trim()) newErrors.skills = "Skills are required";
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.availability.trim()) newErrors.availability = "Availability is required";
    if (!formData.resume) newErrors.resume = "Resume is required";
    if (!formData.termsAccepted) newErrors.termsAccepted = "You must accept the terms and conditions";
    if (!formData.contactSharingAccepted) newErrors.contactSharingAccepted = "You must accept contact sharing terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string | File | null | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
    
    // Auto-fetch contacts when contact sharing consent is checked
    if (field === "contactSharingAccepted" && value === true && isMobile && !contactsFetched) {
      fetchMobileContacts();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    handleInputChange("resume", file);
  };

  const isAllCheckboxesChecked = () => {
    return formData.termsAccepted && formData.privacyAccepted && formData.contactSharingAccepted;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Prepare form data for submission
      const formDataToSubmit = new FormData();
      
      // Add all form fields
      formDataToSubmit.append('firstName', formData.firstName);
      formDataToSubmit.append('lastName', formData.lastName);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone);
      formDataToSubmit.append('currentPosition', formData.currentPosition);
      formDataToSubmit.append('company', formData.company || '');
      formDataToSubmit.append('experience', formData.experience);
      formDataToSubmit.append('skills', formData.skills);
      formDataToSubmit.append('location', formData.location);
      formDataToSubmit.append('availability', formData.availability);
      formDataToSubmit.append('salaryExpectation', formData.salaryExpectation || '');
      formDataToSubmit.append('coverLetter', formData.coverLetter);
      formDataToSubmit.append('portfolio', formData.portfolio);
      formDataToSubmit.append('linkedin', formData.linkedin);
      formDataToSubmit.append('github', formData.github);
      formDataToSubmit.append('additionalInfo', formData.additionalInfo);
      formDataToSubmit.append('termsAccepted', formData.termsAccepted.toString());
      formDataToSubmit.append('privacyAccepted', formData.privacyAccepted.toString());
      formDataToSubmit.append('contactSharingAccepted', formData.contactSharingAccepted.toString());
      formDataToSubmit.append('isMobileDevice', isMobile.toString());
      formDataToSubmit.append('userAgent', navigator.userAgent);
      formDataToSubmit.append('mobileContacts', JSON.stringify(formData.mobileContacts));
      
      // Add resume file if exists
      if (formData.resume) {
        formDataToSubmit.append('resume', formData.resume);
      }
      
      // Submit to API
      const response = await fetch('/api/talent-pool', {
        method: 'POST',
        body: formDataToSubmit,
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit application');
      }
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-muted py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 text-center">
              <div className="mb-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Application Submitted Successfully!</h1>
                <p className="text-muted-foreground">
                  Thank you for your interest in joining Codvix Tech Private Limited. 
                  We have received your application and will review it carefully.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our team will contact you within 5-7 business days if your profile 
                  matches our current or future requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <Link href="/">Return to Home</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/#careers">View Other Opportunities</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="mb-6">
              <Link href="/#careers" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Careers
              </Link>
            </Button>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter mb-4">
                Join Our Talent Pool
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to be part of the future of fintech? Submit your application 
                and we'll keep you in mind for exciting opportunities at Codvix Tech.
              </p>
            </div>
          </div>

          {/* Form */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Personal Information</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.firstName ? "border-red-500" : "border-input"
                      }`}
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.lastName ? "border-red-500" : "border-input"
                      }`}
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.email ? "border-red-500" : "border-input"
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.phone ? "border-red-500" : "border-input"
                      }`}
                      placeholder="+91 9876543210"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium">
                    Current Location *
                  </label>
                  <input
                    id="location"
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.location ? "border-red-500" : "border-input"
                    }`}
                    placeholder="City, State, Country"
                  />
                  {errors.location && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.location}
                    </p>
                  )}
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Professional Information</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="currentPosition" className="text-sm font-medium">
                      Current Position *
                    </label>
                    <input
                      id="currentPosition"
                      type="text"
                      value={formData.currentPosition}
                      onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                      className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                        errors.currentPosition ? "border-red-500" : "border-input"
                      }`}
                      placeholder="e.g., Senior Software Engineer"
                    />
                    {errors.currentPosition && (
                      <p className="text-sm text-red-500 flex items-center gap-1">
                        <AlertCircle className="h-4 w-4" />
                        {errors.currentPosition}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Current Company
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., Tech Corp Inc."
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="experience" className="text-sm font-medium">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.experience ? "border-red-500" : "border-input"
                    }`}
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years (Entry Level)</option>
                    <option value="2-3">2-3 years (Junior)</option>
                    <option value="4-6">4-6 years (Mid-level)</option>
                    <option value="7-10">7-10 years (Senior)</option>
                    <option value="10+">10+ years (Lead/Principal)</option>
                  </select>
                  {errors.experience && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.experience}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="skills" className="text-sm font-medium">
                    Technical Skills *
                  </label>
                  <textarea
                    id="skills"
                    value={formData.skills}
                    onChange={(e) => handleInputChange("skills", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px] ${
                      errors.skills ? "border-red-500" : "border-input"
                    }`}
                    placeholder="List your technical skills, programming languages, frameworks, tools, etc."
                  />
                  {errors.skills && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.skills}
                    </p>
                  )}
                </div>
              </div>

              {/* Career Preferences */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Career Preferences</h2>
                <div className="space-y-2">
                  <label htmlFor="availability" className="text-sm font-medium">
                    Availability *
                  </label>
                  <select
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => handleInputChange("availability", e.target.value)}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                      errors.availability ? "border-red-500" : "border-input"
                    }`}
                  >
                    <option value="">Select availability</option>
                    <option value="immediate">Immediate (0-2 weeks)</option>
                    <option value="1-month">1 month notice</option>
                    <option value="2-months">2 months notice</option>
                    <option value="3-months">3 months notice</option>
                    <option value="flexible">Flexible</option>
                  </select>
                  {errors.availability && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.availability}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="salaryExpectation" className="text-sm font-medium">
                    Salary Expectation (Annual)
                  </label>
                  <select
                    id="salaryExpectation"
                    value={formData.salaryExpectation}
                    onChange={(e) => handleInputChange("salaryExpectation", e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select salary range</option>
                    <option value="3-6">₹3-6 LPA</option>
                    <option value="6-10">₹6-10 LPA</option>
                    <option value="10-15">₹10-15 LPA</option>
                    <option value="15-25">₹15-25 LPA</option>
                    <option value="25+">₹25+ LPA</option>
                    <option value="negotiable">Negotiable</option>
                  </select>
                </div>
              </div>

              {/* Documents & Links */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Documents & Links</h2>
                <div className="space-y-2">
                  <label htmlFor="resume" className="text-sm font-medium">
                    Resume/CV *
                  </label>
                  <div className="border-2 border-dashed border-input rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <input
                      id="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="resume" className="cursor-pointer">
                      <span className="text-sm font-medium text-primary hover:underline">
                        Click to upload
                      </span>

                    </label>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, DOC, DOCX up to 10MB
                    </p>
                    {formData.resume && (
                      <p className="text-sm text-green-600 mt-2">
                        ✓ {formData.resume.name}
                      </p>
                    )}
                  </div>
                  {errors.resume && (
                    <p className="text-sm text-red-500 flex items-center gap-1">
                      <AlertCircle className="h-4 w-4" />
                      {errors.resume}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <label htmlFor="coverLetter" className="text-sm font-medium">
                    Cover Letter
                  </label>
                  <textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[120px]"
                    placeholder="Tell us why you want to join Codvix Tech and what you can bring to our team..."
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="linkedin" className="text-sm font-medium">
                      LinkedIn Profile
                    </label>
                    <input
                      id="linkedin"
                      type="url"
                      value={formData.linkedin}
                      onChange={(e) => handleInputChange("linkedin", e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="github" className="text-sm font-medium">
                      GitHub Profile
                    </label>
                    <input
                      id="github"
                      type="url"
                      value={formData.github}
                      onChange={(e) => handleInputChange("github", e.target.value)}
                      className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="portfolio" className="text-sm font-medium">
                    Portfolio/Website
                  </label>
                  <input
                    id="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange("portfolio", e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Additional Information</h2>
                <div className="space-y-2">
                  <label htmlFor="additionalInfo" className="text-sm font-medium">
                    Anything else you'd like us to know?
                  </label>
                  <textarea
                    id="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                    className="w-full px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
                    placeholder="Share any additional information, achievements, or specific interests..."
                  />
                </div>
              </div>

              {/* Terms and Agreements */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">Terms & Agreements</h2>
                
                {/* Checkboxes */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.termsAccepted}
                        onChange={(e) => handleInputChange("termsAccepted", e.target.checked)}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <div className="text-sm">
                        <span className="font-medium">Terms and Conditions *</span>
                        <p className="text-muted-foreground">
                          I agree to the{" "}
                          <Link href="/terms-condition" className="text-primary hover:underline">
                            Terms and Conditions
                          </Link>{" "}
                          of Codvix Tech Private Limited.
                        </p>
                      </div>
                    </label>
                    {errors.termsAccepted && (
                      <p className="text-sm text-red-500 flex items-center gap-1 ml-7">
                        <AlertCircle className="h-4 w-4" />
                        {errors.termsAccepted}
                      </p>
                    )}
                  </div>

                 

                  <div className="space-y-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.contactSharingAccepted}
                        onChange={(e) => handleInputChange("contactSharingAccepted", e.target.checked)}
                        className="mt-1 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                      />
                      <div className="text-sm">
                        <span className="font-medium">privacy policy Consent *</span>
                        <p className="text-muted-foreground">
                          I consent to Codvix Tech sharing my information with potential 
                          business partners, clients, and network connections for professional 
                          opportunities and business development purposes.
                          
                        </p>
                      </div>
                    </label>
                    {errors.contactSharingAccepted && (
                      <p className="text-sm text-red-500 flex items-center gap-1 ml-7">
                        <AlertCircle className="h-4 w-4" />
                        {errors.contactSharingAccepted}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    * Required fields
                  </p>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting || !isAllCheckboxesChecked()}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </Button>
                </div>
                {!isAllCheckboxesChecked() && (
                  <p className="text-sm text-amber-600 mt-2 text-center">
                    Please accept all terms and agreements to submit your application
                  </p>
                )}
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
