import type { Variants } from "framer-motion";

// Cubic bezier tuple — Framer Motion requires [number,number,number,number]
const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
};

export const fadeUpSm: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
};

export const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT_EXPO } },
};

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const staggerSlow: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
