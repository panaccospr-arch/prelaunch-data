import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./components/AuthProvider";
import Header from "./components/Header"; // 1. Import the Header

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
      <body className={inter.className}>
        <AuthProvider>
          <Header /> {/* 2. Add the Header component here */}
          <main className="container mx-auto p-4">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}