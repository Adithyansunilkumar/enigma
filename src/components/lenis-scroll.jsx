import { useEffect } from 'react';
import Lenis from 'lenis';
import { useIsMobile } from '../hooks/useIsMobile';

export default function LenisScroll() {
    const isMobile = useIsMobile();

    useEffect(() => {
        const lenis = new Lenis({
            lerp: isMobile ? 0.08 : 0.1,
            wheelMultiplier: 1.0,
            smoothWheel: true,
            smoothTouch: false,
            autoRaf: true,
            anchors: true,
        });

        // Expose lenis instance globally
        window.lenis = lenis;

        return () => {
            lenis.destroy();
            window.lenis = null;
        };

    }, [isMobile]);

    return null;
}

