import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import Header from "./components/Header";
import Footer from "./components/Footer"; // 1. Import the Footer

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
          <Footer /> {/* 2. Add the Footer component here */}
        </AuthProvider>
      </body>
    </html>
  );
}