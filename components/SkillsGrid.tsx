"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  PenTool,
  Compass,
  CheckCircle2,
  Box,
  Palette,
  Eye,
  Award,
  Hammer,
} from "lucide-react";

export default function SkillsGrid() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const skillCategories = [
    "All",
    "Software Tools",
    "Design & Planning",
    "Technical & MEP",
    "Craft & Workshops",
  ];

  const allSkills = [
    // Software
    {
      name: "AutoCAD",
      category: "Software Tools",
      level: "Advanced",
      years: "4 Years",
      description: "2D drafting, municipal plans, structural dimensioning and execution drawings.",
      icon: Cpu,
    },
    {
      name: "SketchUp",
      category: "Software Tools",
      level: "Advanced",
      years: "4 Years",
      description: "3D architectural modeling, massing studies, volumetric exploration and spatial layouts.",
      icon: Box,
    },
    {
      name: "Lumion",
      category: "Software Tools",
      level: "Proficient",
      years: "3 Years",
      description: "Photorealistic architectural rendering, environmental lighting and walkthrough animation.",
      icon: Eye,
    },
    {
      name: "Enscape",
      category: "Software Tools",
      level: "Proficient",
      years: "2 Years",
      description: "Real-time rendering, day-night lighting studies and interactive design reviews.",
      icon: Palette,
    },
    {
      name: "Adobe Photoshop",
      category: "Software Tools",
      level: "Advanced",
      years: "4 Years",
      description: "Architectural post-production, presentation sheets, collage visualization and texture editing.",
      icon: PenTool,
    },
    {
      name: "Adobe InDesign",
      category: "Software Tools",
      level: "Proficient",
      years: "3 Years",
      description: "Multi-page portfolio compilation, layout composition and presentation design.",
      icon: Layers,
    },

    // Design & Planning
    {
      name: "Functional Zoning",
      category: "Design & Planning",
      level: "Core Skill",
      years: "Academic & Practice",
      description: "Circulation hierarchy, spatial organization and separation of public and private zones.",
      icon: Compass,
    },
    {
      name: "Space Planning",
      category: "Design & Planning",
      level: "Core Skill",
      years: "Academic & Practice",
      description: "Ergonomics, anthropometry, natural illumination and circulation efficiency.",
      icon: Layers,
    },
    {
      name: "Concept Development",
      category: "Design & Planning",
      level: "Core Skill",
      years: "Academic & Practice",
      description: "Site context analysis, conceptual narratives and volumetric architecture.",
      icon: PenTool,
    },
    {
      name: "Architectural Visualization",
      category: "Design & Planning",
      level: "Core Skill",
      years: "Academic & Practice",
      description: "Section perspectives, exploded axonometrics and spatial diagramming.",
      icon: Eye,
    },

    // Technical & MEP
    {
      name: "Working Drawings",
      category: "Technical & MEP",
      level: "Practical Experience",
      years: "Kalparachna Associate",
      description: "Construction detail sheets, door-window schedules and joinery drawings.",
      icon: CheckCircle2,
    },
    {
      name: "MEP Coordination",
      category: "Technical & MEP",
      level: "Practical Experience",
      years: "Kalparachna Associate",
      description: "Coordination of electrical, plumbing, drainage and mechanical drawings with structure.",
      icon: Cpu,
    },
    {
      name: "Landscape Design",
      category: "Technical & MEP",
      level: "Practical Experience",
      years: "Kalparachna & Freelance",
      description: "Outdoor spatial planning, hardscaping, softscaping and green buffer zones.",
      icon: Box,
    },

    // Craft & Workshops
    {
      name: "Wood Carving",
      category: "Craft & Workshops",
      level: "Hands-on",
      years: "Workshop",
      description: "Tactile material handling, chisel craft and grain exploration.",
      icon: Hammer,
    },
    {
      name: "Clay Modelling",
      category: "Craft & Workshops",
      level: "Hands-on",
      years: "Workshop",
      description: "Physical massing studies, plasticity and tactile volumetric development.",
      icon: Box,
    },
    {
      name: "Soap Carving",
      category: "Craft & Workshops",
      level: "3rd Prize Winner",
      years: "Competition",
      description: "Subtractive sculpting demonstrating micro-scale spatial precision.",
      icon: Award,
    },
  ];

  const filteredSkills =
    activeTab === "All"
      ? allSkills
      : allSkills.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#F5F2EB]/40 border-b border-[#1A1A1A]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <div className="text-xs font-medium tracking-widest text-[#1A1A1A]/60 uppercase mb-3 font-sans">
              Proficiencies
            </div>
            <h2 className="text-3xl sm:text-5xl font-normal text-[#1A1A1A] font-serif tracking-tight">
              Skills and Capabilities
            </h2>
          </div>

          <div className="p-4 rounded-xl bg-white border border-[#1A1A1A]/10 max-w-sm">
            <div className="text-xs font-semibold text-[#1A1A1A]">
              Kalparachna Associate, Pune
            </div>
            <div className="text-xs text-[#1A1A1A]/60 mt-1 font-sans">
              Practical internship training in working drawings, MEP layouts, and 3D visualization.
            </div>
          </div>
        </div>

        {/* Clean Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-colors ${
                activeTab === cat
                  ? "bg-[#1A1A1A] text-[#F9F9F7]"
                  : "bg-white text-[#1A1A1A]/70 border border-[#1A1A1A]/10 hover:border-[#1A1A1A] hover:text-[#1A1A1A]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Clean Grid Animation (Left to Right Staggered Reveal) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.45,
                    delay: (index % 6) * 0.06,
                    ease: "easeOut",
                  }}
                  className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between text-xs text-[#1A1A1A]/50 mb-3 font-sans">
                      <span className="text-[11px] font-medium text-[#1A1A1A] bg-[#FAF8F5] px-2.5 py-0.5 rounded">
                        {skill.level}
                      </span>
                      <span>{skill.years}</span>
                    </div>

                    {/* Skill Title & Icon */}
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] flex items-center justify-center text-[#1A1A1A]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-normal text-[#1A1A1A] font-serif">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#1A1A1A]/70 font-sans leading-relaxed mt-2">
                      {skill.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#1A1A1A]/5 text-[11px] text-[#1A1A1A]/40 font-sans">
                    {skill.category}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
