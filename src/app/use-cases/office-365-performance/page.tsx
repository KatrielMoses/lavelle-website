import type { Metadata } from "next";
import { UseCaseClient } from "@/components/sections/UseCaseClient";

export const metadata: Metadata = {
  title: "Office 365 Performance | Lavelle Networks",
  description: "ScaleAOn SD-WAN for Enterprise Applications.",
};

export default function Office365Page() {
  return <UseCaseClient useCaseId="office-365-performance" />;
}
