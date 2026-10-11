"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Phone, Mail, Send, MessageCircle } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    opportunityType: "Full-Time Junior Architect / Trainee",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

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
          className="relative w-full max-w-xl bg-[#F9F9F7] rounded-2xl overflow-hidden border border-[#1A1A1A]/10 shadow-xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]/10 bg-white">
            <div className="text-xs font-medium tracking-wider text-[#1A1A1A]/70 uppercase font-sans">
              Contact Anjali Yadav
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-[#1A1A1A]/10 text-[#1A1A1A] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-normal font-serif text-[#1A1A1A] mb-2">
                  Message Sent
                </h3>
                <p className="text-sm text-[#1A1A1A]/70 max-w-md mb-8 font-sans">
                  Thank you, {formData.name || "friend"}. Anjali will review your inquiry and reply via email or phone promptly.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    href="https://wa.me/918604728823"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-medium uppercase tracking-wider"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full bg-[#1A1A1A] text-white text-xs font-medium uppercase tracking-wider"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-2xl font-normal font-serif text-[#1A1A1A] mb-1">
                    Get in Touch
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 font-sans">
                    Available for professional studio opportunities and freelance architectural projects.
                  </p>
                </div>

                {/* Direct quick contact */}
                <div className="flex flex-wrap items-center gap-2 py-2 border-y border-[#1A1A1A]/10 font-sans">
                  <a
                    href="tel:+918604728823"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#1A1A1A]/10 text-xs text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#1A1A1A]/60" />
                    <span>+91 8604728823</span>
                  </a>
                  <a
                    href="mailto:anjaliyadav42025@gmail.com"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#1A1A1A]/10 text-xs text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
                  >
                    <Mail className="w-3 h-3 text-[#1A1A1A]/60" />
                    <span>anjaliyadav42025@gmail.com</span>
                  </a>
                  <a
                    href="https://wa.me/918604728823"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-emerald-800"
                  >
                    <MessageCircle className="w-3 h-3" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1 font-sans">
                      Your Name / Office
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Design Studio"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-[#1A1A1A]/15 bg-white text-sm focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1 font-sans">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="office@studio.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-[#1A1A1A]/15 bg-white text-sm focus:outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1 font-sans">
                    Opportunity / Inquiry
                  </label>
                  <select
                    value={formData.opportunityType}
                    onChange={(e) => setFormData({ ...formData, opportunityType: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#1A1A1A]/15 bg-white text-sm focus:outline-none focus:border-[#1A1A1A]"
                  >
                    <option>Full-Time Junior Architect / Architectural Designer</option>
                    <option>Architectural Internship / Trainee</option>
                    <option>Freelance 2D Working Drawings & MEP Drafting</option>
                    <option>Freelance 3D Modeling & Visualization</option>
                    <option>Other Collaboration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1 font-sans">
                    Message
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details about the role, project, or location..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-[#1A1A1A]/15 bg-white text-sm focus:outline-none focus:border-[#1A1A1A] resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2 rounded-full border border-[#1A1A1A]/20 text-xs font-medium uppercase tracking-wider text-[#1A1A1A] hover:bg-[#1A1A1A]/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#1A1A1A] text-white text-xs font-medium uppercase tracking-wider hover:bg-black transition-colors"
                  >
                    <span>Send</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
