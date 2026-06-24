import type { Metadata } from "next";
import {
  RESOURCES_HERO,
  RESOURCES_FEATURED,
  RESOURCES_ITEMS,
  RESOURCES_UTILITY,
} from "@/lib/resources-content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { ResourcesHero } from "@/components/sections/ResourcesHero";
import { ResourcesStats } from "@/components/sections/ResourcesStats";
import { ResourceFeatured } from "@/components/sections/ResourceFeatured";
import { ResourceGrid } from "@/components/sections/ResourceGrid";
import { ResourcesUtility } from "@/components/sections/ResourcesUtility";
import { ResourcesCta } from "@/components/sections/ResourcesCta";

export const metadata: Metadata = {
  title: "Resources | Lavelle Networks",
  description:
    "Case studies, technical docs, whitepapers, ebooks, and videos from the team that built India's largest SD-WAN. Read by 100,000+ network professionals.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Lavelle Networks Resources",
    description:
      "Everything we have learned shipping India's largest SD-WAN. Original work, written by the engineers who actually deployed the network.",
    url: "/resources",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Lavelle Networks Resources",
      },
    ],
  },
};

const resourcesJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Lavelle Networks Resources",
  url: `${SITE_URL}/resources`,
  description: RESOURCES_HERO.description,
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

export default function ResourcesPage() {
  return (
    <div className="bg-[#021530]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesJsonLd) }}
      />

      <ResourcesHero />
      <ResourcesStats />
      <ResourceFeatured item={RESOURCES_FEATURED} />
      <ResourceGrid items={RESOURCES_ITEMS} />
      <ResourcesUtility links={RESOURCES_UTILITY} />
      <ResourcesCta />
    </div>
  );
}
