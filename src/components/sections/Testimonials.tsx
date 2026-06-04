"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";
import { fadeUp, staggerSlow } from "@/lib/motion";

const COMPANIES = [
  { name: "Leading Private Sector Bank", short: "BFSI", color: "#0078D4" },
  { name: "National Logistics Conglomerate", short: "Logistics", color: "#1A9AE6" },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section ref={ref} className="relative bg-[#003F72] py-24 lg:py-32 overflow-hidden">
      {/* Background number watermark */}
      <div aria-hidden className="absolute right-0 top-1/2 -translate-y-1/2 text-[320px] font-display font-semibold text-white/[0.025] leading-none select-none pointer-events-none pr-8">
        &ldquo;
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-xl mb-16">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#1A9AE6] mb-3">
            Client results
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-white mb-4">
            Results that speak.
          </h2>
          <p className="text-white/50 font-sans text-base leading-relaxed">
            Measured outcomes from enterprises that replaced legacy WAN with Lavelle.
          </p>
        </div>

        <motion.div
          variants={shouldReduce ? undefined : staggerSlow}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              variants={shouldReduce ? undefined : fadeUp}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 lg:p-10 flex flex-col overflow-hidden group hover:border-white/20 transition-colors duration-300"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#0078D4]/60 to-transparent" />

              {/* Company badge */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white font-display font-semibold text-sm"
                  style={{ backgroundColor: COMPANIES[i]?.color ?? "#0078D4" }}
                >
                  {COMPANIES[i]?.short.charAt(0)}
                </div>
                <div>
                  <p className="text-white/80 font-sans text-xs font-semibold">{t.company}</p>
                  <p className="text-white/35 font-sans text-[10px] uppercase tracking-widest">{COMPANIES[i]?.short}</p>
                </div>

                {/* Metric pill — top right */}
                <div className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0078D4]/25 border border-[#0078D4]/40">
                  <span className="text-[#1A9AE6] text-xs font-sans font-bold">{t.metric}</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="font-display text-xl lg:text-2xl text-white/90 leading-snug mb-8 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0078D4]/50 to-[#003F72] flex items-center justify-center shrink-0">
                  <span className="font-display text-white text-sm leading-none">{t.author.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-white/80 font-sans text-sm font-semibold">{t.role}</p>
                  <p className="text-white/35 font-sans text-xs">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom stat row */}
        <motion.div
          variants={shouldReduce ? undefined : fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden"
        >
          {[
            { v: "200+", l: "Enterprise deployments" },
            { v: "8",    l: "Industry verticals" },
            { v: "99.99%", l: "Network uptime SLA" },
            { v: "< 2 wks", l: "Avg. deployment time" },
          ].map(({ v, l }) => (
            <div key={l} className="bg-[#002D5A] px-8 py-7 text-center lg:text-left">
              <p className="font-display text-3xl text-white mb-1">{v}</p>
              <p className="text-white/45 font-sans text-xs">{l}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
