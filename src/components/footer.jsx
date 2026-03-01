// ENIGMA – Footer
import { GithubIcon, InstagramIcon, LinkedinIcon, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#about' },
        { name: 'Events & Workshops', href: '#events' },
        { name: 'Meet The Team', href: '#team' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.footer className="flex flex-col items-center px-6 md:px-16 lg:px-24 justify-center w-full pt-20 mt-32 bg-white border-t border-gray-100 pb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
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
                    {/* Social icons */}
                    <div className="flex items-center gap-4 pt-2">
                        {[
                            { icon: LinkedinIcon, href: "#" },
                            { icon: InstagramIcon, href: "#" },
                            { icon: GithubIcon, href: "#" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                className="size-11 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400 hover:text-purple-600 hover:bg-purple-100 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <social.icon className="size-5" />
                            </motion.a>
                        ))}
                    </div>
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
                            { name: "Technical Suggestions", href: "#contact" },
                            { name: "Report an Issue", href: "#contact" },
                            { name: "Terms of Service", href: "#" },
                            { name: "Privacy Policy", href: "#" }
                        ].map((link, index) => (
                            <li key={index}>
                                <a href={link.href} className="text-gray-500 text-sm font-bold hover:text-purple-600 transition-colors flex items-center gap-2 group">
                                    <span className="size-1 rounded-full bg-purple-200 group-hover:bg-purple-600 transition-colors" />
                                    {link.name}
                                </a>
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