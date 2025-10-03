// src/app/page.tsx

import Link from 'next/link';
import RegistrationForm from '@/components/RegistrationForm'; // <-- Import the component

export default function HomePage() {
  return (
    // We'll have two main sections now: Hero and Form
    <main className="flex min-h-screen flex-col items-center justify-start space-y-16 bg-gray-100 py-12 text-gray-800">
      
      {/* Hero Section */}
      <section className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          The Ultimate Platform for Your Real Estate Needs
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 md:text-xl">
          Join our community today and unlock exclusive features. Our platform is designed to be simple, efficient, and powerful. Sign up in seconds.
        </p>
        <Link 
          href="#register-form" 
          className="rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-700"
        >
          Get Started Now
        </Link>
      </section>

      {/* Form Section */}
      <RegistrationForm /> {/* <-- Add the component here */}

    </main>
  );
}