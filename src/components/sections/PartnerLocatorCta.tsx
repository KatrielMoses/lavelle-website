"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Users } from "lucide-react";

export function PartnerLocatorCta() {
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
        <div className="flex items-start gap-5">
          <div className="hidden h-14 w-14 flex-none items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 sm:flex">
            <Users className="h-7 w-7 text-[#1A9AE6]" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A9AE6]">
              Don&apos;t see your city?
            </p>
            <h2 className="mt-2 font-display text-3xl tracking-tight text-white sm:text-4xl">
              We are adding two new cities every quarter.
            </h2>
            <p className="mt-3 max-w-xl text-base text-white/70">
              If you have enterprise customers in a city we do not yet cover, tell us. Strong demand shortens the queue.
            </p>
          </div>
        </div>

        <Link
          href="/contact?subject=partner-locator"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-4 text-base font-semibold text-[#003F72] transition hover:bg-[#E6F3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] sm:w-auto"
        >
          Nominate a partner
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </motion.div>
    </section>
  );
}
