import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "Built to be Simple | Lavelle Networks",
  description: "ScaleAOn is a Fit for Purpose SD-WAN solution.",
};

export default function SimplePage() {
  return (
    <main>
      <TechClient techId="built-to-be-simple" />
    </main>
  );
}
