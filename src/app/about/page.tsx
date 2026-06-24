import type { Metadata } from "next";
import { ABOUT_CONTENT } from "@/lib/about-content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { AboutHero } from "@/components/sections/AboutHero";
import { AboutStory } from "@/components/sections/AboutStory";
import { ValuePillars } from "@/components/sections/ValuePillars";
import { AboutOrigin } from "@/components/sections/AboutOrigin";
import { AboutStats } from "@/components/sections/AboutStats";
import { AboutTimeline } from "@/components/sections/AboutTimeline";
import { AboutCta } from "@/components/sections/AboutCta";

export const metadata: Metadata = {
  title: "About Lavelle Networks | India's #1 SD-WAN Company",
  description:
    "Lavelle Networks is the SD-WAN and enterprise networking backbone of modern India. Three out of every five enterprise networks in India run on the platform we built.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Lavelle Networks | India's #1 SD-WAN",
    description:
      "Built in Bangalore. Deployed across the nation. The company that owns Indian enterprise networking.",
    url: "/about",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "About Lavelle Networks",
      },
    ],
  },
};

const company = ABOUT_CONTENT["company"];

if (!company) {
  throw new Error("About company content is missing.");
}

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: `${SITE_URL}/about`,
  description: company.hero.description,
  foundingLocation: "Bangalore, India",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      <AboutHero content={company.hero} />

      {company.story && (
        <AboutStory
          kicker={company.story.kicker}
          title={company.story.title}
          paragraphs={company.story.paragraphs}
          pullQuote={{
            text: "Three out of every five enterprise networks in India run on Lavelle SD-WAN.",
            attribution: "Lavelle Networks, 2024",
          }}
        />
      )}

      {company.values && company.values.length > 0 && (
        <ValuePillars
          kicker="What We Stand For"
          title="The four principles that run the company."
          description="These aren't posters on a wall. They're how we hire, how we ship, and how we treat the people who trust us with their networks."
          values={company.values}
        />
      )}

      {company.stats && company.stats.length > 0 && (
        <AboutStats kicker="By the Numbers" stats={company.stats} variant="dark" />
      )}

      {company.origin && (
        <AboutOrigin
          title={company.origin.title}
          description={company.origin.description}
          cards={company.origin.cards}
        />
      )}

      {company.timeline && company.timeline.length > 0 && (
        <AboutTimeline
          kicker="Milestones"
          title="How we got here."
          description="From a single road in Bangalore to the network backbone of Indian enterprise — a short history of how Lavelle got to where it is."
          entries={company.timeline}
        />
      )}

      {company.closingCta && <AboutCta content={company.closingCta} />}
    </div>
  );
}
