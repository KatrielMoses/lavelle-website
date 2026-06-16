import type { Metadata } from "next";
import { UseCaseClient } from "@/components/sections/UseCaseClient";

export const metadata: Metadata = {
  title: "Application Availability | Lavelle Networks",
  description: "Ensure maximum availability for critical enterprise and SaaS applications.",
};

export default function ApplicationAvailabilityPage() {
  return <UseCaseClient useCaseId="application-availability" />;
}
