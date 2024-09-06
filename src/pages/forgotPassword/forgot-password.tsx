'use client'
import Image from 'next/image';
import { useState } from 'react';

const ForgotPasswordPage = () => {
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
        <div className="lg:min-h-screen flex flex-col lg:flex-row ">
            {/* Left Side (Logo Section) */}
            <div className="lg:w-2/5 bg-[#00000033] flex items-center justify-center h-56 lg:h-auto">
                <div className="text-center">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <Image
                            src="/f-logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                        />
                    </div>
                </div>
            </div>

            {/* Right Side (Form Section) */}
            <div className="lg:w-3/5 flex items-center justify-center bg-white p-5  my-10">
                <div className="max-w-md w-full space-y-8">
                    <div className="text-center">
                        <h2>Reset your password</h2>
                        <p className="text-subtext mt-2">
                            Enter your valid email of registration
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm space-y-4">
                            <div>
                                <label htmlFor="email" className="text-text uppercase">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="Tabitha Host"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="appearance-none rounded-md relative block w-full p-2 lg:p-4 border border-subtext placeholder-text text-text focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                                />
                            </div>
                        </div>
                        {/* Submit button */}
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-[#002C1C] py-2 text-white font-medium lg:py-4 lg:px-5 rounded-md"
                            >
                                Reset Password
                            </button>
                        </div>
                    </form>
                    <div className="text-center text-sm text-gray-600">
                        <a href="/login" className="text-lg font-medium text-primary underline">
                            Back to login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
