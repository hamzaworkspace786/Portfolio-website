"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    "Expert UI/UX Design",
    "Modern Web Development",
    "Brand Identity & Strategy",
    "Creative Problem Solving"
  ];

  return (
    <section id="about" className="bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Left: Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden bg-dark aspect-[4/5] flex items-center justify-center p-12">
              <div className="text-center">
                 <div className="w-32 h-32 rounded-full bg-golden/20 flex items-center justify-center mx-auto mb-8 border border-golden/30">
                   <div className="w-20 h-20 rounded-full bg-golden flex items-center justify-center text-dark font-black text-4xl">SH</div>
                 </div>
                 <h3 className="text-white text-3xl font-bold mb-4 italic">"Design is intelligence made visible."</h3>
                 <p className="text-white/40 font-medium tracking-[0.2em] uppercase">Steve Henriques</p>
              </div>
            </div>

            {/* Decorative elements that don't overlap text */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-coral/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-golden/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-coral font-bold tracking-[0.3em] uppercase text-sm mb-4 block">About Myself</span>
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-dark">
              Transforming Ideas Into <span className="text-coral italic">Digital Reality</span>
            </h2>
            
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              With over 5 years of experience in the industry, I specialize in creating seamless digital experiences that resonate with users. My approach blends technical expertise with creative intuition.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-golden flex items-center justify-center text-dark">
                    <CheckCircle2 size={14} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-dark/80">{item}</span>
                </div>
              ))}
            </div>

            <motion.div 
              whileHover={{ x: 10 }}
              className="flex items-center gap-4 cursor-pointer group"
            >
              <div className="w-16 h-16 rounded-full bg-dark flex items-center justify-center text-white group-hover:bg-coral transition-colors">
                <ArrowRight size={24} />
              </div>
              <span className="text-xl font-bold text-dark">Learn More About My Process</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Inline component fix for the ArrowRight missing import
const ArrowRight = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
  </svg>
);
