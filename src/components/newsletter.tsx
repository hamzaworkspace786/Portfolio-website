"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-golden py-32 relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="black" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-black/5 flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-dark mb-6"
          >
            Stay In The Loop
          </motion.h2>
          
          <p className="text-gray-500 text-lg mb-12 max-w-xl">
            Get the latest design trends and development tips delivered straight to your inbox. No spam, just pure inspiration.
          </p>

          <form 
            className="w-full max-w-md flex flex-col sm:flex-row gap-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 px-8 py-5 rounded-full bg-gray-50 border-2 border-transparent focus:border-golden focus:bg-white transition-all outline-none text-dark font-bold shadow-inner"
            />
            <button
              type="submit"
              className="px-10 py-5 bg-dark text-white rounded-full font-bold uppercase tracking-widest hover:bg-coral transition-all shadow-xl hover:shadow-coral/20"
            >
              Join Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
