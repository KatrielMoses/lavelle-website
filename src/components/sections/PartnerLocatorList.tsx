"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Search, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import type { PartnerLocation } from "@/lib/partners-content";

interface PartnerLocatorListProps {
  partners: PartnerLocation[];
}

type TierFilter = "All" | PartnerLocation["tier"];

const TIER_BADGE: Record<PartnerLocation["tier"], { dot: string; ring: string; label: string }> = {
  Distributor: { dot: "bg-[#1A9AE6]", ring: "ring-[#1A9AE6]/40", label: "Distributor" },
  Integrator: { dot: "bg-[#0078D4]", ring: "ring-[#0078D4]/40", label: "Integrator" },
  "Cloud Service Provider": { dot: "bg-[#003F72]", ring: "ring-[#003F72]/60", label: "Cloud Service Provider" },
};

const FILTER_PILLS: TierFilter[] = ["All", "Distributor", "Integrator", "Cloud Service Provider"];

export function PartnerLocatorList({ partners }: PartnerLocatorListProps) {
  const shouldReduce = useReducedMotion();
  const [tier, setTier] = useState<TierFilter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return partners.filter((p) => {
      if (tier !== "All" && p.tier !== tier) return false;
      if (!q) return true;
      const haystack = `${p.name} ${p.city} ${p.state} ${p.email}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [partners, tier, query]);

  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0078D4] sm:text-sm">
            Every partner, one list
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Search by name, city, or partner type.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#4A4A4A] sm:text-lg">
            Same data as the map, sorted for quick lookup. Every contact on this list has been audited in the last twelve months.
          </p>
        </div>

        {/* Search + filter */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8899AA]" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by company, city, or email…"
              aria-label="Search partners"
              className="w-full rounded-lg border border-[#C8D6E5] bg-white py-3 pl-11 pr-4 text-sm text-[#1A1A1A] placeholder:text-[#8899AA] transition focus:border-[#0078D4] focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTER_PILLS.map((t) => {
              const isActive = tier === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTier(t)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                    isActive
                      ? "border-[#0078D4] bg-[#0078D4] text-white shadow-sm"
                      : "border-[#C8D6E5] bg-white text-[#4A4A4A] hover:border-[#0078D4] hover:text-[#0078D4]"
                  }`}
                  aria-pressed={isActive}
                >
                  {t === "All" ? "All Tiers" : t}
                </button>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-4xl text-xs uppercase tracking-[0.15em] text-[#8899AA]">
          Showing {filtered.length} of {partners.length} partners
        </p>

        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((partner, i) => {
              const tier = TIER_BADGE[partner.tier];
              const TierIcon: ComponentType<LucideProps> = MapPin;
              return (
                <motion.li
                  key={partner.id}
                  layout
                  initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                  exit={shouldReduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: (i % 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full flex-col rounded-xl border border-[#C8D6E5]/60 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0078D4]/40 hover:shadow-lg hover:shadow-[#0078D4]/5"
                >
                  <div className="flex items-start gap-3">
                    <span className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#E6F3FB] ring-2 ${tier.ring}`}>
                      <span className={`h-2.5 w-2.5 rounded-full ${tier.dot}`} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-base text-[#1A1A1A] sm:text-lg">{partner.name}</p>
                      <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0078D4]">
                        {tier.label}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-2 text-sm text-[#4A4A4A]">
                    <p className="flex items-start gap-2">
                      <TierIcon className="mt-0.5 h-4 w-4 flex-none text-[#0078D4]" aria-hidden="true" />
                      <span>
                        {partner.city}, {partner.state}
                      </span>
                    </p>
                    {partner.phone && (
                      <a
                        href={`tel:${partner.phone.replace(/\s+/g, "")}`}
                        className="flex items-center gap-2 text-[#4A4A4A] transition hover:text-[#0078D4]"
                      >
                        <Phone className="h-4 w-4 flex-none text-[#0078D4]" aria-hidden="true" />
                        {partner.phone}
                      </a>
                    )}
                    <a
                      href={`mailto:${partner.email}`}
                      className="flex items-start gap-2 break-all text-[#4A4A4A] transition hover:text-[#0078D4]"
                    >
                      <Mail className="mt-0.5 h-4 w-4 flex-none text-[#0078D4]" aria-hidden="true" />
                      {partner.email}
                    </a>
                  </div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>

        {filtered.length === 0 && (
          <p className="mx-auto mt-12 max-w-md text-center text-sm text-[#4A4A4A]">
            No partners match those filters. Try clearing your search or picking a different tier.
          </p>
        )}
      </div>
    </section>
  );
}
