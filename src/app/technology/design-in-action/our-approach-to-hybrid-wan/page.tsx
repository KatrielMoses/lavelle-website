import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "Our Approach to Hybrid WAN | Lavelle Networks",
  description: "Dynamic Path Selection and intelligent path control.",
};

export default function HybridWANPage() {
  return (
    <main>
      <TechClient techId="our-approach-to-hybrid-wan" />
    </main>
  );
}
