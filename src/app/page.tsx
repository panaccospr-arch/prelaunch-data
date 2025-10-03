// src/app/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow w-full">
        <div className="container mx-auto grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
          
          {/* Left Column: Hero Panel */}
          <div className="relative hidden lg:flex flex-col justify-center p-12 bg-gray-900 text-white">
            <Image
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=1992&auto=format&fit=crop"
              alt="Luxurious modern house"
              layout="fill"
              objectFit="cover"
              className="opacity-20"
            />
            <div className="relative z-10">
              <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg">
                Your Next Chapter Starts Here.
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-lg leading-relaxed">
                Gain exclusive pre-launch access to premium real estate listings. Join Panacco and find a home that defines your future.
              </p>
            </div>
          </div>

          {/* Right Column: Registration Form */}
          <div id="register-form" className="w-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <RegistrationForm />
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}