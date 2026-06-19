import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "Built to be Programmable | Lavelle Networks",
  description: "API Centric Approach to Control Plane Communications.",
};

export default function ProgrammablePage() {
  return (
    <main>
      <TechClient techId="built-to-be-programmable" />
    </main>
  );
}
