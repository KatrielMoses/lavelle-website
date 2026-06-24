"use client";

import type { ComponentType } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  TrendingUp,
  GraduationCap,
  ShieldCheck,
  Workflow,
  PiggyBank,
  Handshake,
  Megaphone,
  Rocket,
  type LucideProps,
} from "lucide-react";
import type { PartnerBenefit } from "@/lib/partners-content";

const ICONS: Record<PartnerBenefit["icon"], ComponentType<LucideProps>> = {
  TrendingUp,
  GraduationCap,
  ShieldCheck,
  Workflow,
  PiggyBank,
  Handshake,
  Megaphone,
  Rocket,
};

interface PartnerBenefitsProps {
  benefits: PartnerBenefit[];
}

export function PartnerBenefits({ benefits }: PartnerBenefitsProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0078D4] sm:text-sm">
            Why partners stay
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            The benefits are real. The numbers are louder.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#4A4A4A] sm:text-lg">
            We do not pay lip service to enablement, deal protection, or co-sell. Here is what you actually get on day one.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-16">
          {benefits.map((b, i) => {
            const Icon = ICONS[b.icon];
            return (
              <motion.div
                key={b.title}
                initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F3FB] transition-colors duration-300 group-hover:bg-[#0078D4]">
                  <Icon className="h-6 w-6 text-[#0078D4] transition-colors duration-300 group-hover:text-white" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl text-[#1A1A1A]">{b.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#4A4A4A]">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
