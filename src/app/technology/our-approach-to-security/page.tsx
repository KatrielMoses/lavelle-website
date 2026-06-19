import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "Our Approach to Security | Lavelle Networks",
  description: "Advanced defense layers with strict isolation and anomaly detection.",
};

export default function SecurityPage() {
  return (
    <main>
      <TechClient techId="our-approach-to-security" />
    </main>
  );
}
