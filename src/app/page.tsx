// src/app/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans"> {/* Adjusted overall background color and font */}
      <Header />

      <main className="flex-grow w-full">
        <div className="container mx-auto grid lg:grid-cols-2 min-h-[calc(100vh-80px)] overflow-hidden rounded-xl lg:shadow-2xl lg:my-8">
          
          {/* Left Column: Hero Panel with Professional Image */}
          <div className="relative hidden lg:flex flex-col justify-center p-12 bg-blue-800 text-white rounded-l-xl"> {/* Blue background for hero */}
            <Image
              src="https://images.unsplash.com/photo-1549491798-e7c6b9d6a3d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional building facade"
              layout="fill"
              objectFit="cover"
              className="opacity-15" // Slightly less opaque for comfort
            />
            <div className="relative z-10 text-center lg:text-left">
              <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg leading-tight">
                Your Future. Our Expertise.
              </h1>
              <p className="mt-6 text-xl text-blue-100 max-w-lg mx-auto lg:mx-0 leading-relaxed drop-shadow-md">
                Connecting you to prime real estate opportunities with unparalleled insight and service. Join Panacco today.
              </p>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div id="register-form" className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white rounded-r-xl">
            <RegistrationForm />
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}