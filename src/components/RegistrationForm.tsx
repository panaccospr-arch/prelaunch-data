'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

// Define the structure of our form data
type FormInputs = {
  fName: string;
  lName: string;
  email: string;
  phone: string;
  // Add other field types here as we build them out
};

export default function FormComponent() {
  // 1. Initialize the hook
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm<FormInputs>();

  // 2. This function only runs if validation passes
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log("Form is valid! Submitting data:", data);
    // In Sprint 2, we will send this 'data' object to our API
  };

  return (
    // 3. Connect handleSubmit to the form's onSubmit event
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      
      <div>
        <label htmlFor="fName" className="block text-sm font-medium text-gray-300">
          First Name
        </label>
        {/* 4. Register the input and add a validation rule */}
        <input
          id="fName"
          {...register("fName", { required: "First name is required." })}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {/* 5. Conditionally display an error message */}
        {errors.fName && <p className="mt-1 text-sm text-red-400">{errors.fName.message}</p>}
      </div>

      <div>
        <label htmlFor="lName" className="block text-sm font-medium text-gray-300">
          Last Name
        </label>
        <input
          id="lName"
          {...register("lName", { required: "Last name is required." })}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.lName && <p className="mt-1 text-sm text-red-400">{errors.lName.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register("email", { 
            required: "Email is required.",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address."
            } 
          })}
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>}
      </div>

      {/* We will add the rest of the form fields here following the same pattern */}

      <div>
        <button 
          type="submit" 
          className="w-full rounded-md bg-blue-600 px-4 py-2 font-semibold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Submit
        </button>
      </div>

    </form>
  );
}