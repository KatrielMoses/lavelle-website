"use client";

import { motion } from "framer-motion";

export function CyberGrid({ shouldReduceMotion }: { shouldReduceMotion: boolean | null }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,154,230,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(26,154,230,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      
      {/* Moving Vertical Scanline */}
      <motion.div
        className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#1A9AE6] to-transparent shadow-[0_0_8px_2px_rgba(26,154,230,0.4)]"
        initial={{ left: "-10%" }}
        animate={shouldReduceMotion ? {} : { left: "110%" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Moving Horizontal Scanline */}
      <motion.div
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1A9AE6] to-transparent shadow-[0_0_8px_2px_rgba(26,154,230,0.4)]"
        initial={{ top: "-10%" }}
        animate={shouldReduceMotion ? {} : { top: "110%" }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
      />
    </div>
  );
}
