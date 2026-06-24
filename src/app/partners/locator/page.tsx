import type { Metadata } from "next";
import {
  PARTNER_LOCATIONS,
  LOCATOR_HERO,
  LOCATOR_STATS,
} from "@/lib/partners-content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { PartnerLocatorHero } from "@/components/sections/PartnerLocatorHero";
import { PartnerMap } from "@/components/sections/PartnerMap";
import { PartnerLocatorList } from "@/components/sections/PartnerLocatorList";
import { PartnerStats } from "@/components/sections/PartnerStats";
import { PartnerLocatorCta } from "@/components/sections/PartnerLocatorCta";

export const metadata: Metadata = {
  title: "Partner Locator | Lavelle Networks",
  description:
    "Find certified Lavelle Networks partners across India. View the partner map, filter by city or partner type, and get in touch with regional SIs and distributors.",
  alternates: { canonical: "/partners/locator" },
  openGraph: {
    title: "Lavelle Networks Partner Locator",
    description:
      "Every pin is a certified Lavelle partner. Find an integrator or distributor near you.",
    url: "/partners/locator",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Lavelle Networks Partner Locator",
      },
    ],
  },
};

const partnerCount = PARTNER_LOCATIONS.length;
const cityCount = new Set(PARTNER_LOCATIONS.map((p) => p.city)).size;

const locatorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `${SITE_NAME} Partner Locator`,
  url: `${SITE_URL}/partners/locator`,
  description: LOCATOR_HERO.description,
  parentOrganization: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  areaServed: { "@type": "Country", name: "India" },
  numberOfEmployees: partnerCount,
};

export default function PartnerLocatorPage() {
  return (
    <div className="bg-[#021530]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locatorJsonLd) }}
      />

      <PartnerLocatorHero />

      <PartnerMap partners={PARTNER_LOCATIONS} />

      <PartnerStats
        stats={[
          { value: String(cityCount), label: "Cities with active partners" },
          { value: String(partnerCount), label: "Certified partners listed today" },
          { value: "24×7", label: "Support coverage on Platinum accounts" },
          { value: "48 hr", label: "Average response time on registered deals" },
        ]}
      />

      <PartnerLocatorList partners={PARTNER_LOCATIONS} />

      <PartnerLocatorCta />
    </div>
  );
}
