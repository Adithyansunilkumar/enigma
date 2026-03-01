import { useEffect } from 'react';
import Lenis from 'lenis';
import { useIsMobile } from '../hooks/useIsMobile';

export default function LenisScroll() {
    const isMobile = useIsMobile();

    useEffect(() => {
        const lenis = new Lenis({
            duration: isMobile ? 0.8 : 1.2,
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1.0,
            lerp: isMobile ? 0.08 : 0.12,
            anchors: true,
        });

        // Expose lenis instance globally
        window.lenis = lenis;

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.lenis = null;
        };

    }, [isMobile]);

    return null;
}

