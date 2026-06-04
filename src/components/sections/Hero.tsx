"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HERO_CONTENT, STATS } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";
import { NetworkAnimation } from "./NetworkAnimation";

const containerVariants = stagger(0.1);

export function Hero() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative h-screen flex flex-col overflow-hidden bg-[#003F72]">
      {/* Background gradient mesh */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,120,212,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(26,154,230,0.10) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Main content — flex-1 so it fills space above stats */}
      <div className="relative z-10 flex-1 flex items-center px-6 lg:px-8 pt-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left: text */}
          <motion.div
            variants={shouldReduce ? undefined : containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.div variants={shouldReduce ? undefined : fadeUp} className="mb-5">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-sans font-semibold tracking-widest uppercase bg-[#1A1A1A]/70 text-white border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                {HERO_CONTENT.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={shouldReduce ? undefined : fadeUp}
              className="font-display text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05] mb-6 whitespace-pre-line"
            >
              {HERO_CONTENT.headline}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={shouldReduce ? undefined : fadeUp}
              className="font-sans text-base lg:text-lg text-white/65 max-w-xl leading-relaxed mb-8"
            >
              {HERO_CONTENT.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={shouldReduce ? undefined : fadeUp}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <Link href={HERO_CONTENT.primaryCta.href}>
                <Button variant="primary" size="lg" className="group">
                  {HERO_CONTENT.primaryCta.label}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </Button>
              </Link>
              <Link href={HERO_CONTENT.secondaryCta.href}>
                <Button variant="ghost" size="lg">
                  {HERO_CONTENT.secondaryCta.label}
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: network animation */}
          <motion.div
            initial={shouldReduce ? {} : { opacity: 0 }}
            animate={shouldReduce ? {} : { opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="hidden lg:block relative h-[420px]"
          >
            <NetworkAnimation />
          </motion.div>

        </div>
      </div>

      {/* Stats pinned to bottom of hero */}
      <div className="relative z-10 border-t border-white/10 bg-[#002D5A]/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            variants={shouldReduce ? undefined : stagger(0.08)}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 lg:grid-cols-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                variants={shouldReduce ? undefined : fadeUp}
                className="py-7 px-6 border-r border-white/10 last:border-r-0 [&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r"
              >
                <div className="font-display text-4xl text-white leading-none mb-2">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-[#1A9AE6] text-3xl">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-xs text-white/50 font-sans leading-snug">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
