// ENIGMA – Team Section
import SectionTitle from "../components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { GithubIcon, LinkedinIcon, Mail, ChevronDown, ChevronUp } from "lucide-react";

export default function TeamSection() {
    const ref = useRef([]);
    const [showAll, setShowAll] = useState(false);

    const members = [
        { name: "Sarah Jenkins", role: "President", color: "from-purple-500 to-blue-500" },
        { name: "David Chen", role: "Vice President", color: "from-blue-500 to-cyan-500" },
        { name: "Emily Rodriguez", role: "Technical Lead", color: "from-emerald-500 to-teal-500" },
        { name: "James Wilson", role: "Events Coordinator", color: "from-orange-500 to-rose-500" },
        { name: "Michael Park", role: "Design Lead", color: "from-pink-500 to-rose-500" },
        { name: "Sophia Miller", role: "PR Manager", color: "from-yellow-400 to-orange-500" },
        { name: "Alex Rivera", role: "Treasurer", color: "from-indigo-500 to-blue-600" },
        { name: "Olivia Brown", role: "Content Writer", color: "from-green-400 to-emerald-600" },
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
                            whileHover={{ y: -10, boxShadow: "0 40px 80px -20px rgba(123, 47, 242, 0.15)" }}
                            transition={{
                                delay: index * 0.05,
                                duration: 0.5,
                                ease: "circOut"
                            }}
                        >
                            {/* Interactive Avatar */}
                            <div className={`relative size-32 rounded-3xl bg-linear-to-br ${member.color} p-1 shadow-xl group-hover:rotate-6 transition-transform duration-500`}>
                                <div className="flex h-full w-full items-center justify-center rounded-[calc(1.5rem-4px)] bg-white text-3xl font-black text-transparent bg-clip-text bg-linear-to-br from-gray-900 to-gray-600">
                                    {getInitials(member.name)}
                                </div>
                                <div className="absolute -bottom-3 -right-3 size-10 rounded-xl bg-white shadow-xl flex items-center justify-center text-purple-600 scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-purple-600 hover:text-white cursor-pointer">
                                    <Mail size={16} />
                                </div>
                            </div>

                            <div className="space-y-2 pt-2">
                                <h3 className="text-2xl font-black text-[#1A1A1B] group-hover:text-purple-600 transition-colors tracking-tight">
                                    {member.name}
                                </h3>
                                <p className="text-purple-600 font-black text-[10px] uppercase tracking-[0.2em]">
                                    {member.role}
                                </p>
                            </div>

                            <div className="h-1 w-12 bg-purple-100 rounded-full transition-all group-hover:w-24 group-hover:bg-purple-500" />

                            <div className="flex items-center gap-6 pt-2">
                                <a href="#" className="p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-purple-600 hover:bg-purple-100 transition-all duration-300">
                                    <LinkedinIcon className="size-5" />
                                </a>
                                <a href="#" className="p-3 rounded-2xl bg-gray-50 text-gray-400 hover:text-purple-500 hover:bg-purple-100 transition-all duration-300">
                                    <GithubIcon className="size-5" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <motion.button
                onClick={() => setShowAll(!showAll)}
                className="mt-16 group flex items-center gap-3 px-10 py-5 rounded-full bg-[#1A1A1B] text-white font-black text-xs uppercase tracking-widest shadow-2xl shadow-black/10 hover:shadow-purple-500/20 transition-all active:scale-95"
                whileHover={{ scale: 1.05 }}
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
        </section>
    );
}

