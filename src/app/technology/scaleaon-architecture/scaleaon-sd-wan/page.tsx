import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "ScaleAOn SD-WAN | Lavelle Networks",
  description: "Next generation SD-WAN platform and the most comprehensive portfolio for transforming your enterprise network.",
};

export default function ScaleAOnSDWANPage() {
  return (
    <main>
      <TechClient techId="scaleaon-sd-wan" />
    </main>
  );
}
