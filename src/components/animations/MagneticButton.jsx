import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * A magnetic button component that tracks the cursor on desktop.
 */
export default function MagneticButton({ children, className = "", strength = 40 }) {
    const ref = useRef(null);
    const isMobile = useIsMobile();
    const reducedMotion = useReducedMotion();

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (isMobile || reducedMotion || !ref.current) return;

        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();

        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const moveX = (clientX - centerX) / strength * 15;
        const moveY = (clientY - centerY) / strength * 15;

        x.set(moveX);
        y.set(moveY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    );
}
