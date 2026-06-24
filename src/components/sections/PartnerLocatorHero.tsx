"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { LOCATOR_HERO } from "@/lib/partners-content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55 } },
};

export function PartnerLocatorHero() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden bg-[#021530] px-4 py-28 text-white sm:px-6 sm:py-32 xl:px-8">

      <motion.div
        variants={shouldReduce ? undefined : containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        <motion.div
          variants={shouldReduce ? undefined : itemVariants}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#1A9AE6]/40 bg-[#1A9AE6]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#1A9AE6] sm:mb-8"
        >
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {LOCATOR_HERO.eyebrow}
        </motion.div>

        <motion.h1
          variants={shouldReduce ? undefined : itemVariants}
          className="font-display text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[clamp(2.75rem,4.8vw,4.75rem)]"
        >
          {LOCATOR_HERO.title}
        </motion.h1>

        <motion.p
          variants={shouldReduce ? undefined : itemVariants}
          className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg lg:text-xl"
        >
          {LOCATOR_HERO.description}
        </motion.p>

        <motion.div
          variants={shouldReduce ? undefined : itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row"
        >
          <Link
            href={LOCATOR_HERO.primaryCta.href}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#005A9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] sm:w-auto"
          >
            {LOCATOR_HERO.primaryCta.label}
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <a
            href="#partner-map"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] sm:w-auto"
          >
            Explore the map
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
