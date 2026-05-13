'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, ExternalLink } from 'lucide-react'
import { PERSONAL, STATS } from '@/lib/data'

// ── Animation variants ───────────────────────────────────────
const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08, delayChildren: 0.3 },
    },
}

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
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

export default function Hero() {
    const ref = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

    // Parallax for diagonal yellow shape
    const shapeY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

    return (
        <section id="home" ref={ref} className="relative min-h-[100svh] overflow-hidden grid-bg">
            {/* ── Background noise ── */}
            <div className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
                }}
            />

            {/* ── Giant diagonal yellow block (right side) ── */}
            <motion.div
                className="absolute right-0 top-0 w-[45%] h-full bg-[#F5C518] origin-right"
                aria-hidden
                style={{
                    clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)',
                    y: shapeY,
                }}
            >
                {/* Dot pattern on yellow */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
                        backgroundSize: '24px 24px',
                    }}
                />
            </motion.div>

            {/* ── Large background number ── */}
            <div
                className="absolute right-[5%] top-1/2 -translate-y-1/2 font-display text-[28vw] leading-none text-[#0A0A0A] opacity-20 select-none pointer-events-none"
                aria-hidden
            >
                01
            </div>

            {/* ── Content ── */}
            <div className="container relative z-10 flex flex-col justify-center min-h-[100svh] pt-[100px] pb-16">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    style={{ y: textY }}
                    className="max-w-3xl"
                >
                    {/* Badge */}
                    <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F5C518] opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F5C518]" />
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#F5C518]">
                            Available for Work · {PERSONAL.location}
                        </span>
                    </motion.div>

                    {/* Main headline */}
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

                    {/* Tagline */}
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

                    {/* Stats */}
                    <motion.div variants={container} className="flex flex-wrap gap-8">
                        {STATS.map(stat => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#666]">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                    <ArrowDown size={16} className="text-[#F5C518]" />
                </motion.div>
            </motion.div>

            {/* ── Name label (rotated, right edge) ── */}
            <div
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block"
                style={{ writingMode: 'vertical-rl' }}
                aria-hidden
            >
                <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#0A0A0A] font-bold">
                    {PERSONAL.name}
                </span>
            </div>
        </section>
    )
}