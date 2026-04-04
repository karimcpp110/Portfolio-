"use client";
import React from "react"
import SectionWrapper from "../ui/section-wrapper"
import { SectionHeader } from "./section-header"
import { motion } from "framer-motion"
import TerminalDiagnostics from "../terminal-diagnostics"
import { Card, CardContent } from "../ui/card"
import { CheckCircle2 } from "lucide-react"

const MindsetSection = () => {
    return (
        <SectionWrapper id="mindset" className="py-32 max-w-7xl mx-auto overflow-hidden">
            <SectionHeader 
                id="how-i-think" 
                title="How I Think" 
                desc="My engineering philosophy."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 px-4">
                {/* Left Side: Diagnostics */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative order-2 lg:order-1"
                >
                    <div className="absolute -inset-4 bg-blue-500/10 rounded-2xl blur-3xl opacity-50"></div>
                    <div className="relative rounded-2xl border border-zinc-800 bg-black p-4 md:p-8 shadow-2xl">
                        <TerminalDiagnostics />
                    </div>
                </motion.div>

                {/* Right Side: Narrative + Bullets */}
                <motion.div 
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center order-1 lg:order-2"
                >
                    <h3 className="text-3xl font-bold mb-6 text-white tracking-tight">I don&apos;t just build applications.</h3>
                    <p className="text-zinc-400 leading-relaxed mb-8 text-lg">
                        I design systems with control, performance, and security in mind. 
                        I prefer local-first architectures, efficient backends, and real-time communication models.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Control & Autonomy: Minimal reliance on 3rd-party APIs.",
                            "Performance: C++ and WebSockets for real-time speed.",
                            "Security: Local architectures and ML-powered threat detection.",
                            "Scalability: Dockerized microservices built to handle scale."
                        ].map((point, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * i }}
                                className="flex items-center gap-3 text-zinc-300"
                            >
                                <CheckCircle2 size={18} className="text-blue-500 min-w-[18px]" />
                                <span className="text-sm md:text-base">{point}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}

export default MindsetSection;
