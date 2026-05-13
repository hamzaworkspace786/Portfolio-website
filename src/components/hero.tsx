'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { PERSONAL, STATS } from '@/lib/data'

// ─────────────────────────────────────────────────────────────
//  PARALLAX SPRING CONFIGS
//
//  Two separate configs create the illusion of real depth:
//  • Shape (background layer) — heavier, lazier, drifts furthest
//  • Text (foreground layer)  — lighter, snappier, follows faster
//
//  Physics of the damping ratio:
//    ratio = damping / (2 × √(stiffness × mass))
//  We want ratio >> 1 (heavily overdamped) so there is zero
//  bounce and the motion glides to rest like oil on glass.
//
//  Shape:  ratio ≈ 70 / (2√40) ≈ 5.53  — very slow, buttery
//  Text:   ratio ≈ 80 / (2√55) ≈ 5.39  — slightly snappier
// ─────────────────────────────────────────────────────────────
const SHAPE_SPRING = {
    stiffness: 40,   // low = slow to catch up
    damping: 70,   // high = zero overshoot
    restDelta: 0.0001,
    restSpeed: 0.0001,
} as const

const TEXT_SPRING = {
    stiffness: 55,
    damping: 80,
    restDelta: 0.0001,
    restSpeed: 0.0001,
} as const

// Keeps all transform math on the GPU compositor thread.
// Never triggers layout — only paints.
const gpuTransform = (y: MotionValue<string>) =>
    ({ y, translateZ: 0 } as const)

// ── Animation variants ───────────────────────────────────────
const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
}

const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

// ── Stat counter ─────────────────────────────────────────────
function StatCard({ value, suffix, label }: { value: string; suffix?: string; label: string }) {
    return (
        <motion.div
            variants={fadeUp}
            className="flex flex-col gap-1 border-l border-[#2A2A2A] pl-5"
        >
            <span className="stat-number">
                {value}<span className="text-[#A0A0A0] text-3xl">{suffix}</span>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#666]">{label}</span>
        </motion.div>
    )
}

// ─────────────────────────────────────────────────────────────
export default function Hero() {
    const ref = useRef<HTMLElement>(null)

    // Raw scroll progress (0 → 1) as the section exits the viewport.
    // This fires on every scroll frame but is NOT yet smooth.
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    })

    // ── Layer 1: background shape ─────────────────────────────
    // Smaller travel range (18%) so even at peak lag the offset
    // is never visually jarring. Spring turns the raw jump into
    // a slow honey-like glide.
    const rawShapeY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])
    const shapeSpring = useSpring(rawShapeY, SHAPE_SPRING)

    // ── Layer 2: foreground text ──────────────────────────────
    // Even smaller range (9%) — text barely moves so reading is
    // comfortable while the yellow block drifts behind it.
    const rawTextY = useTransform(scrollYProgress, [0, 1], ['0%', '9%'])
    const textSpring = useSpring(rawTextY, TEXT_SPRING)

    // ── Layer 3: the "01" number drifts even slower ───────────
    const rawNumY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
    const numSpring = useSpring(rawNumY, SHAPE_SPRING)

    return (
        <section id="home" ref={ref} className="relative min-h-[100svh] overflow-hidden grid-bg">

            {/* ── Background noise — static, no transform needed ── */}
            <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
                }}
            />

            {/* ── Yellow diagonal block — slowest layer (deepest) ── */}
            <motion.div
                aria-hidden
                className="absolute right-0 top-0 w-[45%] h-full bg-[#F5C518] will-change-transform"
                style={{
                    clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
                    y: shapeSpring,
                    // translateZ promotes this element to its own GPU layer so the
                    // browser compositor can move it without touching the main thread.
                    translateZ: 0,
                }}
            >
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </motion.div>

            {/* ── "01" ghost number — mid-speed layer ── */}
            <motion.div
                aria-hidden
                className="absolute right-[5%] top-1/2 font-display text-[28vw] leading-none text-[#0A0A0A] opacity-20 select-none pointer-events-none will-change-transform"
                style={{
                    y: numSpring,
                    translateY: '-50%',
                    translateZ: 0,
                }}
            >
                01
            </motion.div>

            {/* ── Content — fastest layer (closest to viewer) ── */}
            <div className="container relative z-10 flex flex-col justify-center min-h-[100svh] pt-[100px] pb-16">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-3xl will-change-transform"
                    style={{
                        y: textSpring,
                        translateZ: 0,
                    }}
                >
                    {/* Availability badge */}
                    <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C518] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5C518]" />
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5C518]">
                            Available for Work · {PERSONAL.location}
                        </span>
                    </motion.div>

                    {/* Headline — three lines with overflow clipping for the
              slide-up reveal. Each word on its own spring layer via
              the stagger variant so they arrive one after another. */}
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            variants={fadeUp}
                            className="font-display text-[clamp(72px,10vw,140px)] leading-[0.9] text-[#F5F5F0]"
                        >
                            {PERSONAL.headline1}
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            variants={fadeUp}
                            className="font-display text-[clamp(72px,10vw,140px)] leading-[0.9] text-[#F5C518]"
                        >
                            {PERSONAL.headline2}
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden mb-8">
                        <motion.h1
                            variants={fadeUp}
                            className="font-display text-[clamp(72px,10vw,140px)] leading-[0.9] text-[#F5F5F0]"
                        >
                            {PERSONAL.headline3}
                        </motion.h1>
                    </div>

                    {/* Bio */}
                    <motion.p variants={fadeUp} className="max-w-lg text-[#A0A0A0] text-lg leading-relaxed mb-10">
                        {PERSONAL.bio}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-16">
                        <a href="#projects" className="btn-primary">
                            <span>View My Work</span>
                            <ExternalLink size={14} className="relative z-10" />
                        </a>
                        <a href="#contact" className="btn-outline">
                            Get In Touch
                        </a>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div variants={container} className="flex flex-wrap gap-8">
                        {STATS.map(stat => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Scroll indicator — fixed at bottom, no parallax ── */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#666]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                    <ArrowDown size={16} className="text-[#F5C518]" />
                </motion.div>
            </motion.div>

            {/* ── Vertical name label (lives on yellow, black text) ── */}
            <div
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
                style={{ writingMode: 'vertical-rl' }}
                aria-hidden
            >
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0A0A0A] font-bold select-none">
                    {PERSONAL.name}
                </span>
            </div>
        </section>
    )
}