"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";

interface AboutStoryProps {
  kicker: string;
  title: string;
  paragraphs: string[];
  pullQuote?: { text: string; attribution: string };
}

export function AboutStory({ kicker, title, paragraphs, pullQuote }: AboutStoryProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={shouldReduceMotion ? undefined : itemVariants}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0078D4] sm:text-sm">
              {kicker}
            </p>
            <h2 className="mt-4 font-display text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            {pullQuote && (
              <figure className="mt-10 rounded-2xl border border-[#C8D6E5]/50 bg-[#F7FAFD] p-7 sm:p-8">
                <Quote className="h-7 w-7 text-[#0078D4]" aria-hidden="true" />
                <blockquote className="mt-4 font-display text-xl leading-snug text-[#1A1A1A] sm:text-2xl">
                  &ldquo;{pullQuote.text}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-sm font-semibold uppercase tracking-wider text-[#0078D4]">
                  {pullQuote.attribution}
                </figcaption>
              </figure>
            )}
          </motion.div>

          <div className="space-y-6">
            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={shouldReduceMotion ? undefined : itemVariants}
                className="text-lg leading-8 text-[#4A4A4A] sm:text-xl sm:leading-9"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
