"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { 
  ArrowRight, 
  Network, 
  CheckCircle2, 
  Zap, 
  Activity, 
  ShieldCheck, 
  Globe2,
  CloudCog,
  Cloud,
  Wifi,
  RefreshCw,
  LockKeyhole
} from "lucide-react";
import { USE_CASES_CONTENT } from "@/lib/usecases-content";
import { SpiderWeb } from "@/components/ui/SpiderWeb";

interface UseCaseClientProps {
  useCaseId: string;
}

const FADE_UP_VARIANTS: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

function renderVisual(useCaseId: string, shouldReduceMotion: boolean | null) {
  switch (useCaseId) {
    case "hybrid-wan-with-scaleaon":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full h-full">
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8 w-full">
             <div className="flex flex-col items-center flex-1">
               <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20"><Globe2 className="h-6 w-6 text-[#1A9AE6]"/></div>
               <span className="text-[10px] mt-2 uppercase tracking-widest text-white/50">MPLS</span>
             </div>
             <motion.div className="h-1 flex-1 bg-gradient-to-r from-[#1A9AE6]/30 to-[#0078D4]/80 rounded-full" animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
             <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#005A9E] shadow-xl shadow-[#0078D4]/20 ring-1 ring-white/20 flex flex-none items-center justify-center z-10"><Network className="h-8 w-8 sm:h-10 sm:w-10 text-white" /></div>
             <motion.div className="h-1 flex-1 bg-gradient-to-r from-[#0078D4]/80 to-[#1A9AE6]/30 rounded-full" animate={shouldReduceMotion ? {} : { opacity: [0.4, 0.9, 0.4] }} transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "easeInOut" }} />
             <div className="flex flex-col items-center flex-1">
               <div className="h-12 w-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/20"><Wifi className="h-6 w-6 text-[#1A9AE6]"/></div>
               <span className="text-[10px] mt-2 uppercase tracking-widest text-white/50">Broadband</span>
             </div>
          </div>
          <h3 className="font-display text-2xl font-medium sm:text-3xl">Seamless Hybrid WAN</h3>
          <div className="mt-8 grid w-full grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Link Independence</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Intelligent Failover</span>
            </div>
          </div>
        </div>
      );
    
    case "office-365-performance":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="relative mb-10 flex h-32 w-32 items-center justify-center">
             <motion.div className="absolute inset-0 rounded-full border border-[#1A9AE6]" animate={shouldReduceMotion ? {} : { scale: [1, 2.2], opacity: [0.6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }} />
             <motion.div className="absolute inset-0 rounded-full border border-[#1A9AE6]" animate={shouldReduceMotion ? {} : { scale: [1, 2.2], opacity: [0.6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 2 }} />
             <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#005A9E] shadow-xl shadow-[#0078D4]/20 ring-1 ring-white/20 flex items-center justify-center z-10">
               <Cloud className="h-12 w-12 text-white" />
             </div>
          </div>
          <h3 className="font-display text-3xl font-medium text-[#1A9AE6]">{"< 10ms"}</h3>
          <p className="mt-2 font-display text-xl text-white/90">Direct Cloud Access</p>
          <div className="mt-8 grid w-full grid-cols-1 gap-4">
            <div className="flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <Zap className="h-5 w-5 text-[#1A9AE6]" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">Local Breakout Optimization</span>
            </div>
          </div>
        </div>
      );

    case "managing-monitoring-enterprise-networks":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center w-full">
          <div className="mb-8 w-full max-w-sm rounded-xl border border-white/20 bg-[#003F72]/50 p-4 shadow-lg backdrop-blur-md">
             <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
               <div className="flex gap-2">
                 <div className="h-3 w-3 rounded-full bg-red-400/80" />
                 <div className="h-3 w-3 rounded-full bg-amber-400/80" />
                 <div className="h-3 w-3 rounded-full bg-green-400/80" />
               </div>
               <Activity className="h-4 w-4 text-white/50" />
             </div>
             <div className="space-y-3">
               <div className="flex items-center gap-4">
                 <div className="h-8 w-8 rounded bg-white/10 flex flex-none items-center justify-center"><Globe2 className="h-4 w-4 text-[#1A9AE6]" /></div>
                 <div className="h-2 w-full rounded bg-white/10 overflow-hidden"><motion.div className="h-full bg-[#1A9AE6] origin-left" initial={{ scaleX: 0.2 }} animate={shouldReduceMotion ? {} : { scaleX: [0.2, 0.8, 0.4, 0.9, 0.2] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} /></div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="h-8 w-8 rounded bg-white/10 flex flex-none items-center justify-center"><ShieldCheck className="h-4 w-4 text-emerald-400" /></div>
                 <div className="h-2 w-full rounded bg-white/10 overflow-hidden"><motion.div className="h-full bg-emerald-400 origin-left" initial={{ scaleX: 0.95 }} /></div>
               </div>
             </div>
          </div>
          <h3 className="font-display text-2xl font-medium sm:text-3xl">Single Pane of Glass</h3>
          <p className="mt-2 text-[#E6F3FB]/70">Centralized visibility & real-time analytics</p>
        </div>
      );

    case "multicloud":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="relative mb-12 flex h-40 w-40 items-center justify-center">
             {/* Center Node */}
             <div className="h-16 w-16 rounded-full bg-[#0078D4] shadow-[0_0_30px_rgba(0,120,212,0.5)] ring-2 ring-white/20 flex items-center justify-center z-20">
               <Network className="h-8 w-8 text-white" />
             </div>
             
             {/* Orbiting Nodes */}
             <motion.div className="absolute inset-0 z-10" animate={shouldReduceMotion ? {} : { rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
               <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-lg border border-[#C8D6E5]">
                 <Cloud className="h-6 w-6 text-[#FF9900]" />
               </div>
               <div className="absolute bottom-4 left-0 h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-lg border border-[#C8D6E5]">
                 <Cloud className="h-6 w-6 text-[#0089D6]" />
               </div>
               <div className="absolute bottom-4 right-0 h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-lg border border-[#C8D6E5]">
                 <Cloud className="h-6 w-6 text-[#4285F4]" />
               </div>
             </motion.div>
          </div>
          <h3 className="font-display text-2xl font-medium sm:text-3xl">Provider Agnostic</h3>
          <div className="mt-8 grid w-full grid-cols-1 gap-4">
            <div className="flex items-center justify-center gap-3 rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <LockKeyhole className="h-5 w-5 text-[#1A9AE6]" />
              <span className="text-sm font-semibold uppercase tracking-wider text-white">Unified Cloud Security</span>
            </div>
          </div>
        </div>
      );

    case "application-availability":
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="relative mb-8 flex items-center justify-center">
             <motion.div animate={shouldReduceMotion ? {} : { rotate: 360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}>
               <RefreshCw className="h-40 w-40 text-[#1A9AE6]/20" strokeWidth={1} />
             </motion.div>
             <div className="absolute inset-0 flex items-center justify-center flex-col">
                <h3 className="font-display text-4xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">99.999%</h3>
             </div>
          </div>
          <p className="mt-2 font-display text-xl text-[#1A9AE6] tracking-widest uppercase">Uptime</p>
          <div className="mt-8 grid w-full grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Zero Downtime</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border border-white/20 bg-white/10 p-4 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
              <span className="text-xs font-semibold uppercase tracking-wider text-white">Always On</span>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative z-10 flex flex-col items-center justify-center text-center">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#005A9E] shadow-xl shadow-[#0078D4]/20 ring-1 ring-white/20">
            <Network className="h-12 w-12 text-white" />
          </div>
          <h3 className="font-display text-2xl font-medium sm:text-3xl">Enterprise Ready</h3>
          <p className="mt-4 max-w-md text-[#E6F3FB]/80">
            ScaleAOn architecture intrinsically solves this challenge with Zero Trust and SDN intelligence at the core.
          </p>
        </div>
      );
  }
}

export function UseCaseClient({ useCaseId }: UseCaseClientProps) {
  const useCase = USE_CASES_CONTENT[useCaseId];
  const shouldReduceMotion = useReducedMotion();

  if (!useCase) {
    return <div>Use case not found.</div>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Determine a primary icon based on the use case (used for the eyebrow tag)
  let PrimaryIcon = Network;
  if (useCaseId.includes("cloud")) PrimaryIcon = CloudCog;
  else if (useCaseId.includes("performance") || useCaseId.includes("availability")) PrimaryIcon = Activity;
  else if (useCaseId.includes("managing")) PrimaryIcon = Globe2;

  const featureIcons = [Zap, ShieldCheck, CheckCircle2, Activity, Network, Globe2];

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#003F72] px-4 py-28 text-white sm:px-6 sm:py-32 xl:flex xl:min-h-[90svh] xl:items-center xl:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,#0078D4_0%,transparent_34%),linear-gradient(135deg,#003F72_0%,#1A1A1A_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent opacity-10" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] xl:gap-16">
          {/* Left Column */}
          <motion.div 
            className="mx-auto max-w-2xl xl:mx-0 xl:max-w-none"
            variants={containerVariants}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
          >
            <motion.div variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#E6F3FB] backdrop-blur-sm xl:mb-8">
              <PrimaryIcon className="h-4 w-4 text-[#1A9AE6]" aria-hidden="true" />
              <span className="tracking-widest uppercase">ENTERPRISE USE CASE</span>
            </motion.div>
            
            <motion.h1 variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="font-display text-4xl leading-tight text-white sm:text-5xl xl:text-[clamp(3rem,4vw,4.5rem)]">
              {useCase.hero.title}
            </motion.h1>
            
            <motion.p variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-6 max-w-xl text-lg leading-8 text-[#E6F3FB] sm:text-xl">
              {useCase.hero.description}
            </motion.p>
            
            <motion.div variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#005A9E] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
              >
                Consult an Architect
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column (Dynamic Visual Panel) */}
          <motion.div 
            className="mt-12 w-full rounded-2xl border border-white/15 bg-white/5 p-3 shadow-2xl shadow-[#1A1A1A]/40 backdrop-blur-md sm:mt-16 xl:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#0D0D0D] to-[#000000] p-8 text-white sm:p-10 min-h-[400px] flex flex-col justify-center ring-1 ring-white/10 shadow-[inset_0_0_40px_rgba(26,154,230,0.05)]">
              {/* Networking Abstract Background */}
              <SpiderWeb shouldReduceMotion={shouldReduceMotion} />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-transparent opacity-80" />
              
              {renderVisual(useCaseId, shouldReduceMotion)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview / Mission Statement */}
      {useCase.overview && (
        <section className="border-b border-[#C8D6E5]/40 bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <motion.div 
            className="mx-auto max-w-4xl text-center"
            initial={shouldReduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={FADE_UP_VARIANTS}
          >
            <p className="font-display text-xl leading-relaxed text-[#1A1A1A] sm:text-2xl sm:leading-loose">
              "{useCase.overview}"
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-[#0078D4]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#005A9E]">The Lavelle Perspective</span>
              <div className="h-[1px] w-12 bg-[#0078D4]" />
            </div>
          </motion.div>
        </section>
      )}

      {/* 3. Features / Benefits Grid */}
      {useCase.features && useCase.features.length > 0 && (
        <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.div 
              className="mx-auto max-w-3xl text-center mb-16"
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={FADE_UP_VARIANTS}
            >
              <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
                Key Advantages
              </h2>
              <p className="mt-4 text-lg text-[#4A4A4A]">
                How the ScaleAOn architecture uniquely delivers on this use case.
              </p>
            </motion.div>
            
            <motion.div 
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              initial={shouldReduceMotion ? "visible" : "hidden"}
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              {useCase.features.map((feature, i) => {
                const Icon = featureIcons[i % featureIcons.length];
                return (
                  <motion.div 
                    key={feature.name} 
                    variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02, transition: { duration: 0.2 } }}
                    className="group relative overflow-hidden rounded-xl border border-[#C8D6E5]/50 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#0078D4]/30"
                  >
                    <div className="absolute top-0 left-0 h-1 w-full bg-[#0078D4] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F3FB] text-[#0078D4] ring-1 ring-[#0078D4]/10 transition-colors duration-300 group-hover:bg-[#0078D4] group-hover:text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-[#1A1A1A]">{feature.name}</h3>
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

      {/* 4. Bottom CTA */}
      <section className="bg-[#003F72] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8 relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,#005A9E_0%,transparent_70%)] opacity-50" />
        <motion.div 
          className="mx-auto max-w-4xl text-center"
          initial={shouldReduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="font-display text-3xl sm:text-4xl text-white">
            Ready to deploy {useCase.hero.title}?
          </motion.h2>
          <motion.p variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-6 text-lg text-[#E6F3FB]/80">
            Speak with our enterprise networking experts to see how ScaleAOn SD-WAN can transform your infrastructure today.
          </motion.p>
          <motion.div variants={shouldReduceMotion ? {} : FADE_UP_VARIANTS} className="mt-10">
             <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-[#003F72] transition hover:bg-[#E6F3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
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
