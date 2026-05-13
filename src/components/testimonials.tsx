"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const awards = [
  { name: "WebDesign", color: "text-[#D11149]", logo: "WD" },
  { name: "colorlib", color: "text-[#888888]", logo: "CL" },
  { name: "AWWWARDS.", color: "text-[#000000]", logo: "AW" },
  { name: "Forbes", color: "text-[#000000]", logo: "FB" },
  { name: "creative", color: "text-[#E94E77]", logo: "CR" },
];

export default function Testimonials() {
  return (
    <section className="bg-white overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          {/* Left: Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mb-10 text-golden opacity-20">
              <Quote size={80} fill="currentColor" />
            </div>

            <div className="flex gap-1 mb-8">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="text-golden text-xl">★</span>
              ))}
            </div>

            <h2 className="text-3xl md:text-5xl font-black italic text-dark leading-tight mb-12">
              "Working with Steve was a game-changer. His attention to detail and creative vision surpassed all our expectations."
            </h2>

            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-coral shadow-xl shadow-coral/20 border-4 border-white flex items-center justify-center text-white font-bold">FS</div>
              <div>
                <p className="text-2xl font-black text-dark">Funny Spencer</p>
                <p className="text-coral font-bold uppercase tracking-widest text-sm">Design Director</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Awards / Trusted By */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-cream rounded-[4rem] p-12 md:p-20 relative"
          >
             <h4 className="text-dark/20 text-sm font-black tracking-[0.5em] uppercase mb-12 text-center">Awards & Recognition</h4>
             
             <div className="grid grid-cols-2 gap-12">
               {awards.map((award, idx) => (
                 <motion.div
                   key={award.name}
                   whileHover={{ scale: 1.1, y: -5 }}
                   className="flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                 >
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-black mb-3 ${award.color} bg-white shadow-sm`}>
                     {award.logo}
                   </div>
                   <span className={`text-sm font-bold uppercase tracking-wider ${award.color}`}>{award.name}</span>
                 </motion.div>
               ))}
             </div>

             {/* Background decoration */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-golden/5 rounded-full -mr-16 -mt-16 blur-2xl" />
             <div className="absolute bottom-0 left-0 w-32 h-32 bg-coral/5 rounded-full -ml-16 -mb-16 blur-2xl" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
