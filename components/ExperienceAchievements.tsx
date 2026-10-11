"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar, MapPin } from "lucide-react";

export default function ExperienceAchievements() {
  const experiences = [
    {
      role: "Architectural Intern",
      organization: "Kalparachna Associate, Pune (Chinchwad)",
      period: "July – November 2024",
      location: "Pune, Maharashtra",
      type: "Professional Practice",
      highlights: [
        "Prepared architectural working drawings, wall sections, and construction details.",
        "Coordinated MEP drawings including electrical circuits, plumbing layouts, and HVAC routing.",
        "Developed 3D architectural models, digital massing, and landscape design schemes.",
        "Produced high-resolution presentation boards and post-processed Photoshop renders.",
      ],
    },
    {
      role: "Freelance Architecture Practice",
      organization: "Independent Client Projects",
      period: "2023 – Present",
      location: "Remote / Hybrid",
      type: "Design & Drafting",
      highlights: [
        "Delivered conceptual architectural layouts, space planning, and functional zoning for residential clients.",
        "Created 3D exterior and interior visualizations and walkthrough perspectives using Lumion and Enscape.",
        "Prepared municipal submission-ready 2D CAD drawings and facade development options.",
      ],
    },
  ];

  const achievements = [
    {
      title: "2nd Prize in 'Get Up and Dress Up'",
      event: "INT-EXPO 2023, Ludhiana (4th Feb 2023)",
      badge: "Competition Winner",
      desc: "Recognized for creative spatial presentation, material interpretation, and design innovation.",
    },
    {
      title: "IGBC Green Design Competition 2022",
      event: "Indian Green Building Council (Theme: 'Space of Learning')",
      badge: "National Participant",
      desc: "Developed a climate-responsive educational campus focusing on passive shading and daylighting.",
    },
    {
      title: "66th ZNC (Zonal NASA Convention)",
      event: "Poornima University, Jaipur (22nd – 24th, 2023)",
      badge: "NASA Delegate",
      desc: "Participated in hands-on architectural workshops, design juries, and academic forums.",
    },
    {
      title: "3rd Prize in Soap Carving",
      event: "Annual Fine Arts & Craft Competition",
      badge: "Craft Winner",
      desc: "Demonstrated precision micro-sculpting, subtractive volumetric technique, and fine spatial control.",
    },
  ];

  const workshops = [
    { name: "Wood Carving", desc: "Tactile joinery and chisel craft" },
    { name: "Clay Modelling", desc: "Plastic massing and form studies" },
    { name: "Soap Carving", desc: "Subtractive spatial dexterity" },
    { name: "Painting and Sketching", desc: "Hand perspectives and charcoal studies" },
  ];

  return (
    <section id="experience" className="relative py-24 md:py-32 bg-[#F9F9F7] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-medium tracking-widest text-[#1A1A1A]/60 uppercase mb-3 font-sans">
            Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-normal text-[#1A1A1A] font-serif leading-tight">
            Experience and Achievements
          </h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work Experience */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-medium tracking-wider text-[#1A1A1A]/60 pb-3 border-b border-[#1A1A1A]/10 uppercase font-sans">
              Professional Practice
            </div>

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-[#1A1A1A] bg-[#FAF8F5] px-2.5 py-1 rounded font-sans">
                    {exp.type}
                  </span>
                  <span className="text-xs text-[#1A1A1A]/50 flex items-center gap-1 font-sans">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                </div>

                <h3 className="text-2xl font-normal text-[#1A1A1A] font-serif mt-2 mb-1">
                  {exp.role}
                </h3>
                <div className="text-sm text-[#1A1A1A]/70 mb-4 flex items-center gap-1.5 font-sans">
                  <MapPin className="w-3.5 h-3.5 text-[#1A1A1A]/40" />
                  <span>{exp.organization}</span>
                </div>

                <div className="space-y-2 pt-4 border-t border-[#1A1A1A]/5">
                  {exp.highlights.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-[#1A1A1A]/75 font-sans leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1A1A1A]/40 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Achievements & Workshops */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-medium tracking-wider text-[#1A1A1A]/60 pb-3 border-b border-[#1A1A1A]/10 uppercase font-sans">
              Awards and Honors
            </div>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 rounded-2xl bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A]/30 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-base font-normal text-[#1A1A1A] font-serif">
                      {ach.title}
                    </h4>
                    <span className="text-[11px] px-2 py-0.5 rounded bg-[#FAF8F5] text-[#1A1A1A]/60 font-sans">
                      {ach.badge}
                    </span>
                  </div>
                  <div className="text-xs text-[#1A1A1A]/70 font-sans">
                    {ach.event}
                  </div>
                  <p className="text-xs text-[#1A1A1A]/60 font-sans mt-1.5 leading-relaxed">
                    {ach.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Workshops Grid */}
            <div className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/10 mt-6">
              <div className="text-xs uppercase tracking-wider text-[#1A1A1A]/60 mb-4 font-medium font-sans">
                Hands-on Workshops
              </div>
              <div className="grid grid-cols-2 gap-3">
                {workshops.map((ws, i) => (
                  <div key={i} className="p-3 rounded-lg bg-[#FAF8F5]">
                    <div className="text-xs font-medium text-[#1A1A1A] font-sans">{ws.name}</div>
                    <div className="text-[11px] text-[#1A1A1A]/60 font-sans mt-0.5">{ws.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
