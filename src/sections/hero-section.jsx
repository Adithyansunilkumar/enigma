// ENIGMA – Hero Section
import { motion } from "framer-motion";
import { ArrowRight, Cpu, Zap } from "lucide-react";
import MagneticButton from "../components/animations/MagneticButton";
import DotGridBackground from "../components/background/DotGridBackground";

export default function HeroSection() {
    return (
        <>
            <section className="relative overflow-hidden flex flex-col items-center pt-24 md:pt-32 pb-24 md:pb-32 px-4" id="hero">
                {/* Background Animation */}
                <div className="absolute inset-0 -z-10 pointer-events-none">
                    <DotGridBackground />
                </div>

                {/* Smooth Fade Transition at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-32 md:h-48 bg-linear-to-t from-[#FDFDFF] to-transparent pointer-events-none z-0" />
                {/* Logo in Hero */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
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
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 40 }}
                >
                    Encoding Tomorrow<span className="text-logo-pink">.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p className="text-center text-gray-500 text-base sm:text-lg/relaxed md:text-xl/relaxed max-w-2xl mt-6 font-medium px-4"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 40 }}
                >
                    The official Computer Science & Engineering association of NCERC. Join a community where bold ideas meet engineering excellence.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 mt-12"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 40 }}
                >
                    <MagneticButton className="w-full sm:w-auto">
                        <a href="#events" className="group w-full sm:w-auto flex items-center justify-center gap-2 btn bg-linear-to-r from-logo-purple via-logo-pink to-logo-red text-white font-bold py-4 px-10 hover:opacity-90 transition-all hover:shadow-[0_20px_40px_-10px_rgba(156,82,241,0.4)] active:scale-95 shadow-xl shadow-logo-purple/20">
                            Explore Events
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </MagneticButton>
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
                        {[
                            { icon: <Cpu size={16} />, color: "from-logo-purple to-logo-pink" },
                            { icon: <motion.div animate={{ rotate: 360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }}><code className="text-[10px] font-black tracking-tighter">&lt;/&gt;</code></motion.div>, color: "from-logo-pink to-logo-red" },
                            { icon: <Zap size={16} />, color: "from-logo-purple to-logo-pink" },
                            { icon: <div className="text-[10px] font-black tracking-tighter px-0.5">_</div>, color: "from-logo-pink to-logo-red" },
                        ].map((item, i) => (
                            <div key={i} className={`size-10 md:size-12 rounded-full border-2 border-white bg-linear-to-br ${item.color} flex items-center justify-center text-white shadow-sm`}>
                                {item.icon}
                            </div>
                        ))}
                        <div className="size-10 md:size-12 rounded-full border-2 border-white bg-gray-900 flex items-center justify-center text-[10px] md:text-xs font-bold text-white shadow-sm">
                            <ArrowRight size={14} className="rotate-[-45deg]" />
                        </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 font-semibold tracking-wide flex items-center gap-2">
                        <span className="size-2 rounded-full bg-logo-red animate-pulse" />
                        Driven by a community of student innovators
                    </p>
                </motion.div>
            </section >
        </>
    );
}