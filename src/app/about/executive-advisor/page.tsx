import type { Metadata } from "next";
import { ABOUT_CONTENT } from "@/lib/about-content";
import { AboutHero } from "@/components/sections/AboutHero";
import { AdvisorSpotlight } from "@/components/sections/AdvisorSpotlight";
import { AboutCta } from "@/components/sections/AboutCta";

export const metadata: Metadata = {
  title: "Executive Advisors | Lavelle Networks",
  description:
    "Strategic counsel from India's tech operators. The board of advisors and executive evangelists shaping Lavelle Networks' future.",
  alternates: { canonical: "/about/executive-advisor" },
  openGraph: {
    title: "Executive Advisors | Lavelle Networks",
    description:
      "Strategic counsel from India's tech operators. The board of advisors and executive evangelists shaping Lavelle Networks' future.",
    url: "/about/executive-advisor",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Lavelle Networks Executive Advisors",
      },
    ],
  },
};

const advisors = ABOUT_CONTENT["executive-advisor"];

if (!advisors) {
  throw new Error("About executive-advisor content is missing.");
}

export default function ExecutiveAdvisorPage() {
  return (
    <div className="bg-white">
      <AboutHero content={advisors.hero} />

      {advisors.boardIntro && advisors.advisors && (
        <AdvisorSpotlight intro={advisors.boardIntro} advisors={advisors.advisors} />
      )}

      {advisors.closingCta && <AboutCta content={advisors.closingCta} />}
    </div>
  );
}
