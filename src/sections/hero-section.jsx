// ENIGMA – Hero Section
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <>
            <motion.section className="flex flex-col items-center pt-24 md:pt-32 pb-24 md:pb-32 px-4" id="hero">
                {/* Logo in Hero */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="relative"
                >
                    <img
                        src="/assets/enigma-logo.png"
                        alt="ENIGMA Logo"
                        className="h-20 sm:h-24 md:h-32 lg:h-36 w-auto relative z-10 drop-shadow-2xl"
                    />
                </motion.div>

                {/* Main heading */}
                <motion.h1 className="text-center text-4xl/tight sm:text-5xl/tight md:text-7xl/tight mt-12 font-black tracking-tight max-w-4xl text-[#1A1A1B]"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 200, damping: 40 }}
                >
                    Encoding Tomorrow<span className="text-purple-600">.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p className="text-center text-gray-500 text-base sm:text-lg/relaxed md:text-xl/relaxed max-w-2xl mt-6 font-medium px-4"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 40 }}
                >
                    The official Computer Science & Engineering association of NCERC. Join a community where bold ideas meet engineering excellence.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 mt-12"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 40 }}
                >
                    <a href="#events" className="group w-full sm:w-auto flex items-center justify-center gap-2 btn bg-[#7B2FF2] text-white font-bold py-4 px-10 hover:bg-[#6a25d6] transition-all hover:shadow-[0_20px_40px_-10px_#7B2FF2] active:scale-95 shadow-xl shadow-purple-500/10">
                        Explore Events
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#about" className="w-full sm:w-auto btn glass py-4 px-10 text-center text-[#1A1A1B] border-gray-200 font-bold hover:bg-gray-50 transition-all">
                        Learn More
                    </a>
                </motion.div>

                {/* Social proof - Avatar Stack */}
                <motion.div
                    className="mt-20 flex flex-col items-center gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`size-10 md:size-12 rounded-full border-2 border-white bg-linear-to-br ${i % 2 === 0 ? 'from-purple-400 to-blue-400' : 'from-blue-400 to-indigo-400'} flex items-center justify-center text-[10px] md:text-xs font-bold text-white shadow-sm`}>
                                {String.fromCharCode(64 + i)}
                            </div>
                        ))}
                        <div className="size-10 md:size-12 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center text-[10px] md:text-xs font-bold text-white shadow-sm">
                            +200
                        </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 font-semibold tracking-wide flex items-center gap-2">
                        <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                        Joined by 200+ passionate tech leaders
                    </p>
                </motion.div>
            </motion.section >
        </>
    );
}