// ENIGMA – Main App
import { useEffect, lazy, Suspense } from "react";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import HeroSection from "./sections/hero-section";

const AboutSection = lazy(() => import("./sections/about-section"));
const EventsSection = lazy(() => import("./sections/events-section"));
const TeamSection = lazy(() => import("./sections/team-section"));
const NsiteProjectsSection = lazy(() => import("./sections/nsite-projects-section"));
const ContactSection = lazy(() => import("./sections/contact-section"));

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
                {/* Hero - Always loaded immediately */}
                <HeroSection />

                {/* Below-the-fold sections - Lazy loaded */}
                <Suspense fallback={<div className="h-screen bg-[#FDFDFF]" />}>
                    <AboutSection />
                    <EventsSection />
                    <NsiteProjectsSection />
                    <TeamSection />
                    <ContactSection />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
}