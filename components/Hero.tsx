"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Award, Compass, Layers } from "lucide-react";

interface HeroProps {
  onExploreClick: () => void;
  onOpenGallery?: (index?: number) => void;
  onOpenContact: () => void;
}

export default function Hero({ onExploreClick, onOpenContact }: HeroProps) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:py-0 md:min-h-screen flex items-center justify-center bg-[#F9F9F7] bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Headline & Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#1A1A1A]/10 bg-white/80 self-start mb-6"
            >
              <span className="text-xs tracking-wider text-[#1A1A1A]/70 uppercase font-sans">
                Anjali Yadav · B.Arch (2021–2026)
              </span>
            </motion.div>

            {/* Clean Upright Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl xl:text-7xl font-normal text-[#1A1A1A] leading-[1.1] tracking-tight mb-8 font-serif"
            >
              Crafting Spaces That Shape Experiences
            </motion.h1>

            {/* Clear Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-base sm:text-lg text-[#1A1A1A]/70 font-sans leading-relaxed max-w-xl mb-10 pl-4 border-l-2 border-[#1A1A1A]/20"
            >
              Driven by a passion for architecture and design, I approach every project as an opportunity to create spaces that are thoughtful, functional, and visually compelling. Presenting the flagship architectural thesis: <strong className="font-semibold text-[#1A1A1A]">Fashion Hub</strong>.
            </motion.p>

            {/* Clean CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-14"
            >
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A1A] text-[#F9F9F7] text-xs font-medium tracking-wider uppercase hover:bg-black transition-colors"
              >
                <span>Explore Fashion Hub</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#1A1A1A]/20 bg-white text-xs tracking-wider uppercase font-medium text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            {/* Clean Bottom Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#1A1A1A]/10"
            >
              <div>
                <div className="text-xl sm:text-2xl font-normal text-[#1A1A1A] font-serif">
                  2021–2026
                </div>
                <div className="text-[11px] text-[#1A1A1A]/60 uppercase mt-0.5 font-sans">
                  B.Arch Degree
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-normal text-[#1A1A1A] font-serif">
                  Kalparachna
                </div>
                <div className="text-[11px] text-[#1A1A1A]/60 uppercase mt-0.5 font-sans">
                  Pune Internship
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-normal text-[#1A1A1A] font-serif">
                  12 Sheets
                </div>
                <div className="text-[11px] text-[#1A1A1A]/60 uppercase mt-0.5 font-sans">
                  Fashion Hub Renders
                </div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-normal text-[#1A1A1A] font-serif">
                  Available
                </div>
                <div className="text-[11px] text-[#1A1A1A]/60 uppercase mt-0.5 font-sans">
                  Full-Time / Freelance
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Anjali Yadav with Her Thesis Physical Model & Drawings */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl p-3 bg-white border border-[#1A1A1A]/10 shadow-sm"
            >
              {/* Header Label */}
              <div className="flex items-center justify-between px-2 py-1.5 text-xs text-[#1A1A1A]/60 border-b border-[#1A1A1A]/5 mb-3 font-sans">
                <span className="font-medium text-[#1A1A1A]">Architect & Thesis Defense</span>
                <span>GNDEC School of Architecture</span>
              </div>

              {/* Anjali Photo Container */}
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-stone-100 group">
                <Image
                  src="/anjali.jpeg"
                  alt="Anjali Yadav with Architectural Thesis Model and Presentation Sheets"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-102"
                />

                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Caption Pill */}
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs px-4 py-2.5 rounded-lg bg-black/50 backdrop-blur-sm">
                  <div className="font-medium text-sm">Anjali Yadav</div>
                  <div className="text-[11px] text-white/80 mt-0.5">
                    Presenting the Fashion Hub scale model and drawings
                  </div>
                </div>
              </div>

              {/* Floating Thesis Preview Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onClick={onExploreClick}
                className="mt-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#1A1A1A]/5 flex items-center justify-between gap-3 cursor-pointer hover:bg-[#F5F2EB] transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg overflow-hidden relative shrink-0">
                    <Image
                      src="/thesis/1.jpeg"
                      alt="Fashion Hub Thumbnail"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#1A1A1A]">Fashion Hub Thesis</div>
                    <div className="text-[11px] text-[#1A1A1A]/60 font-sans">12 Architectural Render Sheets</div>
                  </div>
                </div>

                <span className="text-xs font-medium text-[#1A1A1A] flex items-center gap-1 uppercase tracking-wider">
                  View <ArrowDown className="w-3.5 h-3.5" />
                </span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
