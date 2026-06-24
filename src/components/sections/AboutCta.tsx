"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { AboutClosingCta } from "@/lib/about-content";

interface AboutCtaProps {
  content: AboutClosingCta;
}

export function AboutCta({ content }: AboutCtaProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#003F72] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,#005A9E_0%,transparent_60%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-[#0078D4] opacity-20 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1A9AE6] sm:text-sm">
            Next Step
          </p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-5xl">
            {content.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#E6F3FB] sm:text-xl">
            {content.description}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
          <Link
            href={content.primary.href}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-semibold text-[#003F72] transition hover:bg-[#E6F3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
          >
            {content.primary.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {content.secondary && (
            <Link
              href={content.secondary.href}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            >
              {content.secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
