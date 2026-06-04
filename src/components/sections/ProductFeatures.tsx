"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProductFeature } from "@/lib/products-content";
import { CheckCircle2 } from "lucide-react";

interface ProductFeaturesProps {
  features: ProductFeature[];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={shouldReduceMotion ? {} : itemVariants}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-display text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl">
            Software Capabilities & Features
          </h2>
          <p className="mt-4 text-lg text-[#4A4A4A]">
            Discover the powerful features built into our platform.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={shouldReduceMotion ? {} : itemVariants}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 font-display text-xl leading-7 text-[#1A1A1A]">
                  <CheckCircle2 className="h-6 w-6 flex-none text-[#0078D4]" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-[#4A4A4A]">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
