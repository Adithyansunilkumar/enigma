// ENIGMA – Footer
import { ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Footer() {
    const [activeModal, setActiveModal] = useState(null); // 'privacy' or 'terms'

    // Prevent scroll when modal is open
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [activeModal]);

    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        { name: 'Events & Workshops', href: '#events' },
        { name: 'NSITE Projects', href: '#nsite-projects' },
        { name: 'Meet The Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    const modalContent = {
        privacy: {
            title: "Privacy Policy",
            content: [
                "ENIGMA is committed to protecting your privacy. We only collect the information you voluntarily provide through our contact forms, such as your name and email address, to better serve your inquiries.",
                "We do not sell, trade, or otherwise transfer your personal information to outside parties. Your data is used strictly for internal communication and association updates.",
                "By using our website, you consent to our simple privacy approach designed to keep your information safe and secure."
            ]
        },
        terms: {
            title: "Terms of Service",
            content: [
                "Welcome to the official ENIGMA association website. By accessing this site, you agree to follow our basic usage guidelines.",
                "All content, including text, images, and designs, is the property of ENIGMA CSE Association and is intended for personal, non-commercial use only.",
                "We strive for accuracy but are not liable for any temporary misinformation or technical issues. We reserve the right to update our services and events as needed."
            ]
        }
    };

    return (
        <motion.footer className="flex flex-col items-center px-6 md:px-16 lg:px-24 justify-center w-full pt-20 mt-32 bg-white border-t border-gray-100 pb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Modal Overlay */}
            <AnimatePresence>
                {activeModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveModal(null)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            className="relative w-full max-w-lg bg-white rounded-[32px] p-8 md:p-10 shadow-2xl overflow-hidden border border-white/20"
                        >
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-black text-[#1A1A1B]">{modalContent[activeModal].title}</h3>
                                <button
                                    onClick={() => setActiveModal(null)}
                                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                >
                                    <X size={20} className="text-gray-400" />
                                </button>
                            </div>
                            <div className="space-y-6">
                                {modalContent[activeModal].content.map((p, i) => (
                                    <p key={i} className="text-gray-500 text-sm font-medium leading-relaxed">
                                        {p}
                                    </p>
                                ))}
                            </div>
                            <div className="mt-10">
                                <button
                                    onClick={() => setActiveModal(null)}
                                    className="w-full py-4 rounded-2xl bg-logo-purple text-white font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all"
                                >
                                    I Understand
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Top area: Logo + Desc + Quick Links */}
            <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 pb-16">
                {/* Left: Logo + description */}
                <div className="space-y-6 lg:col-span-1">
                    <img
                        src="/assets/enigma-logo.png"
                        alt="ENIGMA Logo"
                        className="h-10 w-auto"
                    />
                    <p className="text-gray-500 text-base leading-relaxed max-w-xs font-medium">
                        Encoding Tomorrow. We are dedicated to building a community of passionate technocrats, developers, and innovators.
                    </p>

                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1B]">Quick Links</h4>
                    <ul className="space-y-4">
                        {quickLinks.map((link, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <a href={link.href} className="text-gray-500 text-sm font-bold hover:text-purple-600 transition-colors flex items-center gap-2 group">
                                    <span className="size-1 rounded-full bg-purple-200 group-hover:bg-purple-600 transition-colors" />
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>


                {/* Support */}
                <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1B]">Support</h4>
                    <ul className="space-y-4">
                        {[
                            { name: "Technical Suggestions", href: "#contact", type: 'link' },
                            { name: "Report an Issue", href: "#contact", type: 'link' },
                            { name: "Terms of Service", href: "#", type: 'terms' },
                            { name: "Privacy Policy", href: "#", type: 'privacy' }
                        ].map((link, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => link.type === 'link' ? window.location.hash = link.href : setActiveModal(link.type)}
                                    className="text-gray-500 text-sm font-bold hover:text-purple-600 transition-colors flex items-center gap-2 group cursor-pointer"
                                >
                                    <span className="size-1 rounded-full bg-purple-200 group-hover:bg-purple-600 transition-colors" />
                                    {link.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter / CTA */}
                <div className="space-y-6">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1A1A1B]">Our Address</h4>
                    <p className="text-gray-500 text-sm font-bold leading-relaxed">
                        Computer Science Block,<br />
                        NCERC Campus, Pampady,<br />
                        Kerala, 680588
                    </p>
                    <div className="pt-2">
                        <a href="#contact" className="inline-flex items-center gap-2 text-purple-600 font-black text-[10px] uppercase tracking-widest hover:translate-x-1 transition-transform">
                            Contact Admin <ArrowRight size={14} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full border-t border-gray-100" />

            {/* Bottom copyright */}
            <div className="flex flex-col md:flex-row items-center w-full max-w-7xl justify-between gap-6 py-8">
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">© 2026 Enigma CSE Association. All rights reserved.</p>
                <div className="flex items-center gap-8">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-purple-400" />
                        Designed for Engineering Excellence
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}