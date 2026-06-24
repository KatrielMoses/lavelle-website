"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import type { AboutTimelineEntry } from "@/lib/about-content";

interface AboutTimelineProps {
  kicker: string;
  title: string;
  description?: string;
  entries: AboutTimelineEntry[];
}

export function AboutTimeline({ kicker, title, description, entries }: AboutTimelineProps) {
  const shouldReduceMotion = useReducedMotion();

  const rowVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0078D4] sm:text-sm">
            {kicker}
          </p>
          <h2 className="mt-4 font-display text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-5 text-lg leading-8 text-[#4A4A4A]">{description}</p>
          )}
        </div>

        <ol className="relative mx-auto mt-14 max-w-3xl border-l border-[#C8D6E5] sm:mt-16">
          {entries.map((entry) => (
            <motion.li
              key={entry.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={shouldReduceMotion ? undefined : rowVariants}
              className="mb-10 ms-6 sm:mb-12 sm:ms-8"
            >
              <span className="absolute -start-3.5 flex h-7 w-7 items-center justify-center rounded-full bg-white ring-2 ring-[#C8D6E5] sm:-start-4 sm:h-8 sm:w-8">
                <CheckCircle2 className="h-4 w-4 text-[#0078D4]" aria-hidden="true" />
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0078D4] sm:text-sm">
                {entry.year}
              </p>
              <h3 className="mt-2 font-display text-xl text-[#1A1A1A] sm:text-2xl">
                {entry.title}
              </h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#4A4A4A] sm:text-lg sm:leading-8">
                {entry.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
