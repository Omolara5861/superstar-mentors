'use client';

import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'; // or "next/router" if you're using the Pages Router
// import { apiController } from '../lib/apiController';  <-- example if you have a centralized controller
// For demonstration, we'll use fetch directly. Replace with your actual request logic.

const SignUpPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    termsAccepted: false,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    let newValue: string | boolean = value;

    // Narrow the type before checking if it's a checkbox
    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      newValue = e.target.checked;
    }

    setForm((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side validations
    if (!form.username.trim()) {
      toast.error('Full name is required.');
      return;
    }
    if (!form.email.trim()) {
      toast.error('Email is required.');
      return;
    }
    if (!form.password.trim() || form.password.length < 6) {
      toast.error('Password must be at least 6 characters long.');
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }
    if (!form.role) {
      toast.error('Please select a role.');
      return;
    }
    if (!form.termsAccepted) {
      toast.error('You must accept the terms and conditions.');
      return;
    }

    const payload = {
      username: form.username,
      email: form.email,
      password: form.password,
      password2: form.confirmPassword,
      role: form.role,
    };

    setLoading(true);
    try {
      const res = await fetch(
        "https://ssm.digitalcareers.academy/api/auth/register/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        // DRF returns { field1: [msg1, msg2], field2: [msg] }
        const messages = Object.entries(data)
          .flatMap(([field, arr]) =>
            (arr as string[]).map((msg) => `${field}: ${msg}`)
          );
        toast.error(messages.join("  \n") || "Registration failed.");
        return; // bail out
      }

      // success!
      toast.success(
        "Registration successful. Please check your email for a verification link!"
      );
      router.push("/login");
    } catch (networkErr: any) {
      // only hits on network/errors outside of HTTP
      toast.error(networkErr.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="lg:min-h-screen flex flex-col lg:flex-row lg:gap-[125px]">
      {/* Left Side (Logo Section) */}
      <div className="lg:w-2/5 bg-[#00000033] flex items-center justify-center h-56 lg:h-auto">
        <div className="text-center">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={63}
              height={63}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side (Form Section) */}
      <div className="lg:w-[610px] bg-white p-5 my-10">
        <div className="mb-6">
          <h1>Welcome!</h1>
          <p className="text-subtext">
            &quot;Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor.&quot;
          </p>
        </div>
        <div className="w-full space-y-2 border-grad">
          <h3 className="text-center mb-8">Signup</h3>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="username" className="uppercase text-text">
                  Your Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-5 py-4 border border-subtext placeholder-text text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                />
              </div>

              {/* Email */}
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

              {/* Password */}
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

              {/* Confirm Password */}
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

              {/* Role */}
              <div>
                <label htmlFor="role" className="uppercase text-text">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={form.role}
                  onChange={handleChange}
                  className="appearance-none rounded-md relative block w-full px-5 py-4 border border-subtext text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                >
                  <option value="">-- Select a Role --</option>
                  <option value="mentee">Mentee</option>
                  <option value="mentor">Mentor</option>
                </select>
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
                className="h-5 w-5 accent-primary focus:ring-primary border-[2px] border-primary rounded"
              />
              <label htmlFor="termsAccepted" className="ml-2 block text-sm text-text">
                Terms and Conditions
              </label>
            </div>

            {/* Submit button */}
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-[#002C1C] text-white font-medium py-4 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
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
