import type { Metadata } from "next";
import { SOLUTIONS_CONTENT } from "@/lib/solutions-content";
import { FeaturesClient } from "./features-client";

export const metadata: Metadata = {
  title: "CloudStation Features | Lavelle Networks",
  description: "Explore the comprehensive SD-WAN features of Lavelle Networks' CloudStation Orchestrator.",
  alternates: {
    canonical: "/solutions/features",
  },
};

export default function FeaturesPage() {
  const solution = SOLUTIONS_CONTENT["features"];

  if (!solution) throw new Error("Features content is missing.");

  return <FeaturesClient solution={solution} />;
}
