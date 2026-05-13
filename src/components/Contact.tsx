'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MapPin, Clock, Loader2 } from 'lucide-react'
import { PERSONAL, SOCIAL_LINKS } from '@/lib/data'
import type { ContactFormData } from '@/types'

const INITIAL: ContactFormData = { name: '', email: '', subject: '', message: '', budget: '' }

// ── Icon components for social links ────────────────────────
function SocialIcon({ icon }: { icon: string }) {
    switch (icon) {
        case 'github':
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            )
        case 'linkedin':
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            )
        case 'twitter':
            return (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            )
        case 'fiverr':
            return <span className="font-bold text-[10px]">Fivr</span>
        default:
            return null
    }
}

export default function Contact() {
    const [form, setForm] = useState<ContactFormData>(INITIAL)
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    const ref = useRef<HTMLElement>(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm(f => ({ ...f, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        // ── Replace with your actual form submission logic ──
        // e.g. Formspree, EmailJS, or a Next.js API route
        await new Promise(r => setTimeout(r, 1500))
        setStatus('success')
        setForm(INITIAL)
    }

    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const } },
    })

    return (
        <section id="contact" ref={ref} className="bg-[#0A0A0A] section-py relative overflow-hidden">
            {/* ── Grid bg ── */}
            <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

            {/* ── Yellow glow bottom-left ── */}
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F5C518]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container relative z-10">
                {/* ── Header ── */}
                <motion.div
                    variants={fadeUp(0)}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                    className="mb-16"
                >
                    <p className="section-label">Get In Touch</p>
                    <h2 className="section-title">
                        Let's<br />
                        <span className="text-[#F5C518]">Work Together.</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-start">
                    {/* ── Left — Form ── */}
                    <motion.div
                        variants={fadeUp(0.1)}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                    >
                        {status === 'success' ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-[#161616] border border-[#2A2A2A] p-12 text-center"
                            >
                                <div className="text-5xl mb-4">✅</div>
                                <h3 className="font-display text-4xl text-[#F5C518] mb-3">Message Sent!</h3>
                                <p className="text-[#A0A0A0]">I'll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="btn-outline mt-6 inline-flex"
                                >
                                    Send Another
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]">
                                            Your Name *
                                        </label>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]">
                                            Email Address *
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="you@company.com"
                                            className="form-input"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]">
                                            Subject *
                                        </label>
                                        <input
                                            name="subject"
                                            value={form.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="Landing page project"
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]">
                                            Budget (USD)
                                        </label>
                                        <select
                                            name="budget"
                                            value={form.budget}
                                            onChange={handleChange}
                                            className="form-input"
                                        >
                                            <option value="">Select budget range</option>
                                            <option value="< $50">Less than $50</option>
                                            <option value="$50–$150">$50 – $150</option>
                                            <option value="$150–$500">$150 – $500</option>
                                            <option value="$500+">$500+</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666]">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Tell me about your project..."
                                        className="form-input resize-none"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="btn-primary self-start flex items-center gap-2 disabled:opacity-60"
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <Loader2 size={14} className="animate-spin relative z-10" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={13} className="relative z-10" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* ── Right — Info panel ── */}
                    <motion.div
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        animate={inView ? 'show' : 'hidden'}
                        className="flex flex-col gap-8"
                    >
                        {/* Contact info */}
                        <div className="bg-[#161616] border border-[#2A2A2A] p-6 flex flex-col gap-5">
                            {[
                                { icon: Mail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
                                { icon: MapPin, label: 'Location', value: 'Okara, Pakistan 🇵🇰', href: undefined },
                                { icon: Clock, label: 'Response', value: 'Within 24 hours', href: undefined },
                            ].map(({ icon: Icon, label, value, href }) => (
                                <div key={label} className="flex items-start gap-4">
                                    <div className="w-9 h-9 bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icon size={15} className="text-[#F5C518]" />
                                    </div>
                                    <div>
                                        <p className="font-mono text-[10px] uppercase tracking-widest text-[#666] mb-0.5">{label}</p>
                                        {href ? (
                                            <a href={href} className="text-[#F5F5F0] text-sm hover:text-[#F5C518] transition-colors">
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="text-[#F5F5F0] text-sm">{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Hire me platforms */}
                        <div className="bg-[#F5C518] p-6">
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0A0A0A]/50 mb-4">
                                Also Available On
                            </p>
                            <div className="flex flex-col gap-3">
                                <a
                                    href={PERSONAL.fiverr}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between px-4 py-3 bg-[#0A0A0A] text-[#F5C518] hover:bg-[#161616] transition-colors"
                                >
                                    <span className="font-mono text-sm uppercase tracking-wider">Fiverr</span>
                                    <span className="text-xs">→</span>
                                </a>
                                <a
                                    href={PERSONAL.upwork}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-between px-4 py-3 bg-[#0A0A0A] text-[#F5C518] hover:bg-[#161616] transition-colors"
                                >
                                    <span className="font-mono text-sm uppercase tracking-wider">Upwork</span>
                                    <span className="text-xs">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Socials */}
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#666] mb-4">Follow Me</p>
                            <div className="flex gap-3">
                                {SOCIAL_LINKS.map(link => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={link.name}
                                        className="w-10 h-10 bg-[#161616] border border-[#2A2A2A] flex items-center justify-center text-[#A0A0A0] hover:text-[#F5C518] hover:border-[#F5C518] transition-all duration-300"
                                    >
                                        <SocialIcon icon={link.icon} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}