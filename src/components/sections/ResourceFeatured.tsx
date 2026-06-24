"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Briefcase, Quote } from "lucide-react";
import type { ResourceItem } from "@/lib/resources-content";
import { PdfViewer } from "@/components/ui/PdfViewer";

interface ResourceFeaturedProps {
  item: ResourceItem;
}

export function ResourceFeatured({ item }: ResourceFeaturedProps) {
  const shouldReduce = useReducedMotion();
  const { title, description, meta } = item;
  const [pdfOpen, setPdfOpen] = useState(false);

  const subtitleParts: string[] = [];
  if (meta?.industry) subtitleParts.push(meta.industry);
  if (meta?.client) subtitleParts.push(meta.client);

  return (
    <section className="bg-[#F7FAFD] px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0078D4] sm:text-sm">
            Featured Case Study
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            The most-read piece in the library this quarter.
          </h2>
        </div>

        <motion.article
          initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 gap-10 overflow-hidden rounded-2xl border border-[#C8D6E5]/60 bg-white p-8 sm:p-12 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:p-16"
        >
          {/* Left: meta + visual identity */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#E6F3FB]">
                <Briefcase className="h-7 w-7 text-[#0078D4]" aria-hidden="true" />
              </div>
              {meta?.industry && (
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0078D4]">
                  {meta.industry}
                </p>
              )}
              <p className="mt-1 font-display text-2xl text-[#1A1A1A] sm:text-3xl">
                {meta?.client}
              </p>
              {meta?.metric && (
                <p className="mt-6 inline-flex items-center rounded-full bg-[#003F72] px-4 py-2 text-sm font-semibold text-white">
                  {meta.metric}
                </p>
              )}
              {meta?.year && (
                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-[#8899AA]">
                  Published {meta.year}
                </p>
              )}
            </div>

            {item.href ? (
              <button
                type="button"
                onClick={() => setPdfOpen(true)}
                className="group mt-10 inline-flex w-fit items-center gap-2 rounded-lg bg-[#0078D4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#005A9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078D4] sm:mt-12"
              >
                Read the case study
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </button>
            ) : (
              <Link
                href="/contact?subject=case-study-request"
                className="group mt-10 inline-flex w-fit items-center gap-2 rounded-lg bg-[#0078D4] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#005A9E] sm:mt-12"
              >
                Request the case study
              </Link>
            )}
          </div>

          {/* Right: pull quote + description */}
          <div className="flex flex-col justify-center">
            <Quote className="mb-4 h-10 w-10 text-[#0078D4]/15" aria-hidden="true" />
            <h3 className="font-display text-2xl leading-tight text-[#1A1A1A] sm:text-3xl lg:text-4xl">
              {title}
            </h3>
            <p className="mt-6 text-base leading-8 text-[#4A4A4A] sm:text-lg">
              {description}
            </p>
          </div>
        </motion.article>
      </div>

      <PdfViewer
        isOpen={pdfOpen}
        onClose={() => setPdfOpen(false)}
        title={title}
        pdfUrl={item.href ?? ""}
        subtitle={subtitleParts.join(" · ")}
      />
    </section>
  );
}
