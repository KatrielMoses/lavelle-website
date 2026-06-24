"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { AboutAdvisor } from "@/lib/about-content";

interface AdvisorSpotlightProps {
  intro: string;
  advisors: AboutAdvisor[];
}

function AdvisorAvatar({ initials }: { initials: string }) {
  return (
    <div
      className="relative flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#003F72] via-[#005A9E] to-[#0078D4] font-display text-xl font-medium text-white ring-1 ring-white/30 shadow-lg shadow-[#0078D4]/15 sm:h-24 sm:w-24 sm:text-2xl"
      aria-hidden="true"
    >
      <span className="select-none tracking-wide">{initials}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.35)_0%,transparent_55%)]"
      />
    </div>
  );
}

export function AdvisorSpotlight({ intro, advisors }: AdvisorSpotlightProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  return (
    <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={shouldReduceMotion ? undefined : cardVariants}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0078D4] sm:text-sm">
            The Board
          </p>
          <h2 className="mt-3 font-display text-3xl text-[#1A1A1A] sm:text-4xl lg:text-5xl">
            Counsel from operators who&apos;ve built what we&apos;re building.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#4A4A4A]">{intro}</p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {advisors.map((advisor) => (
            <motion.article
              key={advisor.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={shouldReduceMotion ? undefined : cardVariants}
              className="group flex h-full flex-col gap-5 rounded-2xl border border-[#C8D6E5]/50 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-[#0078D4]/40 hover:shadow-xl hover:shadow-[#0078D4]/5 sm:p-10"
            >
              <AdvisorAvatar initials={advisor.initials} />
              <div>
                <h3 className="font-display text-2xl text-[#1A1A1A] sm:text-[1.75rem]">
                  {advisor.name}
                </h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#0078D4]">
                  {advisor.role}
                </p>
                <p className="mt-5 text-base leading-7 text-[#4A4A4A] sm:text-lg sm:leading-8">
                  {advisor.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
