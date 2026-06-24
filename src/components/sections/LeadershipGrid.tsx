"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Crown } from "lucide-react";
import type { AboutLeader } from "@/lib/about-content";

interface LeadershipGridProps {
  intro: string;
  leaders: AboutLeader[];
}

function LeaderAvatar({ initials, size = "md" }: { initials: string; size?: "lg" | "md" }) {
  const dim = size === "lg" ? "h-24 w-24 text-2xl" : "h-16 w-16 text-base";
  return (
    <div
      className={`relative flex ${dim} flex-none items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#003F72] via-[#005A9E] to-[#0078D4] font-display font-medium text-white ring-1 ring-white/30 shadow-lg shadow-[#0078D4]/15`}
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

export function LeadershipGrid({ intro, leaders }: LeadershipGridProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
  };

  const featured = leaders.find((l) => l.featured);
  const rest = leaders.filter((l) => !l.featured);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={shouldReduceMotion ? undefined : cardVariants}
          className="mx-auto max-w-3xl text-center text-lg leading-8 text-[#4A4A4A] sm:text-xl sm:leading-9"
        >
          {intro}
        </motion.p>

        {featured && (
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={shouldReduceMotion ? undefined : cardVariants}
            className="mt-14 overflow-hidden rounded-3xl border border-[#C8D6E5]/50 bg-[#F7FAFD] shadow-sm sm:mt-16"
          >
            <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[auto_1fr] lg:gap-12 lg:p-14">
              <div className="flex flex-col items-center gap-4 lg:items-start">
                <LeaderAvatar initials={featured.initials} size="lg" />
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0078D4]/30 bg-[#E6F3FB] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#005A9E]">
                  <Crown className="h-3.5 w-3.5" aria-hidden="true" />
                  Leadership
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0078D4]">
                  {featured.role}
                </p>
                <h3 className="mt-3 font-display text-3xl text-[#1A1A1A] sm:text-4xl">
                  {featured.name}
                </h3>
                <p className="mt-5 text-base leading-7 text-[#4A4A4A] sm:text-lg sm:leading-8">
                  {featured.bio}
                </p>
              </div>
            </div>
          </motion.article>
        )}

        <div className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {rest.map((leader) => (
            <motion.article
              key={leader.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={shouldReduceMotion ? undefined : cardVariants}
              className="group flex h-full flex-col gap-5 rounded-2xl border border-[#C8D6E5]/50 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#0078D4]/40 hover:shadow-xl hover:shadow-[#0078D4]/5 sm:p-8"
            >
              <LeaderAvatar initials={leader.initials} />
              <div>
                <h4 className="font-display text-xl text-[#1A1A1A] sm:text-2xl">
                  {leader.name}
                </h4>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-[#0078D4]">
                  {leader.role}
                </p>
                <p className="mt-4 text-sm leading-6 text-[#4A4A4A] sm:text-base sm:leading-7">
                  {leader.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
