"use client";

import React from "react";
import SmoothScroll from "@/components/smooth-scroll";
import { cn } from "@/lib/utils";
import AnimatedBackground from "@/components/animated-background";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experience";
import ProjectsSection from "@/components/sections/projects";
import ContactSection from "@/components/sections/contact";
import HeroSection from "@/components/sections/hero";
import CaseStudySection from "@/components/sections/case-study";
import MindsetSection from "@/components/sections/mindset";

function MainPage() {
  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode")}>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <CaseStudySection />
        <ExperienceSection />
        <MindsetSection />
        <ContactSection />
      </main>
    </SmoothScroll>
  );
}

export default MainPage;
