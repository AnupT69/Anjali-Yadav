"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import FashionHubShowcase from "@/components/FashionHubShowcase";
import SkillsGrid from "@/components/SkillsGrid";
import ExperienceAchievements from "@/components/ExperienceAchievements";
import Philosophy from "@/components/Philosophy";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleScrollToWorks = () => {
    const el = document.getElementById("works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] font-sans selection:bg-[#1A1A1A] selection:text-[#F9F9F7] relative">
      {/* Sticky Blur Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Fashion Hub Showcase */}
        <Hero
          onExploreClick={handleScrollToWorks}
          onOpenGallery={() => handleScrollToWorks()}
          onOpenContact={() => setIsContactOpen(true)}
        />

        {/* Stats Bar */}
        <StatsBar />

        {/* Dedicated Single Project Showcase: Fashion Hub (12 Sheets with Animations) */}
        <FashionHubShowcase />

        {/* Skills Grid Animation (Left to Right Staggered Grid) */}
        <SkillsGrid />

        {/* Professional Experience (Kalparachna Associate, Pune) & Accolades */}
        <ExperienceAchievements />

        {/* Architectural Design Philosophy */}
        <Philosophy />
      </main>

      {/* Footer & Career Opportunity CTA */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
