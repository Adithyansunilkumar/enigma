// ENIGMA – Team Section
import SectionTitle from "../components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { LinkedinIcon, Mail, ChevronDown, ChevronUp, User } from "lucide-react";
import MagneticButton from "../components/animations/MagneticButton";

export default function TeamSection() {
    const ref = useRef([]);
    const [showAll, setShowAll] = useState(false);

    const members = [
        { name: "Alokh K", role: "Vice President", color: "from-logo-pink to-logo-red", image: "/assets/team/alokh.jpg", linkedin: "https://www.linkedin.com/in/alokh-k", email: "alokhajith007@gmail.com" },
        { name: "Cathy Maria Noble", role: "Secretary", color: "from-logo-red to-logo-purple", image: "/assets/team/cathy.jpg", linkedin: "https://www.linkedin.com/in/cathy-noble-843111306", email: "cathynoble.info@gmail.com" },
        { name: "Sreeram C", role: "Media Head", color: "from-logo-purple via-logo-pink to-logo-red", image: "/assets/team/sreeram.jpg", linkedin: "https://www.linkedin.com/in/sreeramchelat", email: "sreeramchelat@gmail.com" },
        { name: "Advait Rathish", role: "Media", color: "from-logo-purple via-logo-pink to-logo-red", image: "/assets/team/advait.jpg", linkedin: "https://www.linkedin.com/in/advaitrathish", email: "advaitrathish@gmail.com" },
        { name: "Adithyan S", role: "Webmaster", color: "from-logo-purple via-logo-pink to-logo-red", image: "/assets/team/adithyan.jpg", linkedin: "https://www.linkedin.com/in/adithyansunilkumar", email: "skradithyan@gmail.com" },
        { name: "Abhinand Nandakumar", role: "Assistant Webmaster", color: "from-logo-red to-logo-purple", image: "/assets/team/abhinand.jpg", linkedin: "https://www.linkedin.com/in/abhinandakumar001", email: "abhinandakumar001@gmail.com" },
        { name: "Akshara B", role: "Member", color: "from-logo-purple via-logo-pink to-logo-red", image: "/assets/team/akshara.jpg", linkedin: "https://www.linkedin.com/in/akshara-balakrishnan", email: "aksharabalakrishnan159@gmail.com" },
        { name: "Rasitha C R", role: "Execom Member", color: "from-logo-red to-logo-pink", image: "/assets/team/rasitha.jpg", linkedin: "https://www.linkedin.com/in/rasitha-c-r-44a452320", email: "rasithakkd@gmail.com " },
        { name: "Fyha Fathima", role: "Member", color: "from-logo-red to-logo-purple", image: "/assets/team/fyha.jpg", linkedin: "http://linkedin.com/in/fyha-fathima-78b674371", email: "fyhasnr@gmail.com" },
        { name: "Adarsh V", role: "Member", color: "from-logo-pink to-logo-red", image: "/assets/team/adarsh.jpg", linkedin: "#", email: "adarshva209@gmail.com" },
        { name: "Visal J", role: "Treasurer", color: "from-logo-purple to-logo-pink", image: "/assets/team/visal.jpg", linkedin: "https://www.linkedin.com/in/visal-techie", email: "visaljk07@gmail.com" },
        { name: "Rohith Jayaprakash C", role: "Member", color: "from-logo-pink to-logo-purple", image: "/assets/team/rohith.jpg", linkedin: "#", email: "rohithjayaprakashc7549@gmail.com" },
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
                            >
                                <div className="relative h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] bg-white flex items-center justify-center">
                                    {/* Placeholder Logo / User Icon */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
                                        <User className="size-16 text-gray-300/50" />
                                    </div>

                                    {/* Initials (Overlay or Alternative) */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/80 backdrop-blur-sm">
                                        <span className="text-2xl font-black text-transparent bg-clip-text bg-linear-to-br from-gray-900 to-gray-600">
                                            {getInitials(member.name)}
                                        </span>
                                    </div>

                                    {/* Actual Profile Image */}
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="relative z-10 h-full w-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </div>
                                <motion.a
                                    href={`mailto:${member.email}`}
                                    className="absolute -bottom-3 -right-3 size-10 rounded-xl bg-white shadow-xl flex items-center justify-center text-logo-purple cursor-pointer z-20"
                                    variants={{
                                        hover: { scale: 1 }
                                    }}
                                    initial={{ scale: 0 }}
                                    whileHover={{ backgroundColor: "var(--color-logo-purple)", color: "#ffffff" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                >
                                    <Mail size={16} />
                                </motion.a>
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
                                    href={member.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-2xl bg-gray-50 text-gray-400"
                                    whileHover={{ scale: 1.1, backgroundColor: "#F3E8FF", color: "#7B2FF2" }}
                                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                >
                                    <LinkedinIcon className="size-5" />
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
