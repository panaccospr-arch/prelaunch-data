'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('Sending login link...');

    try {
      const result = await signIn('email', {
        email,
        redirect: false, // We handle the redirect manually or just show a message
      });

      if (result?.error) {
        throw new Error(result.error);
      }
      
      setMessage('A magic link has been sent to your email!');

    } catch (error) {
      setMessage('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white">Login or Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full input-style"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full submit-button-style disabled:bg-gray-500"
            >
              {isSubmitting ? 'Sending...' : 'Sign in with Email'}
            </button>
          </div>
        </form>
        {message && <p className="text-center text-gray-400">{message}</p>}
      </div>
    </div>
  );
}