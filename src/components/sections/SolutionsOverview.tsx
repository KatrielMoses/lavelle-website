"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Network, Layers, GitBranch, Shuffle, ArrowRight } from "lucide-react";
import { SOLUTIONS } from "@/lib/content";
import { fadeUpSm, staggerFast } from "@/lib/motion";

const ICONS: Record<string, React.ElementType> = { Network, Layers, GitBranch, Shuffle };

const STATS: Record<string, string> = {
  "sd-wan":   "3 in 5 networks",
  "scaleaon": "1,000 nodes / 2 wks",
  "sd-net":   "40% cost reduction",
  "hybrid-wan": "Zero MPLS lock-in",
};

export function SolutionsOverview() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section ref={ref} className="section-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#0078D4] mb-3">
              Solutions
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-[#1A1A1A]">
              Every WAN challenge,<br className="hidden lg:block" /> solved.
            </h2>
          </div>
          <p className="text-[#4A4A4A] font-sans text-base leading-relaxed max-w-sm lg:text-right">
            From greenfield SD-WAN to hybrid MPLS migration — Lavelle has the architecture and the track record.
          </p>
        </div>

        {/* Solution cards */}
        <motion.div
          variants={shouldReduce ? undefined : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {SOLUTIONS.map((solution, i) => {
            const Icon = ICONS[solution.icon] ?? Network;
            const stat = STATS[solution.id];
            return (
              <motion.div key={solution.id} variants={shouldReduce ? undefined : fadeUpSm}>
                <Link href={solution.href} className="block group h-full">
                  <div className="relative h-full rounded-2xl border border-[#C8D6E5]/40 bg-[#F7FAFD] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0078D4]/8 hover:border-[#0078D4]/30">

                    {/* Large background number */}
                    <div aria-hidden className="absolute top-3 right-4 font-display text-[80px] font-semibold text-[#0078D4]/[0.06] leading-none select-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    <div className="relative p-7 flex flex-col h-full">
                      {/* Icon */}
                      <div className="w-11 h-11 rounded-xl bg-[#E6F3FB] flex items-center justify-center mb-5 group-hover:bg-[#0078D4] transition-colors duration-300">
                        <Icon size={20} className="text-[#0078D4] group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="font-sans font-semibold text-[#1A1A1A] text-lg mb-1 group-hover:text-[#0078D4] transition-colors duration-200">
                        {solution.name}
                      </h3>
                      <p className="text-xs text-[#0078D4] font-sans font-medium mb-3">{solution.tagline}</p>
                      <p className="text-sm text-[#4A4A4A] font-sans leading-relaxed mb-6 flex-1">
                        {solution.description}
                      </p>

                      {/* Stat badge */}
                      {stat && (
                        <div className="mb-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0078D4]/10 border border-[#0078D4]/20 self-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#0078D4]" />
                          <span className="text-[11px] font-sans font-semibold text-[#005A9E]">{stat}</span>
                        </div>
                      )}

                      <div className="flex items-center gap-1 text-xs font-sans font-semibold text-[#0078D4] group-hover:gap-2.5 transition-all duration-200">
                        Explore <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
