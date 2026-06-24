// ── Types ─────────────────────────────────────────────────────────────────

export interface PartnerFeature {
  name: string;
  description: string;
}

export interface PartnerPageContent {
  id: string;
  hero: {
    title: string;
    description: string;
  };
  overview?: string;
  features: PartnerFeature[];
}

export interface PartnerTier {
  id: "authorized" | "gold" | "platinum";
  name: string;
  badge: string;
  tagline: string;
  description: string;
  perks: string[];
  minDeal: string;
  accent: "blue" | "mid" | "royal";
}

export interface PartnerStat {
  value: string;
  suffix?: string;
  label: string;
}

export interface PartnerBenefit {
  title: string;
  description: string;
  icon: "TrendingUp" | "GraduationCap" | "ShieldCheck" | "Workflow" | "PiggyBank" | "Handshake" | "Megaphone" | "Rocket";
}

export interface PartnerStep {
  number: string;
  title: string;
  description: string;
}

export interface PartnerTestimonial {
  quote: string;
  metric: string;
  author: string;
  role: string;
  company: string;
}

export interface PartnerLocation {
  id: string;
  name: string;
  /** Display name shown on the panel — usually the suburb/area, e.g. "Kurla West" */
  city: string;
  /** Metro grouping key used to cluster pins on the map, e.g. "Mumbai" */
  region: string;
  state: string;
  tier: "Distributor" | "Integrator" | "Cloud Service Provider";
  contactName?: string;
  phone?: string;
  email: string;
  // Approximate lat/lng for the partner's physical office — used to plot the
  // animated map. When several partners share a region we use the region's
  // centroid on the map and show all partners in the side panel on click.
  lat: number;
  lng: number;
}

// ── Partner Program content ───────────────────────────────────────────────

export const PARTNER_HERO = {
  eyebrow: "Lavelle Partner Network",
  title: "Sell the network India runs on.",
  command: "Partner with the company that powers three out of every five enterprise networks in India.",
  description:
    "A small, deliberate network of system integrators, distributors, and cloud service providers who take Lavelle to every corner of the country. If you have skin in the Indian enterprise market, this is the partnership you want.",
  primaryCta: { label: "Apply to Join", href: "/contact?subject=partner-program" },
  secondaryCta: { label: "Find a Partner", href: "/partners/locator" },
};

export const PARTNER_STATS: PartnerStat[] = [
  { value: "200", suffix: "+", label: "Certified partners across India" },
  { value: "120", suffix: " Cr+", label: "Pipeline generated with partners in FY24" },
  { value: "32", label: "Cities with active partner presence" },
  { value: "94", suffix: "%", label: "Partner retention year-over-year" },
];

export const PARTNER_TIERS: PartnerTier[] = [
  {
    id: "authorized",
    name: "Authorized",
    badge: "Tier I",
    tagline: "Start selling. Learn fast.",
    description:
      "Entry into the Lavelle Partner Network. Ideal for regional SIs and value-added resellers who want to add SD-WAN to their portfolio without long ramp-up times.",
    perks: [
      "Online certification for sales and pre-sales engineers",
      "Standard deal-registration protection",
      "Access to the Lavelle Partner Portal and knowledge base",
      "Co-branded marketing collateral",
      "Email and chat support during business hours",
    ],
    minDeal: "Minimum 4 certified engineers",
    accent: "blue",
  },
  {
    id: "gold",
    name: "Gold",
    badge: "Tier II",
    tagline: "Co-sell. Co-build.",
    description:
      "For partners with a healthy enterprise book and dedicated networking practice. Gold partners get joint go-to-market, deeper discounts, and direct access to Lavelle solution architects.",
    perks: [
      "Everything in Authorized, plus:",
      "Joint go-to-market planning with Lavelle's regional sales leads",
      "Up to 28% volume discount on hardware and licenses",
      "Free POC equipment for qualified opportunities",
      "Dedicated channel manager and 24×5 priority support",
      "MDF eligibility for joint marketing events",
    ],
    minDeal: "₹1.5 Cr annual sell-through commitment",
    accent: "mid",
  },
  {
    id: "platinum",
    name: "Platinum",
    badge: "Tier III",
    tagline: "The inner circle.",
    description:
      "Reserved for the top decile of Lavelle partners — large system integrators and distributors who own strategic accounts. Platinum partners share roadmap, share wins, and get invited to the table early.",
    perks: [
      "Everything in Gold, plus:",
      "Early access to product roadmap and beta programmes",
      "Joint solution development with Lavelle engineering",
      "Executive sponsor and quarterly business reviews",
      "Highest volume discount and quarterly rebate programme",
      "Featured placement on lavellenetworks.com",
      "Direct line into Lavelle's product and leadership teams",
    ],
    minDeal: "₹5 Cr annual sell-through, executive sponsorship",
    accent: "royal",
  },
];

export const PARTNER_BENEFITS: PartnerBenefit[] = [
  {
    icon: "TrendingUp",
    title: "Differentiated revenue",
    description:
      "Sell the only SD-WAN platform that owns three out of every five enterprise networks in India. Higher margins, stickier renewals, and a story your customers will remember.",
  },
  {
    icon: "GraduationCap",
    title: "World-class enablement",
    description:
      "Free certification tracks for sales, pre-sales, and delivery engineers. Live labs, recorded sessions, and quarterly bootcamps led by Lavelle solution architects.",
  },
  {
    icon: "ShieldCheck",
    title: "Deal protection",
    description:
      "Register opportunities, get protected. We will not go around you, and we will not undercut your pricing on registered deals. Period.",
  },
  {
    icon: "Workflow",
    title: "Co-sell motion",
    description:
      "Gold and Platinum partners get joint pipeline reviews with Lavelle's regional sales leadership. We bring the technology; you bring the customer relationship. Together we close.",
  },
  {
    icon: "PiggyBank",
    title: "Margin and MDF",
    description:
      "Up to 35% margin on hardware and licenses, plus structured MDF for Gold and Platinum partners running joint demand-generation campaigns.",
  },
  {
    icon: "Handshake",
    title: "Dedicated channel team",
    description:
      "Every Gold and Platinum partner gets a named channel manager. Real human, real phone number, real accountability. Not a ticketing portal.",
  },
  {
    icon: "Megaphone",
    title: "Co-marketed wins",
    description:
      "Joint press releases, joint case studies, joint webinars. We put your logo next to ours when the customer lets us.",
  },
  {
    icon: "Rocket",
    title: "Fast-track onboarding",
    description:
      "Most partners complete certification and place their first order within 30 days. We do not bury you in process.",
  },
];

export const PARTNER_STEPS: PartnerStep[] = [
  {
    number: "01",
    title: "Apply",
    description:
      "Tell us about your business, your customer base, and why you want to partner with Lavelle. The form takes ten minutes; we respond within five business days.",
  },
  {
    number: "02",
    title: "Get Certified",
    description:
      "Put at least four engineers through the Lavelle SD-WAN Sales and Technical tracks. Free, online, and self-paced. Most partners finish in under three weeks.",
  },
  {
    number: "03",
    title: "Register Your First Deal",
    description:
      "Once certified, register an opportunity in the partner portal. We confirm within 48 hours, lock in deal protection, and assign a co-sell contact if you are Gold or above.",
  },
  {
    number: "04",
    title: "Grow",
    description:
      "Quarterly business reviews with your channel manager. Annual tier upgrades based on performance. The partners who do the work get invited up.",
  },
];

export const PARTNER_TESTIMONIALS: PartnerTestimonial[] = [
  {
    quote:
      "Lavelle is the only SD-WAN vendor in India that consistently treats partners like partners. We have grown our SD-WAN book five times in three years and a meaningful share of that is because of the co-sell motion.",
    metric: "5× SD-WAN revenue in 3 years",
    author: "Channel Head",
    role: "Channel Head",
    company: "National System Integrator, Gold Partner",
  },
  {
    quote:
      "Deal protection actually means something here. We registered an opportunity, they respected it, and we closed it together. That is rare in this market.",
    metric: "Zero deal-poaching incidents in 2024",
    author: "Founder",
    role: "Founder",
    company: "Boutique Network SI, Platinum Partner",
  },
];

export const PROGRAM = {
  id: "program",
  hero: PARTNER_HERO,
  stats: PARTNER_STATS,
  tiers: PARTNER_TIERS,
  benefits: PARTNER_BENEFITS,
  steps: PARTNER_STEPS,
  testimonials: PARTNER_TESTIMONIALS,
  overview:
    "Expand revenue opportunities and accelerate your business. Lavelle Networks next generation WAN solutions are being used across top BFSI, Retail, Manufacturing, and eCommerce companies. Our Customer experience and time to delivery is rated as the best in the market.",
  features: [
    {
      name: "Expand Revenue Opportunities",
      description: "Take advantage of Lavelle Networks' market presence and continued penetration into the Enterprise market.",
    },
    {
      name: "Differentiated WAN Services",
      description: "Become one of our Cloud Service Providers and opt to provide SD-WAN as a service to your customers, offering Opex-based services and higher margins.",
    },
    {
      name: "Increase Market Share",
      description: "Be part of the exploding SD-WAN growth story and increase your market share in an $8B+ industry.",
    },
    {
      name: "Solve Hybrid WAN Challenges",
      description: "Help your customers address the challenges of Hybrid WAN, making it secure, cost-effective, and easy to manage.",
    },
  ],
};

// ── Partner Locator content ───────────────────────────────────────────────

export const PARTNER_LOCATIONS: PartnerLocation[] = [
  {
    id: "flair-network-systems",
    name: "Flair Network Systems Pvt. Ltd.",
    city: "Pune",
    region: "Pune",
    state: "Maharashtra",
    tier: "Integrator",
    phone: "+91 9011577778",
    email: "info@flairnetworksystems.com",
    lat: 18.5204,
    lng: 73.8567,
  },
  {
    id: "caudate-technologies",
    name: "Caudate Technologies Pvt Ltd",
    city: "Thane West",
    region: "Mumbai",
    state: "Maharashtra",
    tier: "Integrator",
    contactName: "Vaseem Mulla",
    phone: "+91-9820908013",
    email: "vaseem.mulla@caudatetech.com",
    lat: 19.2183,
    lng: 72.9781,
  },
  {
    id: "shell-networks",
    name: "Shell Networks and Solutions Limited",
    city: "Hyderabad",
    region: "Hyderabad",
    state: "Telangana",
    tier: "Integrator",
    contactName: "Ramakrishna",
    phone: "+91-98480 47072",
    email: "ramakrishna@shellnetworks.com",
    lat: 17.385,
    lng: 78.4867,
  },
  {
    id: "ingram-micro",
    name: "Ingram Micro India Private Limited",
    city: "Vikhroli (W)",
    region: "Mumbai",
    state: "Maharashtra",
    tier: "Distributor",
    contactName: "Rajendra Nandan",
    phone: "+91-9892078115",
    email: "rajendra.nandan@ingrammicro.com",
    lat: 19.1136,
    lng: 72.9342,
  },
  {
    id: "texonic-instruments",
    name: "Texonic Instruments",
    city: "Indira Nagar",
    region: "Bangalore",
    state: "Karnataka",
    tier: "Distributor",
    contactName: "Bharath",
    phone: "+91-9844046360",
    email: "bharath@texonicinstruments.com",
    lat: 12.9784,
    lng: 77.6408,
  },
  {
    id: "vis-networks",
    name: "VIS Networks",
    city: "Koramangala",
    region: "Bangalore",
    state: "Karnataka",
    tier: "Integrator",
    phone: "080 4545 3300",
    email: "salesenquiry@visnet.in",
    lat: 12.9352,
    lng: 77.6245,
  },
  {
    id: "presto-infosolutions",
    name: "Presto Infosolutions Pvt Ltd",
    city: "East Kailash",
    region: "Delhi",
    state: "Delhi",
    tier: "Integrator",
    email: "info@presto.co.in",
    lat: 28.5426,
    lng: 77.2519,
  },
  {
    id: "agc-networks",
    name: "AGC Networks",
    city: "Kurla West",
    region: "Mumbai",
    state: "Maharashtra",
    tier: "Cloud Service Provider",
    phone: "022 66617272",
    email: "india-alliances@agcnetworks.com",
    lat: 19.0822,
    lng: 72.8796,
  },
];

export const LOCATOR_HERO = {
  eyebrow: "Find a Lavelle Partner",
  title: "Talk to someone who already knows your network.",
  description:
    "Lavelle partners are certified, audited, and accountable. Every name on this map has shipped at least one production deployment in the last twelve months.",
  primaryCta: { label: "Apply to Join the Network", href: "/contact?subject=partner-program" },
};

export const LOCATOR_STATS = [
  { value: "32", label: "Cities with active partners" },
  { value: "8", label: "States covered today" },
  { value: "24×7", label: "Support on Platinum accounts" },
  { value: "48 hr", label: "Average response on registered deals" },
];

export const LOCATOR = {
  id: "locator",
  hero: {
    title: "Lavelle Partner Locator",
    description: "Find authorized partners in your area.",
  },
  overview:
    "The Lavelle Partner Network is here to help with WAN Solutions and Cloud Networking requirements. Connect with our trusted distribution and integration partners across the region.",
  features: PARTNER_LOCATIONS.map((p) => ({
    name: p.name,
    description: [
      p.city,
      p.state,
      p.phone,
      p.email,
    ]
      .filter(Boolean)
      .join(" | "),
  })),
};

// ── Backwards-compatible export (used by old page.tsx imports) ────────────

export const PARTNERS_CONTENT: Record<string, PartnerPageContent> = {
  program: PROGRAM,
  locator: LOCATOR,
};
