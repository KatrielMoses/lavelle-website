"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  FileText,
  BookOpen,
  Library,
  PlayCircle,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";
import type { ResourceItem, ResourceCategory } from "@/lib/resources-content";
import { PdfViewer } from "@/components/ui/PdfViewer";

interface ResourceGridProps {
  items: ResourceItem[];
}

const CATEGORY_ICON: Record<ResourceCategory, ComponentType<LucideProps>> = {
  "case-study": Briefcase,
  "technical-doc": FileText,
  whitepaper: Library,
  ebook: BookOpen,
  video: PlayCircle,
};

const CATEGORY_LABEL: Record<ResourceCategory, string> = {
  "case-study": "Case Study",
  "technical-doc": "Datasheet",
  whitepaper: "Whitepaper",
  ebook: "Ebook",
  video: "Video",
};

const FILTER_OPTIONS: Array<{ key: ResourceCategory | "all"; label: string }> = [
  { key: "all", label: "All" },
  { key: "case-study", label: "Case Studies" },
  { key: "technical-doc", label: "Technical Docs" },
  { key: "whitepaper", label: "Whitepapers" },
  { key: "ebook", label: "Ebooks" },
  { key: "video", label: "Videos" },
];

export function ResourceGrid({ items }: ResourceGridProps) {
  const shouldReduce = useReducedMotion();
  const [filter, setFilter] = useState<ResourceCategory | "all">("all");
  const [query, setQuery] = useState("");
  const [activePdf, setActivePdf] = useState<{ title: string; url: string; subtitle?: string } | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => {
      if (filter !== "all" && i.category !== filter) return false;
      if (!q) return true;
      const haystack = `${i.title} ${i.description} ${i.meta?.client ?? ""} ${i.meta?.industry ?? ""}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [items, filter, query]);

  const isPdfCategory = (c: ResourceCategory) =>
    c === "case-study" || c === "technical-doc" || c === "whitepaper" || c === "ebook";

  const openPdf = (item: ResourceItem) => {
    if (!item.href) return;
    const subtitleParts: string[] = [];
    if (item.meta?.client) subtitleParts.push(item.meta.client);
    if (item.meta?.industry) subtitleParts.push(item.meta.industry);
    if (item.meta?.pages) subtitleParts.push(`${item.meta.pages} pages`);
    setActivePdf({
      title: item.title,
      url: item.href,
      subtitle: subtitleParts.join(" · "),
    });
  };

  return (
    <section className="bg-white px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0078D4] sm:text-sm">
            The full library
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            {filtered.length} resources. Filter, search, dive in.
          </h2>
        </div>

        {/* Search + filter */}
        <div className="mx-auto mb-10 flex max-w-5xl flex-col items-stretch gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, client, or industry…"
              aria-label="Search resources"
              className="w-full rounded-lg border border-[#C8D6E5] bg-white py-3 pl-4 pr-4 text-sm text-[#1A1A1A] placeholder:text-[#8899AA] transition focus:border-[#0078D4] focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTER_OPTIONS.map((opt) => {
              const isActive = filter === opt.key;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => setFilter(opt.key)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition ${
                    isActive
                      ? "border-[#0078D4] bg-[#0078D4] text-white shadow-sm"
                      : "border-[#C8D6E5] bg-white text-[#4A4A4A] hover:border-[#0078D4] hover:text-[#0078D4]"
                  }`}
                  aria-pressed={isActive}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards */}
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => {
              const Icon = CATEGORY_ICON[item.category];
              const meta = item.meta;
              return (
                <motion.li
                  key={item.id}
                  layout
                  initial={shouldReduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                  animate={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                  exit={shouldReduce ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: (i % 6) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex h-full flex-col rounded-xl border border-[#C8D6E5]/60 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0078D4]/40 hover:shadow-lg hover:shadow-[#0078D4]/5"
                >
                  <div className="mb-5 flex items-start justify-between gap-3">
                    <div className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-[#E6F3FB]">
                      <Icon className="h-5 w-5 text-[#0078D4]" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-[#003F72]/5 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#003F72]">
                      {CATEGORY_LABEL[item.category]}
                    </span>
                  </div>

                  <h3 className="font-display text-lg leading-snug text-[#1A1A1A] sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-7 text-[#4A4A4A]">
                    {item.description}
                  </p>

                  {/* Meta line */}
                  {(meta?.client || meta?.industry || meta?.metric || meta?.year || meta?.pages || meta?.duration) && (
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#8899AA]">
                      {meta.client && <span className="font-medium text-[#1A1A1A]">{meta.client}</span>}
                      {meta.industry && <span className="uppercase tracking-[0.1em]">{meta.industry}</span>}
                      {meta.duration && <span>{meta.duration}</span>}
                      {meta.pages && <span>{meta.pages} pages</span>}
                      {meta.year && <span>{meta.year}</span>}
                    </div>
                  )}

                  {isPdfCategory(item.category) ? (
                    <button
                      type="button"
                      onClick={() => openPdf(item)}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0078D4] transition-colors group-hover:text-[#005A9E]"
                    >
                      {item.category === "ebook" ? "Read" : "Open"}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </button>
                  ) : (
                    <Link
                      href={item.href ?? "/contact"}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0078D4] transition-colors group-hover:text-[#005A9E]"
                    >
                      Watch
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  )}
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>

        {filtered.length === 0 && (
          <p className="mx-auto mt-12 max-w-md text-center text-sm text-[#4A4A4A]">
            No resources match those filters. Try clearing the search or picking a different category.
          </p>
        )}
      </div>

      <PdfViewer
        isOpen={activePdf !== null}
        onClose={() => setActivePdf(null)}
        title={activePdf?.title ?? ""}
        pdfUrl={activePdf?.url ?? ""}
        subtitle={activePdf?.subtitle}
      />
    </section>
  );
}
