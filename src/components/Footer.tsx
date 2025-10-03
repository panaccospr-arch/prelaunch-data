// src/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Panacco. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <Link href="#" className="hover:text-white">Facebook</Link>
          <Link href="#" className="hover:text-white">LinkedIn</Link>
          <Link href="#" className="hover:text-white">X (Twitter)</Link>
          <Link href="#" className="hover:text-white">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}