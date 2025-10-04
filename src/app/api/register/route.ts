import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    // Get the form data from the request
    const data = await request.json();

    // Convert the dateOfBirth string to a Date object for Prisma
    if (data.dateOfBirth) {
      data.dateOfBirth = new Date(data.dateOfBirth);
    }
    
    // Use Prisma to create a new record in the database
    const newUser = await prisma.userRegistration.create({
      data: data,
    });

    // Send a success response back to the form
    return NextResponse.json({ message: 'Registration successful!', user: newUser }, { status: 201 });

  } catch (error) {
    // If an error occurs, send back an error response
    console.error(error);
    return NextResponse.json({ message: 'Error creating registration.' }, { status: 500 });
  }
}