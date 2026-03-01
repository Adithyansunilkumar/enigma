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

import { useIsMobile } from "./hooks/useIsMobile";
import { useReducedMotion } from "./hooks/useReducedMotion";

export default function App() {
    const isMobile = useIsMobile();
    const reducedMotion = useReducedMotion();

    useEffect(() => {
        // Force scroll to top on refresh
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="overflow-hidden min-h-screen relative">
            <LenisScroll />
            <Navbar />

            {/* Clean Background */}
            <div className="fixed inset-0 -z-20 bg-[#FDFDFF] pointer-events-none" />


            <main className='px-0'>
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
        </div>
    );

}