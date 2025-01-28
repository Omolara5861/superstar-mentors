// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#002C1C] text-[#FEFEFF] py-[133px]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row justify-between lg:items-start">
                    {/* Logo and Description */}
                    <div className="lg:w-1/4 mb-8 lg:mb-0">
                        <Image width={172} height={56} src="/f-logo.png" alt="Footer Logo" />
                        <p className="text-sm mt-4">
                            Lorem ipsum dolor sit amet consectetur. Tellus cursus natoque aenean tortor. Non acc
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap justify-between lg:w-3/4 lg:ml-8">
                        <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
                            <h5 className="text-lg font-semibold mb-9">SERVICES</h5>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="#">Browse Mentor</Link></li>
                                <li><Link href="#">Book A Session</Link></li>
                                <li><Link href="/signup">Become A Mentor</Link></li>
                                <li><Link href="/#testimonials">Testimonials</Link></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
                            <h5 className="text-lg font-semibold mb-9">RESOURCES</h5>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="#">Newsletter</Link></li>
                                <li><Link href="#">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/4 mb-8 md:mb-0">
                            <h5 className="text-lg font-semibold mb-9">COMPANY</h5>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="/about">About Us</Link></li>
                                <li><Link href="#">Privacy Policy</Link></li>
                                <li><Link href="#">Terms Of Services</Link></li>
                                <li><Link href="/#faqs">FAQ</Link></li>
                            </ul>
                        </div>
                        <div className="w-1/2 md:w-1/4">
                            <h5 className="text-lg font-semibold mb-9">SUPPORT</h5>
                            <ul className="space-y-4 text-sm">
                                <li><Link href="/contact">Contact Us</Link></li>
                                <li><Link href="#">Office Address</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Social Media and Copyright */}
                <div className="flex flex-col lg:flex-row justify-between items-center mt-11 border-t border-[#FEFEFF] pt-4">
                    <span className="text-sm">© 2024 — <Link href='https://digitalcareers.academy' target='_blank'>Digital Careers Academy</Link></span>
                    <div className="flex space-x-4 mt-4 lg:mt-0">
                        {/* Replace `#` with actual social media links */}
                        <Link href="#" target='_blank'><Image width={35} height={35} src="/icons/twitter.svg" alt="Twitter" /></Link>
                        <Link href="#" target='_blank'><Image width={35} height={35} src="/icons/instagram.svg" alt="Instagram" /></Link>
                        <Link href="#" target='_blank'><Image width={35} height={35} src="/icons/facebook.svg" alt="Facebook" /></Link>
                        <Link href="#" target='_blank'><Image width={35} height={35} src="/icons/linkedin.svg" alt="LinkedIn" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
