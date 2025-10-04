// src/app/api/submit/route.ts

import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

const prisma = new PrismaClient();

const ANON_SUBMISSION_LIMIT = 10;
const VERIFIED_SUBMISSION_LIMIT = 30;

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    const body = await request.json();

    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    // Rate limiting logic (remains the same)
    if (session?.user?.id) {
      const submissionCount = await prisma.submission.count({
        where: { userId: session.user.id, createdAt: { gte: twentyFourHoursAgo } },
      });
      if (submissionCount >= VERIFIED_SUBMISSION_LIMIT) {
        return NextResponse.json({ message: 'Daily submission limit reached.' }, { status: 429 });
      }
    } else {
      const submissionCount = await prisma.submission.count({
        where: { ipAddress: ip, createdAt: { gte: twentyFourHoursAgo } },
      });
      if (submissionCount >= ANON_SUBMISSION_LIMIT) {
        return NextResponse.json({ message: 'Daily submission limit reached.' }, { status: 429 });
      }
    }
    
    // --- THIS IS THE CORRECTED LOGIC ---
    
    // 1. Destructure all fields from the form body
    const { 
      fName, lName, gender, dateOfBirth, pincode, 
      country, state, district, city, policeStation, 
      postOffice, locality, landmark, agreeToTerms 
    } = body;

    // 2. Build the final data object for Prisma in a type-safe way
    const dataForPrisma = {
      fName, lName, gender,
      dateOfBirth: new Date(dateOfBirth),
      pincode, country, state, district, city,
      policeStation, postOffice, locality, landmark,
      ipAddress: ip,
      // Conditionally connect to a user if a session exists
      user: session?.user?.id 
        ? { connect: { id: session.user.id } } 
        : undefined,
    };
    
    // 3. Create the submission with the clean, correctly typed data
    const newSubmission = await prisma.submission.create({
      data: dataForPrisma,
    });

    return NextResponse.json({ message: 'Submission successful!', submission: newSubmission }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error submitting details to the database.' }, { status: 500 });
  }
}