'use client';

import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Header() {
  const { data: session, status } = useSession();

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          Panacco
        </Link>

        <div className="flex items-center space-x-4">
          {status === 'loading' && (
            <p>Loading...</p>
          )}

          {status === 'unauthenticated' && (
            <button
              onClick={() => signIn()}
              className="px-4 py-2 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>
          )}

          {status === 'authenticated' && session.user && (
            <>
              <span>{session.user.email}</span>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-600 rounded-md font-semibold hover:bg-red-700 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}