"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { STATS } from "@/lib/content";
import { fadeUpSm, stagger } from "@/lib/motion";

const containerVariants = stagger(0.1);

export function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section ref={ref} className="bg-[#003F72] py-16 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          variants={shouldReduce ? undefined : containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              variants={shouldReduce ? undefined : fadeUpSm}
              className="text-center lg:text-left lg:border-l lg:border-white/15 lg:pl-8 first:lg:border-l-0 first:lg:pl-0"
            >
              <div className="font-display text-5xl lg:text-6xl text-white leading-none mb-3">
                {stat.value}
                {stat.suffix && (
                  <span className="text-[#1A9AE6] text-4xl lg:text-5xl">{stat.suffix}</span>
                )}
              </div>
              <p className="text-sm text-white/55 font-sans leading-snug max-w-44 mx-auto lg:mx-0">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
