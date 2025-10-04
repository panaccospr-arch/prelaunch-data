'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('Sending login link...');
    try {
      await signIn('email', { email, redirect: false });
      setMessage('A magic link has been sent to your email!');
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-white">Login or Register</h1>

        {/* Google Sign-in Button */}
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className="w-full flex items-center justify-center px-4 py-2 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600"
        >
          <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
            {/* Google G Logo SVG Path */}
            <path fill="#4285F4" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#34A853" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8V44c5.522,0,10.52-2.239,14.142-5.858L43.611,20.083z"></path><path fill="#FBBC05" d="M10.858,14.142L5.201,8.485C2.239,12.478,0,18.014,0,24s2.239,11.522,5.201,15.515l5.657-5.657C9.846,30.485,9,27.34,9,24C9,20.66,9.846,17.515,10.858,14.142z"></path><path fill="#EA4335" d="M24,9c4.555,0,8.584,1.968,11.485,4.869l-5.656,5.656C28.093,17.227,26.21,16,24,16c-3.34,0-6.154,1.846-7.485,4.515l-5.657-5.657C6.478,10.239,12.478,4,24,4V9z"></path><path fill="none" d="M0,0h48v48H0z"></path>
          </svg>
          Sign in with Google
        </button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
          </div>
        </div>
        
        {/* Email Form */}
        <form onSubmit={handleEmailSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <input id="email" name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full input-style" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting} className="w-full submit-button-style disabled:bg-gray-500">
              {isSubmitting ? 'Sending...' : 'Sign in with Email'}
            </button>
          </div>
        </form>
        {message && <p className="text-center text-gray-400">{message}</p>}
      </div>
    </div>
  );
}