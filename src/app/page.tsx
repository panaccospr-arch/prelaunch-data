```tsx
// /src/app/page.tsx

import React, { useState } from "react";

interface FormData {
  fName: string;
  lName?: string;
  dateBirth: string;
  phoneNo?: string;
  email_ID?: string;
  pincode?: string;
  country: string;
  state: string;
  district: string;
  city: string;
  policeStation?: string;
  postOffice?: string;
  locality: string;
  landmark?: string;
  authorized: boolean;
}

export default function Page() {
  const [formData, setFormData] = useState<FormData>({
    fName: "",
    lName: "",
    dateBirth: "",
    phoneNo: "",
    email_ID: "",
    pincode: "",
    country: "Bharat (India)",
    state: "",
    district: "",
    city: "",
    policeStation: "",
    postOffice: "",
    locality: "",
    landmark: "",
    authorized: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fName || !formData.dateBirth || !formData.state || !formData.district || !formData.city || !formData.locality) {
      alert("Please fill all required fields");
      return;
    }
    if (!formData.phoneNo && !formData.email_ID) {
      alert("Please provide either phone number or email ID");
      return;
    }
    if (!formData.authorized) {
      alert("You must authorize us to proceed");
      return;
    }
    console.log("Form submitted:", formData);
    alert("🎉 Thank you for registering! Welcome to Panacco. / धन्यवाद");
  };

  return (
    <main className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
        <div className="text-2xl font-bold text-blue-700">Panacco</div>
        <nav>
          <a href="#login" className="px-3 text-blue-600 hover:underline">Login</a>
          <a href="#register" className="px-3 text-blue-600 hover:underline">Register</a>
        </nav>
      </header>

      {/* Hero Section with Form */}
      <section className="flex-1 flex items-center justify-center px-6 py-10">
        <div className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl w-full">
          <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Pre-launch Registration
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" name="fName" placeholder="First Name *" value={formData.fName} onChange={handleChange} className="border p-2 rounded" required />
              <input type="text" name="lName" placeholder="Last Name" value={formData.lName} onChange={handleChange} className="border p-2 rounded" />
              <input type="date" name="dateBirth" placeholder="Date of Birth *" value={formData.dateBirth} onChange={handleChange} className="border p-2 rounded" required />
              <input type="text" name="phoneNo" placeholder="Phone Number" value={formData.phoneNo} onChange={handleChange} className="border p-2 rounded" />
              <input type="email" name="email_ID" placeholder="Email ID" value={formData.email_ID} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="pincode" placeholder="Pincode" value={formData.pincode} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="country" value={formData.country} onChange={handleChange} className="border p-2 rounded bg-gray-100" readOnly />
              <input type="text" name="state" placeholder="State *" value={formData.state} onChange={handleChange} className="border p-2 rounded" required />
              <input type="text" name="district" placeholder="District *" value={formData.district} onChange={handleChange} className="border p-2 rounded" required />
              <input type="text" name="city" placeholder="City / Town *" value={formData.city} onChange={handleChange} className="border p-2 rounded" required />
              <input type="text" name="policeStation" placeholder="Police Station" value={formData.policeStation} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="postOffice" placeholder="Post Office" value={formData.postOffice} onChange={handleChange} className="border p-2 rounded" />
              <input type="text" name="locality" placeholder="Locality / Area *" value={formData.locality} onChange={handleChange} className="border p-2 rounded col-span-2" required />
              <input type="text" name="landmark" placeholder="Landmark" value={formData.landmark} onChange={handleChange} className="border p-2 rounded col-span-2" />
            </div>

            <div className="flex items-center space-x-2">
              <input type="checkbox" name="authorized" checked={formData.authorized} onChange={handleChange} className="w-4 h-4" />
              <label className="text-sm text-gray-600">
                I authorize Panacco to contact me for updates, offers, and services.
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Panacco. Connect with us:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" aria-label="Facebook">📘</a>
          <a href="#" aria-label="LinkedIn">💼</a>
          <a href="#" aria-label="Instagram">📸</a>
          <a href="#" aria-label="Twitter">🐦</a>
          <a href="#" aria-label="WhatsApp">💬</a>
          <a href="#" aria-label="Telegram">✈️</a>
        </div>
      </footer>
    </main>
  );
}
```