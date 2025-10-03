// src/app/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-center">
        {/* Hero Section */}
        <section 
          className="w-full bg-cover bg-center text-white py-24 px-4 relative flex items-center justify-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop')" }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          <div className="container mx-auto text-center relative z-10 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-lg">
              Unlock Your Dream Home. Simplified.
            </h1>
            <p className="mt-6 text-xl md:text-2xl font-light text-gray-200 leading-relaxed drop-shadow-md">
              Discover exclusive properties, insightful market data, and a seamless journey to your next real estate investment with Panacco.
            </p>
            <a 
              href="#register-form" 
              className="mt-10 inline-block bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold px-8 py-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              Get Started Today
            </a>
          </div>
        </section>

        {/* Content Section (where the form resides) */}
        <section id="register-form" className="w-full py-16 px-4 bg-gray-50 flex items-center justify-center">
          <RegistrationForm />
        </section>

      </main>

      <Footer />
    </div>
  );
}