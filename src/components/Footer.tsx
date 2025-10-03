// src/components/Footer.tsx

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 text-gray-300 py-10 px-4">
      <div className="container mx-auto flex flex-col items-center">
        
        {/* Text Logo and Copyright */}
        <div className="text-center mb-6">
          <div className="text-3xl font-extrabold text-blue-400 tracking-tight mb-2">
            Panacco
          </div>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Panacco. All rights reserved.
          </p>
        </div>
        
        {/* Social Media Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-4">
            Join us on Social Media
          </h3>
          <div className="flex items-center justify-center space-x-6">
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.399c0-2.022.984-3.125 2.443-3.125 1.25 0 2.063.859 2.415 1.688v9.836h4.98v-10.239c0-3.606-2.208-5.761-5.138-5.761-2.005 0-3.435 1.126-4.08 2.158h-.058v-1.808h-4.98v16h4.98v-8.399z" /></svg></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.148 3.228-1.667 4.747-4.919 4.919-.058 1.265-.07 1.646-.07 4.85s.012 3.584.07 4.85c.148 3.252 1.691 4.771 4.919 4.919 1.265.058 1.646.07 4.85.07s3.584-.012 4.85-.07c3.228-.148 4.747-1.667 4.919-4.919.058-1.265.07-1.646.07-4.85s-.012-3.584-.07-4.85c-.148-3.252-1.691-4.771-4.919-4.919-1.265-.058-1.646-.07-4.85-.07zm0 2.163c-3.252 0-3.662.013-4.952.071-3.242.146-4.731 1.673-4.877 4.877-.058 1.29-.071 1.7-.071 4.952s.013 3.662.071 4.952c.146 3.242 1.673 4.731 4.877 4.877 1.29.058 1.7.071 4.952.071s3.662-.013 4.952-.071c3.242-.146 4.731-1.673 4.877-4.877.058-1.29.071 1.7.071 4.952s-.013-3.662-.071-4.952c-.146-3.242-1.673-4.731-4.877-4.877-1.29-.058-1.7-.071-4.952-.071zm0 4.163c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm0 2.163c-1.196 0-2 1.004-2 2s.804 2 2 2 2-1.004 2-2-.804-2-2-2zm6.204-6.204h.01v.011h-.01v-.011z" /></svg></a>
            {/* ... other icons ... */}
          </div>
        </div>
      </div>
    </footer>
  );
}