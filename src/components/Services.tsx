'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Clock, DollarSign } from 'lucide-react'
import { SERVICES } from '@/lib/data'

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
    },
})

export default function Services() {
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="services"
            ref={ref}
            className="relative bg-[#111111] section-py overflow-hidden"
        >
            {/* ── Background grid ── */}
            <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

            <div className="container relative z-10">
                {/* ── Header ── */}
                <motion.div
                    variants={fadeUp(0)}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
                >
                    <div>
                        <p className="section-label">What I Offer</p>
                        <h2 className="section-title">
                            My<br />
                            <span className="text-[#F5C518]">Services.</span>
                        </h2>
                    </div>
                    <p className="text-[#A0A0A0] max-w-sm text-base leading-relaxed">
                        Clean code. On-time delivery. Clear communication.
                        Every time, regardless of project size.
                    </p>
                </motion.div>

                {/* ── Cards grid ── */}
                <div className="grid md:grid-cols-3 gap-6">
                    {SERVICES.map((service, i) => (
                        <motion.article
                            key={service.id}
                            variants={fadeUp(0.1 + i * 0.1)}
                            initial="hidden"
                            animate={inView ? 'show' : 'hidden'}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.3 }}
                            className={`relative flex flex-col p-8 card group cursor-default
                ${i === 1 ? 'md:-mt-6 bg-[#F5C518] border-[#F5C518]' : 'bg-[#161616]'}
              `}
                        >
                            {/* Popular badge (middle card) */}
                            {i === 1 && (
                                <div className="absolute top-0 right-8 -translate-y-1/2">
                                    <span className="bg-[#0A0A0A] text-[#F5C518] font-mono text-[10px] uppercase tracking-[0.2em] px-3 py-1.5">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className={`text-3xl mb-6 w-14 h-14 flex items-center justify-center
                  ${i === 1 ? 'bg-[#0A0A0A]/10' : 'bg-[#F5C518]/10 border border-[#F5C518]/20'}
                `}
                            >
                                {service.icon}
                            </div>

                            {/* Title + description */}
                            <h3
                                className={`font-display text-4xl mb-3 ${i === 1 ? 'text-[#0A0A0A]' : 'text-[#F5F5F0]'}`}
                            >
                                {service.title}
                            </h3>
                            <p className={`text-sm leading-relaxed mb-6 flex-1 ${i === 1 ? 'text-[#0A0A0A]/70' : 'text-[#A0A0A0]'}`}>
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="flex flex-col gap-2 mb-8">
                                {service.features.map(f => (
                                    <li key={f} className="flex items-center gap-2">
                                        <Check
                                            size={13}
                                            className={`flex-shrink-0 ${i === 1 ? 'text-[#0A0A0A]' : 'text-[#F5C518]'}`}
                                            strokeWidth={3}
                                        />
                                        <span className={`text-sm ${i === 1 ? 'text-[#0A0A0A]/80' : 'text-[#A0A0A0]'}`}>
                                            {f}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Pricing row */}
                            <div className={`flex items-center justify-between pt-6 border-t
                ${i === 1 ? 'border-[#0A0A0A]/20' : 'border-[#2A2A2A]'}
              `}>
                                <div className="flex items-center gap-1.5">
                                    <DollarSign size={14} className={i === 1 ? 'text-[#0A0A0A]' : 'text-[#F5C518]'} />
                                    <span className={`font-display text-3xl ${i === 1 ? 'text-[#0A0A0A]' : 'text-[#F5F5F0]'}`}>
                                        {service.startingPrice}
                                    </span>
                                    <span className={`text-xs font-mono ${i === 1 ? 'text-[#0A0A0A]/60' : 'text-[#666]'}`}>
                                        /starting
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <Clock size={12} className={i === 1 ? 'text-[#0A0A0A]/60' : 'text-[#666]'} />
                                    <span className={`font-mono text-[11px] ${i === 1 ? 'text-[#0A0A0A]/60' : 'text-[#666]'}`}>
                                        {service.deliveryDays}d delivery
                                    </span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {/* ── Footnote ── */}
                <motion.p
                    variants={fadeUp(0.4)}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="text-center text-[#666] font-mono text-xs uppercase tracking-[0.2em] mt-12"
                >
                    All prices in USD · Available on{' '}
                    <a href="https://fiverr.com" target="_blank" rel="noreferrer" className="text-[#F5C518] hover:underline">
                        Fiverr
                    </a>{' '}
                    &{' '}
                    <a href="https://upwork.com" target="_blank" rel="noreferrer" className="text-[#F5C518] hover:underline">
                        Upwork
                    </a>
                </motion.p>
            </div>
        </section>
    )
}