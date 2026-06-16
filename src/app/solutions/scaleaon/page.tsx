import type { Metadata } from "next";
import { ScaleAOnContent } from "@/components/sections/ScaleAOnContent";

export const metadata: Metadata = {
  title: "ScaleAOn Architecture | Lavelle Networks",
  description: "Next-Gen network architecture designed to keep your WAN Always On. Gain Value at Scale, Continuously.",
  alternates: {
    canonical: "/solutions/scaleaon",
  },
  openGraph: {
    title: "ScaleAOn Architecture | Lavelle Networks",
    description: "Gain Value at Scale, Continuously with Lavelle Networks' flagship SDN architecture.",
    url: "/solutions/scaleaon",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "ScaleAOn Architecture by Lavelle Networks",
      },
    ],
  },
};

export default function ScaleAOnPage() {
  return <ScaleAOnContent />;
}
