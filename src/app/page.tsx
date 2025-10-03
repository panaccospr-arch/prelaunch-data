// src/app/page.tsx

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RegistrationForm from '@/components/RegistrationForm';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />

      <main className="flex-grow">
        {/* High-Impact Hero Section */}
        <section 
          className="relative w-full h-[70vh] flex items-center justify-center text-center text-white bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div> {/* Dark Overlay */}
          <div className="relative z-10 p-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
              Your Story Begins at Home.
            </h1>
            {/* CORRECTED LINE BELOW - Removed apostrophe */}
            <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 drop-shadow-md">
              Help us map the future of real estate in India. By sharing details of areas you know, you are building a more transparent market for everyone.
            </p>
            <a 
              href="#register-form" 
              className="mt-10 inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
            >
              Contribute Your Knowledge
            </a>
          </div>
        </section>

        {/* Form Section */}
        <section id="register-form" className="w-full py-16 sm:py-24 bg-gray-100 flex justify-center">
          <div className="container px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Share Your Local Expertise</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-10">
              Your insights are invaluable. Please provide geographic details for any area you are familiar with.
            </p>
            <div className="flex justify-center">
              <RegistrationForm />
            </div>
            
            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800">Want Future Updates & Benefits?</h3>
              <p className="mt-3 text-gray-600">
                Register an account via the button in the header or follow us on social media to be the first to know about early joining benefits and platform updates from Panacco.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}