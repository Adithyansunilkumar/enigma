import { motion } from "framer-motion";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Reusable animation wrapper for fade-up + slide-in entry.
 */
export default function FadeUp({
    children,
    delay = 0,
    duration = 0.8,
    y = 30,
    once = true,
    className = ""
}) {
    const reducedMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                y: reducedMotion ? 0 : y
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once,
                margin: "-50px"
            }}
            transition={{
                delay,
                duration,
                ease: "easeOut"
            }}
        >
            {children}
        </motion.div>
    );
}
