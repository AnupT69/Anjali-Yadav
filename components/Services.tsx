"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass, Shield, Sliders, Box, Sparkles } from "lucide-react";

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  const services = [
    {
      num: "01",
      name: "Bespoke Residential Architecture",
      lead: "High-Altitude & Coastal Estates",
      desc: "Comprehensive architectural design for elite private clients, from preliminary topographic solar mapping to turnkey structural fabrication.",
      deliverables: ["Topographic Form Modeling", "Cantilever Engineering", "Turnkey Construction Oversight"],
    },
    {
      num: "02",
      name: "Cultural & Bioclimatic Pavilions",
      lead: "Civic Sculptures & Public Sanctuaries",
      desc: "Iconic public monuments and cultural centers that blend parametric geometric curvature with net-positive renewable energy harvesting.",
      deliverables: ["Parametric Form Generation", "Smart Glass & Solar Integration", "Acoustic Atmosphere Design"],
    },
    {
      num: "03",
      name: "Interior Architecture & Spatial Scenography",
      lead: "Monolithic Materials & Quiet Luxury",
      desc: "Tailored interior environments featuring custom board-formed concrete partitions, concealed brise-soleil joinery, and poetic natural light shafts.",
      deliverables: ["Bespoke Architectural Millwork", "Integrated Lighting Scenography", "Curated Natural Stone & Timber Selection"],
    },
    {
      num: "04",
      name: "Carbon-Zero Bioclimatic Engineering",
      lead: "Passive Environmental Harmony",
      desc: "Advanced computational fluid dynamics (CFD) modeling to achieve self-cooling structures and geothermal ventilation without mechanical intrusion.",
      deliverables: ["Microclimate Thermal Analysis", "Geothermal Earth-Tube Loops", "LEED Platinum / Passivhaus Standards"],
    },
  ];

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[#F9F9F7] bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#1A1A1A]/15 bg-white/70 text-[11px] font-mono tracking-widest text-[#1A1A1A]/70 uppercase mb-4"
            >
              <Compass className="w-3 h-3 text-[#1A1A1A]" />
              Disciplines & Studio Capabilities
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-5xl font-light text-[#1A1A1A] font-serif tracking-tight"
            >
              Services Tailored to <br />
              <span className="italic font-normal">Visionary Ambitions</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base text-[#1A1A1A]/70 font-sans max-w-md leading-relaxed"
          >
            From the initial charcoal sketch to structural completion, our studio provides turnkey architectural stewardship with uncompromised material rigor.
          </motion.p>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((svc, index) => (
            <motion.div
              key={svc.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group p-8 sm:p-10 rounded-2xl bg-white border border-[#1A1A1A]/10 hover:border-[#1A1A1A] hover:shadow-xl transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#1A1A1A]/40 mb-6">
                  <span className="text-sm font-bold text-[#1A1A1A]">SVC // {svc.num}</span>
                  <span className="tracking-widest uppercase">{svc.lead}</span>
                </div>

                <h3 className="text-2xl font-serif text-[#1A1A1A] group-hover:text-amber-900 transition-colors mb-4">
                  {svc.name}
                </h3>

                <p className="text-sm text-[#1A1A1A]/70 font-sans leading-relaxed mb-6">
                  {svc.desc}
                </p>

                {/* Deliverables list */}
                <div className="space-y-2 mb-8">
                  {svc.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 text-xs text-[#1A1A1A]/80 font-sans"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A]/30 group-hover:bg-[#1A1A1A] transition-colors" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#1A1A1A]/8 flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest text-[#1A1A1A]/50 uppercase">
                  COMPREHENSIVE PROTOCOL
                </span>
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#1A1A1A] group-hover:text-amber-900 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
