'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { SKILLS, TECH_MARQUEE } from '@/lib/data'
import type { SkillCategory } from '@/types'

const CATEGORY_LABELS: Record<SkillCategory, string> = {
    frontend: 'Frontend',
    backend: 'Backend',
    realtime: 'Real-time',
    tools: 'Tools & DevOps',
}

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref, { once: true })

    return (
        <div ref={ref} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <span className="font-mono text-[12px] uppercase tracking-[0.15em] text-[#A0A0A0]">{name}</span>
                <span className="font-mono text-[11px] text-[#F5C518]">{level}%</span>
            </div>
            <div className="skill-bar-track">
                <motion.div
                    className="skill-bar-fill"
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: level / 100 } : {}}
                    transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] as const }}
                />
            </div>
        </div>
    )
}

export default function Skills() {
    const [activeTab, setActiveTab] = useState<SkillCategory>('frontend')
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const categories = Object.keys(CATEGORY_LABELS) as SkillCategory[]
    const filtered = SKILLS.filter(s => s.category === activeTab)

    return (
        <section id="skills" ref={ref} className="bg-[#111111] section-py overflow-hidden">
            <div className="container">
                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-16"
                >
                    <p className="section-label">Expertise</p>
                    <h2 className="section-title">
                        My<br />
                        <span className="text-[#F5C518]">Skills.</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
                    {/* ── Left: category tabs ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#666] mb-4">
                            Category
                        </p>
                        <nav className="flex flex-col gap-1">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveTab(cat)}
                                    className={`text-left px-5 py-3.5 font-display text-2xl transition-all duration-300 
                    ${activeTab === cat
                                            ? 'bg-[#F5C518] text-[#0A0A0A] pl-8'
                                            : 'text-[#666] hover:text-[#A0A0A0] hover:pl-7 border border-[#2A2A2A] hover:border-[#444]'
                                        }
                  `}
                                >
                                    {CATEGORY_LABELS[cat]}
                                </button>
                            ))}
                        </nav>

                        {/* ── Quick stats ── */}
                        <div className="mt-10 p-6 bg-[#161616] border border-[#2A2A2A]">
                            <p className="font-mono text-[10px] uppercase tracking-widest text-[#666] mb-4">Quick Facts</p>
                            <div className="flex flex-col gap-3">
                                {[
                                    ['Languages', '3+ (JS, TS, Python basics)'],
                                    ['Frameworks', '5+ (React, Next, Express...)'],
                                    ['Databases', 'MongoDB, PostgreSQL'],
                                    ['Deployment', 'Vercel, Railway, Render'],
                                ].map(([label, val]) => (
                                    <div key={label} className="flex items-center justify-between gap-4">
                                        <span className="font-mono text-[11px] text-[#666]">{label}</span>
                                        <span className="font-mono text-[11px] text-[#A0A0A0] text-right">{val}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Right: skill bars ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        className="flex flex-col gap-6"
                    >
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                            className="flex flex-col gap-6"
                        >
                            {filtered.map((skill, i) => (
                                <SkillBar
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    delay={i * 0.07}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* ── Tech Marquee strip ── */}
            <div className="mt-24 border-y border-[#2A2A2A] py-4 overflow-hidden relative bg-[#0A0A0A]">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />

                <div className="marquee-track gap-8 select-none">
                    {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
                        <div key={i} className="flex items-center gap-8 flex-shrink-0">
                            <span className="font-display text-2xl text-[#2A2A2A] whitespace-nowrap">
                                {tech}
                            </span>
                            <span className="text-[#F5C518] text-lg">·</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}