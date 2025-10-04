import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient()

// "export" has been removed from the line below
const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.RESEND_API_KEY,
      from: "onboarding@resend.dev"
    }),
  ],
  pages: {
    signIn: '/login', // Tells Auth.js to use our custom page at /login
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }