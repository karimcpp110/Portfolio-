"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import projects from "@/data/projects";
import SmoothScroll from "@/components/smooth-scroll";
import AnimatedBackground from "@/components/animated-background";
import { cn } from "@/lib/utils";

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === params.id);

  if (!project) {
    return notFound();
  }

  const problem = project.problem || "Information not available.";
  const approach = project.approach || project.solution || "Information not available.";
  const architectureDesc = project.architectureDesc || "Custom structured architecture.";
  const features = project.features || ["High performance", "Scalable", "Robust design"];
  const impact = project.impact || "Delivered a successful technical solution.";

  return (
    <SmoothScroll>
      <AnimatedBackground />
      <main className={cn("bg-slate-100 dark:bg-transparent canvas-overlay-mode min-h-screen relative pb-32")} style={{ zIndex: 10 }}>
        <div className="max-w-4xl mx-auto px-4 pt-24 md:pt-32">

          {/* Back Button */}
          <Link
            href="/#selected-work"
            className="inline-flex items-center text-sm font-mono text-zinc-400 hover:text-blue-400 transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>

          {/* 1. Intro */}
          <div className="mb-16">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white">{project.title}</h1>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mt-1">
                {project.category}
              </span>
            </div>
            <p className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed">
              {project.shortDescription || project.problem}
            </p>
          </div>

          {/* Hero Image */}
          <div className="w-full aspect-video relative rounded-2xl overflow-hidden border border-zinc-800 bg-black mb-20 shadow-2xl">
            <Image
              src={project.src}
              alt={`${project.title} Interface`}
              fill
              className="object-cover opacity-90"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-16">

              {/* 2. The Problem */}
              <section>
                <h2 className="text-2xl font-bold text-red-400 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-red-400/50 inline-block"></span> The Problem
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">{problem}</p>
              </section>

              {/* 3. The Approach */}
              <section>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-emerald-400/50 inline-block"></span> The Approach
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">{approach}</p>
              </section>

              {/* 4. Architecture */}
              <section>
                <h2 className="text-2xl font-bold text-blue-400 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-blue-400/50 inline-block"></span> Architecture
                </h2>
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl">
                  <p className="text-zinc-300 text-lg leading-relaxed">{architectureDesc}</p>
                </div>
              </section>

              {/* 5. Key Features */}
              <section>
                <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-purple-400/50 inline-block"></span> Key Features
                </h2>
                <ul className="grid gap-4">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start bg-zinc-900/30 p-4 rounded-lg border border-zinc-800/50"
                    >
                      <div className="min-w-[28px] h-6 flex items-center justify-center rounded bg-purple-500/20 text-purple-400 font-mono text-sm mr-4 mt-0.5">
                        0{idx + 1}
                      </div>
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* 6. Result / Impact */}
              <section>
                <h2 className="text-2xl font-bold text-yellow-400 mb-4 flex items-center gap-3">
                  <span className="w-8 h-px bg-yellow-400/50 inline-block"></span> Result & Impact
                </h2>
                <p className="text-zinc-300 text-xl font-medium leading-relaxed border-l-4 border-yellow-500/50 pl-6 py-2">
                  {impact}
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* 7. Links */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-zinc-100 font-bold mb-4">Project Links</h3>
                <div className="flex flex-col gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors bg-black/50 p-3 rounded-lg border border-zinc-800 hover:border-zinc-700"
                    >
                      <Github className="w-5 h-5" /> View Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 hover:border-blue-500/40"
                    >
                      <ExternalLink className="w-5 h-5" /> Live Demo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <p className="text-sm text-zinc-500 italic">Restricted / internal deployment.</p>
                  )}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-zinc-100 font-bold mb-6">Tech Stack</h3>

                <div className="space-y-6">
                  {project.skills.frontend?.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wider">Frontend</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.frontend.map((skill, i) => (
                          <div
                            key={`fe-${i}`}
                            className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-md text-sm text-zinc-300"
                          >
                            {skill.icon} {skill.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {project.skills.backend?.length > 0 && (
                    <div>
                      <h4 className="text-xs font-mono text-zinc-500 mb-3 uppercase tracking-wider">Backend & Systems</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.skills.backend.map((skill, i) => (
                          <div
                            key={`be-${i}`}
                            className="flex items-center gap-2 bg-zinc-800 px-3 py-1.5 rounded-md text-sm text-zinc-300"
                          >
                            {skill.icon} {skill.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </SmoothScroll>
  );
}
