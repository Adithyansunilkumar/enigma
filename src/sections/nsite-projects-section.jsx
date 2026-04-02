// ENIGMA – NSITE Projects Section
import SectionTitle from "../components/section-title";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Calendar, ArrowRight, Github, ExternalLink } from "lucide-react";
import MagneticButton from "../components/animations/MagneticButton";

export default function NsiteProjectsSection() {
    const nsiteProjects = [
        {
            title: "ASL SPEED RUN",
            image: "/assets/nsite-projects/asl-speed-run.jpg",
            description: "An AI-powered American Sign Language recognition game that challenges users to match hand gestures in real-time.",
            tags: ["JavaScript", "MediaPipe", "HTML5"],
            github: "https://github.com/Adithyansunilkumar/ASL-Speed-Run",
            demo: "https://asl-speed-run.vercel.app"
        },
        {
            title: "EMOLIVE",
            image: "/assets/nsite-projects/emolive.jpg",
            description: "A real-time emotion detection system that utilizes advanced facial recognition to analyze human sentiments for virtual communication.",
            tags: ["JavaScript", "MediaPipe"],
            github: "https://github.com/Adithyansunilkumar/emolive",
            demo: "https://emolive.vercel.app"
        },
        {
            title: "SKILLO",
            image: "/assets/nsite-projects/skillo.jpg",
            description: "A collaborative skill-bridging platform that connects learners with industry mentors, focusing on project-based learning.",
            tags: ["MongoDB", "Express", "React", "Node.js"],
            github: "https://github.com/Adithyansunilkumar/skillo",
            demo: "https://skillo.vercel.app"
        },
        {
            title: "Ai Outfit Analysis",
            image: "/assets/nsite-projects/ai-outfit-analysis.jpg",
            description: "A smart AI-powered web tool that analyzes your outfit through your camera and gives instant style feedback with a score — all offline and privacy-friendly.",
            tags: ["JavaScript", "MediaDevices API", "Canvas API"],
            github: "https://github.com/sreeniranjan10ks-max/aioutfitanalysis",
            demo: "https://sreeniranjan10ks-max.github.io/aioutfitanalysis"
        },
        {
            title: "Face Swap",
            image: "/assets/nsite-projects/face-swap.jpg",
            description: "A real-time face swapping application that utilizes advanced facial recognition to swap faces in real-time.",
            tags: ["Face-api.js", "HTML5", "Tailwind CSS", "JavaScript"],
            github: "https://github.com/aswathisuresh451-del/Face-swap",
            demo: "https://aswathisuresh451-del.github.io/Face-swap/"
        }
    ];

    return (
        <section className="py-24 md:py-32 flex flex-col items-center bg-[#FDFDFF]" id="nsite-projects">
            <SectionTitle
                title="NSITE PROJECTS"
                description="An interactive exhibition of technical innovations designed to inspire and educate visiting students during NSITE 2025."
            />

            <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full max-w-7xl px-6">
                {nsiteProjects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={index}
                    />
                ))}
            </div>

            {nsiteProjects.length > 6 && (
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <MagneticButton>
                        <motion.button
                            className="group/view-all flex items-center gap-4 px-12 py-6 rounded-3xl bg-white border border-gray-100 shadow-sm text-[#1A1A1B] font-black text-xs uppercase tracking-[0.2em] transition-all hover:border-logo-purple/30 hover:shadow-xl hover:shadow-logo-purple/10 active:scale-95"
                            onClick={() => window.open("https://github.com/Adithyansunilkumar", "_blank")}
                        >
                            <span className="relative z-10 flex items-center gap-3">
                                View More Projects <ArrowRight size={18} className="group-hover/view-all:translate-x-1.5 transition-transform text-logo-purple" />
                            </span>
                        </motion.button>
                    </MagneticButton>
                </motion.div>
            )}
        </section>
    );
}

function ProjectCard({ project, index }) {
    return (
        <motion.div
            className="group relative flex flex-col rounded-[40px] bg-white border border-gray-100 shadow-sm overflow-hidden will-change-transform"
            initial={{ y: 30, opacity: 0, scale: 0.95 }}
            whileInView={{ y: 0, opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            whileHover="hover"
            variants={{
                hover: {
                    y: -10,
                    boxShadow: "0 40px 80px -20px rgba(156, 82, 241, 0.15)"
                }
            }}
            transition={{
                delay: (index % 3) * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }}
        >
            {/* Image Container */}
            <div className="relative h-64 sm:h-72 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/50 z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    variants={{
                        hover: {
                            scale: 1.12,
                        }
                    }}
                    transition={{
                        duration: 1.2,
                        ease: [0.33, 1, 0.68, 1] // Custom ease-out-expo for silkiness
                    }}
                />

            </div>

            {/* Content */}
            <div className="p-8 sm:p-10 flex flex-col flex-1 relative z-20">
                <h3 className="text-2xl font-black text-[#1A1A1B] leading-tight mb-4 group-hover:text-logo-purple transition-colors tracking-tight">
                    {project.title}
                </h3>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-8 font-medium">
                    {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-gray-50 text-gray-400 text-[9px] font-bold uppercase tracking-wider border border-gray-100">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-auto flex gap-4">
                    <MagneticButton className="flex-1">
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gray-50 text-[#1A1A1B] font-black text-[10px] uppercase tracking-widest border border-gray-100 active:scale-95"
                            whileHover="hover"
                            variants={{
                                hover: {
                                    backgroundColor: "#F0F9FF",
                                    borderColor: "#BAE6FD",
                                    color: "#0284c7",
                                    boxShadow: "0 10px 25px -5px rgba(2, 132, 199, 0.15)"
                                }
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            <Github size={18} />
                            Code
                        </motion.a>
                    </MagneticButton>
                    <MagneticButton className="flex-1">
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-gray-50 text-[#1A1A1B] font-black text-[10px] uppercase tracking-widest border border-gray-100 active:scale-95"
                            whileHover="hover"
                            variants={{
                                hover: {
                                    backgroundColor: "#F5F3FF",
                                    borderColor: "#DDD6FE",
                                    color: "#9c52f1",
                                    boxShadow: "0 10px 25px -5px rgba(156, 82, 241, 0.2)"
                                }
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        >
                            Explore <ExternalLink size={16} />
                        </motion.a>
                    </MagneticButton>
                </div>
            </div>
        </motion.div>
    );
}
