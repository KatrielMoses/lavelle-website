"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUpFast, stagger } from "@/lib/motion";

const containerVariants = stagger(0.1);

export function CtaBanner() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <section ref={ref} className="bg-[#003F72] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={shouldReduce ? undefined : containerVariants}
          className="max-w-2xl"
        >
          <motion.p
            variants={shouldReduce ? undefined : fadeUpFast}
            className="text-xs font-sans font-semibold uppercase tracking-widest text-[#1A9AE6] mb-4"
          >
            Get started
          </motion.p>
          <motion.h2
            variants={shouldReduce ? undefined : fadeUpFast}
            className="font-display text-5xl lg:text-6xl text-white mb-6"
          >
            Ready to modernise your network?
          </motion.h2>
          <motion.p
            variants={shouldReduce ? undefined : fadeUpFast}
            className="text-white/60 font-sans text-lg leading-relaxed mb-10"
          >
            Talk to our solutions team. We&apos;ll map your current network, identify the gaps,
            and show you exactly what Lavelle can do.
          </motion.p>
          <motion.div
            variants={shouldReduce ? undefined : fadeUpFast}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg" className="group">
                Request a Demo
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="lg" className="gap-2">
                <Phone size={16} />
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
