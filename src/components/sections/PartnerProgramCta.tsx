"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";

export function PartnerProgramCta() {
  const shouldReduce = useReducedMotion();

  return (
    <section className="relative isolate overflow-hidden bg-[#021530] px-4 py-24 text-white sm:px-6 sm:py-32 lg:px-8">

      <motion.div
        initial={shouldReduce ? undefined : { opacity: 0, y: 24 }}
        whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A9AE6] sm:text-sm">
          Apply to the partner network
        </p>
        <h2 className="mt-4 font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          We say yes to roughly one in five applicants.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
          Quality over quantity. Every Lavelle partner is reviewed quarterly. If your customers would benefit from what we build, and you can deliver it with the rigour it deserves, we want to hear from you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact?subject=partner-program"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-semibold text-[#003F72] transition hover:bg-[#E6F3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] sm:w-auto"
          >
            Start Application
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
          <Link
            href="mailto:partners@lavellenetworks.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB] sm:w-auto"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            partners@lavellenetworks.com
          </Link>
        </div>

        <p className="mt-8 text-xs font-sans uppercase tracking-[0.25em] text-white/45">
          Application reviewed within 5 business days
        </p>
      </motion.div>
    </section>
  );
}
