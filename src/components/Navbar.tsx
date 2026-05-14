'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_ITEMS, PERSONAL } from '@/lib/data'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    // ── Scroll listener ──────────────────────────────────────
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)

            // Track active section
            const sections = NAV_ITEMS.map(item => item.href.replace('#', ''))
            for (const id of [...sections].reverse()) {
                const el = document.getElementById(id)
                if (el && window.scrollY >= el.offsetTop - 120) {
                    setActiveSection(id)
                    break
                }
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // ── Lock body when mobile menu open ─────────────────────
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    return (
        <>
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-[#2A2A2A]'
                    : 'bg-transparent'
                    }`}
            >
                <div className="container">
                    <nav className="flex items-center justify-between h-[72px]">
                        {/* Logo */}
                        <Link href="#home" className="flex items-center gap-3 group">
                            <div className="w-9 h-9 bg-[#F5C518] flex items-center justify-center transition-transform duration-300 group-hover:rotate-12">
                                {/* Replace with your actual logo: <Image src="/logo.png" alt="Logo" width={36} height={36} /> */}
                                <Image src="/logo.png" alt="Logo" width={36} height={36} />
                            </div>
                            <span
                                className="font-mono text-xs tracking-[0.2em] uppercase text-[#A0A0A0] group-hover:text-[#F5C518] transition-colors duration-300"
                            >
                                {PERSONAL.tagline.split(' · ')[0]}
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <ul className="hidden md:flex items-center gap-8">
                            {NAV_ITEMS.map(item => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* CTA */}
                        <div className="hidden md:flex items-center gap-4">
                            <a href={PERSONAL.fiverr} target="_blank" rel="noreferrer" className="btn-primary">
                                <span>Hire Me</span>
                            </a>
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen(v => !v)}
                            className="md:hidden flex flex-col gap-[5px] p-2"
                            aria-label="Toggle menu"
                        >
                            <motion.span
                                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                                className="block w-6 h-[1.5px] bg-[#F5F5F0] origin-center transition-colors"
                            />
                            <motion.span
                                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                                className="block w-6 h-[1.5px] bg-[#F5F5F0]"
                            />
                            <motion.span
                                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                                className="block w-6 h-[1.5px] bg-[#F5F5F0] origin-center"
                            />
                        </button>
                    </nav>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                        className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col pt-24 px-8"
                    >
                        {/* Accent line */}
                        <div className="w-12 h-1 bg-[#F5C518] mb-10" />

                        <ul className="flex flex-col gap-6 flex-1">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.li
                                    key={item.href}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="font-display text-5xl text-[#F5F5F0] hover:text-[#F5C518] transition-colors duration-300"
                                    >
                                        {item.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="pb-12">
                            <a
                                href={PERSONAL.fiverr}
                                target="_blank"
                                rel="noreferrer"
                                className="btn-primary inline-flex"
                                onClick={() => setMenuOpen(false)}
                            >
                                <span>Hire Me on Fiverr</span>
                            </a>
                            <p className="mt-4 font-mono text-xs text-[#666] tracking-widest uppercase">
                                {PERSONAL.email}
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}