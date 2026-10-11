"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SunMedium, Wind, Layers } from "lucide-react";

export default function Philosophy() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: "01",
      title: "Contextual Form and Structure",
      subtitle: "Site-driven architecture",
      icon: Layers,
      description:
        "Every project begins with a careful understanding of site context, orientation, and climate. Rather than imposing arbitrary shapes, the design evolves naturally from the topography, creating spaces that feel grounded and purposeful.",
      specs: [
        { label: "Design Principle", value: "Contextual Harmony" },
        { label: "Circulation", value: "Clear Spatial Hierarchy" },
        { label: "Integration", value: "Indoor-Outdoor Continuity" },
      ],
      quote: "Architecture should not only respond to practical needs but also shape meaningful human experiences.",
    },
    {
      id: "02",
      title: "Light, Ventilation and Shadow",
      subtitle: "Passive environmental design",
      icon: SunMedium,
      description:
        "Natural daylighting and cross-ventilation are central to creating comfortable, energy-efficient spaces. Thoughtfully placed jaali screens, overhangs, and courtyards temper the microclimate while creating rich spatial textures.",
      specs: [
        { label: "Solar Control", value: "Perforated Shading & Overhangs" },
        { label: "Daylighting", value: "Diffuse Natural Illumination" },
        { label: "Thermal Comfort", value: "Passive Ventilation Courtyards" },
      ],
      quote: "Thoughtful architectural detailing elevates everyday spaces into uplifting living environments.",
    },
    {
      id: "03",
      title: "Materiality and Craft",
      subtitle: "Honesty in materials",
      icon: Wind,
      description:
        "From raw board-formed concrete and terracotta jaalis to warm timber accents, selecting materials with integrity creates timeless sensory experiences that age gracefully over time.",
      specs: [
        { label: "Material Palette", value: "Brick, Concrete, Timber, Glass" },
        { label: "Detailing", value: "Precise Execution Drawings" },
        { label: "Sustainability", value: "Locally Sourced Resources" },
      ],
      quote: "Precision in working drawings ensures the conceptual vision is realized with integrity on site.",
    },
  ];

  return (
    <section id="philosophy" className="relative py-24 md:py-32 bg-[#F5F2EB]/40 border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-medium tracking-widest text-[#1A1A1A]/60 uppercase mb-3 font-sans">
            Philosophy
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-normal text-[#1A1A1A] font-serif leading-tight">
            Design Approach and Spatial Philosophy
          </h2>

          <p className="text-base sm:text-lg text-[#1A1A1A]/70 font-sans mt-4 leading-relaxed">
            Approaching every project as an opportunity to synthesize functional requirements, human comfort, and environmental context.
          </p>
        </div>

        {/* Clean Tabs & Spec Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Tab Navigation List */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                    isActive
                      ? "bg-white border-[#1A1A1A] shadow-sm"
                      : "bg-white/60 border-[#1A1A1A]/10 hover:bg-white hover:border-[#1A1A1A]/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold tracking-wider text-[#1A1A1A]/50 font-sans">
                      Pillar {pillar.id}
                    </span>
                    <Icon
                      className={`w-4 h-4 transition-colors ${
                        isActive ? "text-[#1A1A1A]" : "text-[#1A1A1A]/40"
                      }`}
                    />
                  </div>
                  <h3 className="text-lg font-normal text-[#1A1A1A] font-serif">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 font-sans mt-0.5">
                    {pillar.subtitle}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Clean Detail Card */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 sm:p-10 border border-[#1A1A1A]/10 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col justify-between flex-grow"
              >
                <div>
                  <div className="text-xs font-medium text-[#1A1A1A]/50 uppercase tracking-wider mb-2 font-sans">
                    {pillars[activeTab].subtitle}
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-normal font-serif text-[#1A1A1A] mb-4">
                    {pillars[activeTab].title}
                  </h4>
                  <p className="text-base text-[#1A1A1A]/80 font-sans leading-relaxed mb-8">
                    {pillars[activeTab].description}
                  </p>

                  {/* Clean Specifications Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-[#FAF8F5] border border-[#1A1A1A]/5 mb-8">
                    {pillars[activeTab].specs.map((item, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-[11px] text-[#1A1A1A]/50 uppercase font-sans">
                          {item.label}
                        </span>
                        <span className="text-xs sm:text-sm font-medium text-[#1A1A1A] mt-1 font-sans">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Quote without Italics */}
                <div className="pt-6 border-t border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/70 font-sans">
                  &ldquo;{pillars[activeTab].quote}&rdquo;
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
