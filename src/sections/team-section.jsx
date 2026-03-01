// ENIGMA – Team Section
import SectionTitle from "../components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { GithubIcon, LinkedinIcon, Mail, ChevronDown, ChevronUp } from "lucide-react";
import MagneticButton from "../components/animations/MagneticButton";

export default function TeamSection() {
    const ref = useRef([]);
    const [showAll, setShowAll] = useState(false);

    const members = [
        { name: "Sarah Jenkins", role: "President", color: "from-logo-purple to-logo-pink" },
        { name: "David Chen", role: "Vice President", color: "from-logo-pink to-logo-red" },
        { name: "Emily Rodriguez", role: "Technical Lead", color: "from-logo-red to-logo-purple" },
        { name: "James Wilson", role: "Events Coordinator", color: "from-logo-purple via-logo-pink to-logo-red" },
        { name: "Michael Park", role: "Design Lead", color: "from-logo-pink to-logo-red" },
        { name: "Sophia Miller", role: "PR Manager", color: "from-logo-red to-logo-pink" },
        { name: "Alex Rivera", role: "Treasurer", color: "from-logo-purple to-logo-pink" },
        { name: "Olivia Brown", role: "Content Writer", color: "from-logo-pink to-logo-purple" },
    ];

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('');
    };

    const visibleMembers = showAll ? members : members.slice(0, 3);

    return (
        <section className="py-24 md:py-32 flex flex-col items-center" id="team">
            <SectionTitle
                title="Meet Our Team"
                description="The passionate minds driving Enigma forward with innovation and leadership."
            />

            <div className='mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-6 w-full max-w-7xl'>
                <AnimatePresence mode="popLayout">
                    {visibleMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className='group relative w-full space-y-6 rounded-[40px] glass p-10 flex flex-col items-center text-center will-change-transform border border-white/50 shadow-sm'
                            initial={{ y: 30, opacity: 0, scale: 0.9 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 20, opacity: 0, scale: 0.95 }}
                            whileHover="hover"
                            variants={{
                                hover: {
                                    y: -10,
                                    boxShadow: "0 40px 80px -20px rgba(156, 82, 241, 0.15)"
                                }
                            }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.5,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >
                            {/* Interactive Avatar */}
                            <motion.div
                                className={`relative size-32 rounded-3xl bg-linear-to-br ${member.color} p-1 shadow-xl`}
                                variants={{
                                    hover: { rotate: 6 }
                                }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <div className="flex h-full w-full items-center justify-center rounded-[calc(1.5rem-4px)] bg-white text-3xl font-black text-transparent bg-clip-text bg-linear-to-br from-gray-900 to-gray-600">
                                    {getInitials(member.name)}
                                </div>
                                <motion.div
                                    className="absolute -bottom-3 -right-3 size-10 rounded-xl bg-white shadow-xl flex items-center justify-center text-logo-purple cursor-pointer"
                                    variants={{
                                        hover: { scale: 1 }
                                    }}
                                    initial={{ scale: 0 }}
                                    whileHover={{ backgroundColor: "var(--color-logo-purple)", color: "#ffffff" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                >
                                    <Mail size={16} />
                                </motion.div>
                            </motion.div>

                            <div className="space-y-2 pt-2">
                                <motion.h3
                                    className="text-2xl font-black text-[#1A1A1B] tracking-tight"
                                    variants={{
                                        hover: { color: "var(--color-logo-purple)" }
                                    }}
                                >
                                    {member.name}
                                </motion.h3>
                                <p className="text-logo-pink font-black text-[10px] uppercase tracking-[0.2em]">
                                    {member.role}
                                </p>
                            </div>

                            <motion.div
                                className="h-1 bg-logo-purple/10 rounded-full"
                                variants={{
                                    hover: { width: 96, backgroundColor: "var(--color-logo-purple)" }
                                }}
                                initial={{ width: 48 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />

                            <div className="flex items-center gap-6 pt-2">
                                <motion.a
                                    href="#"
                                    className="p-3 rounded-2xl bg-gray-50 text-gray-400"
                                    whileHover={{ scale: 1.1, backgroundColor: "#F3E8FF", color: "#7B2FF2" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <LinkedinIcon className="size-5" />
                                </motion.a>
                                <motion.a
                                    href="#"
                                    className="p-3 rounded-2xl bg-gray-50 text-gray-400"
                                    whileHover={{ scale: 1.1, backgroundColor: "#F3E8FF", color: "#7B2FF2" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <GithubIcon className="size-5" />
                                </motion.a>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="mt-16">
                <MagneticButton>
                    <motion.button
                        onClick={() => setShowAll(!showAll)}
                        className="group flex items-center gap-3 px-10 py-5 rounded-full bg-[#1A1A1B] text-white font-black text-xs uppercase tracking-widest shadow-2xl shadow-black/10 active:scale-95 transition-all"
                        whileHover={{
                            backgroundColor: "#2E2E2F",
                            boxShadow: "0 20px 40px -10px rgba(156, 82, 241, 0.3)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="size-5" />
                            </>
                        ) : (
                            <>
                                View All Members <ChevronDown className="size-5" />
                            </>
                        )}
                    </motion.button>
                </MagneticButton>
            </div>
        </section>
    );
}
