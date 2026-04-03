"use client";
import React from "react"
import SectionWrapper from "../ui/section-wrapper"
import { SectionHeader } from "./section-header"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"

const CaseStudySection = () => {
    return (
        <SectionWrapper id="case-study" className="py-32 max-w-7xl mx-auto">
            <SectionHeader 
                id="case-study" 
                title="Deep Dive: IEEE MIU Portal" 
                desc="Reverse-engineering a legacy system into a high-performance management platform."
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20 px-4">
                {/* Left Side: The Story */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">The Problem</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            IEEE MIU branch operations were bottlenecked by manual grading, fragmented data across Excel sheets, 
                            and low member engagement due to a lack of a central hub. The official university portal was 
                            restricted, necessitating a custom-built solution that felt familiar but performed better.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-emerald-400">The Thought Process</h3>
                        <p className="text-muted-foreground leading-relaxed">
                            I reverse-engineered the authentication flow and UI patterns of the existing university system to 
                            ensure zero learning curve for students. I chose a custom PHP MVC-lite architecture to keep it 
                            extremely lightweight and fast on low-cost server hardware.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Card className="bg-zinc-900/50 border-zinc-800">
                           <CardContent className="p-4">
                              <h4 className="font-bold text-white mb-1">Architecture</h4>
                              <p className="text-xs text-muted-foreground">PHP MVC / MySQ / JavaScript</p>
                           </CardContent>
                        </Card>
                        <Card className="bg-zinc-900/50 border-zinc-800">
                           <CardContent className="p-4">
                              <h4 className="font-bold text-white mb-1">Impact</h4>
                              <p className="text-xs text-muted-foreground">Automated grading for 100+ users</p>
                           </CardContent>
                        </Card>
                    </div>
                </motion.div>

                {/* Right Side: The Result */}
                <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-black rounded-xl overflow-hidden border border-zinc-800">
                        <Image 
                            src="/assets/projects-screenshots/ieee-portal/landing.png" 
                            alt="IEEE Portal" 
                            width={800} 
                            height={500}
                            className="w-full h-auto opacity-80"
                        />
                        <div className="p-6 bg-zinc-900/90">
                           <div className="flex gap-2 mb-4">
                              <Badge variant="outline">Automated Workflows</Badge>
                              <Badge variant="outline">Real-time Analytics</Badge>
                           </div>
                           <p className="text-sm font-mono text-zinc-400">
                              Status: Fully Operational & Supporting 100+ Members.
                           </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    )
}

export default CaseStudySection;
