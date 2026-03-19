import SectionTitle from "../components/section-title";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { LinkedinIcon, Mail, ChevronDown, ChevronUp, User, ArrowRight } from "lucide-react";
import MagneticButton from "../components/animations/MagneticButton";

export default function TeamSection() {
    const scrollRef = useRef(null);
    const { scrollXProgress } = useScroll({
        container: scrollRef
    });

    const [showAll, setShowAll] = useState(false);

    const members = [
        { name: "Alokh K", role: "Vice President", color: "from-logo-pink to-logo-red", image: "/assets/team/alokh.jpg", linkedin: "https://www.linkedin.com/in/alokh-k", email: "alokhajith007@gmail.com" },
        { name: "Cathy Maria Noble", role: "Secretary", color: "from-logo-red to-logo-purple", image: "/assets/team/cathy.jpg", linkedin: "https://www.linkedin.com/in/cathy-noble-843111306", email: "cathynoble.info@gmail.com" },
        { name: "Sreeram C", role: "Media Head", color: "from-logo-purple via-logo-pink to-logo-red", image: "/assets/team/sreeram.jpg", linkedin: "https://www.linkedin.com/in/sreeramchelat", email: "sreeramchelat@gmail.com" },
        { name: "Advait Rathish", role: "Media", color: "from-logo-purple via-logo-pink to-logo-red", image: "/assets/team/advait.jpg", linkedin: "https://www.linkedin.com/in/advaitrathish", email: "advaitrathish@gmail.com" },
        { name: "Adithyan S", role: "Webmaster", color: "from-logo-purple via-logo-pink to-logo-red", image: "/assets/team/adithyan.jpg", linkedin: "https://www.linkedin.com/in/adithyansunilkumar", email: "skradithyan@gmail.com" },
        { name: "Abhinand Nandakumar", role: "Assistant Webmaster", color: "from-logo-red to-logo-purple", image: "/assets/team/abhinand.jpg", linkedin: "https://www.linkedin.com/in/abhinandakumar001", email: "abhinandakumar001@gmail.com" },
        { name: "Akshara B", role: "Execom Member", color: "from-logo-purple via-logo-pink to-logo-red", image: "/assets/team/akshara.jpg", linkedin: "https://www.linkedin.com/in/akshara-balakrishnan", email: "aksharabalakrishnan159@gmail.com" },
        { name: "Rasitha C R", role: "Execom Member", color: "from-logo-red to-logo-pink", image: "/assets/team/rasitha.jpg", linkedin: "https://www.linkedin.com/in/rasitha-c-r-44a452320", email: "rasithakkd@gmail.com " },
        { name: "Fyha Fathima", role: "Execom Member", color: "from-logo-red to-logo-purple", image: "", linkedin: "http://linkedin.com/in/fyha-fathima-78b674371", email: "fyhasnr@gmail.com" },
        { name: "Adarsh V", role: "Execom Member", color: "from-logo-pink to-logo-red", image: "", linkedin: "#", email: "adarshva209@gmail.com" },
        { name: "Visal J", role: "Treasurer", color: "from-logo-purple to-logo-pink", image: "", linkedin: "https://www.linkedin.com/in/visal-techie", email: "visaljk07@gmail.com" },
        { name: "Rohith Jayaprakash C", role: "Execom Member", color: "from-logo-pink to-logo-purple", image: "", linkedin: "#", email: "rohithjayaprakashc7549@gmail.com" },
    ];

    const getInitials = (name) => {
        return name.split(' ').map(n => n[0]).join('');
    };


    return (
        <section className="py-24 md:py-32 flex flex-col items-center overflow-hidden w-full" id="team">
            <SectionTitle
                title="Meet Our Team"
                description="The passionate minds driving Enigma forward with innovation and leadership."
            />

            {/* Modernized Team Container: Horizontal Carousel on Mobile, Grid on Desktop */}
            <div className="relative w-full mt-16 md:mt-24 group/carousel">
                {/* Edge Gradients - For modern fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-12 md:hidden bg-linear-to-r from-[#FDFDFF] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-12 md:hidden bg-linear-to-l from-[#FDFDFF] to-transparent z-20 pointer-events-none" />

                <div
                    ref={scrollRef}
                    className='flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-[calc(50%-140px)] sm:px-[calc(50%-160px)] md:px-12 w-full max-w-7xl mx-auto overflow-x-auto md:overflow-visible pb-16 md:pb-0 snap-x snap-mandatory no-scrollbar scroll-smooth'
                >
                    <AnimatePresence mode="popLayout">
                        {members.map((member, index) => (
                            <motion.div
                                key={member.name}
                                className={`group/card relative w-[280px] sm:w-[320px] md:w-full shrink-0 snap-center space-y-6 rounded-[48px] glass p-10 flex flex-col items-center text-center will-change-transform border border-white shadow-sm ${index >= 3 && !showAll ? 'md:hidden' : ''}`}
                                initial={{ y: 30, opacity: 0, scale: 0.9 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                                whileHover="hover"
                                variants={{
                                    hover: {
                                        y: -12,
                                        boxShadow: "0 40px 80px -20px rgba(156, 82, 241, 0.2)"
                                    }
                                }}
                                transition={{
                                    delay: index * 0.05,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                                {/* Interactive Avatar */}
                                <motion.div
                                    className={`relative size-28 md:size-32 rounded-3xl bg-linear-to-br ${member.color} p-1 shadow-xl`}
                                >
                                    <div className={`relative h-full w-full overflow-hidden rounded-[calc(1.5rem-4px)] flex items-center justify-center ${!member.image ? `bg-linear-to-br ${member.color} shadow-inner` : 'bg-white'}`}>
                                        {/* Placeholder Logo / User Icon */}
                                        {member.image && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-gray-50/50">
                                                <User className="size-14 md:size-16 text-gray-300/50" />
                                            </div>
                                        )}

                                        {/* Initials (Overlay) */}
                                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${!member.image ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 bg-white/80 backdrop-blur-sm'}`}>
                                            <span className={`text-xl md:text-2xl font-black ${!member.image ? 'text-white' : 'text-transparent bg-clip-text bg-linear-to-br from-gray-900 to-gray-600'}`}>
                                                {getInitials(member.name)}
                                            </span>
                                        </div>

                                        {/* Actual Profile Image */}
                                        {member.image && (
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                loading="lazy"
                                                className="relative z-10 h-full w-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                }}
                                            />
                                        )}
                                    </div>
                                    <motion.a
                                        href={`mailto:${member.email}`}
                                        className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 size-9 md:size-10 rounded-xl bg-white shadow-xl flex items-center justify-center text-logo-purple cursor-pointer z-30"
                                        variants={{
                                            hover: { scale: 1.15 }
                                        }}
                                        initial={{ scale: 1 }}
                                        whileHover={{ backgroundColor: "var(--color-logo-purple)", color: "#ffffff" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                    >
                                        <Mail size={16} />
                                    </motion.a>
                                </motion.div>

                                <div className="space-y-2 pt-2">
                                    <motion.h3
                                        className="text-xl md:text-2xl font-black text-[#1A1A1B] tracking-tight"
                                        variants={{
                                            hover: { color: "var(--color-logo-purple)" }
                                        }}
                                    >
                                        {member.name}
                                    </motion.h3>
                                    <p className="text-logo-pink font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">
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
                                        className="p-2.5 md:p-3 rounded-2xl bg-gray-50 text-gray-400"
                                        whileHover={{ scale: 1.1, backgroundColor: "#F3E8FF", color: "#7B2FF2" }}
                                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                                    >
                                        <LinkedinIcon className="size-4 md:size-5" />
                                    </motion.a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* View All Button - Hidden on mobile as carousel handles all members */}
            <div className="mt-12 hidden md:block">
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

            {/* Modern Scroll Progress Bar (Mobile Only) */}
            <div className="md:hidden flex flex-col items-center gap-4 mt-8 opacity-60">
                <div className="w-24 h-[3px] bg-gray-100 rounded-full relative overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-logo-purple to-logo-pink origin-left"
                        style={{ scaleX: scrollXProgress }}
                    />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Scroll to explore</p>
            </div>
        </section>
    );
}
