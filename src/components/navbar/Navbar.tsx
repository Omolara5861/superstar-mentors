"use client"
import { useState } from 'react';
import Link from 'next/link';
import Button from '../button/Button';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md text-subtext">
            <div className="container mx-auto px-4 py-[16px] flex items-center justify-between">
                {/* Logo */}
                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                <div className="flex items-center mr-12">
                    <div className="bg-black rounded-full w-8 h-8"></div>
                    <span className="ml-2 text-lg font-bold">LOGO</span>
                </div>
                    <div className="relative">
                        <button
                            className="flex items-center space-x-1"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <span>Browse Category</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.5 7l4.5 4 4.5-4"></path>
                            </svg>
                        </button>

                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                            <div className="absolute left-0 w-[537px] mt-2 bg-white text-text rounded-xl shadow-lg z-10">
                                <div className="grid grid-cols-3 gap-4 pt-4 pb-6 px-6 text-sm">
                                    <span>Music</span>
                                    <span>Performance Art</span>
                                    <span>Makeup Artist</span>
                                    <span>Comedy</span>
                                    <span>Producer</span>
                                    <span>Theatre</span>
                                    <span>Skit Makers</span>
                                    <span>Choreographer</span>
                                    <span>Cinematography</span>
                                    <span>Actors</span>
                                    <span>Film Director</span>
                                    <span>Photography</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex justify-between w-full">
                    <div className="flex items-center mr-12">
                        <div className="bg-black rounded-full w-8 h-8"></div>
                        <span className="ml-2 text-lg font-bold">LOGO</span>
                    </div>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-gray-700 focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Auth Buttons (Desktop) */}
                <div className="hidden md:flex space-x-16">
                    <Link href="/about" className="self-center">
                        About us
                    </Link>
                    <Link href="/contact" className="self-center">
                        Contact us
                    </Link>
                    <Link href="/login" className="self-center">
                        Login
                    </Link>
                    <Button href='/signup' width='126px' btnText='Sign Up' />
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden sticky top-0 left-0 right-0">
                    <div className="flex flex-col items-start space-y-2 px-4 py-2 bg-white">
                        <button
                            className="flex items-center space-x-1 "
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            <span>Browse Category</span>
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.5 7l4.5 4 4.5-4"></path>
                            </svg>
                        </button>
                        {/* Dropdown for Mobile */}
                        {dropdownOpen && (
                            <div className="mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                                <div className="grid grid-cols-3 gap-4 p-4 text-sm">
                                    <span>Music</span>
                                    <span>Performance Art</span>
                                    <span>Makeup Artist</span>
                                    <span>Comedy</span>
                                    <span>Producer</span>
                                    <span>Theatre</span>
                                    <span>Skit Makers</span>
                                    <span>Choreographer</span>
                                    <span>Cinematography</span>
                                    <span>Actors</span>
                                    <span>Film Director</span>
                                    <span>Photography</span>
                                </div>
                            </div>
                        )}
                        <Link href="/about">
                            About us
                        </Link>
                        <Link href="/contact">
                            Contact us
                        </Link>
                        <Link href="/login">
                            Login
                        </Link>
                        <Button href='/signup' width='126px' btnText='Sign Up' />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
