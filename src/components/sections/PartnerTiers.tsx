"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check, Crown } from "lucide-react";
import type { PartnerTier } from "@/lib/partners-content";

interface PartnerTiersProps {
  tiers: PartnerTier[];
}

const ACCENT_STYLES: Record<PartnerTier["accent"], { ring: string; badge: string; chip: string; crown: boolean }> = {
  blue: {
    ring: "from-[#0078D4]/30 to-transparent",
    badge: "border-[#0078D4]/30 bg-[#0078D4]/10 text-[#1A9AE6]",
    chip: "text-[#0078D4]",
    crown: false,
  },
  mid: {
    ring: "from-[#1A9AE6]/40 to-transparent",
    badge: "border-[#1A9AE6]/40 bg-[#1A9AE6]/10 text-[#E6F3FB]",
    chip: "text-[#1A9AE6]",
    crown: false,
  },
  royal: {
    ring: "from-[#E6F3FB]/35 via-[#1A9AE6]/25 to-transparent",
    badge: "border-[#E6F3FB]/30 bg-[#E6F3FB]/10 text-white",
    chip: "text-[#1A9AE6]",
    crown: true,
  },
};

export function PartnerTiers({ tiers }: PartnerTiersProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#021530] px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A9AE6] sm:text-sm">
            Three tiers. One standard.
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
            The partner ladder.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
            You start at Authorized. You earn your way up. Every tier gives you more margin, more protection, and more direct access to Lavelle&apos;s engineering and sales leadership.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {tiers.map((tier, i) => {
            const accent = ACCENT_STYLES[tier.accent];
            const isFeatured = tier.accent === "royal";
            return (
              <motion.div
                key={tier.id}
                initial={shouldReduce ? undefined : { opacity: 0, y: 30 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border ${
                  isFeatured ? "border-[#1A9AE6]/40 md:-translate-y-2 md:scale-[1.02]" : "border-white/10"
                } bg-white/[0.03] p-8 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1`}
              >
                {/* Tier glow ring */}
                <div className={`pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br ${accent.ring} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} aria-hidden />

                {/* Featured ribbon */}
                {isFeatured && (
                  <div className="absolute right-6 top-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#1A9AE6] to-[#0078D4] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white shadow-lg shadow-[#0078D4]/30">
                    <Crown className="h-3 w-3" aria-hidden="true" />
                    Inner Circle
                  </div>
                )}

                <div className={`mb-5 inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${accent.badge}`}>
                  {tier.badge}
                </div>

                <h3 className="font-display text-3xl tracking-tight text-white sm:text-4xl">{tier.name}</h3>
                <p className={`mt-2 font-display text-lg ${accent.chip}`}>{tier.tagline}</p>
                <p className="mt-5 text-sm leading-7 text-white/70">{tier.description}</p>

                <ul className="mt-7 space-y-3">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm leading-6 text-white/80">
                      <span className={`mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ${isFeatured ? "bg-[#1A9AE6]/30" : "bg-white/10"}`}>
                        <Check className="h-3 w-3 text-[#1A9AE6]" aria-hidden="true" />
                      </span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">Minimum commitment</p>
                  <p className="mt-1 text-sm text-white/85">{tier.minDeal}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
