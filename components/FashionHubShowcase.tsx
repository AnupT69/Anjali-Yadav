"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Maximize2, X, ChevronLeft, ChevronRight, Layers, MapPin, Calendar } from "lucide-react";

export interface ThesisSheet {
  id: number;
  src: string;
  title: string;
  category: "Masterplan & Aerial" | "Facades & Gateways" | "Amphitheater & Pavilions" | "Plazas & Water Courtyards";
  description: string;
}

export const FASHION_HUB_SHEETS: ThesisSheet[] = [
  {
    id: 1,
    src: "/thesis/1.jpeg",
    title: "Main Entrance & Arrival Boulevard",
    category: "Facades & Gateways",
    description: "Front arrival boulevard showcasing the barrel-vaulted roof canopy, curtain wall glazing, and landscaped palm driveway.",
  },
  {
    id: 2,
    src: "/thesis/2.jpeg",
    title: "Fashion Sculpture Avenue & Biomorphic Screens",
    category: "Plazas & Water Courtyards",
    description: "Pedestrian promenade flanked by intricate organic jaali screens, human-scale fashion sculptures, and flowering planters.",
  },
  {
    id: 3,
    src: "/thesis/3.jpeg",
    title: "Central Circular Amphitheater",
    category: "Amphitheater & Pavilions",
    description: "Geometric umbrella canopy framing a tiered amphitheater with decorative radial floor paving for public exhibitions and juries.",
  },
  {
    id: 4,
    src: "/thesis/4.jpeg",
    title: "Masterplan Axial Elevation",
    category: "Masterplan & Aerial",
    description: "Full contextual view contrasting the biomorphic screen block with the main exhibition convention hall across open lawns.",
  },
  {
    id: 5,
    src: "/thesis/5.jpeg",
    title: "Trellised Courtyard & Fountain Plaza",
    category: "Plazas & Water Courtyards",
    description: "Shaded pergolas with climbing vegetation overlooking central bubbling water features and outdoor bistro seating.",
  },
  {
    id: 6,
    src: "/thesis/6.jpeg",
    title: "Active Plaza with Kinetic Water Features",
    category: "Plazas & Water Courtyards",
    description: "Social gathering square with active water fountains, shaded umbrellas, and perimeter food kiosks.",
  },
  {
    id: 7,
    src: "/thesis/7.jpeg",
    title: "Amphitheater Assembly Perspective",
    category: "Amphitheater & Pavilions",
    description: "Radial seating steps accommodating student assemblies and open-air runway showcases beneath the structural canopy.",
  },
  {
    id: 8,
    src: "/thesis/8.jpeg",
    title: "Pergola Food Street & Water Canal",
    category: "Plazas & Water Courtyards",
    description: "Overhead view of the shaded dining promenade with climbing vines, festoon lighting, and reflecting water channels.",
  },
  {
    id: 9,
    src: "/thesis/9.jpeg",
    title: "Gateway Arrival & Fountain Pavilion",
    category: "Facades & Gateways",
    description: "Terracotta urn fountain and woven wicker pavilion marking the pedestrian arrival threshold to the fashion complex.",
  },
  {
    id: 10,
    src: "/thesis/10.jpeg",
    title: "Fountain Promenade from Terrace",
    category: "Plazas & Water Courtyards",
    description: "Stepped viewpoint overlooking the active fountain basin, timber pergolas, and pedestrian thoroughfare.",
  },
  {
    id: 11,
    src: "/thesis/11.jpeg",
    title: "Sculptural Entry Portal to Amphitheater",
    category: "Amphitheater & Pavilions",
    description: "Artistic terracotta entry gates framing the central pavilion and student gathering steps.",
  },
  {
    id: 12,
    src: "/thesis/12.jpeg",
    title: "Aerial Perspective of Complex",
    category: "Masterplan & Aerial",
    description: "Panoramic overview showing the graphic fashion silhouette facades, circular central pavilion, and landscaped grounds.",
  },
];

interface FashionHubShowcaseProps {
  onOpenImage?: (index: number) => void;
}

export default function FashionHubShowcase({ onOpenImage }: FashionHubShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const categories = [
    "All",
    "Masterplan & Aerial",
    "Facades & Gateways",
    "Amphitheater & Pavilions",
    "Plazas & Water Courtyards",
  ];

  const filteredSheets =
    activeCategory === "All"
      ? FASHION_HUB_SHEETS
      : FASHION_HUB_SHEETS.filter((s) => s.category === activeCategory);

  const handleOpenModal = (index: number) => {
    setActiveModalIndex(index);
    if (onOpenImage) onOpenImage(index);
  };

  const handleNext = () => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex + 1) % FASHION_HUB_SHEETS.length);
  };

  const handlePrev = () => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((activeModalIndex - 1 + FASHION_HUB_SHEETS.length) % FASHION_HUB_SHEETS.length);
  };

  return (
    <section id="works" className="relative py-24 md:py-32 bg-[#F9F9F7] bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Project Header Overview */}
        <div className="mb-14">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full border border-[#1A1A1A]/10 bg-white text-xs font-medium tracking-wider text-[#1A1A1A]/70 uppercase mb-4 font-sans">
            Architectural Thesis Portfolio
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
                Fashion Hub
              </h2>
              <p className="text-base sm:text-lg text-[#1A1A1A]/70 font-sans mt-3 max-w-2xl leading-relaxed">
                A comprehensive architectural thesis exploring the dialogue between fashion design, biomorphic materiality, and human circulation. Incorporating shaded public courtyards, radial amphitheater assembly, and exhibition galleries.
              </p>
            </div>

            {/* Quick Metadata Box */}
            <div className="flex flex-wrap items-center gap-4 p-4 rounded-xl bg-white border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/70 font-sans">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#1A1A1A]/50" />
                <span>Final Year B.Arch (2025–26)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#1A1A1A]/50" />
                <span>12 Render Sheets</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#1A1A1A]/50" />
                <span>GNDEC School of Architecture</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors ${
                activeCategory === cat
                  ? "bg-[#1A1A1A] text-[#F9F9F7]"
                  : "bg-white text-[#1A1A1A]/70 border border-[#1A1A1A]/10 hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12-Image Masonry / Grid with Animations */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSheets.map((sheet, index) => (
              <motion.div
                key={sheet.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 6) * 0.08,
                  ease: "easeOut",
                }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all duration-300 shadow-sm"
              >
                {/* Image Frame with Smooth Hover Animation */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => handleOpenModal(FASHION_HUB_SHEETS.findIndex((s) => s.id === sheet.id))}
                >
                  <Image
                    src={sheet.src}
                    alt={sheet.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Hover Quick Action */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs px-3.5 py-2 rounded-lg bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="truncate pr-2">{sheet.title}</span>
                    <Maximize2 className="w-3.5 h-3.5 shrink-0" />
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center justify-between text-xs text-[#1A1A1A]/50 font-sans mb-1.5">
                      <span>{sheet.category}</span>
                      <span>Sheet {sheet.id < 10 ? `0${sheet.id}` : sheet.id}</span>
                    </div>

                    <h3
                      onClick={() => handleOpenModal(FASHION_HUB_SHEETS.findIndex((s) => s.id === sheet.id))}
                      className="text-lg font-normal font-serif text-[#1A1A1A] hover:text-stone-700 transition-colors cursor-pointer mb-2"
                    >
                      {sheet.title}
                    </h3>

                    <p className="text-xs text-[#1A1A1A]/70 font-sans leading-relaxed line-clamp-2">
                      {sheet.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#1A1A1A]/5 flex items-center justify-between">
                    <button
                      onClick={() => handleOpenModal(FASHION_HUB_SHEETS.findIndex((s) => s.id === sheet.id))}
                      className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] hover:underline"
                    >
                      <span>Expand Render</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Interactive Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeModalIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalIndex(null)}
              className="fixed inset-0 bg-[#1A1A1A]/85 backdrop-blur-md"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl bg-[#F9F9F7] rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 bg-white">
                <div className="text-xs font-medium tracking-wider text-[#1A1A1A]/70 uppercase font-sans">
                  Fashion Hub · Sheet {activeModalIndex + 1} of {FASHION_HUB_SHEETS.length}
                </div>
                <button
                  onClick={() => setActiveModalIndex(null)}
                  className="p-1.5 rounded-full hover:bg-[#1A1A1A]/10 text-[#1A1A1A] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Frame */}
              <div className="relative flex-grow min-h-[50vh] sm:min-h-[60vh] bg-stone-900 overflow-hidden">
                <Image
                  src={FASHION_HUB_SHEETS[activeModalIndex].src}
                  alt={FASHION_HUB_SHEETS[activeModalIndex].title}
                  fill
                  priority
                  className="object-contain"
                />

                {/* Left/Right Navigation Arrows */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 text-[#1A1A1A] hover:bg-white shadow-lg transition-all"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/80 text-[#1A1A1A] hover:bg-white shadow-lg transition-all"
                  aria-label="Next"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Caption Footer */}
              <div className="p-6 bg-white border-t border-[#1A1A1A]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-normal font-serif text-[#1A1A1A]">
                    {FASHION_HUB_SHEETS[activeModalIndex].title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/70 font-sans mt-1">
                    {FASHION_HUB_SHEETS[activeModalIndex].description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs font-mono text-[#1A1A1A]/50">
                    {activeModalIndex + 1} / {FASHION_HUB_SHEETS.length}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
