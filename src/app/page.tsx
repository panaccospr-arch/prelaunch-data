// src/app/page.tsx

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Image and Marketing Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight">
              Your Future Home Awaits. Find It With Panacco.
            </h1>
            <p className="mt-6 max-w-2xl text-lg lg:text-xl text-gray-600">
              Join our pre-launch list to get exclusive access to the most sought-after properties in India. Be the first to know.
            </p>
            <div className="mt-8 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
                alt="Modern living room"
                width={1200}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div className="flex justify-center" id="register-form">
            <RegistrationForm />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}