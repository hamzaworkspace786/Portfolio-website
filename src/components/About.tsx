"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, GraduationCap, Briefcase, Download } from "lucide-react";
import { PERSONAL } from "@/lib/data";

const facts = [
  { icon: MapPin, label: "Location", value: "Okara, Punjab, Pakistan" },
  {
    icon: GraduationCap,
    label: "Education",
    value: "BSIT — University of Okara",
  },
  { icon: Briefcase, label: "Experience", value: "10–12 months (active)" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
  },
});

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#0A0A0A]"
    >
      {/* ── Yellow diagonal top accent ── */}
      <div
        className="absolute top-0 left-0 w-full h-[140px] bg-[#F5C518] -z-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)" }}
        aria-hidden
      />

      <div className="container relative z-10 section-py pt-[120px]">
        {/* ── Section label ── */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="mb-16"
        >
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Who I<br />
            <span className="text-[#F5C518]">Am.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left — photo placeholder ── */}
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="relative"
          >
            {/* Photo container */}
            <div className="relative">
              {/* Decorative yellow border */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#F5C518] z-0" />
              <div className="relative z-10 bg-[#161616] aspect-[4/5] overflow-hidden">
                {/* 
                  Replace the div below with:
                  <Image src="/your-photo.jpg" alt="Your Name" fill className="object-cover" />
                */}
                <Image
                  src="/hamza.jpg"
                  alt="Your Name"
                  fill
                  className="object-cover"
                />
              </div>

              {/* ── Experience badge ── */}
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{
                  delay: 0.5,
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1] as const,
                }}
                className="absolute -bottom-6 -right-6 bg-[#F5C518] text-[#0A0A0A] p-4 z-20"
              >
                <p className="font-display text-5xl leading-none">10+</p>
                <p className="font-mono text-[10px] uppercase tracking-wider mt-1">
                  months
                  <br />
                  experience
                </p>
              </motion.div>
            </div>
          </motion.div>
          {/* ── Right — text content ── */}
          <motion.div
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-[#A0A0A0] text-lg leading-relaxed mb-5">
                I'm a full-stack web developer from Okara, Pakistan,
                specializing in{" "}
                <span className="text-[#F5C518] font-semibold">
                  React & Next.js
                </span>
                . I love building fast, modern web applications that solve real
                problems — from sleek landing pages to complex real-time SaaS
                products.
              </p>
              <p className="text-[#A0A0A0] text-lg leading-relaxed">
                My flagship project,{" "}
                <span className="text-[#F5F5F0] font-semibold">Nexus</span>, is
                a real-time collaborative whiteboard SaaS (think Miro/FigJam)
                built with WebRTC voice chat, Liveblocks real-time sync, and
                full authentication — developed as my Final Year Project at{" "}
                <span className="text-[#F5F5F0]">University of Okara</span>.
              </p>
            </div>

            {/* ── Facts grid ── */}
            <div className="flex flex-col gap-4">
              {facts.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 border-b border-[#1E1E1E] pb-4"
                >
                  <div className="w-9 h-9 bg-[#F5C518]/10 border border-[#F5C518]/20 flex items-center justify-center flex-shrink-0">
                    <Icon size={16} className="text-[#F5C518]" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#666] mb-0.5">
                      {label}
                    </p>
                    <p className="text-[#F5F5F0] text-sm font-medium">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* ── CTAs ── */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="btn-primary">
                <span>Work With Me</span>
              </a>
              <a
                href="/cv/resume.pdf"
                download="Hamza_Akram_Resume.pdf"
                className="btn-outline flex items-center gap-2"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
