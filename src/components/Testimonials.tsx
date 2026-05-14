'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'

export default function Testimonials() {
    const [current, setCurrent] = useState(0)
    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    // Auto-advance
    useEffect(() => {
        const id = setInterval(() => {
            setCurrent(c => (c + 1) % TESTIMONIALS.length)
        }, 5000)
        return () => clearInterval(id)
    }, [])

    const prev = () => setCurrent(c => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    const next = () => setCurrent(c => (c + 1) % TESTIMONIALS.length)

    const t = TESTIMONIALS[current]

    return (
        <section
            ref={ref}
            className="relative bg-[#F5C518] section-py overflow-hidden clip-diagonal-both"
            style={{ marginBlock: '-1px' }}
        >
            {/* ── Dot pattern ── */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: 'radial-gradient(circle, #0A0A0A 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
                aria-hidden
            />

            <div className="container relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                    className="max-w-3xl mx-auto text-center"
                >
                    {/* Section label */}
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#0A0A0A]/50 mb-10">
                        Client Testimonials
                    </p>

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-8">
                        {Array.from({ length: t.rating }).map((_, i) => (
                            <Star key={i} size={18} className="fill-[#0A0A0A] text-[#0A0A0A]" />
                        ))}
                    </div>

                    {/* Quote */}
                    <AnimatePresence mode="wait">
                        <motion.blockquote
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                            className="font-display text-[clamp(28px,4vw,52px)] text-[#0A0A0A] leading-[1.1] mb-10"
                        >
                            "{t.content}"
                        </motion.blockquote>
                    </AnimatePresence>

                    {/* Author */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`author-${current}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-center gap-1 mb-12"
                        >
                            <div className="w-10 h-[2px] bg-[#0A0A0A]/30 mb-3" />
                            <p className="font-semibold text-[#0A0A0A]">{t.name}</p>
                            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#0A0A0A]/50">
                                {t.role} — {t.company}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-6">
                        <button
                            onClick={prev}
                            className="w-10 h-10 border-2 border-[#0A0A0A]/30 flex items-center justify-center hover:bg-[#0A0A0A] hover:border-[#0A0A0A] hover:text-[#F5C518] transition-all duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    aria-label={`Testimonial ${i + 1}`}
                                    className={`transition-all duration-300 ${i === current
                                            ? 'w-8 h-2 bg-[#0A0A0A]'
                                            : 'w-2 h-2 bg-[#0A0A0A]/30 hover:bg-[#0A0A0A]/60'
                                        }`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="w-10 h-10 border-2 border-[#0A0A0A]/30 flex items-center justify-center hover:bg-[#0A0A0A] hover:border-[#0A0A0A] hover:text-[#F5C518] transition-all duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}