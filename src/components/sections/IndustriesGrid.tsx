"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Landmark, Truck, Code2, ShoppingBag, HeartPulse, GraduationCap, Factory, Building2, ArrowRight } from "lucide-react";
import { INDUSTRIES } from "@/lib/content";
import { fadeUpSm, staggerFast } from "@/lib/motion";

const ICONS: Record<string, React.ElementType> = {
  Landmark, Truck, Code2, ShoppingBag, HeartPulse, GraduationCap, Factory, Building2,
};

const INDUSTRY_STAT: Record<string, string> = {
  "bfsi":           "Asia's largest SD-WAN banking deployment",
  "logistics":      "Real-time multi-hub visibility",
  "it-services":    "Sub-10ms latency across DCs",
  "retail":         "Always-on POS & inventory",
  "healthcare":     "HIPAA-grade secure networks",
  "education":      "High-bandwidth campus connect",
  "manufacturing":  "Plant-floor to HQ in minutes",
  "psu":            "Sovereign, air-gapped options",
};

export function IndustriesGrid() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section ref={ref} className="section-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#0078D4] mb-3">
              Industries
            </p>
            <h2 className="font-display text-5xl lg:text-6xl text-[#1A1A1A]">
              Deep expertise,<br className="hidden lg:block" /> every sector.
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[#0078D4] hover:gap-3 transition-all duration-200 self-start lg:self-end"
          >
            All industries <ArrowRight size={14} />
          </Link>
        </div>

        <motion.div
          variants={shouldReduce ? undefined : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((industry) => {
            const Icon = ICONS[industry.icon] ?? Building2;
            const stat = INDUSTRY_STAT[industry.id];
            return (
              <motion.div key={industry.id} variants={shouldReduce ? undefined : fadeUpSm}>
                <Link href={industry.href} className="block group h-full">
                  <div className="relative h-full rounded-2xl border border-[#C8D6E5]/40 bg-[#F7FAFD] p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0078D4]/8 hover:border-[#0078D4]/30 hover:bg-white">

                    {/* Hover accent corner */}
                    <div className="absolute top-0 right-0 w-16 h-16 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(225deg, rgba(0,120,212,0.10), transparent)" }} />

                    <div className="w-11 h-11 rounded-xl bg-[#E6F3FB] flex items-center justify-center mb-5 group-hover:bg-[#0078D4] transition-colors duration-300">
                      <Icon size={20} className="text-[#0078D4] group-hover:text-white transition-colors duration-300" />
                    </div>

                    <h3 className="font-sans font-semibold text-[#1A1A1A] text-base mb-2 group-hover:text-[#0078D4] transition-colors duration-200">
                      {industry.name}
                    </h3>
                    <p className="text-xs text-[#8899AA] font-sans leading-relaxed mb-5">
                      {industry.description}
                    </p>

                    {stat && (
                      <p className="text-[10px] font-sans font-semibold text-[#0078D4]/70 uppercase tracking-wider leading-tight group-hover:text-[#0078D4] transition-colors duration-200">
                        {stat}
                      </p>
                    )}
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
