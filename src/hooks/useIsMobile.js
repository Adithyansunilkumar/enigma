import { useState, useEffect } from 'react';

/**
 * Hook to detect if the device is mobile (< 768px).
 * @returns {boolean}
 */
export function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 767px)');
        setIsMobile(mediaQuery.matches);

        const listener = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
    }, []);

    return isMobile;
}
