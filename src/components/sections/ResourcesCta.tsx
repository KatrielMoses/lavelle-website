"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function ResourcesCta() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#021530] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <motion.div
        initial={shouldReduce ? undefined : { opacity: 0, y: 20 }}
        whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center sm:flex-row sm:text-left"
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A9AE6] sm:text-sm">
            New work, monthly
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get notified when we publish something new.
          </h2>
          <p className="mt-3 max-w-xl text-base text-white/70">
            One short email a month. New case studies, technical deep-dives, and the occasional field report. No marketing fluff.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4 sm:items-end">
          <Link
            href="/contact?subject=resource-updates"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-base font-semibold text-[#003F72] transition hover:bg-[#E6F3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] sm:w-auto"
          >
            Subscribe
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            href="mailto:resources@lavellenetworks.com"
            className="inline-flex w-full items-center justify-center gap-2 text-sm font-medium text-white/70 transition hover:text-white sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            resources@lavellenetworks.com
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
