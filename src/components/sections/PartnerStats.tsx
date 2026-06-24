"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import type { PartnerStat } from "@/lib/partners-content";

interface PartnerStatsProps {
  stats: PartnerStat[];
}

function useCountUp(target: string, run: boolean, duration = 1600) {
  const match = target.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const numeric = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const [value, setValue] = useState(run && numeric !== null ? 0 : numeric ?? 0);

  useEffect(() => {
    if (!run || numeric === null) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(numeric * eased);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, numeric, duration]);

  if (numeric === null) return target;
  const isFloat = !Number.isInteger(numeric);
  return `${isFloat ? value.toFixed(2) : Math.round(value)}${suffix}`;
}

function StatRow({ stat, run, index, shouldReduceMotion }: { stat: PartnerStat; run: boolean; index: number; shouldReduceMotion: boolean }) {
  const display = useCountUp(stat.value, run);
  const variants = shouldReduceMotion
    ? undefined
    : {
        hidden: { opacity: 0, y: 18 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
      };

  return (
    <motion.div
      initial="hidden"
      animate={run ? "visible" : "hidden"}
      variants={variants}
      className="text-center md:text-left"
    >
      <p className="font-display text-4xl text-white sm:text-5xl lg:text-6xl">
        {shouldReduceMotion ? `${stat.value}${stat.suffix ?? ""}` : display}
      </p>
      <p className="mt-3 text-sm font-medium text-[#E6F3FB] sm:text-base">{stat.label}</p>
    </motion.div>
  );
}

export function PartnerStats({ stats }: PartnerStatsProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#003F72] px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A9AE6] sm:text-sm">
            By the numbers
          </p>
          <h2 className="mt-3 font-display text-2xl text-white sm:text-3xl">
            The network, on one page.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {stats.map((s, i) => (
            <StatRow
              key={s.label}
              stat={s}
              run={inView}
              index={i}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
