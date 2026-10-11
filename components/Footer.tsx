"use client";

import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const contactDetails = [
    {
      icon: Mail,
      label: "Email",
      value: "anjaliyadav42025@gmail.com",
      href: "mailto:anjaliyadav42025@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 8604728823",
      href: "tel:+918604728823",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Ghazipur, UP · Pune · Ludhiana",
      href: "#",
    },
  ];

  const academicInfo = [
    { title: "B.Arch (2021–2026)", institute: "GNDEC School of Architecture, Ludhiana" },
    { title: "Schooling (10th & 12th)", institute: "Kendriya Vidyalaya No.1, Dehu Road, Pune" },
    { title: "Internship (July–Nov 2024)", institute: "Kalparachna Associate, Pune (Chinchwad)" },
  ];

  return (
    <footer id="contact" className="relative bg-[#F5F2EB]/50 border-t border-[#1A1A1A]/10 text-[#1A1A1A] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Clean Call to Action Card */}
        <div className="p-10 sm:p-14 rounded-3xl bg-white border border-[#1A1A1A]/10 shadow-sm mb-16">
          <div className="text-xs font-medium tracking-wider text-[#1A1A1A]/50 uppercase mb-4 font-sans">
            Opportunity and Collaboration
          </div>

          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl font-normal font-serif tracking-tight text-[#1A1A1A] mb-4">
              Let&apos;s Shape Meaningful Spaces Together
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 font-sans leading-relaxed mb-8">
              I am seeking full-time opportunities within an architectural practice as well as freelance design projects. Bringing hands-on experience in working drawings, MEP coordination, 3D visualization, and thesis-level concept design.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1A1A1A] text-[#F9F9F7] text-xs font-medium tracking-wider uppercase hover:bg-black transition-colors"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="mailto:anjaliyadav42025@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#1A1A1A]/20 bg-white text-xs font-medium tracking-wider uppercase text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>anjaliyadav42025@gmail.com</span>
            </a>

            <a
              href="tel:+918604728823"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#1A1A1A]/20 bg-white text-xs font-medium tracking-wider uppercase text-[#1A1A1A] hover:border-[#1A1A1A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 8604728823</span>
            </a>
          </div>
        </div>

        {/* Clean Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#1A1A1A]/10">
          
          {/* Identity */}
          <div className="md:col-span-5">
            <span className="text-base font-semibold tracking-wider uppercase font-sans">
              Anjali Yadav
            </span>
            <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-sans leading-relaxed max-w-md mt-2 mb-4">
              Architecture Student and Emerging Designer (B.Arch, GNDEC School of Architecture). Focused on thoughtful functional planning, bioclimatic spaces, and detailed execution.
            </p>
          </div>

          {/* Academic Track */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase font-sans text-[#1A1A1A]">
              Academic and Practice Track
            </div>
            {academicInfo.map((item, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xs font-medium text-[#1A1A1A]">
                  {item.title}
                </div>
                <div className="text-xs text-[#1A1A1A]/60 font-sans">
                  {item.institute}
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold tracking-wider uppercase font-sans text-[#1A1A1A]">
              Direct Contact
            </div>
            <div className="flex flex-col space-y-2">
              {contactDetails.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-2 text-xs text-[#1A1A1A]/70 hover:text-[#1A1A1A] transition-colors font-sans"
                  >
                    <Icon className="w-3.5 h-3.5 text-[#1A1A1A]/40 shrink-0" />
                    <span className="truncate">{item.value}</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1A1A1A]/50 font-sans">
          <div>
            © 2026 Anjali Yadav. Architecture Portfolio.
          </div>
          <div className="flex items-center gap-6">
            <span>B.Arch Candidate</span>
            <span>•</span>
            <span>Kalparachna Associate Alumna</span>
            <span>•</span>
            <span>Pune · Ludhiana · Ghazipur</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
