"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionWrapper from "../../ui/section-wrapper";
import { SectionHeader } from "../section-header";
import projects from "@/data/projects";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export const SelectedWorkSection = () => {
  // Only select the "Top 4" projects for this section
  const topProjects = projects.filter((p) =>
    ["talky", "chiggabot", "soc-ai", "ieee-portal"].includes(p.id)
  );

  return (
    <SectionWrapper id="selected-work" className="max-w-7xl mx-auto min-h-screen py-32 z-10">
      <SectionHeader id="selected-work" title="Selected Work" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mt-16"
      >
        {topProjects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Link href={`/work/${project.id}`}>
              <div
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800 transition-all duration-500",
                  "hover:border-blue-500/50 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] cursor-pointer",
                  "h-full flex flex-col"
                )}
              >
                <div className="relative w-full aspect-video overflow-hidden bg-black">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent pointer-events-none" />
                </div>
                <div className="flex flex-col flex-1 p-6 z-10 relative">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono whitespace-nowrap">
                      {project.category}
                    </div>
                  </div>
                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 group-hover:text-zinc-300 transition-colors">
                    {project.shortDescription || project.problem || "A showcase of engineering excellence."}
                  </p>
                  
                  <div className="mt-auto flex items-center text-sm font-mono text-blue-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Read Case Study <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default SelectedWorkSection;
