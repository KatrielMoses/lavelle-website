"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BadgeCheck } from "lucide-react";
import type { AboutHeroContent } from "@/lib/about-content";

interface AboutHeroProps {
  content: AboutHeroContent;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55 } },
};

export function AboutHero({ content }: AboutHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? undefined : containerVariants;
  const childVariants = shouldReduceMotion ? undefined : itemVariants;

  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#003F72] px-4 py-28 text-white sm:px-6 sm:py-32 xl:px-8">
      {/* Background glow — matches the products/solutions hero treatment */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,#0078D4_0%,transparent_38%),linear-gradient(135deg,#003F72_0%,#1A1A1A_100%)]" />
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[#0078D4] opacity-20 blur-[140px]" />
        <div className="absolute -right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-[#1A9AE6] opacity-10 blur-[140px]" />
      </div>
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#1A1A1A]/35 to-transparent" />

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto w-full max-w-5xl text-center"
      >
        <motion.div
          variants={childVariants}
          className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-[#E6F3FB] sm:mb-8"
        >
          <BadgeCheck className="h-4 w-4 text-[#1A9AE6]" aria-hidden="true" />
          {content.eyebrow}
        </motion.div>

        <motion.h1
          variants={childVariants}
          className="font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-[clamp(2.75rem,4.5vw,4.5rem)]"
        >
          {content.title}
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mt-6 font-display text-xl text-[#1A9AE6] sm:mt-8 sm:text-2xl lg:text-3xl"
        >
          {content.command}
        </motion.p>

        <motion.p
          variants={childVariants}
          className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/80 sm:mt-8 sm:text-lg lg:text-xl"
        >
          {content.description}
        </motion.p>

        <motion.div
          variants={childVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row"
        >
          <Link
            href={content.primaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#005A9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] sm:w-auto"
          >
            {content.primaryCta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href={content.secondaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] sm:w-auto"
          >
            {content.secondaryCta.label}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
