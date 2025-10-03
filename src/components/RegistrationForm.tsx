// src/components/RegistrationForm.tsx

'use client';

import React, { useState } from 'react';

// Define a type for our form data
interface FormData {
  fName: string;
  lName: string;
  gender: string; // Added gender
  dateBirth: string;
  phoneNo: string;
  email_ID: string;
  pincode: string;
  country: string;
  state: string;
  district: string;
  city: string;
  policeStation: string;
  postOffice: string;
  locality: string;
  landmark: string;
  authorized: boolean;
}

export default function RegistrationForm() {
  // State to hold all the form data
  const [formData, setFormData] = useState<FormData>({
    fName: '',
    lName: '',
    gender: '', // Added gender
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
  });

  // A single function to handle changes in any input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    // Handle checkbox separately
    const isCheckbox = type === 'checkbox';
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

    setFormData((prev) => ({
      ...prev,
      [name]: isCheckbox ? checked : value,
    }));
  };
  
  // Placeholder for Google Maps functionality
  const handleLocationClick = () => {
    alert('Google Maps location feature coming in Sprint 3!');
  };

  // Function to handle the form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted!', formData);
    alert('Thank you for registering!');
  };

  return (
    <section className="w-full max-w-lg bg-white p-8 shadow-2xl rounded-2xl">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Pre-launch Registration
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* --- Basic Details --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fName" className="block text-sm font-medium text-gray-700">First Name *</label>
            <input type="text" id="fName" name="fName" value={formData.fName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
          <div>
            <label htmlFor="lName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lName" name="lName" value={formData.lName} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
            <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500">
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
          <div>
            <label htmlFor="dateBirth" className="block text-sm font-medium text-gray-700">Date of Birth *</label>
            <input type="date" id="dateBirth" name="dateBirth" value={formData.dateBirth} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
          </div>
        </div>

        {/* --- Contact Information --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" id="phoneNo" name="phoneNo" value={formData.phoneNo} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="email_ID" className="block text-sm font-medium text-gray-700">Email ID</label>
            <input type="email" id="email_ID" name="email_ID" value={formData.email_ID} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>

        {/* --- Geographical Information --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="country" value={formData.country} className="border p-2 rounded bg-gray-100" readOnly />
          <input type="text" name="state" placeholder="State *" value={formData.state} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="district" placeholder="District *" value={formData.district} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="city" placeholder="City / Town *" value={formData.city} onChange={handleChange} className="border p-2 rounded" required />
          <input type="text" name="policeStation" placeholder="Police Station" value={formData.policeStation} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="postOffice" placeholder="Post Office" value={formData.postOffice} onChange={handleChange} className="border p-2 rounded" />
          <input type="text" name="locality" placeholder="Locality / Area *" value={formData.locality} onChange={handleChange} className="border p-2 rounded" required />
          
          {/* Landmark and Location Button */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             <input type="text" name="landmark" placeholder="Landmark" value={formData.landmark} onChange={handleChange} className="border p-2 rounded" />
             <button type="button" onClick={handleLocationClick} className="flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                📍 Use my location
             </button>
          </div>
        </div>
        
         {/* --- Finalization --- */}
        <div className="flex items-start space-x-3 pt-2">
          <input type="checkbox" id="authorized" name="authorized" checked={formData.authorized} onChange={handleChange} className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
          <label htmlFor="authorized" className="text-sm text-gray-600">
            I agree to the{' '}
            <a href="/terms-of-service" target="_blank" className="font-medium text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy-policy" target="_blank"className="font-medium text-blue-600 hover:underline">
              Privacy Policy
            </a>{' '}
            and consent to receive communications from Panacco or respective authorities.
          </label>
        </div>
        
        <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
          Submit
        </button>
      </form>
    </section>
  );
}