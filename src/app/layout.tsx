import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthProvider"; // Use alias
import Header from "@/components/Header";           // Use alias
import Footer from "@/components/Footer";           // Use alias

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Panacco Pre-launch",
  description: "Contribute your local expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-900 text-white">
        <AuthProvider>
          <Header />
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}