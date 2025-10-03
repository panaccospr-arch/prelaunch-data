// src/app/page.tsx

import RegistrationForm from '@/components/RegistrationForm';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4 md:p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Marketing Content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800 tracking-tight">
            The Ultimate Platform for Your Real Estate Needs
          </h1>
          <p className="mt-6 max-w-2xl text-lg lg:text-xl text-gray-600">
            Join our community today and unlock exclusive features. Our platform is designed to be simple, efficient, and powerful. Sign up in seconds to get started.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-4">
             {/* We can add social proof or logos here later */}
          </div>
        </div>

        {/* Right Column: Registration Form */}
        <div className="flex justify-center md:justify-end">
          <RegistrationForm />
        </div>

      </div>
    </main>
  );
}