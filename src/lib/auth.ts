// src/lib/auth.ts

import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    EmailProvider({
      server: process.env.RESEND_API_KEY,
      from: "onboarding@resend.dev"
    }),
  ],
  pages: {
    signIn: '/login',
  },
  // Add the callbacks section here
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id; // Add the user ID to the session
      }
      return session;
    },
  },
}