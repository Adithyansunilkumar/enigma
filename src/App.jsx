// ENIGMA – Main App
import { useEffect } from "react";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import EventsSection from "./sections/events-section";
import TeamSection from "./sections/team-section";
import ContactSection from "./sections/contact-section";

export default function App() {
    useEffect(() => {
        // Force scroll to top on refresh
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <LenisScroll />
            <Navbar />

            {/* Light Mode Background */}
            <div className="fixed inset-0 -z-20 bg-[#FDFDFF]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-500/5 blur-[120px]" />
            </div>

            <main className='px-0 overflow-x-hidden'>
                {/* Hero */}
                <HeroSection />

                {/* About Enigma + Stats */}
                <AboutSection />

                {/* Events & Workshops */}
                <EventsSection />

                {/* Meet Our Team */}
                <TeamSection />

                {/* Contact / Connect */}
                <ContactSection />
            </main>

            <Footer />
        </>
    );
}