"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, MapPin, Calendar, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { Project } from "./SelectedWorks";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onInquire,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#1A1A1A]/70 backdrop-blur-sm"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#F9F9F7] rounded-2xl overflow-hidden border border-[#1A1A1A]/10 shadow-xl z-10 max-h-[90vh] flex flex-col"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 bg-white">
            <div className="text-xs font-medium tracking-wider text-[#1A1A1A]/70 uppercase font-sans">
              Project Overview: {project.title}
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-[#1A1A1A]/10 text-[#1A1A1A] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Visual */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden bg-stone-100 border border-[#1A1A1A]/10">
              <Image
                src={project.image}
                alt={project.title}
                fill
                priority
                className="object-cover object-center"
              />
            </div>

            {/* Project Details */}
            <div>
              <div className="flex flex-wrap items-center gap-4 text-xs text-[#1A1A1A]/60 mb-2 font-sans">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {project.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.year}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" />
                  {project.category}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-normal font-serif text-[#1A1A1A] mb-4">
                {project.title}
              </h2>

              <p className="text-sm sm:text-base text-[#1A1A1A]/80 font-sans leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Architectural Specifications */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-semibold tracking-wider text-[#1A1A1A]/70 uppercase font-sans">
                  Design Highlights and Technical Features:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.architecturalFeatures.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#1A1A1A]/8 text-xs text-[#1A1A1A]/80 font-sans"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#1A1A1A]/50 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Materiality Palette */}
              <div className="pt-4 border-t border-[#1A1A1A]/10">
                <h4 className="text-xs font-semibold tracking-wider text-[#1A1A1A]/70 uppercase mb-3 font-sans">
                  Materials:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.materials.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-full bg-white border border-[#1A1A1A]/10 text-xs font-medium text-[#1A1A1A] font-sans"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 border-t border-[#1A1A1A]/10 bg-white flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-full border border-[#1A1A1A]/20 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white text-xs font-medium uppercase tracking-wider hover:bg-black transition-colors"
            >
              <span>Discuss Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
