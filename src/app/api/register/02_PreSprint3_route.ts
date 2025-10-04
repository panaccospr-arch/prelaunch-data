import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Check for duplicate email or phone number
    const existingUser = await prisma.userRegistration.findFirst({
      where: {
        OR: [
          { email: data.email },
          { phone: data.phone },
        ],
      },
    });

    // 2. If a user is found, return an error
    if (existingUser) {
      return NextResponse.json(
        { message: 'This email or phone number is already registered.' },
        { status: 409 } // 409 is the HTTP status code for "Conflict"
      );
    }

    // Convert the dateOfBirth string to a Date object
    if (data.dateOfBirth) {
      data.dateOfBirth = new Date(data.dateOfBirth);
    }
    
    // 3. If no duplicate is found, create the new user
    const newUser = await prisma.userRegistration.create({
      data: data,
    });

    return NextResponse.json({ message: 'Registration successful!', user: newUser }, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error submitting details to the database.' }, { status: 500 });
  }
}