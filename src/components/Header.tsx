// src/components/Header.tsx

import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-700">
          <Link href="/">
            <Image
              src="/images/panacco-logo.png" // Assumes your logo is at public/images/panacco-logo.png
              alt="Panacco Real Estate Service Logo"
              width={50}
              height={35}
              priority
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-blue-700 transition-colors">
            Login
          </Link>
          <Link href="#register-form" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}