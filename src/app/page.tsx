/*
Panacco Pre-launch Hero Component
Single-file React component suitable for Next.js (app router or pages). Uses TailwindCSS for styling.

How to use:
- Save as `app/page.jsx` (Next.js app router) or `pages/index.jsx` (pages router).
- Ensure Tailwind is configured in your project.
- Replace placeholders for social-auth endpoints, reCAPTCHA site key, and POST endpoint `/api/prelaunch` with your backend (Strapi/Next API route) implementations.
- This file includes client-side validation, bilingual greeting (EN/HIN), conditional phone/email requirement, and an authorization checkbox.

Core features included:
- Logo + header with login/registration buttons (links point to `/api/auth/...` placeholders)
- Pre-launch form capturing geographic + personal details
- reCAPTCHA placeholder (integrate official script & verification on backend)
- Authorization checkbox mandatory
- Thank you message + bilingual welcome text after successful submission
- Accessible form with focus states

Notes on integration:
- Server-side: create `/api/prelaunch` to validate and persist to Postgres/Strapi; verify reCAPTCHA server-side.
- Auth: use Auth0 / NextAuth or your preferred provider. Social login buttons should route to provider auth endpoints.
- For OTP: integrate Firebase Auth or third-party provider (MSG91, Twilio) on the backend.
*/

'use client';

import React, { useState, useEffect } from 'react';

export default function PrelaunchHero() {
  const initial = {
    fName: '',
    lName: '',
    dateBirth: '',
    phoneNo: '',
    email_ID: '',
    pincode: '',
    country: 'Bharat (India)',
    state: '',
    district: '',
    city: '',
    policeStation: '',
    postOffice: '',
    locality: '',
    landmark: '',
    authorized: false,
  };

  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [lang, setLang] = useState('en'); // 'en' or 'hi'

  useEffect(() => {
    // If you want to prefill country from user's locale, fetch it here.
  }, []);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  }

  function validate(data) {
    const err = {};
    if (!data.fName || data.fName.trim().length < 2) err.fName = 'First name is required';
    if (!data.dateBirth) err.dateBirth = 'Date of birth is required';
    if (!data.state) err.state = 'State is required';
    if (!data.district) err.district = 'District is required';
    if (!data.city) err.city = 'City / Town is required';
    if (!data.locality) err.locality = 'Locality / Area is required';
    if (!data.pincode) err.pincode = 'Pincode is recommended';

    // Require either phone or email
    if (!data.phoneNo && !data.email_ID) {
      err.contact = 'Please provide phone number or email address';
    } else {
      // basic patterns
      if (data.phoneNo && !/^\+?[0-9]{6,15}$/.test(data.phoneNo)) err.phoneNo = 'Enter valid phone number';
      if (data.email_ID && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email_ID)) err.email_ID = 'Enter valid email';
    }

    if (!data.authorized) err.authorized = 'Authorization is required';

    return err;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrors({});
    const v = validate(form);
    if (Object.keys(v).length > 0) {
      setErrors(v);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setSubmitting(true);

    try {
      // Example POST - replace /api/prelaunch with your backend endpoint
      const payload = { ...form };

      // If using reCAPTCHA v2/v3, include captcha token here (obtain via grecaptcha)
      // payload.recaptchaToken = window.__RECAPTCHA_TOKEN;

      const res = await fetch('/api/prelaunch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message || 'Submission failed');
      }

      setSubmitted(true);
      setForm(initial);

      // Optionally trigger analytics or socials here
    } catch (err) {
      setErrors({ submit: err.message });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center font-bold text-xl">P</div>
          <span className="text-xl font-semibold">Panacco</span>
        </div>
        <nav className="flex items-center gap-3">
          <a href="/api/auth/google" className="px-4 py-2 bg-white/10 rounded-md">Login</a>
          <a href="/register" className="px-4 py-2 bg-white/10 rounded-md">Register</a>
        </nav>
      </header>

      {/* Hero content */}
      <section className="container mx-auto px-6 py-8 flex-1 flex flex-col lg:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">Discover Your Perfect Property in Bharat</h1>
          <p className="mt-4 text-lg text-slate-200">Pre-register for early access and updates. Be the first to know when Panacco launches in your area.</p>

          {/* Language toggle */}
          <div className="mt-6 flex items-center gap-3">
            <label className="text-sm">Language:</label>
            <button onClick={() => setLang('en')} className={`px-3 py-1 rounded ${lang === 'en' ? 'bg-white text-slate-900' : 'bg-white/10'}`}>English</button>
            <button onClick={() => setLang('hi')} className={`px-3 py-1 rounded ${lang === 'hi' ? 'bg-white text-slate-900' : 'bg-white/10'}`}>हिन्दी</button>
          </div>

          <div className="mt-8 text-slate-200">
            {lang === 'en' ? (
              <p>Welcome! Please fill in your details to receive personalised property updates in your area.</p>
            ) : (
              <p>स्वागत है! कृपया अपने विवरण भरें ताकि आपको आपके क्षेत्र में व्यक्तिगत संपत्ति सूचनाएँ मिल सकें।</p>
            )}
          </div>

          {/* Social login quick links */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/api/auth/google" className="px-4 py-2 bg-white/10 rounded-md">Sign in with Google</a>
            <a href="/api/auth/facebook" className="px-4 py-2 bg-white/10 rounded-md">Facebook</a>
            <a href="/api/auth/linkedin" className="px-4 py-2 bg-white/10 rounded-md">LinkedIn</a>
            <a href="/api/auth/instagram" className="px-4 py-2 bg-white/10 rounded-md">Instagram</a>
            <a href="/api/auth/x" className="px-4 py-2 bg-white/10 rounded-md">X</a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-1/2 bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          {submitted ? (
            <div className="text-center p-6">
              <h2 className="text-2xl font-semibold">{lang === 'en' ? 'Thank You!' : 'धन्यवाद!'}</h2>
              <p className="mt-3 text-slate-200">{lang === 'en' ? 'Welcome to Panacco — check your email/phone for a special message.' : 'Panacco में आपका स्वागत है — कृपया अपनी ईमेल/फोन देखें।'}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm">First Name *</label>
                <input name="fName" value={form.fName} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.fName && <p className="text-xs text-rose-300 mt-1">{errors.fName}</p>}
              </div>

              <div>
                <label className="text-sm">Last Name</label>
                <input name="lName" value={form.lName} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
              </div>

              <div>
                <label className="text-sm">Date of Birth *</label>
                <input name="dateBirth" type="date" value={form.dateBirth} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.dateBirth && <p className="text-xs text-rose-300 mt-1">{errors.dateBirth}</p>}
              </div>

              <div>
                <label className="text-sm">Pincode</label>
                <input name="pincode" value={form.pincode} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.pincode && <p className="text-xs text-rose-300 mt-1">{errors.pincode}</p>}
              </div>

              <div>
                <label className="text-sm">Phone</label>
                <input name="phoneNo" value={form.phoneNo} onChange={handleChange} placeholder="+91XXXXXXXXXX" className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.phoneNo && <p className="text-xs text-rose-300 mt-1">{errors.phoneNo}</p>}
              </div>

              <div>
                <label className="text-sm">Email</label>
                <input name="email_ID" value={form.email_ID} onChange={handleChange} placeholder="name@example.com" className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.email_ID && <p className="text-xs text-rose-300 mt-1">{errors.email_ID}</p>}
              </div>

              <div className="md:col-span-2">
                <label className="text-sm">Country</label>
                <select name="country" value={form.country} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900 bg-white/90">
                  <option>Bharat (India)</option>
                </select>
              </div>

              <div>
                <label className="text-sm">State *</label>
                <input name="state" value={form.state} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.state && <p className="text-xs text-rose-300 mt-1">{errors.state}</p>}
              </div>

              <div>
                <label className="text-sm">District *</label>
                <input name="district" value={form.district} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.district && <p className="text-xs text-rose-300 mt-1">{errors.district}</p>}
              </div>

              <div>
                <label className="text-sm">City / Town *</label>
                <input name="city" value={form.city} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.city && <p className="text-xs text-rose-300 mt-1">{errors.city}</p>}
              </div>

              <div>
                <label className="text-sm">Locality / Area *</label>
                <input name="locality" value={form.locality} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
                {errors.locality && <p className="text-xs text-rose-300 mt-1">{errors.locality}</p>}
              </div>

              <div>
                <label className="text-sm">Police Station</label>
                <input name="policeStation" value={form.policeStation} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
              </div>

              <div>
                <label className="text-sm">Post Office</label>
                <input name="postOffice" value={form.postOffice} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm">Landmark</label>
                <input name="landmark" value={form.landmark} onChange={handleChange} className="mt-2 w-full rounded-md p-3 text-slate-900" />
              </div>

              <div className="md:col-span-2 mt-2">
                {/* reCAPTCHA placeholder - integrate official recaptcha script in _document or head */}
                <div className="bg-white/5 p-3 rounded-md text-slate-200">reCAPTCHA will render here (place site key & script in document head)</div>
              </div>

              <div className="md:col-span-2 flex items-start gap-3 mt-2">
                <input id="auth" name="authorized" type="checkbox" checked={form.authorized} onChange={handleChange} className="mt-1" />
                <label htmlFor="auth" className="text-sm">I authorize Panacco to contact me regarding updates, offers and services. <a href="/privacy" className="underline">Privacy Policy</a></label>
              </div>
              {errors.authorized && <p className="text-xs text-rose-300 md:col-span-2">{errors.authorized}</p>}
              {errors.contact && <p className="text-xs text-rose-300 md:col-span-2">{errors.contact}</p>}

              <div className="md:col-span-2 mt-2">
                <button disabled={submitting} type="submit" className="w-full py-3 rounded-md bg-sky-600 font-semibold hover:bg-sky-700">{submitting ? 'Submitting...' : 'Submit'}</button>
                {errors.submit && <p className="text-xs text-rose-300 mt-2">{errors.submit}</p>}
              </div>

              <div className="md:col-span-2 text-center mt-1 text-sm text-slate-300">
                <p>Already a user? <a href="/login" className="underline">Login via Google / Facebook / OTP / Email</a></p>
                <p className="mt-1">New here? <a href="/register" className="underline">Register Now</a></p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/40 py-6">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <a href="https://facebook.com" aria-label="facebook" className="px-3 py-2 bg-white/5 rounded">FB</a>
            <a href="https://linkedin.com" aria-label="linkedin" className="px-3 py-2 bg-white/5 rounded">IN</a>
            <a href="https://x.com" aria-label="x" className="px-3 py-2 bg-white/5 rounded">X</a>
            <a href="https://instagram.com" aria-label="instagram" className="px-3 py-2 bg-white/5 rounded">IG</a>
            <a href="https://wa.me" aria-label="whatsapp" className="px-3 py-2 bg-white/5 rounded">WA</a>
            <a href="https://t.me" aria-label="telegram" className="px-3 py-2 bg-white/5 rounded">TG</a>
          </div>
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Panacco — All rights reserved</p>
        </div>
      </footer>
    </main>
  );
}
