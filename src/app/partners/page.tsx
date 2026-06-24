import type { Metadata } from "next";
import {
  PARTNER_HERO,
  PARTNER_STATS,
  PARTNER_TIERS,
  PARTNER_BENEFITS,
  PARTNER_STEPS,
  PARTNER_TESTIMONIALS,
} from "@/lib/partners-content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { PartnerHero } from "@/components/sections/PartnerHero";
import { PartnerStats } from "@/components/sections/PartnerStats";
import { PartnerTiers } from "@/components/sections/PartnerTiers";
import { PartnerBenefits } from "@/components/sections/PartnerBenefits";
import { PartnerProcess } from "@/components/sections/PartnerProcess";
import { PartnerTestimonials } from "@/components/sections/PartnerTestimonials";
import { PartnerProgramCta } from "@/components/sections/PartnerProgramCta";

export const metadata: Metadata = {
  title: "Partner Program | Lavelle Networks",
  description:
    "Join the Lavelle Networks Partner Network. Three tiers — Authorized, Gold, Platinum — for SIs, distributors, and CSPs selling into India's largest enterprises.",
  alternates: { canonical: "/partners" },
  openGraph: {
    title: "Lavelle Networks Partner Program",
    description:
      "Sell the SD-WAN platform that powers three out of every five enterprise networks in India.",
    url: "/partners",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "Lavelle Networks Partner Program",
      },
    ],
  },
};

const partnerJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: `${SITE_NAME} Partner Program`,
  url: `${SITE_URL}/partners`,
  description: PARTNER_HERO.description,
  parentOrganization: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

export default function PartnerProgramPage() {
  return (
    <div className="bg-[#021530]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerJsonLd) }}
      />

      <PartnerHero />
      <PartnerStats stats={PARTNER_STATS} />
      <PartnerTiers tiers={PARTNER_TIERS} />
      <PartnerBenefits benefits={PARTNER_BENEFITS} />
      <PartnerProcess steps={PARTNER_STEPS} />
      <PartnerTestimonials testimonials={PARTNER_TESTIMONIALS} />
      <PartnerProgramCta />
    </div>
  );
}
