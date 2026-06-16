import type { Metadata } from "next";
import { UseCaseClient } from "@/components/sections/UseCaseClient";

export const metadata: Metadata = {
  title: "Multi-Cloud Networking | Lavelle Networks",
  description: "Migrate to the cloud successfully with ScaleAOn SD-WAN.",
};

export default function MultiCloudPage() {
  return <UseCaseClient useCaseId="multicloud" />;
}
