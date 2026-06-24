"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  X,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { PartnerLocation } from "@/lib/partners-content";

interface PartnerMapProps {
  partners: PartnerLocation[];
}

// ── Geographic projection ──────────────────────────────────────────────────
// The India SVG in /public/images/maps is a 1000×1000 viewBox. Parsing the
// path shows the country's painted bounds are roughly x: 75→925 and
// y: 45.5→954.5 (includes Andaman & Nicobar islands in the lower-right).
// India's geographic envelope is lat 8°→37° and lng 68°→97°.
// Linear map: lat/lng → percentage of the SVG canvas, which is also the
// percentage of the container because the container is aspect-square.
const SVG_BBOX = {
  minLng: 68,
  maxLng: 97,
  minLat: 8,
  maxLat: 37,
  xLeft: 7.5,
  xRight: 92.5,
  yTop: 4.55,
  yBottom: 95.45,
};

function projectToPercent(lat: number, lng: number): { x: number; y: number } {
  const clampedLat = Math.min(Math.max(lat, SVG_BBOX.minLat), SVG_BBOX.maxLat);
  const clampedLng = Math.min(Math.max(lng, SVG_BBOX.minLng), SVG_BBOX.maxLng);
  const xPct = SVG_BBOX.xLeft + ((clampedLng - SVG_BBOX.minLng) / (SVG_BBOX.maxLng - SVG_BBOX.minLng)) * (SVG_BBOX.xRight - SVG_BBOX.xLeft);
  const yPct = SVG_BBOX.yTop + ((SVG_BBOX.maxLat - clampedLat) / (SVG_BBOX.maxLat - SVG_BBOX.minLat)) * (SVG_BBOX.yBottom - SVG_BBOX.yTop);
  return { x: xPct, y: yPct };
}

// ── Tier color tokens ──────────────────────────────────────────────────────
const TIER_STYLES: Record<PartnerLocation["tier"], { ring: string; bg: string; label: string; icon: ComponentType<LucideProps> }> = {
  Distributor: {
    ring: "ring-[#1A9AE6]",
    bg: "bg-[#1A9AE6]",
    label: "Distributor",
    icon: Building2,
  },
  Integrator: {
    ring: "ring-[#0078D4]",
    bg: "bg-[#0078D4]",
    label: "Integrator",
    icon: Building2,
  },
  "Cloud Service Provider": {
    ring: "ring-[#E6F3FB]",
    bg: "bg-[#003F72]",
    label: "Cloud Service Provider",
    icon: Building2,
  },
};

// ── Component ──────────────────────────────────────────────────────────────
export function PartnerMap({ partners }: PartnerMapProps) {
  const shouldReduce = useReducedMotion();
  const [activeCity, setActiveCity] = useState<string | null>(null);

  // Group partners by region (metro area) — pins show one per region
  const cityGroups = useMemo(() => {
    const map = new Map<string, PartnerLocation[]>();
    for (const p of partners) {
      const key = p.region;
      const arr = map.get(key) ?? [];
      arr.push(p);
      map.set(key, arr);
    }
    return Array.from(map.entries()).map(([region, items]) => {
      // Use centroid of all partner coordinates in the region so the pin
      // sits at the visual centre of the cluster, not at one office.
      const lat = items.reduce((s, p) => s + p.lat, 0) / items.length;
      const lng = items.reduce((s, p) => s + p.lng, 0) / items.length;
      return {
        region,
        state: items[0].state,
        lat,
        lng,
        partners: items,
      };
    });
  }, [partners]);

  // Auto-open the largest region group on mount for instant feedback
  useEffect(() => {
    if (!activeCity && cityGroups.length > 0) {
      const largest = [...cityGroups].sort((a, b) => b.partners.length - a.partners.length)[0];
      setActiveCity(largest.region);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeGroup = cityGroups.find((g) => g.region === activeCity) ?? null;

  return (
    <section id="partner-map" className="relative isolate overflow-hidden bg-[#003F72] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8">

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A9AE6] sm:text-sm">
              The network on a map
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl lg:text-5xl">
              Every pin is a certified Lavelle partner.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-white/65 sm:text-base">
              Click any pin to see the partners in that city, their tier, and how to reach them. The map updates as the network grows.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.15em] text-white/65">
            {(Object.keys(TIER_STYLES) as PartnerLocation["tier"][]).map((tier) => (
              <div key={tier} className="flex items-center gap-2">
                <span className={`inline-block h-2.5 w-2.5 rounded-full ${TIER_STYLES[tier].bg} ring-2 ${TIER_STYLES[tier].ring}`} />
                {TIER_STYLES[tier].label}
              </div>
            ))}
          </div>
        </div>

        {/* Map + panel grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_360px] lg:gap-8">
          {/* The map */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#021530]/90 p-4 sm:p-6">
            <div className="relative aspect-square w-full">
              {/* India outline */}
              <Image
                src="/images/maps/india-network-map.svg"
                alt="Map of India showing Lavelle partner locations"
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="pointer-events-none select-none object-contain"
              />

              {/* Pin layer */}
              <div className="absolute inset-0">
                {cityGroups.map((group, i) => {
                  const { x, y } = projectToPercent(group.lat, group.lng);
                  const isActive = activeCity === group.region;
                  const primaryTier = group.partners[0].tier;
                  const style = TIER_STYLES[primaryTier];
                  const hasCount = group.partners.length > 1;

                  return (
                    <motion.button
                      key={group.region}
                      type="button"
                      aria-label={`${group.partners.length} Lavelle ${group.partners.length === 1 ? "partner" : "partners"} in ${group.region}`}
                      onClick={() => setActiveCity(group.region)}
                      initial={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                      whileInView={shouldReduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.4, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      style={{ left: `${x}%`, top: `${y}%` }}
                      className="group absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#021530]"
                    >
                      {/* Outer pulse — subtle, smaller */}
                      <span
                        aria-hidden
                        className={`pointer-events-none absolute inset-0 rounded-full ${style.bg} opacity-25 ${!shouldReduce ? "animate-ping" : ""}`}
                        style={{ animationDuration: "2.6s", animationIterationCount: "infinite" }}
                      />
                      {/* Pin body */}
                      <span
                        className={`relative inline-flex h-3.5 w-3.5 items-center justify-center rounded-full ring-2 ring-offset-2 ring-offset-[#021530] transition-transform duration-300 ${
                          style.bg
                        } ${style.ring} ${isActive ? "scale-125" : "group-hover:scale-110"}`}
                      >
                        {hasCount && (
                          <span className="absolute -right-3 -top-3 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full border border-[#021530] bg-[#E6F3FB] px-1 text-[10px] font-semibold leading-none text-[#003F72] shadow-md">
                            {group.partners.length}
                          </span>
                        )}
                      </span>

                      {/* City label */}
                      <span
                        className={`pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-[#003F72]/95 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white shadow-lg transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                      >
                        {group.region}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.15em] text-white/45">
              <span>Pan-India coverage · {cityGroups.length} active cities</span>
              <span>Updated quarterly</span>
            </div>
          </div>

          {/* Side panel */}
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-8">
            <AnimatePresence mode="wait">
              {activeGroup ? (
                <motion.div
                  key={activeGroup.region}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A9AE6]">
                        {activeGroup.partners.length === 1 ? "Lavelle Partner" : `${activeGroup.partners.length} Lavelle Partners`}
                      </p>
                      <h3 className="mt-1 font-display text-2xl text-white sm:text-3xl">
                        {activeGroup.region}
                      </h3>
                      <p className="mt-1 text-sm text-white/55">
                        <MapPin className="mr-1 inline-block h-3 w-3" aria-hidden="true" />
                        {activeGroup.state}, India
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveCity(null)}
                      className="rounded-md p-1 text-white/50 transition hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
                      aria-label="Clear selection"
                    >
                      <X className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {activeGroup.partners.map((partner, idx) => {
                      const tierStyle = TIER_STYLES[partner.tier];
                      const TierIcon = tierStyle.icon;
                      return (
                        <div
                          key={partner.id}
                          className={`rounded-xl border border-white/10 bg-white/[0.04] p-4 ${
                            idx === 0 && activeGroup.partners.length > 1 ? "" : ""
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <span className={`mt-0.5 inline-flex h-9 w-9 flex-none items-center justify-center rounded-lg ${tierStyle.bg}/20 ring-1 ${tierStyle.ring}`}>
                              <TierIcon className="h-4 w-4 text-white" aria-hidden="true" />
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="font-display text-base text-white">{partner.name}</p>
                              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#1A9AE6]">
                                {partner.tier}
                              </p>

                              <div className="mt-3 space-y-1.5 text-sm text-white/70">
                                {partner.contactName && (
                                  <p>{partner.contactName}</p>
                                )}
                                {partner.phone && (
                                  <a
                                    href={`tel:${partner.phone.replace(/\s+/g, "")}`}
                                    className="flex items-center gap-2 text-white/75 transition hover:text-white"
                                  >
                                    <Phone className="h-3.5 w-3.5 text-[#1A9AE6]" aria-hidden="true" />
                                    {partner.phone}
                                  </a>
                                )}
                                <a
                                  href={`mailto:${partner.email}`}
                                  className="flex items-center gap-2 break-all text-white/75 transition hover:text-white"
                                >
                                  <Mail className="h-3.5 w-3.5 flex-none text-[#1A9AE6]" aria-hidden="true" />
                                  {partner.email}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-full min-h-[280px] flex-col items-center justify-center text-center"
                >
                  <MapPin className="mb-3 h-8 w-8 text-[#1A9AE6]" aria-hidden="true" />
                  <p className="text-sm text-white/65">
                    Select a pin on the map to see partners in that city.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
