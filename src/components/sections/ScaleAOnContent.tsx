"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  ArrowRight, 
  BadgeCheck, 
  Expand, 
  ShieldOff, 
  Hash, 
  Route, 
  Zap, 
  Settings2,
  Shield, 
  HardDrive, 
  KeyRound, 
  Network, 
  ServerCog
} from "lucide-react";
import { SOLUTIONS_CONTENT } from "@/lib/solutions-content";

const solution = SOLUTIONS_CONTENT["scaleaon"];

function getSolutionContent() {
  if (!solution) throw new Error("ScaleAOn content is missing.");
  return solution;
}

const archIcons = [Expand, ShieldOff, Hash, Route, Settings2, Zap];
const diffIcons = [Shield, HardDrive, ServerCog, KeyRound, Network];

const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function ScaleAOnContent() {
  const content = getSolutionContent();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#003F72] px-4 py-28 text-white sm:px-6 sm:py-32 xl:min-h-[90svh] xl:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,#0078D4_0%,transparent_34%),linear-gradient(135deg,#003F72_0%,#1A1A1A_100%)]" />
        
        {/* Animated subtle grid */}
        <div className="absolute inset-0 -z-10 opacity-30 bg-[linear-gradient(rgba(200,214,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(200,214,229,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />


        <motion.div 
          className="mx-auto w-full max-w-7xl flex flex-col items-center text-center"
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          animate="visible"
        >
          {content.hero.eyebrow && (
            <motion.div variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-[#E6F3FB] backdrop-blur-sm shadow-sm">
              <Network className="h-4 w-4 text-[#1A9AE6]" aria-hidden="true" />
              <span className="tracking-widest uppercase">{content.hero.eyebrow}</span>
            </motion.div>
          )}
          <motion.h1 variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="max-w-5xl font-display text-[clamp(2.5rem,6vw,4rem)] leading-tight text-white lg:text-[clamp(4rem,5vw,5rem)]">
            {content.hero.title}
          </motion.h1>
          {content.hero.command && (
            <motion.p variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-8 font-display text-2xl text-[#E6F3FB] sm:text-3xl font-normal tracking-wide">
              {content.hero.command}
            </motion.p>
          )}
          <motion.p variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-8 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl">
            {content.hero.description}
          </motion.p>
          <motion.div variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-12 flex flex-col gap-4 sm:flex-row justify-center w-full">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-[#005A9E] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            >
              Consult an Architect
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Brands Bar */}
      <div className="border-b border-[#C8D6E5]/40 bg-[#F7FAFD] py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-[0.2em] text-[#4A4A4A] uppercase">
            Trusted by the world's most demanding enterprises in BFSI, Logistics, Retail, and Government
          </p>
        </div>
      </div>

      {/* Architecture Features */}
      {content.architectureFeatures && (
        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div 
              className="mx-auto max-w-3xl text-center mb-20"
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP_VARIANTS}
            >
              <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
                Engineering Breakthroughs
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#4A4A4A]">
                ScaleAOn is built from the ground up to eliminate the technical debt of legacy networking.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {content.architectureFeatures.map((feature, i) => {
                const Icon = archIcons[i] ?? Zap;
                return (
                  <motion.div 
                    key={feature.title} 
                    variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.2 } }}
                    className="group relative overflow-hidden rounded-xl border border-[#C8D6E5]/40 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                  >
                    <div className="absolute top-0 left-0 h-1 w-full bg-[#0078D4] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E6F3FB] text-[#0078D4]">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-2xl text-[#1A1A1A]">{feature.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#4A4A4A]">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      {/* Differentiators (Why Lavelle) */}
      {content.differentiators && (
        <section className="bg-[#1A1A1A] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 relative isolate overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,#003F72_0%,transparent_60%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
              <motion.div 
                className="lg:sticky lg:top-32"
                initial={shouldReduceMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                <motion.div variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS}>
                  <BadgeCheck className="h-12 w-12 text-[#1A9AE6] mb-8" />
                  <h2 className="font-display text-4xl text-white leading-tight">
                    Why Leading Brands Choose ScaleAOn
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-[#E6F3FB]/80">
                    We don't just route packets; we fundamentally secure and scale your enterprise connectivity using a 100% SDN-driven philosophy. 
                  </p>
                </motion.div>
              </motion.div>
              
              <motion.div 
                className="grid gap-6 sm:grid-cols-2"
                initial={shouldReduceMotion ? "visible" : "hidden"}
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
              >
                {content.differentiators.map((diff, i) => {
                  const Icon = diffIcons[i] ?? Shield;
                  return (
                    <motion.div 
                      key={diff.title} 
                      variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.2 } }}
                      className={`relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-8 backdrop-blur-sm transition-colors hover:bg-white/10 ${i === content.differentiators!.length - 1 ? 'sm:col-span-2' : ''}`}
                    >
                      <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#003F72] text-[#1A9AE6]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-xl text-white">{diff.title}</h3>
                      <p className="mt-4 text-base leading-7 text-white/70">
                        {diff.description}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Banner */}
      <section className="bg-[#F7FAFD] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 text-center border-b border-[#C8D6E5]/40">
        <motion.div 
          className="mx-auto max-w-4xl"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
            Experience ScaleAOn in Your Network
          </motion.h2>
          <motion.p variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-6 text-xl leading-8 text-[#4A4A4A]">
            Discover why the largest retail and financial networks trust Lavelle Networks to keep their business constantly connected.
          </motion.p>
          <motion.div variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
             <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-8 py-4 text-lg font-semibold text-white transition hover:bg-[#005A9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
              >
                Contact Sales Now
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
