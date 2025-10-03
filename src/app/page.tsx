// src/app/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-grow">
        {/* New High-Impact Hero Section */}
        <section 
          className="relative w-full h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div> {/* Dark Overlay */}
          <div className="relative z-10 p-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
              The Future of Real Estate. Realized.
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
              Gain exclusive pre-launch access to premium listings and market insights. Your next chapter starts with Panacco.
            </p>
            <a 
              href="#register-form" 
              className="mt-10 inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Join the Pre-Launch List
            </a>
          </div>
        </section>

        {/* Form Section */}
        <section id="register-form" className="w-full py-16 sm:py-24 bg-gray-100 flex justify-center">
          <div className="container px-4">
            <RegistrationForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}