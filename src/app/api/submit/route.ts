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
    // CORRECTED LINE BELOW - Removed `request.ip`
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    const data = await request.json();

    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);

    let submissionCount = 0;

    if (session?.user?.id) {
      submissionCount = await prisma.submission.count({
        where: { userId: session.user.id, createdAt: { gte: twentyFourHoursAgo } },
      });
      if (submissionCount >= VERIFIED_SUBMISSION_LIMIT) {
        return NextResponse.json({ message: 'Daily submission limit reached.' }, { status: 429 });
      }
    } else {
      submissionCount = await prisma.submission.count({
        where: { ipAddress: ip, createdAt: { gte: twentyFourHoursAgo } },
      });
      if (submissionCount >= ANON_SUBMISSION_LIMIT) {
        return NextResponse.json({ message: 'Daily submission limit reached.' }, { status: 429 });
      }
    }
    
    if (data.dateOfBirth) {
      data.dateOfBirth = new Date(data.dateOfBirth);
    }

    const newSubmission = await prisma.submission.create({
      data: {
        ...data,
        ipAddress: ip,
        ...(session?.user?.id && {
          user: { connect: { id: session.user.id } },
        }),
      },
    });

    return NextResponse.json({ message: 'Submission successful!', submission: newSubmission }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error submitting details to the database.' }, { status: 500 });
  }
}