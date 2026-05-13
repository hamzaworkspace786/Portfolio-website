"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Image as ImageIcon } from "lucide-react";

const categories = ["All", "Branding", "Creative", "Design"];

const portfolioItems = [
  { id: 1, title: "Sweet Donut", category: "Creative", bgColor: "bg-pink-bg", size: "large" },
  { id: 2, title: "Beauty Cosmetics", category: "Branding", bgColor: "bg-mint-bg", size: "small" },
  { id: 3, title: "Yellow Lollipop", category: "Design", bgColor: "bg-yellow-bg", size: "small" },
  { id: 4, title: "Vintage Car", category: "Creative", bgColor: "bg-yellow-bg", size: "small" },
  { id: 5, title: "Craft Tools", category: "Design", bgColor: "bg-cream", size: "small" },
  { id: 6, title: "Book Design", category: "Branding", bgColor: "bg-lavender-bg", size: "large" },
];

export default function LatestWorks() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 text-dark"
          >
            Latest Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Explore our recent projects where creativity meets functionality. We deliver excellence in every pixel.
          </motion.p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, idx) => (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                activeCategory === cat 
                ? "bg-golden text-dark shadow-xl shadow-golden/20 scale-105" 
                : "bg-gray-50 text-gray-400 hover:bg-gray-100"
              }`}
            >
              {cat.toUpperCase()}
            </motion.button>
          ))}
        </div>

        {/* Improved Masonry-ish Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`relative group rounded-3xl overflow-hidden aspect-square ${item.bgColor}`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center transition-transform duration-500 group-hover:scale-110">
                  <div className="w-20 h-20 bg-white/30 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <ImageIcon className="text-white/60" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark/80 mb-2">{item.title}</h3>
                  <span className="text-sm font-medium text-dark/40 tracking-widest uppercase">{item.category}</span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-8">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 bg-golden rounded-full flex items-center justify-center mb-4 cursor-pointer"
                  >
                    <ArrowRight className="text-dark" size={24} />
                  </motion.div>
                  <p className="text-white font-bold text-xl">{item.title}</p>
                  <p className="text-golden/80 text-sm font-medium mt-1">{item.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
