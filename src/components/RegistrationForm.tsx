'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

type FormInputs = {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  gender: string;
  dateOfBirth: string;
  pincode: string;
  country: string;
  state: string;
  district: string;
  city: string;
  policeStation: string;
  postOffice: string;
  locality: string;
  landmark: string;
  agreeToTerms: boolean;
};

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  // 1. We now need the `getValues` function from the hook
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    getValues // <-- Added this
  } = useForm<FormInputs>({
    defaultValues: {
      country: "Bharat (India)"
    }
  });

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    // ... (This function remains the same as before)
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong');
      }
      setSubmitMessage('Submission successful! We truly appreciate your contribution.');
    } catch (error) {
      if (error instanceof Error) {
        setSubmitMessage(`Error: ${error.message}`);
      } else {
        setSubmitMessage('An unknown error occurred.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white text-center mb-2">Area Information Form</h2>
      <p className="text-center text-gray-400 mb-6">Fields marked with * are required.</p>
      
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name & Last Name ... */}
          <div><label htmlFor="fName" className="block text-sm font-medium text-gray-300">First Name *</label><input id="fName" {...register("fName", { required: "First name is required." })} className="mt-1 block w-full input-style" />{errors.fName && <p className="mt-1 text-sm text-red-400">{errors.fName.message}</p>}</div>
          <div><label htmlFor="lName" className="block text-sm font-medium text-gray-300">Last Name</label><input id="lName" {...register("lName")} className="mt-1 block w-full input-style" /></div>

          {/* Email - UPDATED VALIDATION */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input 
              id="email" 
              type="email" 
              {...register("email", {
                // 2. Updated validation logic
                validate: {
                  required: (value) => !!value || !!getValues('phone') || 'Either Email or Phone is required.',
                  isEmail: (value) => !value || /^\S+@\S+$/i.test(value) || 'Invalid email address.'
                }
              })} 
              className="mt-1 block w-full input-style" 
            />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
          </div>

          {/* Phone - UPDATED VALIDATION */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone</label>
            <input 
              id="phone" 
              type="tel" 
              {...register("phone", {
                // 3. Updated validation logic
                validate: {
                  required: (value) => !!value || !!getValues('email') || 'Either Email or Phone is required.'
                }
              })} 
              className="mt-1 block w-full input-style" 
            />
            {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>}
          </div>
          
          {/* Other fields remain the same... */}
          <div><label htmlFor="gender" className="block text-sm font-medium text-gray-300">Gender *</label><select id="gender" {...register("gender", { required: "Please select a gender." })} className="mt-1 block w-full input-style"><option value="">Select...</option><option value="male">Male</option><option value="female">Female</option><option value="other">Other</option></select>{errors.gender && <p className="mt-1 text-sm text-red-400">{errors.gender.message}</p>}</div>
          <div><label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-300">Date of Birth *</label><input type="date" id="dateOfBirth" {...register("dateOfBirth", { required: "Date of Birth is required." })} className="mt-1 block w-full input-style" />{errors.dateOfBirth && <p className="mt-1 text-sm text-red-400">{errors.dateOfBirth.message}</p>}</div>
          <div><label htmlFor="pincode" className="block text-sm font-medium text-gray-300">Pincode *</label><input id="pincode" {...register("pincode", { required: "Pincode is required." })} className="mt-1 block w-full input-style" />{errors.pincode && <p className="mt-1 text-sm text-red-400">{errors.pincode.message}</p>}</div>
          <div><label htmlFor="country" className="block text-sm font-medium text-gray-300">Country</label><input id="country" {...register("country")} readOnly className="mt-1 block w-full input-style bg-gray-600" /></div>
          <div><label htmlFor="state" className="block text-sm font-medium text-gray-300">State *</label><input id="state" {...register("state", { required: "State is required." })} className="mt-1 block w-full input-style" />{errors.state && <p className="mt-1 text-sm text-red-400">{errors.state.message}</p>}</div>
          <div><label htmlFor="district" className="block text-sm font-medium text-gray-300">District *</label><input id="district" {...register("district", { required: "District is required." })} className="mt-1 block w-full input-style" />{errors.district && <p className="mt-1 text-sm text-red-400">{errors.district.message}</p>}</div>
          <div><label htmlFor="city" className="block text-sm font-medium text-gray-300">City / Town *</label><input id="city" {...register("city", { required: "City / Town is required." })} className="mt-1 block w-full input-style" />{errors.city && <p className="mt-1 text-sm text-red-400">{errors.city.message}</p>}</div>
          <div><label htmlFor="policeStation" className="block text-sm font-medium text-gray-300">Police Station</label><input id="policeStation" {...register("policeStation")} className="mt-1 block w-full input-style" /></div>
          <div><label htmlFor="postOffice" className="block text-sm font-medium text-gray-300">Post Office</label><input id="postOffice" {...register("postOffice")} className="mt-1 block w-full input-style" /></div>
          <div><label htmlFor="locality" className="block text-sm font-medium text-gray-300">Locality / Area *</label><input id="locality" {...register("locality", { required: "Locality / Area is required." })} className="mt-1 block w-full input-style" />{errors.locality && <p className="mt-1 text-sm text-red-400">{errors.locality.message}</p>}</div>
          <div className="md:col-span-2"><label htmlFor="landmark" className="block text-sm font-medium text-gray-300">Landmark</label><input id="landmark" {...register("landmark")} className="mt-1 block w-full input-style" /></div>
        </div>
        <div className="flex items-center"><input id="agreeToTerms" type="checkbox" {...register("agreeToTerms", { required: "You must agree to the terms and services." })} className="h-4 w-4 rounded border-gray-500 bg-gray-700 text-blue-600 focus:ring-blue-500" /><label htmlFor="agreeToTerms" className="ml-2 block text-sm text-gray-300">I agree to the <a href="#" className="underline">Terms of Service and Privacy Policy</a> and consent to receive communications from Panacco.</label></div>
        {errors.agreeToTerms && <p className="mt-1 text-sm text-red-400">{errors.agreeToTerms.message}</p>}
        <div><button type="submit" disabled={isSubmitting} className="w-full submit-button-style disabled:bg-gray-500">{isSubmitting ? 'Submitting...' : 'Submit Information'}</button></div>
        {submitMessage && <p className={`text-center ${submitMessage.startsWith('Error') ? 'text-red-400' : 'text-green-400'}`}>{submitMessage}</p>}
      </form>
    </div>
  );
}