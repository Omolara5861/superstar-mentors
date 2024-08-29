"use client"
import HeroSection from "./home/hero/Hero";
import MentorGrid from "./home/mentors/Mentors";
import MentorshipDetails from "./home/mentorshipDetails/Mentorship";
import TestimonialCarousel from "../../components/testimonial/Testimonial";
import NewsLetter from "../../components/newsletter/NewsLetter";
import Image from 'next/image';
import FAQAccordion from "../../components/faqs/Faqs";


const HomePage = () => {
    return (
        <>
            <HeroSection />
            <MentorshipDetails />
            <MentorGrid />
            <TestimonialCarousel />
            <div className="container m-auto flex flex-col justify-center py-10 text-center bg-white text-zinc-950">
                <div className="flex flex-col w-full max-md:max-w-full">
                    <div className="flex flex-col items-center w-full max-md:max-w-full">
                        <h2 className="max-md:max-w-full">
                            “STUDY FROM THE MASTER AND BE A MASTER YOURSELF”
                        </h2>
                        <div className="mt-4 mb-10 w-[593px] max-md:max-w-full text-subtext">
                            Our website helps you easily<span className="font-medium text-primary">IDENTIFY</span>, <span className="font-medium text-primary">NETWORK,</span> <span className="font-medium text-primary">LEARN, MENTOR,</span> and <span className="font-medium text-primary">GROW</span> your skills from any place.
                        </div>
                    </div>

                    <Image src='/demo.gif' alt='Demo Gif' width={1000} height={1000} className="w-full" />
                </div>
            </div>
            <FAQAccordion />
            <NewsLetter />
        </>
    );
};

export default HomePage;