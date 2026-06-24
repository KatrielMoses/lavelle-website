import type { Product, Solution, Industry, Client, Testimonial, Award, Stat } from "./types";

export const HERO_CONTENT = {
  eyebrow: "India's Largest SD-WAN Provider",
  headline: "Networks That Scale.\nNetworks That Last.",
  subheadline:
    "Lavelle Networks powers enterprise connectivity for India's most demanding organisations — from the country's largest banks to its fastest-growing logistics companies.",
  primaryCta: { label: "Request a Demo", href: "/contact" },
  secondaryCta: { label: "Explore Solutions", href: "/solutions" },
};

export const STATS: Stat[] = [
  { value: "3", suffix: " in 5", label: "Enterprise Networks in India run Lavelle SD-WAN" },
  { value: "1,000", suffix: "+", label: "Nodes deployed in 2 weeks — fastest in the industry" },
  { value: "40", suffix: "%", label: "Reduction in hardware and software support costs" },
  { value: "99.99", suffix: "%", label: "Network uptime across all deployments" },
];

export const PRODUCTS: Product[] = [
  {
    id: "cloudstation-controller",
    name: "CloudStation Controller",
    tagline: "Intent-driven. Fully intelligent.",
    description:
      "SDN architecture with intent-driven policies and a single dashboard that gives you complete network intelligence — from edge to cloud.",
    features: [
      "Intent-driven policy engine",
      "Centralised orchestration",
      "Real-time topology visibility",
      "Multi-tenancy management",
    ],
    href: "/products/cloudstation-controller",
  },
  {
    id: "cloudstation-insights",
    name: "CloudStation Insights",
    tagline: "See everything. Act instantly.",
    description:
      "Advanced network flow analysis with dynamic path selection. Deep visibility into bandwidth utilisation, application performance, and network health.",
    features: [
      "360° network flow analysis",
      "Dynamic path selection",
      "Application-aware routing",
      "Bandwidth utilisation reporting",
    ],
    href: "/products/cloudstation-insights",
  },
  {
    id: "cloudport-edge",
    name: "CloudPort Edge",
    tagline: "Any edge. Any connection.",
    description:
      "Physical, virtual, and cloud connectivity in a single platform. From 4G to Fiber to E1 — connect every branch, every site, every way.",
    features: [
      "4G / LTE / Fiber / E1 support",
      "Physical and virtual deployment",
      "Plug-and-play branch onboarding",
      "Sub-minute failover",
    ],
    href: "/products/cloudport-edge",
  },
  {
    id: "cloudport-gateway",
    name: "CloudPort Gateway",
    tagline: "Data centre to cloud, unified.",
    description:
      "Enterprise-grade data centre and cloud network aggregation with full multi-vendor interoperability. One gateway for your entire infrastructure.",
    features: [
      "Data centre aggregation",
      "Multi-cloud connectivity",
      "Multi-vendor interoperability",
      "High-availability clustering",
    ],
    href: "/products/cloudport-gateway",
  },
];

export const SOLUTIONS: Solution[] = [
  {
    id: "sd-wan",
    name: "SD-WAN Platform",
    tagline: "The network backbone of Indian enterprise.",
    description:
      "A full-stack SD-WAN platform built for the scale and complexity of distributed Indian enterprises.",
    href: "/solutions/sd-wan",
    icon: "Network",
  },
  {
    id: "scaleaon",
    name: "ScaleAOn Architecture",
    tagline: "Next-generation WAN, built to scale.",
    description:
      "Proprietary architecture that enables deployment of 1,000 nodes in 2 weeks — with no compromise on performance or security.",
    href: "/solutions/scaleaon",
    icon: "Layers",
  },
  {
    id: "sd-net",
    name: "SD-NET Branch",
    tagline: "Converged branch networking.",
    description:
      "Unify SD-WAN, security, and switching in a single branch solution. Reduce complexity, reduce cost.",
    href: "/solutions/sd-net",
    icon: "GitBranch",
  },
  {
    id: "hybrid-wan",
    name: "Hybrid WAN",
    tagline: "MPLS costs, without MPLS constraints.",
    description:
      "Replace or augment MPLS with flexible, cost-effective hybrid WAN strategies — without sacrificing reliability or performance.",
    href: "/solutions/hybrid-wan",
    icon: "Shuffle",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: "bfsi",
    name: "Banking & Financial Services",
    description: "Asia's largest SD-WAN deployment in banking. Trusted by India's top 5 banks.",
    href: "/industries/bfsi",
    icon: "Landmark",
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    description: "Real-time visibility across distributed warehouse and hub networks.",
    href: "/industries/logistics",
    icon: "Truck",
  },
  {
    id: "it-services",
    name: "IT Services",
    description: "High-performance connectivity for geographically distributed development teams.",
    href: "/industries/it-services",
    icon: "Code2",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Secure, always-on POS and inventory networks across hundreds of locations.",
    href: "/industries/retail",
    icon: "ShoppingBag",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "HIPAA-grade secure networks connecting hospitals, clinics, and diagnostic labs.",
    href: "/industries/healthcare",
    icon: "HeartPulse",
  },
  {
    id: "education",
    name: "Education",
    description: "High-bandwidth, low-latency networks for campuses and remote institutions.",
    href: "/industries/education",
    icon: "GraduationCap",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Industrial-grade WAN connecting plant floors, warehouses, and head offices.",
    href: "/industries/manufacturing",
    icon: "Factory",
  },
  {
    id: "psu",
    name: "Public Sector",
    description: "Sovereign, secure networking for government institutions and PSUs.",
    href: "/industries/public-sector",
    icon: "Building2",
  },
];

export const CLIENTS: Client[] = [
  { name: "Axis Bank", logo: "/logos/axis-bank.svg", sector: "BFSI" },
  { name: "HDFC Bank", logo: "/logos/hdfc-bank.svg", sector: "BFSI" },
  { name: "ICICI Bank", logo: "/logos/icici-bank.svg", sector: "BFSI" },
  { name: "SBI", logo: "/logos/sbi.svg", sector: "BFSI" },
  { name: "Tata", logo: "/logos/tata.svg", sector: "Conglomerate" },
  { name: "Mahindra", logo: "/logos/mahindra.svg", sector: "Conglomerate" },
  { name: "Godrej", logo: "/logos/godrej.svg", sector: "Conglomerate" },
  { name: "Aditya Birla", logo: "/logos/aditya-birla.svg", sector: "Conglomerate" },
  { name: "TVS", logo: "/logos/tvs.svg", sector: "Manufacturing" },
  { name: "Swiggy", logo: "/logos/swiggy.svg", sector: "Technology" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Lavelle Networks enabled us to expand our branch network at a pace we never thought possible. The deployment speed is unlike anything else in the market.",
    metric: "60% faster branch deployment",
    author: "Head of Network Infrastructure",
    role: "Head of Network Infrastructure",
    company: "Leading Private Sector Bank",
  },
  {
    quote:
      "We reduced our WAN costs significantly while improving performance across every site. The visibility into application-level traffic changed how we manage the network entirely.",
    metric: "40% reduction in WAN costs",
    author: "Group CTO",
    role: "Group CTO",
    company: "National Logistics Conglomerate",
  },
];

export const AWARDS: Award[] = [
  { name: "ISO 27001:2013 Certified", year: "2023" },
  { name: "NASSCOM Emerge 50", year: "2022" },
  { name: "CIO Choice", year: "2023" },
  { name: "IAA Vendor of Note", year: "2023" },
  { name: "Asia's Largest SD-WAN Deployment (Banking)", year: "2019" },
];

export const FOOTER_CONTENT = {
  tagline:
    "India's largest SD-WAN solutions provider. Powering enterprise networks that scale, secure, and never stop.",
  columns: [
    {
      heading: "Products",
      links: [
        { label: "CloudStation Controller", href: "/products/cloudstation-controller" },
        { label: "CloudStation Insights", href: "/products/cloudstation-insights" },
        { label: "CloudPort Edge", href: "/products/cloudport-edge" },
        { label: "CloudPort Gateway", href: "/products/cloudport-gateway" },
      ],
    },
    {
      heading: "Solutions",
      links: [
        { label: "SD-WAN Platform", href: "/solutions/sd-wan" },
        { label: "Features", href: "/solutions/features" },
        { label: "ScaleAOn Architecture", href: "/solutions/scaleaon" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Partner Program", href: "/partners" },
        { label: "Resources", href: "/resources" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ],
};
