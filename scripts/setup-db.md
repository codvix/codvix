# Database Setup Instructions

## Quick Setup

### 1. Install PostgreSQL
Make sure you have PostgreSQL installed on your system.

### 2. Create Database
Create a new database for the talent pool:

```bash
# Using PostgreSQL CLI
psql -U postgres
CREATE DATABASE codvix_talent_pool;
\q
```

### 3. Update Environment Variables
Edit the `.env` file and update the DATABASE_URL:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/codvix_talent_pool?schema=public"
```

Replace:
- `username` - Your PostgreSQL username
- `password` - Your PostgreSQL password
- `localhost:5432` - Your database host and port

### 4. Run Migrations
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init
```

### 5. Verify Database
```bash
# Open Prisma Studio to view data
npx prisma studio
```

## Production Database (Remote)

For production, you'll need a cloud PostgreSQL database. Here are some options:

### Option 1: Vercel Postgres
1. Go to your Vercel project settings
2. Navigate to Storage
3. Create a new Postgres database
4. Copy the connection string to your `.env` file

### Option 2: Supabase
1. Sign up at https://supabase.com
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string to your `.env` file

### Option 3: Railway
1. Sign up at https://railway.app
2. Create a new PostgreSQL database
3. Copy the connection string to your `.env` file

## Checking Submissions

You can check the submissions in multiple ways:

### Method 1: Prisma Studio (Recommended)
```bash
npx prisma studio
```
This opens a visual database browser at http://localhost:5555

### Method 2: Database CLI
```bash
psql -U postgres -d codvix_talent_pool
\dt                    # List tables
SELECT * FROM talent_applications;
SELECT * FROM mobile_contacts;
```

### Method 3: Database GUI Tools
- PostgreSQL Admin (pgAdmin)
- DBeaver
- TablePlus
- DataGrip

## Files Stored

Resumes are stored in: `uploads/resumes/` (in your project root)

## Database Schema

### talent_applications
Main table storing all form submissions including:
- Personal information
- Professional details
- Skills and experience
- Terms acceptance
- Status tracking

### mobile_contacts
Linked table storing mobile contacts from applicants including:
- Contact numbers
- Professional indicators
- Network strength ratings

## Query Examples

### Get all applications
```sql
SELECT * FROM talent_applications ORDER BY "createdAt" DESC;
```

### Get applications with mobile contacts
```sql
SELECT 
  a.*,
  COUNT(m.id) as contact_count
FROM talent_applications a
LEFT JOIN mobile_contacts m ON a.id = m."talentApplicationId"
GROUP BY a.id
ORDER BY contact_count DESC;
```

### Get network quality assessment
```sql
SELECT 
  a."firstName",
  a."lastName",
  a.email,
  COUNT(m.id) as total_contacts,
  COUNT(CASE WHEN m."isProfessional" THEN 1 END) as professional_contacts,
  AVG(m."networkStrength") as avg_network_strength
FROM talent_applications a
LEFT JOIN mobile_contacts m ON a.id = m."talentApplicationId"
GROUP BY a.id, a."firstName", a."lastName", a.email
ORDER BY avg_network_strength DESC NULLS LAST;
```

## Need Help?

Check the logs in `console.log` output or use:
```bash
npx prisma studio
```


