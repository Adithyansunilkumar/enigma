import { motion } from "framer-motion";

export default function SectionTitle({ title, description }) {
    return (
        <div className="text-center px-4">
            <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-black max-w-2xl mx-auto mt-4 text-[#1A1A1B] tracking-tight"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                {title}
            </motion.h2>
            <motion.p className="mt-4 text-center text-sm sm:text-base/relaxed text-gray-600 max-w-xl mx-auto font-medium"
                initial={{ y: 120, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
                {description}
            </motion.p>
        </div>
    )
}