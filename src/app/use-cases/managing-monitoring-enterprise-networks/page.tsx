import type { Metadata } from "next";
import { UseCaseClient } from "@/components/sections/UseCaseClient";

export const metadata: Metadata = {
  title: "Managing & Monitoring | Lavelle Networks",
  description: "Holistic and granular control of your enterprise networks.",
};

export default function ManagingMonitoringPage() {
  return <UseCaseClient useCaseId="managing-monitoring-enterprise-networks" />;
}
