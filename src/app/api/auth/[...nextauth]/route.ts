import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import EmailProvider from "next-auth/providers/email";

const prisma = new PrismaClient()

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.RESEND_API_KEY, // This uses the key we just added
      from: "onboarding@resend.dev" // A default "from" address by Resend
    }),
    // We will add Google, etc. here later
  ],
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }