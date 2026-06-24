"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import type { PartnerTestimonial } from "@/lib/partners-content";

interface PartnerTestimonialsProps {
  testimonials: PartnerTestimonial[];
}

export function PartnerTestimonials({ testimonials }: PartnerTestimonialsProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0078D4] sm:text-sm">
            In their words
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            What partners tell us off the record.
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.author + t.company}
              initial={shouldReduce ? undefined : { opacity: 0, y: 28 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-[#C8D6E5]/60 bg-gradient-to-br from-[#F7FAFD] to-white p-8 sm:p-10"
            >
              <Quote className="absolute -right-2 -top-2 h-20 w-20 text-[#E6F3FB] transition-colors duration-500 group-hover:text-[#0078D4]/15" aria-hidden="true" />

              <blockquote className="relative font-display text-xl leading-9 text-[#1A1A1A] sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="relative mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#C8D6E5]/50 pt-6">
                <div>
                  <p className="font-display text-base text-[#1A1A1A]">{t.author}</p>
                  <p className="text-sm text-[#4A4A4A]">{t.role}, {t.company}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-[#0078D4]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0078D4]">
                  {t.metric}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
