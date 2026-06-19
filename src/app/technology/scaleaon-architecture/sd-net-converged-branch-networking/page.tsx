import type { Metadata } from "next";
import { TechClient } from "@/components/sections/TechClient";

export const metadata: Metadata = {
  title: "SD-NET Converged Branch Networking | Lavelle Networks",
  description: "Zero touch and zero trust based distributed deployment.",
};

export default function SDNETBranchPage() {
  return (
    <main>
      <TechClient techId="sd-net-converged-branch-networking" />
    </main>
  );
}
