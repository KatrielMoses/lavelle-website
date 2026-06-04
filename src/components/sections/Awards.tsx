"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { AWARDS } from "@/lib/content";
import { fadeScale, staggerFast } from "@/lib/motion";

export function Awards() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <section ref={ref} className="section-white py-20 border-t border-[#C8D6E5]/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-20">
          <div className="shrink-0">
            <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#8899AA] mb-2">
              Recognition
            </p>
            <h2 className="font-display text-4xl text-[#1A1A1A]">
              Certified &<br />recognised.
            </h2>
          </div>

          <motion.div
            variants={shouldReduce ? undefined : staggerFast}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-wrap gap-4"
          >
            {AWARDS.map((award) => (
              <motion.div
                key={award.name}
                variants={shouldReduce ? undefined : fadeScale}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-[#C8D6E5]/60 bg-[#F7FAFD] hover:border-[#0078D4]/40 hover:bg-[#E6F3FB] transition-all duration-200"
              >
                <ShieldCheck size={16} className="text-[#0078D4] shrink-0" />
                <div>
                  <p className="text-sm font-sans font-semibold text-[#1A1A1A]">{award.name}</p>
                  <p className="text-xs text-[#8899AA] font-sans">{award.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
