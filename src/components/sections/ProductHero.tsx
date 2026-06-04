"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface ProductHeroProps {
  title: string;
  description: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

export function ProductHero({ title, description }: ProductHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const variants = shouldReduceMotion ? {} : containerVariants;
  const childVariants = shouldReduceMotion ? {} : itemVariants;

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-[#003F72] px-4 py-24 sm:px-6 lg:px-8">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#0078D4] opacity-20 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-[#1A9AE6] opacity-10 blur-[120px]" />
      </div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <motion.h1
          variants={childVariants}
          className="mb-6 font-display text-4xl tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          {title}
        </motion.h1>

        <motion.p
          variants={childVariants}
          className="mx-auto mb-10 max-w-2xl text-lg text-[#E6F3FB] sm:text-xl lg:text-2xl"
        >
          {description}
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="primary" size="lg">
            Request a Demo
          </Button>
          <Button href="/scaleaon-sdwan-datasheet.php" variant="secondary" size="lg">
            Download Datasheet
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
