"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ProductModel } from "@/lib/products-content";

interface ProductModelsProps {
  title?: string;
  description?: string;
  models: ProductModel[];
}

export function ProductModels({
  title = "Available Models",
  description,
  models,
}: ProductModelsProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#F7FAFD] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-[#1A1A1A] sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-[#4A4A4A]">{description}</p>
          )}
        </div>

        <motion.div
          variants={shouldReduceMotion ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {models.map((model) => (
            <motion.div
              key={model.name}
              variants={shouldReduceMotion ? {} : itemVariants}
              className="flex flex-col justify-between rounded-xl border border-[#C8D6E5]/40 bg-white p-8 text-center shadow-sm transition-all duration-200 ease-in-out hover:scale-[1.02] hover:shadow-md"
            >
              <div>
                <h3 className="font-display text-xl text-[#1A1A1A]">
                  {model.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#4A4A4A]">
                  {model.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
