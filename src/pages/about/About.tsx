"use client"

import DifferenceSection from "./components/Difference";
import HeroSection from "./components/Hero";
import MissionSection from './components/Mission';
import TeamSection from "./components/Team";

const AboutPage = () => {
    return (
        <>
            <HeroSection />
            <section className="container m-auto pb-[120px] px-4 lg:px-0">
                <h2 className="text-center mb-4">Our Company</h2>
                <p>Our mission is to create a vibrant and supportive community within the Nigerian creative industry by developing a comprehensive, user-friendly website. We aim to facilitate impactful mentorship connections between veterans and aspiring individuals through an effective matching system based on skills, interests, and goals.</p>
                <p className="mt-2">
                    By providing secure communication tools and tracking progress, we ensure productive interactions and goal achievement. Ultimately, we empower veterans with a sense of purpose and community, fostering personal and professional growth in both mentors and mentees, and bridging the gap in the creative industry for sustainable mentorship.</p>
            </section>
            <MissionSection />
            <DifferenceSection />
            <TeamSection />
        </>
    );
};

export default AboutPage;