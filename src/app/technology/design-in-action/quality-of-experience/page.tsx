import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "Quality of Experience | Lavelle Networks",
  description: "Impact of the right SD-WAN for Audio & Video traffic.",
};

export default function QoEPage() {
  return (
    <main>
      <TechClient techId="quality-of-experience" />
    </main>
  );
}
