"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Trophy, Gauge, type LucideIcon } from "lucide-react";
import type { AboutOriginCard } from "@/lib/about-content";

interface AboutOriginProps {
  title: string;
  description: string;
  cards: AboutOriginCard[];
}

// Heuristic icon selection based on the card label so we don't have to add an icon field
function pickIcon(label: string): LucideIcon {
  const lc = label.toLowerCase();
  if (lc.includes("headquarter") || lc.includes("location") || lc.includes("place")) return MapPin;
  if (lc.includes("market") || lc.includes("position") || lc.includes("#1")) return Trophy;
  return Gauge;
}

export function AboutOrigin({ title, description, cards }: AboutOriginProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#003F72] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#005A9E_0%,transparent_70%)]"
      />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={shouldReduceMotion ? undefined : cardVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A9AE6] sm:text-sm">
            The Origin
          </p>
          <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#E6F3FB] sm:text-xl">
            {description}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-3 lg:mt-20">
          {cards.map((card) => {
            const Icon = pickIcon(card.label);
            return (
              <motion.article
                key={card.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={shouldReduceMotion ? undefined : cardVariants}
                className="group rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#1A9AE6] transition group-hover:bg-[#0078D4] group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1A9AE6]">
                  {card.label}
                </p>
                <p className="mt-3 font-display text-3xl text-white sm:text-4xl">
                  {card.value}
                </p>
                <p className="mt-4 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                  {card.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
