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

export const PARTNERS_CONTENT: Record<string, PartnerPageContent> = {
  "program": {
    id: "program",
    hero: {
      title: "Lavelle Networks Partnership Advantage",
      description: "Join the growing community of Lavelle Networks Partners.",
    },
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
  },
  "locator": {
    id: "locator",
    hero: {
      title: "Lavelle Partner Locator",
      description: "Find authorized partners in your area.",
    },
    overview:
      "The Lavelle Partner Network is here to help with WAN Solutions and Cloud Networking requirements. Connect with our trusted distribution and integration partners across the region.",
    features: [
      {
        name: "Flair Network Systems Pvt. Ltd.",
        description: "Pune, Maharashtra | +91 9011577778 | info@flairnetworksystems.com",
      },
      {
        name: "Caudate Technologies Pvt Ltd",
        description: "Thane West, Mumbai | +91-9820908013 | vaseem.mulla@caudatetech.com",
      },
      {
        name: "Shell Networks and Solutions Limited",
        description: "Hyderabad | +91-98480 47072 | ramakrishna@shellnetworks.com",
      },
      {
        name: "Ingram Micro India Private Limited",
        description: "Vikhroli (W), Mumbai | +91-9892078115 | rajendra.nandan@ingrammicro.com",
      },
      {
        name: "Texonic Instruments (Distributor)",
        description: "Indira Nagar, Bangalore | +91-9844046360 | bharath@texonicinstruments.com",
      },
      {
        name: "VIS Networks",
        description: "Koramangala, Bangalore | 080 4545 3300 | salesenquiry@visnet.in",
      },
      {
        name: "Presto Infosolutions Pvt Ltd",
        description: "East Kailash, Delhi | info@presto.co.in",
      },
      {
        name: "AGC Networks",
        description: "Kurla West, Mumbai | 022 66617272 | india-alliances@agcnetworks.com",
      },
    ],
  },
};
