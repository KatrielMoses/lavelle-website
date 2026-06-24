"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Compass, Rocket, Shield, Users, type LucideIcon } from "lucide-react";
import type { AboutValuePillar } from "@/lib/about-content";

interface ValuePillarsProps {
  kicker: string;
  title: string;
  description?: string;
  values: AboutValuePillar[];
}

const iconMap: Record<AboutValuePillar["icon"], LucideIcon> = {
  compass: Compass,
  shield: Shield,
  users: Users,
  rocket: Rocket,
  target: Compass,
  sparkles: Compass,
};

export function ValuePillars({ kicker, title, description, values }: ValuePillarsProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
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

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20">
          {values.map((value) => {
            const Icon = iconMap[value.icon] ?? Compass;
            return (
              <motion.article
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={shouldReduceMotion ? undefined : cardVariants}
                className="group relative overflow-hidden rounded-2xl border border-[#C8D6E5]/50 bg-[#F7FAFD] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#0078D4]/40 hover:bg-white hover:shadow-xl hover:shadow-[#0078D4]/5 sm:p-10"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-[#003F72] text-white shadow-sm transition group-hover:bg-[#0078D4]">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#1A1A1A]">{value.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#4A4A4A]">{value.description}</p>
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#0078D4]/0 blur-2xl transition duration-500 group-hover:bg-[#0078D4]/10"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
