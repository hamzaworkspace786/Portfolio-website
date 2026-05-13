"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden py-0"
    >
      {/* Background with diagonal split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-coral" />
        <div
          className="absolute inset-0 bg-golden transition-all duration-700"
          style={{
            clipPath: "polygon(50% 0%, 100% 0%, 100% 100%, 30% 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8">
          
          {/* Left: Number Watermark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block lg:col-span-2"
          >
            <span className="text-[12rem] font-black text-white/10 leading-none select-none block transform -rotate-90 origin-center">
              02
            </span>
          </motion.div>

          {/* Center Content */}
          <div className="lg:col-span-8 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1]">
                Steve Henriques
              </h1>
              
              <p className="text-xl md:text-3xl font-[family-name:var(--font-dancing)] text-white/90 mb-10">
                Personal Portfolio Website
              </p>

              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#fff", color: "#ff5e3a" }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-5 bg-purple text-white rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-2xl hover:shadow-purple/40"
              >
                Hire Me
              </motion.button>
            </motion.div>
          </div>

          <div className="hidden lg:block lg:col-span-2" />
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[60px] fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C0,95.83,161,122.83,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
