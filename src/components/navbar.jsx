// ENIGMA – Navbar Component
import { MenuIcon, XIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const links = [
        { name: 'About', href: '#about' },
        { name: 'Events', href: '#events' },
        { name: 'Team', href: '#team' },
        { name: 'Connect', href: '#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 flex w-full items-center justify-between px-6 py-4 md:px-16 lg:px-24 transition-all duration-300 bg-[#FBF8FF] ${isScrolled ? 'border-b border-gray-100 shadow-sm' : 'border-b border-transparent'}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
            >
                <a href='#hero' className="flex items-center gap-2 relative z-50">
                    <img
                        src="/assets/enigma-logo-cropped.jpg"
                        alt="ENIGMA Logo"
                        className="h-8 md:h-10 w-auto"
                    />
                </a>

                {/* Desktop Menu */}
                <div className='hidden items-center space-x-10 md:flex'>
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className='text-sm font-semibold text-[#1A1A1B] transition-all hover:text-purple-600 relative group'
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full" />
                        </a>
                    ))}
                    <a href="#contact" className="btn bg-[#7B2FF2] text-white px-6 py-2 shadow-lg shadow-purple-500/20 hover:scale-105 transition-all text-sm font-bold">
                        Join Us
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='relative z-50 p-2 text-[#1A1A1B] active:scale-90 transition-transform md:hidden'
                    aria-label="Toggle menu"
                >
                    {isOpen ? <XIcon className='size-7' /> : <MenuIcon className='size-7' />}
                </button>
            </motion.nav>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-[45] bg-black/20 backdrop-blur-sm md:hidden"
                        />

                        {/* Sidebar */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 bottom-0 z-[48] w-[80%] max-w-sm bg-white shadow-2xl p-8 pt-24 md:hidden"
                        >
                            <div className="flex flex-col gap-6">
                                {links.map((link, idx) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => setIsOpen(false)}
                                        className="text-2xl font-bold text-[#1A1A1B] hover:text-purple-600 transition-colors border-b border-gray-50 pb-4"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="#contact"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    onClick={() => setIsOpen(false)}
                                    className="mt-4 w-full text-center py-4 bg-[#7B2FF2] text-white rounded-2xl font-black shadow-xl shadow-purple-500/30"
                                >
                                    GET IN TOUCH
                                </motion.a>
                            </div>

                            <div className="absolute bottom-10 left-8 right-8">
                                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Encoding Tomorrow</p>
                                <div className="flex gap-4">
                                    <div className="size-10 rounded-xl bg-gray-50 flex items-center justify-center text-purple-600">
                                        <img src="/assets/enigma-logo-cropped.jpg" className="h-5 opacity-100" alt="" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
