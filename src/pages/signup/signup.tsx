'use client'
import Image from 'next/image';
import { useState } from 'react';

const SignUpPage = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log('Sign-up form submitted:', form);
  };

  return (
      <div className="lg:min-h-screen flex flex-col lg:flex-row lg:gap-[125px]">
      {/* Left Side (Logo Section) */}
          <div className="lg:w-2/5 bg-[#00000033] flex items-center justify-center h-56 lg:h-auto">
        <div className="text-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
                                       src='/logo.svg'
                                       alt="Logo"
                                       width={63}
                                       height={63}
                                       className="object-cover"
                                   />
          </div>
        </div>
      </div>

      {/* Right Side (Form Section) */}
      <div className="lg:w-[610px] bg-white p-5  my-10">
                       <div className="mb-6">
                        <h1>Welcome!</h1>
                        <p className="text-subtext">
                            &quot;Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor.&quot;
                        </p>
                    </div>
                <div className="w-full space-y-2 border-grad">
                    <h3 className='text-center mb-8'>Signup</h3>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="fullName" className="uppercase text-text">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-5 py-4 border border-subtext placeholder-text text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="uppercase text-text">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-5 py-4 border border-subtext placeholder-text text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="password" className="uppercase text-text">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-5 py-4 border border-subtext placeholder-text text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="uppercase text-text">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-5 py-4 border border-subtext placeholder-text text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center mt-4">
              <input
                id="termsAccepted"
                name="termsAccepted"
                type="checkbox"
                checked={form.termsAccepted}
                onChange={handleChange}
                className="h-5 w-5 accent-primary focus:ring-primary  border-[2px] border-primary rounded"
              />
              <label htmlFor="termsAccepted" className="ml-2 block text-sm     text-text">
                Terms and Conditions
              </label>
            </div>

            {/* Submit button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-[#002C1C] text-white font-medium py-4 rounded-lg"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Login link */}
          <div className="text-center text-sm text-text">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-primary">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
