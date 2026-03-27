'use client';
import { useRef, useEffect, useCallback, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

import './DotGridBackground.css';

// Register InertiaPlugin for high-quality physics interaction
gsap.registerPlugin(InertiaPlugin);

const throttle = (func, limit) => {
    let lastCall = 0;
    return function (...args) {
        const now = performance.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func.apply(this, args);
        }
    };
};

function hexToRgb(hex) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 226, g: 209, b: 255 };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}

/**
 * DotGridBackground Component - Professional Integration
 * Features: Responsive density, GSAP Inertia physics, Pointer interaction.
 */
const DotGridBackground = ({
    className = '',
    style = {}
}) => {
    const [windowSize, setWindowSize] = useState({
        width: typeof window !== 'undefined' ? window.innerWidth : 1200,
        height: typeof window !== 'undefined' ? window.innerHeight : 800
    });

    // Detect breakpoints for responsive adjustments
    const isDesktop = windowSize.width > 1024;
    const isTablet = windowSize.width <= 1024 && windowSize.width > 767;

    // Responsive configuration logic
    const config = useMemo(() => {
        if (isDesktop) {
            return { dotSize: 4, gap: 34, proximity: 200, shockStrength: 5 };
        } else if (isTablet) {
            return { dotSize: 3, gap: 28, proximity: 160, shockStrength: 4 };
        } else {
            return { dotSize: 2, gap: 22, proximity: 120, shockStrength: 3 };
        }
    }, [isDesktop, isTablet]);

    // Component props based on user request performance constraints
    const props = useMemo(() => ({
        ...config,
        baseColor: "#e2d1ff",
        activeColor: "#d567a1",
        speedTrigger: 210,
        shockRadius: 250,
        maxSpeed: 5000,
        resistance: 750,
        returnDuration: 1.5
    }), [config]);

    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const dotsRef = useRef([]);
    const pointerRef = useRef({
        x: 0,
        y: 0,
        vx: 0,
        vy: 0,
        speed: 0,
        lastTime: 0,
        lastX: 0,
        lastY: 0
    });

    const baseRgb = useMemo(() => hexToRgb(props.baseColor), [props.baseColor]);
    const activeRgb = useMemo(() => hexToRgb(props.activeColor), [props.activeColor]);

    const circlePath = useMemo(() => {
        if (typeof window === 'undefined' || !window.Path2D) return null;
        const p = new window.Path2D();
        p.arc(0, 0, props.dotSize / 2, 0, Math.PI * 2);
        return p;
    }, [props.dotSize]);

    const buildGrid = useCallback(() => {
        const wrap = wrapperRef.current;
        if (!wrap) return;
        const { width, height } = wrap.getBoundingClientRect();
        const canvas = canvasRef.current;
        if (!canvas) return;

        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `100%`;
        canvas.style.height = `100%`;
        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);

        const cell = props.dotSize + props.gap;
        const cols = Math.floor((width + props.gap) / cell);
        const rows = Math.floor((height + props.gap) / cell);

        const gridW = cell * cols - props.gap;
        const gridH = cell * rows - props.gap;

        const startX = (width - gridW) / 2 + props.dotSize / 2;
        const startY = (height - gridH) / 2 + props.dotSize / 2;

        const dots = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                dots.push({
                    cx: startX + x * cell,
                    cy: startY + y * cell,
                    xOffset: 0,
                    yOffset: 0,
                    _active: false
                });
            }
        }
        dotsRef.current = dots;
    }, [props.dotSize, props.gap]);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        buildGrid();
    }, [buildGrid, windowSize]);

    useEffect(() => {
        if (!circlePath) return;

        let rafId;
        const proxSq = props.proximity * props.proximity;

        const draw = () => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            
            ctx.save();
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.restore();

            const { x: px, y: py } = pointerRef.current;

            for (const dot of dotsRef.current) {
                const dx = dot.cx - px;
                const dy = dot.cy - py;
                const dsq = dx * dx + dy * dy;

                let style = props.baseColor;
                if (dsq <= proxSq) {
                    const dist = Math.sqrt(dsq);
                    const t = 1 - dist / props.proximity;
                    const r = Math.round(baseRgb.r + (activeRgb.r - baseRgb.r) * t);
                    const g = Math.round(baseRgb.g + (activeRgb.g - baseRgb.g) * t);
                    const b = Math.round(baseRgb.b + (activeRgb.b - baseRgb.b) * t);
                    style = `rgb(${r},${g},${b})`;
                }

                ctx.save();
                ctx.translate(dot.cx + dot.xOffset, dot.cy + dot.yOffset);
                ctx.fillStyle = style;
                ctx.fill(circlePath);
                ctx.restore();
            }
            rafId = requestAnimationFrame(draw);
        };

        draw();
        return () => cancelAnimationFrame(rafId);
    }, [props.proximity, props.baseColor, activeRgb, baseRgb, circlePath]);

    useEffect(() => {
        const onMove = (e) => {
            const now = performance.now();
            const pr = pointerRef.current;
            const dt = pr.lastTime ? now - pr.lastTime : 16;
            const dx = e.clientX - pr.lastX;
            const dy = e.clientY - pr.lastY;

            let vx = (dx / (dt || 16)) * 1000;
            let vy = (dy / (dt || 16)) * 1000;
            let speed = Math.hypot(vx, vy);

            if (speed > props.maxSpeed) {
                const scale = props.maxSpeed / speed;
                vx *= scale;
                vy *= scale;
                speed = props.maxSpeed;
            }

            pr.lastTime = now;
            pr.lastX = e.clientX;
            pr.lastY = e.clientY;
            pr.vx = vx;
            pr.vy = vy;
            pr.speed = speed;

            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;
            pr.x = e.clientX - rect.left;
            pr.y = e.clientY - rect.top;

            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - pr.x, dot.cy - pr.y);

                if (speed > props.speedTrigger && dist < props.proximity && !dot._active) {
                    dot._active = true;
                    gsap.killTweensOf(dot);

                    gsap.to(dot, {
                        inertia: {
                            xOffset: { velocity: vx * 0.1, resistance: props.resistance },
                            yOffset: { velocity: vy * 0.1, resistance: props.resistance }
                        },
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: props.returnDuration,
                                ease: "elastic.out(1, 0.75)",
                                onComplete: () => { dot._active = false; }
                            });
                        }
                    });
                }
            }
        };

        const onClick = (e) => {
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;
            const cx = e.clientX - rect.left;
            const cy = e.clientY - rect.top;

            for (const dot of dotsRef.current) {
                const dist = Math.hypot(dot.cx - cx, dot.cy - cy);
                if (dist < props.shockRadius && !dot._active) {
                    dot._active = true;
                    gsap.killTweensOf(dot);

                    const falloff = Math.max(0, 1 - dist / props.shockRadius);
                    const pushX = (dot.cx - cx) * props.shockStrength * falloff;
                    const pushY = (dot.cy - cy) * props.shockStrength * falloff;

                    gsap.to(dot, {
                        xOffset: pushX,
                        yOffset: pushY,
                        duration: 0.1,
                        ease: "power2.out",
                        onComplete: () => {
                            gsap.to(dot, {
                                xOffset: 0,
                                yOffset: 0,
                                duration: props.returnDuration,
                                ease: "elastic.out(1, 0.75)",
                                onComplete: () => { dot._active = false; }
                            });
                        }
                    });
                }
            }
        };

        const throttledMove = throttle(onMove, 16);
        window.addEventListener('mousemove', throttledMove, { passive: true });
        window.addEventListener('click', onClick);

        return () => {
            window.removeEventListener('mousemove', throttledMove);
            window.removeEventListener('click', onClick);
        };
    }, [props.maxSpeed, props.speedTrigger, props.proximity, props.returnDuration, props.shockRadius, props.shockStrength, props.resistance]);

    return (
        <div className={`dot-grid-container ${className} overflow-hidden`} style={{ width: '100%', height: '100%', ...style }} ref={wrapperRef}>
            <canvas ref={canvasRef} className="dot-grid-canvas" />
        </div>
    );
};

export default DotGridBackground;
