"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { PartnerStep } from "@/lib/partners-content";

interface PartnerProcessProps {
  steps: PartnerStep[];
}

export function PartnerProcess({ steps }: PartnerProcessProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-[#F7FAFD] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0078D4] sm:text-sm">
            How it works
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            From application to first deal in 30 days.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#4A4A4A] sm:text-lg">
            We do not bury partners in process. Four steps, fully online, with humans on the other end.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Animated connector — only on md+ */}
          <div className="pointer-events-none absolute left-0 right-0 top-[34px] hidden md:block" aria-hidden>
            <div className="relative mx-auto h-px max-w-5xl bg-[#C8D6E5]">
              <motion.div
                initial={shouldReduce ? { width: "0%" } : { width: "0%" }}
                whileInView={shouldReduce ? { width: "100%" } : { width: "100%" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-0 h-px bg-gradient-to-r from-[#0078D4] via-[#1A9AE6] to-[#0078D4]"
              />
            </div>
          </div>

          <ol className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="mb-5 flex items-center gap-4">
                  <div className="relative inline-flex h-[68px] w-[68px] flex-none items-center justify-center rounded-full border border-[#0078D4]/30 bg-white font-display text-xl text-[#0078D4] shadow-sm">
                    <span className="text-sm font-semibold tracking-widest">{step.number}</span>
                    <motion.span
                      aria-hidden
                      initial={shouldReduce ? { scale: 1, opacity: 0 } : { scale: 0.6, opacity: 0 }}
                      whileInView={shouldReduce ? { scale: 1, opacity: 0 } : { scale: 1.6, opacity: 0.25 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 rounded-full bg-[#0078D4]/15"
                    />
                  </div>
                </div>
                <h3 className="font-display text-xl text-[#1A1A1A]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4A4A4A]">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
