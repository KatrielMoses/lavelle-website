"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import type { AboutStat } from "@/lib/about-content";

interface AboutStatsProps {
  kicker: string;
  title?: string;
  stats: AboutStat[];
  variant?: "light" | "dark";
}

function useCountUp(target: string, run: boolean, duration = 1600) {
  // Extract the leading numeric portion (digits + optional decimal point) of the stat
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
      // ease-out-cubic
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

interface StatRowProps {
  stat: AboutStat;
  run: boolean;
  index: number;
  shouldReduceMotion: boolean;
  isDark: boolean;
}

function StatRow({ stat, run, index, shouldReduceMotion, isDark }: StatRowProps) {
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
      <p
        className={`font-display text-4xl sm:text-5xl lg:text-6xl ${
          isDark ? "text-white" : "text-[#003F72]"
        }`}
      >
        {shouldReduceMotion ? stat.value : display}
      </p>
      <p
        className={`mt-3 text-sm font-medium sm:text-base ${
          isDark ? "text-[#E6F3FB]" : "text-[#4A4A4A]"
        }`}
      >
        {stat.label}
      </p>
    </motion.div>
  );
}

export function AboutStats({ kicker, title, stats, variant = "dark" }: AboutStatsProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();
  const isDark = variant === "dark";

  return (
    <section
      ref={ref}
      className={`px-4 py-16 sm:px-6 sm:py-20 lg:px-8 ${
        isDark
          ? "bg-[#003F72] text-white"
          : "bg-[#F7FAFD] text-[#1A1A1A]"
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p
            className={`text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm ${
              isDark ? "text-[#1A9AE6]" : "text-[#0078D4]"
            }`}
          >
            {kicker}
          </p>
          {title && (
            <h2
              className={`mt-3 font-display text-2xl sm:text-3xl ${
                isDark ? "text-white" : "text-[#1A1A1A]"
              }`}
            >
              {title}
            </h2>
          )}
        </div>
        <div className="mt-10 grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-x-8">
          {stats.map((s, i) => (
            <StatRow
              key={s.label}
              stat={s}
              run={inView}
              index={i}
              shouldReduceMotion={Boolean(shouldReduceMotion)}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
