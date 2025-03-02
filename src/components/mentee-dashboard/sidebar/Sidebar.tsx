"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import path from 'path';
import { useEffect, useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Toggle Sidebar Open/Close
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    // Close sidebar if user clicks outside
    const handleClickOutside = (event: MouseEvent) => {
        if (event.target instanceof Element && !event.target.closest('.sidebar') && isOpen) {
            setIsOpen(false);
        }
    };

    // Close sidebar if the user presses Escape
    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isOpen) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Listen for outside clicks
        document.addEventListener('click', handleClickOutside);

        // Listen for Escape key press
        document.addEventListener('keydown', handleEscapeKey);

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isOpen]);

    const links = [
        { href: '/mentee-dashboard', src: '/dashboard/dashboard.svg', alt: 'Dashboard Icon', text: 'Dashboard' },
        { href: '/mentee-dashboard/courses', src: '/dashboard/courses.svg', alt: 'Courses Icon', text: 'Courses' },
        { href: '/mentee-dashboard/sessions', src: '/dashboard/session.svg', alt: 'Sessions Icon', text: 'Sessions' },
        { href: '/mentee-dashboard/assignments', src: '/dashboard/assignment.svg', alt: 'Assignment Icon', text: 'Assignments' },
        { href: '/mentee-dashboard/messages', src: '/dashboard/message.svg', alt: 'Message Icon', text: 'Messages' },
        { href: '/mentee-dashboard/analytics', src: '/dashboard/analysis.svg', alt: 'Analysis Icon', text: 'Analytics' },
        { href: '/mentee-dashboard/settings', src: '/dashboard/settings.svg', alt: 'Settings Icon', text: 'Settings' },
        { href: '/mentee-dashboard/help-center', src: '/dashboard/help.svg', alt: 'Help Icon', text: 'Help' }
    ];

    return (
        <div className='lg:w-1/5'>
            <div className="w-1/5 h-screen bg-white p-4 sidebar hidden lg:block fixed">
                <div className="mb-10">
                    <Image width={172} height={56} src="/f-logo.png" alt="Footer Logo" />
                </div>
                <nav>
                    <ul>
                        {links.map(link => (
                            <li className="mb-4" key={link.href}>
                                <Link
                                    className={`flex p-2 rounded items-center text-[#0A39CF] link ${pathname === link.href ? 'active' : ''
                                        }`}
                                    href={link.href}
                                >
                                    <Image width={24} height={24} src={link.src} alt={link.alt} />
                                    <span className="ml-3">{link.text}</span>
                                </Link>
                            </li>
                        ))}
                        <li className='absolute bottom-3'>
                            <Link className="flex items-center text-[#FF0000] hover:text-green-500" href=''>
                                <Image width={24} height={24} src='/icons/logout.svg' alt='Logout icon' />
                                <span className="ml-3">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Mobile Sidebar and Toggle */}
            <div className="lg:hidden">
                {/* Mobile Menu Button */}
                <button
                    onClick={toggleSidebar}
                    className="p-4 text-gray-700 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>

                {/* Mobile Sidebar */}
                <div
                    className={`fixed z-10 inset-y-0 left-0 w-64 bg-white p-4 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        } transition-transform duration-300 ease-in-out`}
                >
                    {/* Close Button */}
                    <button
                        onClick={toggleSidebar}
                        className="absolute top-8 right-4 text-gray-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div className="mb-10">
                        <Image width={172} height={56} src="/f-logo.png" alt="Footer Logo" />
                    </div>
                    <nav>
                        <ul>
                            {links.map(link => (
                                <li className="mb-6" key={link.href}>
                                    <Link className="flex items-center text-gray-600 hover:text-green-500" href={link.href}>
                                        <Image width={24} height={24} src={link.src} alt={link.alt} />
                                        <span className="ml-3">{link.text}</span>
                                    </Link>
                                </li>
                            ))}
                            <li className='absolute bottom-3'>
                                <Link className="flex items-center text-[#FF0000] hover:text-green-500" href=''>
                                    <Image width={24} height={24} src='/icons/logout.svg' alt='Logout icon'/>
                                    <span className="ml-3">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
