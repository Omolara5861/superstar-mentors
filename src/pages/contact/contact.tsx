"use client"

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ContactPage = () => {
    const router = useRouter();
    const [form, setForm] = useState({
        name: '',
        email: '',
        course: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic
        console.log('Form submitted:', form);
    };

    const goBack = () => {
       router.back();
    }

    return (
        <section className="pb-[17px]">
            <div className="relative text-white py-20">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/contact/contact-deco.png"
                        alt="Background image"
                        layout="fill"
                        objectFit="cover"
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 container m-auto -mt-12">
                    <button onClick={goBack} className="pointer">
                        <Image src="/arr-left.svg" alt="Arrow Left" width={32} height={32} />
                    </button>
                    <h1 className="text-center">Contact Us</h1>
                </div>
            </div>
            <div>
                <div className="container mx-auto text-center rounded-2xl p-5 lg:w-[660px] border-[1.5px] border-[#E1E0E0]">
                    {/* Contact Info */}
                    <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-x-12 mb-8 text-subtext">
                        <div className="flex items-center space-x-2">
                            <Image src='/contact/pin.svg' alt='Location icon' width={24} height={24} />
                            <span>Location</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image src='/contact/call.svg' alt='Location icon' width={24} height={24} />
                            <span>Call</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image src='/contact/mail.svg' alt='Location icon' width={24} height={24} />
                            <span>example@gmail.com</span>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg  mx-auto">
                        <div className="flex justify-center mb-2">
                            <Image
                                src="/contact/team.png" 
                                alt="Team"
                                width={230.48}
                                height={80}
                                className="rounded-full object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-primary">How can we help?</h3>
                        <p className="text-text mb-8">We respond within 24hrs</p>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="w-full border border-[#01100A80] rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="w-full border border-[#01100A80] rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="course"
                                    placeholder="Course"
                                    value={form.course}
                                    onChange={handleChange}
                                    className="w-full border border-[#01100A80] rounded-md px-4 py-2 focus:ring-2 focus:ring-green-400 outline-none"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-left text-sm text-gray-600 mb-2">
                                    How Can We Help?
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Start typing..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className="w-full border border-[#01100A80] rounded-md px-4 py-2 h-32 focus:ring-2 focus:ring-green-400 outline-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className=" lg:w-[168px] inline-block bg-primary hover:bg-[#002C1C] w-auto py-3 px-4 rounded-lg text-white font-medium"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
           </div>
        </section>
    );
};

export default ContactPage;
