"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Projects", href: "#works" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Philosophy", href: "#philosophy" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F9F9F7]/90 backdrop-blur-md border-b border-[#1A1A1A]/5 py-4 shadow-sm"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Clean Brand Name */}
          <a
            href="#"
            className="flex flex-col text-[#1A1A1A] tracking-wider focus:outline-none"
          >
            <span className="text-sm font-semibold tracking-[0.2em] uppercase font-sans">
              Anjali Yadav
            </span>
            <span className="text-[10px] tracking-[0.15em] text-[#1A1A1A]/50 uppercase font-sans">
              Architecture Portfolio
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-widest uppercase text-[#1A1A1A]/70 hover:text-[#1A1A1A] font-medium transition-colors py-1"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenContact}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase text-[#1A1A1A] border border-[#1A1A1A]/20 hover:bg-[#1A1A1A] hover:text-[#F9F9F7] transition-all duration-300"
            >
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#1A1A1A] hover:bg-[#1A1A1A]/5 rounded-md transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#F9F9F7] border-b border-[#1A1A1A]/10 px-8 py-8 md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm tracking-widest uppercase font-medium text-[#1A1A1A]/80 hover:text-[#1A1A1A]"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-[#1A1A1A]/10">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#1A1A1A] text-[#F9F9F7] text-xs font-semibold tracking-wider uppercase"
                >
                  Contact
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
