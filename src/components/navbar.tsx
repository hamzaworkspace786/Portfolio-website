"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl py-4 shadow-lg"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#home" className="group">
          <div className={`w-14 h-14 rounded-2xl border-4 transition-all duration-500 flex items-center justify-center font-black text-2xl ${
            isScrolled ? "border-dark text-dark" : "border-white text-white group-hover:scale-110"
          }`}>
            H
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-black uppercase tracking-[0.2em] transition-all relative group ${
                isScrolled ? "text-dark" : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-coral transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          
          <button className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
            isScrolled 
            ? "bg-dark text-white hover:bg-coral" 
            : "bg-white text-dark hover:scale-105"
          }`}>
            Contact
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-3 rounded-xl transition-all ${
            isScrolled || isMobileMenuOpen ? "bg-dark text-white" : "bg-white/10 text-white backdrop-blur-sm"
          }`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[45] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-20">
               <div className="w-14 h-14 rounded-2xl border-4 border-dark flex items-center justify-center font-black text-2xl text-dark">H</div>
               <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-gray-100 rounded-xl text-dark"><X size={24} /></button>
            </div>

            <div className="flex flex-col gap-8">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-5xl font-black text-dark hover:text-coral transition-colors flex items-center justify-between group"
                  >
                    {link.name}
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-all -translate-x-10 group-hover:translate-x-0" size={40} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
