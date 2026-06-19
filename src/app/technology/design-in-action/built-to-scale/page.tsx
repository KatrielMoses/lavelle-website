import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "Built to Scale | Lavelle Networks",
  description: "Horizontally scalable SD-WAN platform resulting in cost-effective and agile networks.",
};

export default function ScalePage() {
  return (
    <main>
      <TechClient techId="built-to-scale" />
    </main>
  );
}
