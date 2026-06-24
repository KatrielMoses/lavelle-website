"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase, FileText, BookOpen, Library, PlayCircle, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import type { ResourceCategory } from "@/lib/resources-content";
import { RESOURCES_STATS, RESOURCES_ITEMS } from "@/lib/resources-content";

const CATEGORY_META: Array<{
  key: ResourceCategory;
  label: string;
  Icon: ComponentType<LucideProps>;
}> = [
  { key: "case-study", label: "Case Studies", Icon: Briefcase },
  { key: "technical-doc", label: "Technical Docs", Icon: FileText },
  { key: "whitepaper", label: "Whitepapers", Icon: Library },
  { key: "ebook", label: "Ebooks", Icon: BookOpen },
  { key: "video", label: "Videos", Icon: PlayCircle },
];

interface ResourcesStatsProps {
  /** Optional click handler — when set, the category chips become filter triggers */
  onSelectCategory?: (category: ResourceCategory | "all") => void;
  activeCategory?: ResourceCategory | "all";
}

export function ResourcesStats({ onSelectCategory, activeCategory }: ResourcesStatsProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section id="library" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0078D4] sm:text-sm">
            The library
          </p>
          <h2 className="mt-3 font-display text-2xl text-[#1A1A1A] sm:text-3xl">
            {RESOURCES_STATS[0].value}+ pieces. Filter by what you need.
          </h2>
        </div>

        {/* Category chips — interactive if handler provided, otherwise static */}
        <div className="mx-auto mb-10 flex max-w-5xl flex-wrap items-center justify-center gap-2 sm:gap-3">
          {onSelectCategory && (
            <button
              type="button"
              onClick={() => onSelectCategory("all")}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                activeCategory === "all" || !activeCategory
                  ? "border-[#0078D4] bg-[#0078D4] text-white shadow-sm"
                  : "border-[#C8D6E5] bg-white text-[#4A4A4A] hover:border-[#0078D4] hover:text-[#0078D4]"
              }`}
              aria-pressed={activeCategory === "all" || !activeCategory}
            >
              All
            </button>
          )}
          {CATEGORY_META.map(({ key, label, Icon }) => {
            const count = RESOURCES_ITEMS.filter((i) => i.category === key).length;
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                type="button"
                onClick={onSelectCategory ? () => onSelectCategory(key) : undefined}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                  isActive
                    ? "border-[#0078D4] bg-[#0078D4] text-white shadow-sm"
                    : "border-[#C8D6E5] bg-white text-[#4A4A4A] hover:border-[#0078D4] hover:text-[#0078D4]"
                } ${onSelectCategory ? "" : "cursor-default"}`}
                aria-pressed={isActive}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                {label}
                <span className={`rounded-full px-1.5 py-0.5 text-[10px] ${isActive ? "bg-white/20 text-white" : "bg-[#E6F3FB] text-[#0078D4]"}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Counts */}
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-x-8">
          {RESOURCES_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={shouldReduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <p className="font-display text-3xl text-[#003F72] sm:text-4xl lg:text-5xl">
                {s.value}{s.suffix ?? ""}
              </p>
              <p className="mt-2 text-xs font-medium text-[#4A4A4A] sm:text-sm">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
