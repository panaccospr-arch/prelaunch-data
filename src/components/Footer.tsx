// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} Panacco. All rights reserved.</p>
        </div>
        <div className="flex items-center space-x-5">
          {/* Social Icons will go here, they are unchanged from the previous step */}
           <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-blue-600"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg></a>
           <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-blue-700"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.98v16h4.98v-8.399c0-2.022.984-3.125 2.443-3.125 1.25 0 2.063.859 2.415 1.688v9.836h4.98v-10.239c0-3.606-2.208-5.761-5.138-5.761-2.005 0-3.435 1.126-4.08 2.158h-.058v-1.808h-4.98v16h4.98v-8.399z" /></svg></a>
           <a href="#" aria-label="X (Twitter)" className="text-gray-400 hover:text-black"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.627l-5.21-6.815-6.041 6.815h-3.308l7.738-8.835-8.332-10.67h6.78l4.593 6.131 5.434-6.131zm-1.156 19.45h1.838l-13.886-18.3h-1.956l13.998 18.3z" /></svg></a>
        </div>
      </div>
    </footer>
  );
}