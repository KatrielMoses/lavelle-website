export interface SolutionFeature {
  name: string;
  description: string;
}

export interface SolutionPageContent {
  id: string;
  hero: {
    title: string;
    description: string;
  };
  overview?: string;
  features: SolutionFeature[];
}

export const SOLUTIONS_CONTENT: Record<string, SolutionPageContent> = {
  "sd-wan-platform": {
    id: "sd-wan-platform",
    hero: {
      title: "Why SD-WAN?",
      description:
        "Upgrade MPLS Networks to Cloud Ready WAN. The legacy WAN is an anomaly in the world of cloud driven enterprise infrastructure.",
    },
    overview:
      "A platform built to handle BGP, OSPF, Static Routes, NAT, and VLAN alongside DHCP and DNS Proxy services.",
    features: [
      {
        name: "MPLS Replacement",
        description:
          "Upgrade your legacy network to a modern, scalable SD-WAN architecture that seamlessly integrates into cloud environments.",
      },
      {
        name: "Single-tenant SD-WAN Controller",
        description:
          "Achieve absolute control and privacy over your network infrastructure with dedicated, single-tenant SD-WAN controllers.",
      },
      {
        name: "Advanced Routing & Networking",
        description:
          "Comprehensive support for BGP, OSPF, Static Routes, NAT, VLAN, DHCP, and DNS Proxy configurations.",
      },
    ],
  },
  "sd-wan-features": {
    id: "sd-wan-features",
    hero: {
      title: "ScaleAOn SD-WAN",
      description: "SD-WAN For Enhanced Network Experience. Supporting MPLS, P2P, ILL, wired or wireless connectivity.",
    },
    features: [
      {
        name: "Network Security",
        description: "Enterprise-grade protection with FIPS compliant algorithms securing all data transmission.",
      },
      {
        name: "Networking Branch",
        description: "Comprehensive branch networking capabilities including DHCP, DNS Proxy, BGP, OSPF, Static Routes, NAT, and VLAN.",
      },
      {
        name: "Network Control",
        description: "Advanced management capabilities including Remote Diagnostics, Access Control, and intent-driven Policy Configurations.",
      },
      {
        name: "Network Monitoring",
        description: "Continuous and comprehensive monitoring of your entire enterprise network ecosystem.",
      },
    ],
  },
  "scaleaon": {
    id: "scaleaon",
    hero: {
      title: "Why Lavelle Networks ScaleAOn?",
      description: "Next-Gen network architecture to keep WAN Always On. Scale your business without worrying about the network.",
    },
    overview: "ScaleAOn SD-WAN is the next generation SD-WAN platform and the most comprehensive portfolio for transforming your enterprise network. Unfold Lavelle Networks revolutionary flagship technology - ScaleAOn - Cloud controlled SD-WAN that simplifies the complex art of creating scalable VPNs.",
    features: [
      {
        name: "Elastic Scalability",
        description: "Seamlessly grow your network to meet business demands without underlying infrastructure bottlenecks.",
      },
      {
        name: "No Peering Protocol",
        description: "Simplify deployments and lower latency with our zero-peering protocol architecture.",
      },
      {
        name: "Total Decoupling of Packet",
        description: "Achieve superior network performance and agility through advanced packet decoupling methodologies.",
      },
      {
        name: "Advanced Policy Enforcement",
        description: "Policy-based quarantine for host or branch, supporting multiple MPLS providers at any given site.",
      },
    ],
  },
};
