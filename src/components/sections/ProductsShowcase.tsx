"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Cpu, BarChart2, Radio, Cloud } from "lucide-react";
import { PRODUCTS } from "@/lib/content";
import { fadeUp, stagger } from "@/lib/motion";

const containerVariants = stagger(0.1);

const PRODUCT_ICONS: Record<string, React.ElementType> = {
  "cloudstation-controller": Cpu,
  "cloudstation-insights": BarChart2,
  "cloudport-edge": Radio,
  "cloudport-gateway": Cloud,
};

const PRODUCT_ACCENT: Record<string, string> = {
  "cloudstation-controller": "#0078D4",
  "cloudstation-insights":   "#1A9AE6",
  "cloudport-edge":          "#005A9E",
  "cloudport-gateway":       "#003F72",
};

export function ProductsShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section ref={ref} className="section-off-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-[#0078D4] mb-3">
            Products
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl text-[#1A1A1A] mb-5">
            Built for enterprise scale.
          </h2>
          <p className="text-[#4A4A4A] font-sans text-lg leading-relaxed">
            Four purpose-built products that together form the most capable SD-WAN platform deployed across Indian enterprise networks.
          </p>
        </div>

        <motion.div
          variants={shouldReduce ? undefined : containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {PRODUCTS.map((product, i) => {
            const Icon = PRODUCT_ICONS[product.id] ?? Cpu;
            const accent = PRODUCT_ACCENT[product.id] ?? "#0078D4";
            return (
              <motion.div key={product.id} variants={shouldReduce ? undefined : fadeUp}>
                <Link href={product.href} className="block group h-full">
                  <div className="relative h-full rounded-2xl bg-white border border-[#C8D6E5]/40 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0078D4]/8">

                    {/* Accent top bar */}
                    <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />

                    <div className="p-6 lg:p-8 2xl:p-10">
                      {/* Header row */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${accent}18` }}>
                            <Icon size={22} style={{ color: accent }} />
                          </div>
                          <div>
                            <h3 className="font-sans font-semibold text-xl text-[#1A1A1A] group-hover:text-[#0078D4] transition-colors duration-200">
                              {product.name}
                            </h3>
                            <p className="text-xs font-sans font-medium mt-0.5" style={{ color: accent }}>{product.tagline}</p>
                          </div>
                        </div>
                        {/* Product number */}
                        <span className="font-display text-4xl font-semibold text-[#C8D6E5]/60 leading-none">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="text-[#4A4A4A] font-sans text-base leading-relaxed mb-7">
                        {product.description}
                      </p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {product.features.map((f) => (
                          <span key={f} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-sans font-medium bg-[#EEF4FA] text-[#005A9E] border border-[#C8D6E5]/60">
                            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: accent }} />
                            {f}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-sm font-sans font-semibold group-hover:gap-3 transition-all duration-200" style={{ color: accent }}>
                        Learn more <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
