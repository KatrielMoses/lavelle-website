import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "SD-WAN Deep Dive | Lavelle Networks",
  description: "Understand the core mechanics, benefits, and architectural shifts of the Software-Defined Wide Area Network.",
};

export default function SDWANPage() {
  return (
    <main>
      <TechClient techId="sd-wan" />
    </main>
  );
}
