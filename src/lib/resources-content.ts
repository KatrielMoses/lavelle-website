// ── Types ─────────────────────────────────────────────────────────────────

export type ResourceCategory =
  | "case-study"
  | "technical-doc"
  | "whitepaper"
  | "ebook"
  | "video";

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  category: ResourceCategory;
  /** Optional supporting metadata shown on the card */
  meta?: {
    client?: string;
    industry?: string;
    metric?: string;
    year?: string;
    pages?: number;
    duration?: string;
  };
  /** Optional href for the download/view link */
  href?: string;
}

export interface ResourceUtilityLink {
  title: string;
  description: string;
  href: string;
  icon: "Code" | "ShieldAlert" | "AlertTriangle";
}

export interface ResourcesContent {
  hero: {
    eyebrow: string;
    title: string;
    command: string;
    description: string;
  };
  stats: { value: string; suffix?: string; label: string }[];
  featured: ResourceItem;
  items: ResourceItem[];
  utility: ResourceUtilityLink[];
}

// ── Hero ──────────────────────────────────────────────────────────────────

export const RESOURCES_HERO = {
  eyebrow: "Lavelle Resources",
  title: "Everything we have learned shipping India's largest SD-WAN.",
  command: "Case studies, technical docs, whitepapers, ebooks, and videos — from the team that built it.",
  description:
    "Thirty-plus pieces of original work. Read by 100,000+ network architects, CIOs, and infrastructure leads across India and Southeast Asia. No fluff. Written by the engineers who actually deployed the network.",
  primaryCta: { label: "Talk to an Engineer", href: "/contact" },
  secondaryCta: { label: "Browse Library", href: "#library" },
};

// ── Stats ─────────────────────────────────────────────────────────────────

export const RESOURCES_STATS = [
  { value: "30", suffix: "+", label: "Original resources published" },
  { value: "100k", label: "Network professionals reading" },
  { value: "8", label: "Public case studies" },
  { value: "5", label: "Industries covered in depth" },
];

// ── Featured (one highlighted case study) ────────────────────────────────

export const RESOURCES_FEATURED: ResourceItem = {
  id: "featured-kalupur-bank",
  title: "Kalupur Bank — 70% cost savings across 1,200 branches",
  description:
    "How India's largest cooperative bank replaced a brittle MPLS estate with ScaleAOn SD-WAN, without a single branch going offline during cutover. Network uptime hit 99.99%. Branch IT tickets dropped by half. The CFO called it the easiest business case the bank had ever signed.",
  category: "case-study",
  meta: {
    client: "Kalupur Bank",
    industry: "BFSI",
    metric: "70% cost reduction · 99.99% uptime",
    year: "2023",
  },
  href: "/contact?subject=case-study-kalupur",
};

// ── Library — full item list ──────────────────────────────────────────────

export const RESOURCES_ITEMS: ResourceItem[] = [
  // ── Case Studies ──────────────────────────────────────────────────────
  {
    id: "cs-havells",
    title: "Havells — unbeatable scale and speed",
    description:
      "Transformed network and achieved nearly 100% uptime across all branches using SD-WAN.",
    category: "case-study",
    meta: { client: "Havells", industry: "Manufacturing", year: "2023" },
    href: "/contact?subject=case-study-havells",
  },
  {
    id: "cs-godrej",
    title: "Godrej — network transformation across multiple business lines",
    description:
      "Network transformation using Lavelle SD-WAN across manufacturing plants, retail outlets, and corporate offices.",
    category: "case-study",
    meta: { client: "Godrej", industry: "Conglomerate", year: "2022" },
    href: "/contact?subject=case-study-godrej",
  },
  {
    id: "cs-gokak-mills",
    title: "Gokak Mills — application performance, finally",
    description:
      "Improved application and network performance across mills, depots, and HO using SD-WAN.",
    category: "case-study",
    meta: { client: "Gokak Mills", industry: "Manufacturing", year: "2022" },
    href: "/contact?subject=case-study-gokak",
  },
  {
    id: "cs-swiggy",
    title: "Swiggy — WAN that keeps up with growth",
    description:
      "Transformed WAN with a vision to elevate the quality of life for consumers by offering unparalleled convenience.",
    category: "case-study",
    meta: { client: "Swiggy", industry: "Technology", year: "2023" },
    href: "/contact?subject=case-study-swiggy",
  },
  {
    id: "cs-maxlife",
    title: "MaxLife Insurance — WAN transformation across branches",
    description:
      "Achieved key goals for WAN transformation across multiple branches and field offices.",
    category: "case-study",
    meta: { client: "MaxLife Insurance", industry: "BFSI", year: "2022" },
    href: "/contact?subject=case-study-maxlife",
  },
  {
    id: "cs-retail-dx",
    title: "Retail Digital Transformation 2.0",
    description:
      "1,200+ retail store chain underwent a network transformation to meet the demands of the cloud era.",
    category: "case-study",
    meta: { client: "National Retail Chain", industry: "Retail", year: "2023" },
    href: "/contact?subject=case-study-retail",
  },
  {
    id: "cs-public-healthcare",
    title: "Connecting Public Health Care with SD-WAN",
    description:
      "Impact a national project at scale, and proving that India will go digital faster than anyone can imagine.",
    category: "case-study",
    meta: { client: "State Health Department", industry: "Public Sector", year: "2023" },
    href: "/contact?subject=case-study-healthcare",
  },

  // ── Technical Docs ────────────────────────────────────────────────────
  {
    id: "td-scaleaon-12",
    title: "ScaleAOn SD-WAN 12.0 Datasheet",
    description:
      "The future-ready SD-WAN platform with advanced intelligence and deeper automation across the most robust enterprise networking stack. Built to deliver unmatched agility with Always-On performance.",
    category: "technical-doc",
    meta: { year: "2024", pages: 12 },
    href: "/resources/sample-datasheet.pdf",
  },
  {
    id: "td-scaleaon-11",
    title: "ScaleAOn SD-WAN 11.0 Datasheet",
    description:
      "The next-generation SD-WAN platform and the most comprehensive portfolio for transforming your enterprise network.",
    category: "technical-doc",
    meta: { year: "2023", pages: 10 },
    href: "/scaleaon-sdwan-datasheet-v11.pdf",
  },
  {
    id: "td-brochure",
    title: "Product Brochure",
    description:
      "SDN solutions that are the most scalable and agile, as compared to any other SD-WAN product. Download the brochure for the full portfolio overview.",
    category: "technical-doc",
    meta: { year: "2024", pages: 8 },
    href: "/sdn-brochure.pdf",
  },
  {
    id: "td-state-of-sdwan-2020",
    title: "State of SD-WAN in India — Report 2020",
    description:
      "A distilled analysis of the sweeping phenomenon of SD-WAN in the Indian enterprise market. Adoption, drivers, and what's next.",
    category: "technical-doc",
    meta: { year: "2020", pages: 28 },
    href: "/state-of-sd-wan-in-india-2020.pdf",
  },
  {
    id: "td-intel-solution-brief",
    title: "Intel Network Builders — Lavelle Networks Solution Brief",
    description:
      "Legacy MPLS services are highly reliable for access to data centre applications but are easily congested with cloud data. ScaleAOn SD-WAN offloads cloud traffic to IP networks for exceptional performance.",
    category: "technical-doc",
    meta: { year: "2023", pages: 6 },
    href: "/intel-network-builders-solution-brief.pdf",
  },

  // ── Whitepapers ───────────────────────────────────────────────────────
  {
    id: "wp-logistics",
    title: "ScaleAOn SD-WAN for Logistics",
    description:
      "Connect numerous locations of a logistics company with data centres, last-mile hubs, and recovery sites.",
    category: "whitepaper",
    meta: { industry: "Logistics", pages: 14 },
    href: "/wp-sd-wan-logistics.pdf",
  },
  {
    id: "wp-pharma",
    title: "ScaleAOn SD-WAN for Pharmaceutical Industry",
    description:
      "Connect the various entities of a pharmaceutical company's ecosystem — plants, depots, distributors, and field force.",
    category: "whitepaper",
    meta: { industry: "Pharmaceutical", pages: 14 },
    href: "/wp-sd-wan-pharma.pdf",
  },
  {
    id: "wp-public-sector",
    title: "ScaleAOn SD-WAN for Public Sector",
    description:
      "Connect remote facilities, corporate offices, plants, and mines of public sector units with data centres, DR sites, and public cloud.",
    category: "whitepaper",
    meta: { industry: "Public Sector", pages: 16 },
    href: "/wp-sd-wan-public-sector.pdf",
  },
  {
    id: "wp-manufacturing",
    title: "ScaleAOn SD-WAN for Manufacturing",
    description:
      "Connect factories, warehouses, service centres, and branch offices to data centres, DR, and private cloud resources.",
    category: "whitepaper",
    meta: { industry: "Manufacturing", pages: 14 },
    href: "/wp-sd-wan-manufacturing.pdf",
  },
  {
    id: "wp-sase",
    title: "SASE — The Future of SD-WAN and Network Security",
    description:
      "A combination of network-as-a-service capabilities (SD-WAN, WAN optimisation) and security-as-a-service (SWG, CASB, FWaaS, ZTNA).",
    category: "whitepaper",
    meta: { industry: "Cross-industry", pages: 18 },
    href: "/wp-sase.pdf",
  },
  {
    id: "wp-banking",
    title: "ScaleAOn SD-WAN for Banking",
    description:
      "Connect retail branch locations, corporate offices, and ATMs to data centres, DR, and private cloud for a bank.",
    category: "whitepaper",
    meta: { industry: "BFSI", pages: 14 },
    href: "/wp-sd-wan-banking.pdf",
  },
  {
    id: "wp-ztp",
    title: "ZTP — Zero Touch Provisioning",
    description:
      "WAN edge or branch networking has traditionally been manual and complex. ZTP changes the economics.",
    category: "whitepaper",
    meta: { industry: "Cross-industry", pages: 10 },
    href: "/wp-ztp.pdf",
  },
  {
    id: "wp-digital-india",
    title: "Designing India's Leap Into the Digital Economy",
    description:
      "The state of SD-WAN adoption in India and key insights into next-generation networking technology designed to help India leapfrog into the digital economy.",
    category: "whitepaper",
    meta: { industry: "Cross-industry", pages: 22 },
    href: "/wp-digital-india.pdf",
  },

  // ── Ebooks ────────────────────────────────────────────────────────────
  {
    id: "ebook-intro-sdwan",
    title: "An Introduction to SD-WAN",
    description:
      "What SD-WAN is, how it benefits your organisation, and a comparison with MPLS, VPN, and P2P.",
    category: "ebook",
    meta: { pages: 42 },
    href: "/ebook-intro-sdwan.pdf",
  },
  {
    id: "ebook-demystifying-mpls",
    title: "Demystifying MPLS",
    description:
      "A deeper look at MPLS — explained in today's language — so you can make the best decisions for your enterprise network.",
    category: "ebook",
    meta: { pages: 38 },
    href: "/ebook-mpls.pdf",
  },
  {
    id: "ebook-scaleaon",
    title: "ScaleAOn — The Architecture, In Depth",
    description:
      "Unfold Lavelle's revolutionary flagship technology — ScaleAOn — the cloud-controlled SD-WAN that simplifies the complex art of creating scalable VPNs.",
    category: "ebook",
    meta: { pages: 56 },
    href: "/ebook-scaleaon.pdf",
  },
  {
    id: "ebook-implementing-sdwan",
    title: "Implementing Software-Defined WAN",
    description:
      "Get insights from the team that pulled off the world's most gruelling SD-WAN transition — 1,000 locations in two weeks.",
    category: "ebook",
    meta: { pages: 64 },
    href: "/ebook-implementing-sdwan.pdf",
  },

  // ── Videos ────────────────────────────────────────────────────────────
  {
    id: "vid-sdwan-solution",
    title: "Lavelle Networks SD-WAN Solution",
    description:
      "Overview of the ScaleAOn platform and how it solves the hard problems in enterprise networking.",
    category: "video",
    meta: { duration: "4:12" },
    href: "/contact?subject=video-sdwan-solution",
  },
  {
    id: "vid-cloudstation",
    title: "CloudStation — Lavelle SD-WAN Controller",
    description:
      "A walk-through of CloudStation Controller: intent-driven policies, real-time topology, multi-tenancy.",
    category: "video",
    meta: { duration: "6:48" },
    href: "/contact?subject=video-cloudstation",
  },
  {
    id: "vid-first-sdwan",
    title: "First Router to First SD-WAN in India",
    description:
      "The story of how Lavelle shipped the first made-in-India SD-WAN platform to production at scale.",
    category: "video",
    meta: { duration: "12:30" },
    href: "/contact?subject=video-first-sdwan",
  },
  {
    id: "vid-startups",
    title: "Product Innovation — Startups Support in India",
    description:
      "How Lavelle partners with the Indian startup ecosystem to ship enterprise-grade networking faster.",
    category: "video",
    meta: { duration: "8:15" },
    href: "/contact?subject=video-startups",
  },
  {
    id: "vid-software-resurgence",
    title: "Enterprise Networking — The Software Resurgence",
    description:
      "Why the next decade of enterprise networking belongs to software-defined platforms, not proprietary hardware.",
    category: "video",
    meta: { duration: "15:02" },
    href: "/contact?subject=video-software-resurgence",
  },
];

// ── Utility links (API / EOL / Vulnerability) ─────────────────────────────

export const RESOURCES_UTILITY = [
  {
    title: "API Documentation",
    description: "Programmatic access to CloudStation — REST API, integration guides, and SDK references.",
    href: "/resources/api",
    icon: "Code" as const,
  },
  {
    title: "End-of-Life Announcements",
    description: "Lifecycle status for hardware models and software versions. Plan upgrades with confidence.",
    href: "/resources/end-of-life",
    icon: "AlertTriangle" as const,
  },
  {
    title: "Public Vulnerability Disclosure",
    description: "Our security disclosure policy and how to report a vulnerability to the Lavelle security team.",
    href: "/resources/public-vulnerability",
    icon: "ShieldAlert" as const,
  },
];

// ── Backwards-compatible export for old page imports ─────────────────────

export const RESOURCES_CONTENT = {
  hero: {
    title: RESOURCES_HERO.title,
    description: RESOURCES_HERO.description,
  },
  categories: [
    {
      category: "Case Studies",
      items: RESOURCES_ITEMS.filter((i) => i.category === "case-study").map((i) => ({
        title: i.title,
        description: i.description,
      })),
    },
    {
      category: "Technical Docs",
      items: RESOURCES_ITEMS.filter((i) => i.category === "technical-doc").map((i) => ({
        title: i.title,
        description: i.description,
      })),
    },
    {
      category: "Whitepapers",
      items: RESOURCES_ITEMS.filter((i) => i.category === "whitepaper").map((i) => ({
        title: i.title,
        description: i.description,
      })),
    },
    {
      category: "Ebooks",
      items: RESOURCES_ITEMS.filter((i) => i.category === "ebook").map((i) => ({
        title: i.title,
        description: i.description,
      })),
    },
    {
      category: "Videos",
      items: RESOURCES_ITEMS.filter((i) => i.category === "video").map((i) => ({
        title: i.title,
        description: i.description,
      })),
    },
  ],
};
