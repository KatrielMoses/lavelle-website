import type { NavItem } from "./types";

export const SITE_NAME = "Lavelle Networks";
export const SITE_URL = "https://lavellenetworks.com";
export const SITE_EMAIL = "contact@lavellenetworks.com";
export const SITE_TAGLINE = "Accelerate Networks for the Digital Economy";

export const NAV_ITEMS: NavItem[] = [
  {
    label: "Product",
    href: "/products",
    children: [
      { label: "CloudStation Controller", href: "/products/cloudstation-controller" },
      { label: "CloudStation Insights", href: "/products/cloudstation-insights" },
      { label: "CloudPort Edge", href: "/products/cloudport-edge" },
      { label: "CloudPort Gateway", href: "/products/cloudport-gateway" },
    ],
  },
  {
    label: "Solution",
    href: "/solutions",
    children: [
      { label: "SD-WAN Platform", href: "/solutions/sd-wan" },
      { label: "Features", href: "/solutions/features" },
      { label: "ScaleAOn Architecture", href: "/solutions/scaleaon" },
    ],
  },
  {
    label: "Use Cases",
    href: "/use-cases",
    children: [
      { label: "Hybrid WAN", href: "/solutions/hybrid-wan" },
      { label: "Office 365 Performance", href: "/use-cases/office-365-performance" },
      { label: "Managing & Monitoring", href: "/use-cases/managing-monitoring-enterprise-networks" },
      { label: "Multi-Cloud", href: "/use-cases/multicloud" },
      { label: "Application Availability", href: "/use-cases/application-availability" },
    ],
  },
  {
    label: "Technology",
    href: "/technology",
    children: [
      {
        label: "ScaleAOn Architecture",
        href: "/technology/scaleaon-architecture",
        children: [
          { label: "ScaleAOn SD-WAN", href: "/technology/scaleaon-architecture/scaleaon-sd-wan" },
          { label: "SD-NET Branch", href: "/technology/scaleaon-architecture/sd-net-converged-branch-networking" },
        ],
      },
      {
        label: "Design in Action",
        href: "/technology/design-in-action",
        children: [
          { label: "Built to Scale", href: "/technology/design-in-action/built-to-scale" },
          { label: "Built to be Simple", href: "/technology/design-in-action/built-to-be-simple" },
          { label: "Built to be Programmable", href: "/technology/design-in-action/built-to-be-programmable" },
          { label: "Approach to Hybrid WAN", href: "/technology/design-in-action/our-approach-to-hybrid-wan" },
          { label: "Quality of Experience", href: "/technology/design-in-action/quality-of-experience" },
        ],
      },
      { label: "SD-WAN Deep Dive", href: "/technology/sd-wan" },
      { label: "Our Approach to Security", href: "/technology/our-approach-to-security" },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Executive Advisors", href: "/about/executive-advisor" },
    ],
  },
  {
    label: "Partner",
    href: "/partners",
    children: [
      { label: "Partner Program", href: "/partners" },
      { label: "Partner Locator", href: "/partners/locator" },
    ],
  },
  { label: "Resources", href: "/resources" },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "BFSI", href: "/industries/bfsi" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Information Technology", href: "/industries/it" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "Retail", href: "/industries/retail" },
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "Education", href: "/industries/education" },
      { label: "Public Sector", href: "/industries/public-sector" },
    ],
  },
];
