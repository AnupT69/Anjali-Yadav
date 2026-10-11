"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ value, suffix = "", duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const stepTime = Math.abs(Math.floor((duration * 1000) / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, Math.max(stepTime, 20));

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const stats = [
    {
      value: 5,
      suffix: " Years",
      label: "B.Arch Education",
      sublabel: "GNDEC School of Architecture, Ludhiana",
    },
    {
      value: 1,
      suffix: " Firm",
      label: "Internship Completed",
      sublabel: "Kalparachna Associate, Pune (July–Nov 2024)",
    },
    {
      value: 4,
      suffix: " Projects",
      label: "Studio Portfolios",
      sublabel: "Fashion Hub Thesis, Institute, CBD & ISBT",
    },
    {
      value: 6,
      suffix: " Tools",
      label: "Software Proficiencies",
      sublabel: "AutoCAD, SketchUp, Lumion, Enscape, Photoshop",
    },
  ];

  return (
    <section className="relative py-16 bg-[#F5F2EB]/50 border-y border-[#1A1A1A]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0"
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`px-6 py-2 ${
                idx !== stats.length - 1 ? "lg:border-r border-[#1A1A1A]/10" : ""
              }`}
            >
              <div className="text-3xl sm:text-4xl font-normal text-[#1A1A1A] font-serif tracking-tight mb-2">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>

              <div className="text-sm font-medium text-[#1A1A1A] font-sans">
                {item.label}
              </div>

              <div className="text-xs text-[#1A1A1A]/60 font-sans mt-1 leading-relaxed">
                {item.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
