import type { Metadata } from "next";
import { UseCaseClient } from "@/components/sections/UseCaseClient";

export const metadata: Metadata = {
  title: "Hybrid WAN with ScaleAOn | Lavelle Networks",
  description: "Secure and best-in-class SD-WAN for modern enterprise application needs.",
};

export default function HybridWanPage() {
  return <UseCaseClient useCaseId="hybrid-wan-with-scaleaon" />;
}
