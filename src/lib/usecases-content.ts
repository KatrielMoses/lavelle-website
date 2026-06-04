export interface UseCaseFeature {
  name: string;
  description: string;
}

export interface UseCasePageContent {
  id: string;
  hero: {
    title: string;
    description: string;
  };
  overview?: string;
  features: UseCaseFeature[];
}

export const USE_CASES_CONTENT: Record<string, UseCasePageContent> = {
  "hybrid-wan-with-scaleaon": {
    id: "hybrid-wan-with-scaleaon",
    hero: {
      title: "Hybrid WAN with ScaleAOn®",
      description: "Secure and best-in-class SD-WAN for modern enterprise application needs.",
    },
    overview:
      "CIOs are more application-aware and focused on providing a better user experience for both enterprise and SaaS connectivity. Adopting the hybrid network approach with ScaleAOn® is crucial for meeting modern networking demands.",
    features: [
      {
        name: "Lower WAN Costs",
        description: "ScaleAOn® SD-WAN reduces Total Cost of Ownership (CAPEX and OPEX) in comparison to traditional MPLS WAN links.",
      },
      {
        name: "Easy to Manage",
        description: "Simplified and improved management orchestration of WAN traffic and devices.",
      },
      {
        name: "End to End Visibility",
        description: "Improved and unified visibility and monitoring of traffic, coupled with better security.",
      },
      {
        name: "Simplified Routing & Dynamic Path Selection",
        description: "Seamless traffic flow between links delivering superior Quality of Experience by monitoring packet loss, jitter, and latency.",
      },
    ],
  },
  "office-365-performance": {
    id: "office-365-performance",
    hero: {
      title: "Office 365 Performance",
      description: "ScaleAOn® SD-WAN for Enterprise Applications.",
    },
    overview:
      "Among the many features offered by ScaleAOn®, local breakout is the most widely adopted by enterprises. This enables organizations to leverage the power of SD-WAN to optimize SaaS usage for Office 365, G Suite, Salesforce, and more.",
    features: [
      {
        name: "Office 365 Local Breakout",
        description: "Route trusted SaaS traffic directly to the internet from the branch office, reducing latency and bypassing the data center.",
      },
      {
        name: "Quality of Experience",
        description: "Ensure uninterrupted performance for critical cloud productivity applications.",
      },
    ],
  },
  "managing-monitoring-enterprise-networks": {
    id: "managing-monitoring-enterprise-networks",
    hero: {
      title: "Managing & Monitoring",
      description: "Holistic and granular control of your enterprise networks.",
    },
    overview:
      "Modern CIOs require a single pane of glass to manage the network, increased control and visibility over WAN/LAN behavior, zero downtime for network changes, and faster upgrades.",
    features: [
      {
        name: "Simple Management Console",
        description: "A centralized dashboard that provides a single pane of glass for all network operations.",
      },
      {
        name: "Granular Control",
        description: "Achieve deep visibility and policy-based control over user access, application routing, and security.",
      },
      {
        name: "Zero Downtime Upgrades",
        description: "Upgrade networks seamlessly regardless of their size in a matter of minutes.",
      },
    ],
  },
  "multicloud": {
    id: "multicloud",
    hero: {
      title: "Multi-Cloud Networking",
      description: "Migrate to the cloud successfully with ScaleAOn SD-WAN.",
    },
    overview:
      "Rethink your network architecture with intelligent policies. ScaleAOn SD-WAN provides the agile foundation necessary for complex multi-cloud deployments.",
    features: [
      {
        name: "Policy-Based Networking",
        description: "Enforce strict policies to quarantine hosts or branches instantly.",
      },
      {
        name: "Provider Agnostic",
        description: "Seamlessly integrate and manage multiple cloud and MPLS providers at any given site.",
      },
    ],
  },
  "application-availability": {
    id: "application-availability",
    hero: {
      title: "Application Availability",
      description: "Ensure maximum availability for critical enterprise and SaaS applications.",
    },
    overview:
      "Avoid brownouts and blackouts. Seamless failover capabilities contribute directly to business efficiency and ensure maximum application availability for end-users, overcoming the limitations of age-old router technologies.",
    features: [
      {
        name: "Hosting On-Prem & Cloud",
        description: "Reliable connectivity whether your applications are hosted on-premise, in a private cloud, or a public cloud.",
      },
      {
        name: "Containerized Applications",
        description: "Optimized routing and availability for modern, containerized application environments.",
      },
      {
        name: "Seamless Failover",
        description: "Intelligent traffic steering ensures that if a link degrades, traffic is instantly re-routed without dropping sessions.",
      },
    ],
  },
};
