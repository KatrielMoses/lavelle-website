"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code, ShieldAlert, AlertTriangle, type LucideProps } from "lucide-react";
import type { ComponentType } from "react";
import type { ResourceUtilityLink } from "@/lib/resources-content";

interface ResourcesUtilityProps {
  links: ResourceUtilityLink[];
}

const ICON: Record<ResourceUtilityLink["icon"], ComponentType<LucideProps>> = {
  Code,
  ShieldAlert,
  AlertTriangle,
};

export function ResourcesUtility({ links }: ResourcesUtilityProps) {
  const shouldReduce = useReducedMotion();

  return (
    <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#0078D4] sm:text-sm">
            Developer & Operations
          </p>
          <h2 className="mt-3 font-display text-2xl tracking-tight text-[#1A1A1A] sm:text-3xl lg:text-4xl">
            For the engineers running Lavelle in production.
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {links.map((link, i) => {
            const Icon = ICON[link.icon];
            return (
              <motion.li
                key={link.title}
                initial={shouldReduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={shouldReduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={link.href}
                  className="group flex h-full flex-col rounded-xl border border-[#C8D6E5]/60 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0078D4]/40 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#003F72]/5">
                    <Icon className="h-5 w-5 text-[#003F72]" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg text-[#1A1A1A] sm:text-xl">
                    {link.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-[#4A4A4A]">
                    {link.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0078D4] transition-colors group-hover:text-[#005A9E]">
                    Open
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
