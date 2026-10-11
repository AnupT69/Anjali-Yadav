"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area: string;
  image: string;
  description: string;
  architecturalFeatures: string[];
  materials: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "fashion-hub-thesis",
    title: "Fashion Hub (Architectural Thesis)",
    category: "Academic Thesis",
    location: "Studio Thesis Project",
    year: "Final Year (2025–26)",
    area: "14,500 sq m",
    image: "/thesis/fashion-hub-thesis.jpg",
    description:
      "A flagship architectural thesis exploring the symbiosis of fashion and spatial form. Features an undulating tensile roof canopy, a sunlit fashion runway atrium, and climate-controlled textile galleries.",
    architecturalFeatures: [
      "Aerodynamic tensile roof canopy inspired by draped fabric",
      "Central skylit runway atrium with tiered seating",
      "Dynamic solar louvers optimizing diffuse daylight",
      "Clear zoning separating public exhibition halls and private design studios",
    ],
    materials: ["Tensile Membrane", "Glulam Timber", "Low-E Glazing", "Light Cast Concrete"],
  },
  {
    id: "architecture-institute",
    title: "Architecture Institute Campus",
    category: "Institutional Design",
    location: "Academic Studio Project",
    year: "4th Year Design",
    area: "8,200 sq m",
    image: "/thesis/architecture-institute.jpg",
    description:
      "A pedagogical campus designed to foster collaboration. Comprises exposed concrete studio wings, indigenous brick jaali screens for solar control, and an open amphitheater courtyard.",
    architecturalFeatures: [
      "Perforated brick jaali screens mitigating harsh sun and glare",
      "Double-height flexible drafting studios with cross-ventilation",
      "Central collaborative amphitheater courtyard for jury reviews",
      "Integrated bicycle circulation and shaded pedestrian arcades",
    ],
    materials: ["Exposed Concrete", "Terracotta Jaali Brick", "Steel Sections", "Local Stone"],
  },
  {
    id: "central-business-district",
    title: "Central Business District (CBD)",
    category: "Urban Commercial",
    location: "Urban Design Studio",
    year: "3rd Year Design",
    area: "22,000 sq m",
    image: "/thesis/central-business-district.jpg",
    description:
      "A modern sustainable commercial tower and mixed-use public realm. Integrates stepped landscaped sky terraces, a pedestrian water promenade, and high-performance glazed facade.",
    architecturalFeatures: [
      "Stepped landscaped sky gardens acting as thermal buffers",
      "Ground-level pedestrian water boulevard creating microclimate cooling",
      "Curtain wall with integrated horizontal sun shades",
      "Transit-oriented commercial podium with barrier-free circulation",
    ],
    materials: ["Structural Glass Curtain", "Anodized Aluminum", "Composite Decking", "Water Basins"],
  },
  {
    id: "isbt-terminal",
    title: "Inter-State Bus Terminal (ISBT)",
    category: "Infrastructure & Transit",
    location: "Transportation Studio",
    year: "3rd Year Design",
    area: "18,400 sq m",
    image: "/thesis/isbt-terminal.jpg",
    description:
      "A regional transportation terminal prioritizing circulatory clarity and passenger ergonomics. Covered by a sweeping steel space-truss roof that accommodates 40+ bus bays.",
    architecturalFeatures: [
      "Curvilinear steel space-frame canopy providing continuous weather protection",
      "Grade-separated passenger concourse avoiding vehicular conflict",
      "Natural ventilation shafts and skylight illumination",
      "Accessible passenger amenities, ticketing halls, and transit docks",
    ],
    materials: ["Steel Space Truss", "Translucent Polycarbonate", "Polished Terrazzo", "Reinforced Concrete"],
  },
];

interface SelectedWorksProps {
  onSelectProject: (project: Project) => void;
}

export default function SelectedWorks({ onSelectProject }: SelectedWorksProps) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = [
    "All",
    "Academic Thesis",
    "Institutional Design",
    "Urban Commercial",
    "Infrastructure & Transit",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="works" className="relative py-24 md:py-32 bg-[#F9F9F7]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="text-xs font-medium tracking-widest text-[#1A1A1A]/60 uppercase mb-3 font-sans">
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1A1A1A] tracking-tight font-serif">
              Selected Projects
            </h2>
          </div>

          {/* Clean Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors ${
                  activeFilter === cat
                    ? "bg-[#1A1A1A] text-[#F9F9F7]"
                    : "bg-white text-[#1A1A1A]/70 border border-[#1A1A1A]/10 hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all duration-300"
              >
                {/* Clean Image Container */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-stone-100 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
                  />

                  {/* Clean Bottom Hover Reveal */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#1A1A1A]/85 backdrop-blur-sm text-[#F9F9F7] translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between text-xs">
                      <span>View Project Details</span>
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Category & Location */}
                    <div className="flex items-center justify-between text-xs text-[#1A1A1A]/60 font-sans mb-3">
                      <span className="font-medium text-[#1A1A1A]">{project.category}</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
                        <span>{project.location}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-2xl font-normal text-[#1A1A1A] font-serif hover:text-stone-700 transition-colors cursor-pointer mb-3"
                    >
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[#1A1A1A]/70 font-sans leading-relaxed line-clamp-2 mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Materials & Action */}
                  <div className="pt-4 border-t border-[#1A1A1A]/8 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.materials.slice(0, 3).map((mat, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded bg-[#F5F2EB] text-[11px] text-[#1A1A1A]/70 font-sans"
                        >
                          {mat}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] hover:underline"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
