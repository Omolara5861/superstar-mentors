import { Suspense } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import MentorsPage from "../../pages/mentors/mentors";

export default function About() {
    return (
        <Suspense fallback={<div>Loading mentors...</div>}>
            <Navbar />
            <MentorsPage />
            <Footer />
        </Suspense>
    );
}
