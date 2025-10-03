// src/components/Header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Text Logo */}
        <div className="text-3xl font-extrabold text-blue-700 tracking-tight">
          <Link href="/">Panacco</Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-4 flex items-center">
          <Link href="/login" className="text-gray-700 hover:text-blue-700 transition-colors font-medium text-lg">
            Login
          </Link>
          <Link href="#register-form" className="bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-md text-lg font-medium">
            Register
          </Link>
        </nav>
      </div>
    </header>
  );
}