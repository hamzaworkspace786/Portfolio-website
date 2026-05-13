"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          <div className="lg:col-span-1">
             <div className="w-16 h-16 rounded-2xl border-4 border-white flex items-center justify-center font-black text-2xl mb-8">H</div>
             <p className="text-white/40 text-lg leading-relaxed">
               Creating digital experiences that matter. Based in London, working globally.
             </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Navigation</h4>
            <div className="flex flex-col gap-4 text-white/60">
              <Link href="#home" className="hover:text-golden transition-colors font-medium">Home</Link>
              <Link href="#portfolio" className="hover:text-golden transition-colors font-medium">Portfolio</Link>
              <Link href="#about" className="hover:text-golden transition-colors font-medium">About</Link>
              <Link href="#testimonials" className="hover:text-golden transition-colors font-medium">Testimonials</Link>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Expertise</h4>
            <div className="flex flex-col gap-4 text-white/60">
              <p className="font-medium">UI/UX Design</p>
              <p className="font-medium">Web Development</p>
              <p className="font-medium">Motion Graphics</p>
              <p className="font-medium">Art Direction</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8">Connect</h4>
            <div className="flex gap-4">
              {[
                { icon: <LinkedinIcon />, href: "#" },
                { icon: <GithubIcon />, href: "#" },
                { icon: <InstagramIcon />, href: "#" },
                { icon: <Globe size={20} />, href: "#" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  whileHover={{ y: -5, backgroundColor: "#ffb400", color: "#111" }}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-white/40 font-medium">© {currentYear} Steve Henriques. All Rights Reserved.</p>
          <div className="flex gap-8 text-white/40 font-medium text-sm">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
