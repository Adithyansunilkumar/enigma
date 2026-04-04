// ENIGMA – About Section
import SectionTitle from "../components/section-title";
import { Target, Eye, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
    {
        icon: Target,
        title: "Mission",
        text: "Empowering CS students through hands-on technical workshops, hackathons, and real-world project development.",
        color: "text-logo-purple",
        bg: "bg-logo-purple/10"
    },
    {
        icon: Eye,
        title: "Vision",
        text: "To bridge the gap between academic learning and industry demands, fostering a culture of innovation and excellence.",
        color: "text-logo-pink",
        bg: "bg-logo-pink/10"
    },
    {
        icon: Sparkles,
        title: "Values",
        text: "Collaboration, integrity, and a relentless passion for technology that drives meaningful community impact.",
        color: "text-logo-red",
        bg: "bg-logo-red/10"
    }
];

export default function AboutSection() {

    return (
        <section className="py-24 md:py-32 flex flex-col items-center overflow-hidden" id="about">
            <SectionTitle
                title="About Enigma"
                description="The official Computer Science and Engineering Students Association of Nehru College of Engineering and Research Centre (NCERC)."
            />

            <motion.div
                className="max-w-4xl text-center px-6 mt-12"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <p className="text-gray-500 leading-relaxed text-lg sm:text-xl font-medium italic border-l-4 border-logo-purple pl-6 py-2">
                    "A vibrant community dedicated to exploring new technologies, fostering innovation, and building a strong professional network."
                </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 px-6 w-full max-w-7xl">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="p-8 md:p-10 rounded-[32px] glass border border-white/50 relative overflow-hidden group shadow-sm transition-all duration-500"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -10, scale: 1.02, boxShadow: "0 40px 80px -20px rgba(156, 82, 241, 0.15)" }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            delay: index * 0.1,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                    >

                        <div className="absolute -top-10 -right-10 size-32 bg-logo-purple/5 blur-3xl rounded-full group-hover:bg-logo-purple/10 transition-colors" />

                        <div className={`size-14 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                            <card.icon size={28} />
                        </div>
                        <h3 className="text-2xl font-black text-[#1A1A1B] mb-4 tracking-tight group-hover:text-logo-purple transition-colors">{card.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm sm:text-base font-medium">
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
