import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 px-4 text-center">
        
        {/* Main Heading */}
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          The Ultimate Platform for Your Real Estate Needs
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-lg text-gray-300 md:text-xl">
          Join our community today and unlock exclusive features. Our platform is designed to be simple, efficient, and powerful. Sign up in seconds.
        </p>

        {/* Call-to-Action Button */}
        <Link 
          href="#register-form" 
          className="rounded-md bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Get Started Now
        </Link>

      </div>
    </main>
  );
}