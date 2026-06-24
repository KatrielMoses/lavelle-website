import type { Metadata } from "next";
import { ABOUT_CONTENT } from "@/lib/about-content";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStats } from "@/components/sections/AboutStats";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";
import { AboutCta } from "@/components/sections/AboutCta";

export const metadata: Metadata = {
  title: "Leadership | Lavelle Networks",
  description:
    "Meet the leaders behind India's #1 SD-WAN. Engineers, operators, and operators-turned-leaders driving growth, product, and customer success at Lavelle Networks.",
  alternates: { canonical: "/about/leadership" },
  openGraph: {
    title: "Leadership | Lavelle Networks",
    description:
      "The people behind India's #1 SD-WAN. Engineering, product, sales, and customer success leadership at Lavelle Networks.",
    url: "/about/leadership",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Lavelle Networks Leadership",
      },
    ],
  },
};

const leadership = ABOUT_CONTENT["leadership"];

if (!leadership) {
  throw new Error("About leadership content is missing.");
}

export default function LeadershipPage() {
  return (
    <div className="bg-white">
      <AboutHero content={leadership.hero} />

      {leadership.leadershipStats && leadership.leadershipStats.length > 0 && (
        <AboutStats
          kicker="The Leadership Team"
          stats={leadership.leadershipStats}
          variant="light"
        />
      )}

      {leadership.leadershipIntro && leadership.leadership && (
        <LeadershipGrid
          intro={leadership.leadershipIntro}
          leaders={leadership.leadership}
        />
      )}

      {leadership.closingCta && <AboutCta content={leadership.closingCta} />}
    </div>
  );
}
