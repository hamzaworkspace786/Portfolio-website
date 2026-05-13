'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence, LayoutGroup } from 'framer-motion'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/data'
import type { ProjectCategory } from '@/types'

const FILTERS: { label: string; value: ProjectCategory }[] = [
    { label: 'All', value: 'all' },
    { label: 'SaaS', value: 'saas' },
    { label: 'Full-Stack', value: 'fullstack' },
    { label: 'Landing', value: 'landing' },
    { label: 'Frontend', value: 'frontend' },
]

const STATUS_LABEL: Record<string, string> = {
    live: '● Live',
    wip: '◌ WIP',
    concept: '○ Concept',
}

const STATUS_COLOR: Record<string, string> = {
    live: '#4ADE80',
    wip: '#F5C518',
    concept: '#A0A0A0',
}

function GithubIcon({ size = 12, className = "" }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    )
}

export default function Projects() {
    const [active, setActive] = useState<ProjectCategory>('all')
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const filtered = PROJECTS.filter(p => active === 'all' || p.category === active)

    return (
        <section id="projects" ref={ref} className="bg-[#0A0A0A] section-py">
            <div className="container">
                {/* ── Header ── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                    className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
                >
                    <div>
                        <p className="section-label">My Work</p>
                        <h2 className="section-title">
                            Latest<br />
                            <span className="text-[#F5C518]">Projects.</span>
                        </h2>
                    </div>

                    {/* Filter tabs */}
                    <LayoutGroup>
                        <div className="flex flex-wrap gap-2">
                            {FILTERS.map(f => (
                                <motion.button
                                    key={f.value}
                                    onClick={() => setActive(f.value)}
                                    className={`relative px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200
                    ${active === f.value ? 'text-[#0A0A0A]' : 'text-[#666] hover:text-[#A0A0A0] border border-[#2A2A2A]'}
                  `}
                                >
                                    {active === f.value && (
                                        <motion.span
                                            layoutId="filter-pill"
                                            className="absolute inset-0 bg-[#F5C518]"
                                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                                        />
                                    )}
                                    <span className="relative z-10">{f.label}</span>
                                </motion.button>
                            ))}
                        </div>
                    </LayoutGroup>
                </motion.div>

                {/* ── Grid ── */}
                <motion.div layout className="grid md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project, i) => (
                            <motion.article
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.06 }}
                                className={`project-card relative overflow-hidden card group cursor-default
                  ${project.featured ? 'md:col-span-2' : ''}
                `}
                            >
                                {/* ── Image / placeholder ── */}
                                <div className={`relative overflow-hidden bg-[#161616] ${project.featured ? 'h-72 md:h-96' : 'h-56'}`}>
                                    {/* 
                    Replace with actual project screenshot:
                    <Image src={project.image} alt={project.title} fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  */}
                                    <div className="w-full h-full flex items-center justify-center">
                                        <div className="text-center">
                                            <span className="font-display text-[80px] text-[#2A2A2A] leading-none">
                                                {project.title.charAt(0)}
                                            </span>
                                            <p className="font-mono text-xs text-[#444] uppercase tracking-widest mt-2">
                                                Add screenshot to /public{project.image}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Dark gradient overlay */}
                                    <div className="project-overlay" />

                                    {/* ── Hover links ── */}
                                    <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
                                        {project.liveUrl && project.liveUrl !== '#' && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-[#F5C518] text-[#0A0A0A] font-mono text-[11px] uppercase tracking-wider hover:bg-white transition-colors"
                                                onClick={e => e.stopPropagation()}
                                            >
                                                <ExternalLink size={12} />
                                                Live Demo
                                            </a>
                                        )}
                                        {project.githubUrl && project.githubUrl !== '#' && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white font-mono text-[11px] uppercase tracking-wider hover:bg-white/20 transition-colors border border-white/20"
                                                onClick={e => e.stopPropagation()}
                                            >
                                                <GithubIcon size={12} />
                                                GitHub
                                            </a>
                                        )}
                                    </div>

                                    {/* Status badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <span
                                            className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 bg-[#0A0A0A]/80 backdrop-blur-sm"
                                            style={{ color: STATUS_COLOR[project.status] }}
                                        >
                                            {STATUS_LABEL[project.status]}
                                        </span>
                                    </div>
                                </div>

                                {/* ── Card body ── */}
                                <div className="p-6 flex flex-col gap-3">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666] mb-1.5">
                                                {project.category} · {project.year}
                                            </p>
                                            <h3 className="font-display text-3xl text-[#F5F5F0] group-hover:text-[#F5C518] transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <ArrowUpRight
                                            size={20}
                                            className="text-[#444] group-hover:text-[#F5C518] transition-colors mt-1 flex-shrink-0"
                                        />
                                    </div>

                                    <p className="text-[#A0A0A0] text-sm leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Tech stack */}
                                    <div className="flex flex-wrap gap-2 pt-1">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* ── Empty state ── */}
                {filtered.length === 0 && (
                    <div className="text-center py-24 text-[#444]">
                        <p className="font-mono text-sm">More projects coming soon...</p>
                    </div>
                )}

                {/* ── More work CTA ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-14"
                >
                    <a
                        href="https://github.com/you"
                        target="_blank"
                        rel="noreferrer"
                        className="btn-outline inline-flex items-center gap-2"
                    >
                        <GithubIcon size={14} />
                        See All on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    )
}