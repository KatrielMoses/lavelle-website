"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SolutionPageContent } from "@/lib/solutions-content";

export function FeaturesClient({ solution }: { solution: SolutionPageContent }) {
  const categories = solution.featureCategories || [];
  const [activeCategoryId, setActiveCategoryId] = useState(categories[0]?.id || "");

  const activeCategory = categories.find((c) => c.id === activeCategoryId);

  return (
    <div className="bg-[#1A1A1A] min-h-screen text-white selection:bg-[#1A9AE6] selection:text-white">
      {/* Royal Hero */}
      <section className="relative isolate pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        {/* Subtle royal glow behind the title */}
        <div className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 opacity-20 bg-[radial-gradient(ellipse_at_top,#1A9AE6_0%,transparent_70%)]" />
        
        <div className="mx-auto max-w-5xl">
          {solution.hero.eyebrow && (
            <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#1A9AE6] uppercase mb-8">
              {solution.hero.eyebrow}
            </p>
          )}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-[5rem] leading-[1.1] tracking-tight text-white">
            The Orchestrator<br className="hidden sm:block" /> of the Enterprise Edge
          </h1>
          <p className="mt-10 text-lg sm:text-2xl text-white/60 leading-relaxed max-w-3xl mx-auto font-light">
            {solution.hero.description}
          </p>
        </div>
      </section>

      {/* Interactive Feature Console */}
      <section className="relative px-4 pb-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24 items-start">
            
            {/* Left: Category Navigation */}
            <div className="sticky top-32 flex flex-col gap-6 border-l border-white/10 pl-6">
              {categories.map((category) => {
                const isActive = activeCategoryId === category.id;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategoryId(category.id)}
                    className="relative text-left group transition-all duration-300"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="absolute -left-[25px] top-0 bottom-0 w-[2px] bg-[#1A9AE6]"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <h3 
                      className={`font-display text-xl sm:text-2xl transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {category.title}
                    </h3>
                  </button>
                );
              })}
            </div>

            {/* Right: Feature Content */}
            <div className="min-h-[600px] pt-4 lg:pt-0">
              <AnimatePresence mode="wait">
                {activeCategory && (
                  <motion.div
                    key={activeCategory.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col gap-16"
                  >
                    {/* Category Header */}
                    <div className="border-b border-white/10 pb-8">
                      <h2 className="font-display text-3xl sm:text-4xl text-white">
                        {activeCategory.title}
                      </h2>
                      <p className="mt-4 text-xl text-[#1A9AE6] font-light max-w-2xl">
                        {activeCategory.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="flex flex-col gap-12">
                      {activeCategory.items.map((item) => (
                        <div key={item.title} className="group">
                          <h3 className="font-display text-2xl text-white flex items-center gap-4">
                            <span className="h-2 w-2 rounded-full bg-[#003F72] transition-colors group-hover:bg-[#1A9AE6]" />
                            {item.title}
                          </h3>
                          <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-3xl pl-6">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-[#003F72] relative isolate px-4 py-24 sm:px-6 sm:py-32 lg:px-8 text-center overflow-hidden">
         <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom,#1A9AE6_0%,transparent_60%)] opacity-30" />
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-4xl sm:text-5xl text-white">
            Ready to upgrade your enterprise edge?
          </h2>
          <div className="mt-12 flex justify-center">
             <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 text-lg font-semibold text-[#003F72] transition hover:bg-[#E6F3FB] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Schedule an Architecture Briefing
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
