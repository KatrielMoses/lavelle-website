export interface SolutionFeature {
  name: string;
  description: string;
}

export interface FeatureCategory {
  id: string;
  title: string;
  description: string;
  items: { title: string; description: string }[];
}

export interface SolutionDeploymentOption {
  title: string;
  description: string;
}

export interface SolutionPageContent {
  id: string;
  hero: {
    eyebrow?: string;
    title: string;
    command?: string;
    description: string;
  };
  overview?: string;
  legacyAnomaly?: {
    title: string;
    description: string;
    painPoints: { title: string; description: string }[];
  };
  whySdWan?: {
    title: string;
    description: string;
    reasons: { title: string; description: string }[];
  };
  mplsReplacement?: {
    title: string;
    description: string;
    paragraphs: string[];
  };
  deployment?: {
    title: string;
    description: string;
    options: SolutionDeploymentOption[];
  };
  architectureFeatures?: { title: string; description: string }[];
  differentiators?: { title: string; description: string }[];
  featureCategories?: FeatureCategory[];
  features: SolutionFeature[];
}

export const SOLUTIONS_CONTENT: Record<string, SolutionPageContent> = {
  "sd-wan-platform": {
    id: "sd-wan-platform",
    hero: {
      eyebrow: "Next-Generation WAN",
      title: "Lavelle Networks SD-WAN",
      command: "The Premier MPLS Alternative",
      description:
        "Upgrade legacy networks to a cloud-ready WAN. Deliver high-speed application access across any location with unparalleled stability and control.",
    },
    legacyAnomaly: {
      title: "The Legacy WAN Anomaly",
      description:
        "Traditional enterprise WANs were built for client-server architectures in isolated data centers. Today's cloud-driven world demands a network that natively understands distributed applications and SaaS, rather than treating them as exceptions.",
      painPoints: [
        {
          title: "SaaS Blindness",
          description:
            "Legacy networks fail to recognize SaaS traffic, treating mission-critical cloud applications the same as standard internet noise.",
        },
        {
          title: "Branch Wait Times",
          description:
            "Branch locations are exploding in numbers, but provisioning new MPLS circuits takes months, delaying business expansion.",
        },
        {
          title: "Policy Breaches",
          description:
            "Extending traditional physical security policies to the virtual cloud world creates gaps and major security vulnerabilities.",
        },
        {
          title: "Mismatched Economics",
          description:
            "Compute and storage costs have plummeted in the cloud era, yet WAN costs remain locked in expensive, rigid contracts.",
        },
      ],
    },
    whySdWan: {
      title: "Why Upgrade to SD-WAN?",
      description:
        "Enterprise networks require more internet bandwidth, not just localized data center capacity. Lavelle Networks SD-WAN empowers you with absolute control, mixing legacy MPLS circuits with high-speed internet to create a unified, powerful network.",
      reasons: [
        {
          title: "Controlled Cloud Access",
          description:
            "Rapid, secure access to applications deployed in hybrid clouds or consumed purely as SaaS.",
        },
        {
          title: "Bandwidth Without Barriers",
          description:
            "Deliver high-quality bandwidth to every location without the traditional hurdles of feasibility checks.",
        },
        {
          title: "Data Center Connectivity",
          description:
            "Provision significantly more internet bandwidth to private data centers to handle modern traffic loads.",
        },
        {
          title: "Uniform Governance",
          description:
            "Enforce consistent policies and rigorous governance across all physical branches and public cloud assets.",
        },
      ],
    },
    mplsReplacement: {
      title: "The Intelligent MPLS Transition",
      description:
        "Lavelle Networks SD-WAN provides an effective, measured replacement strategy for expensive MPLS circuits. It offers a cost-effective path to migrate to an internet-based WAN without forcing a massive, immediate 'rip and replace' of your existing infrastructure.",
      paragraphs: [
        "While an enterprise can choose native SD-WAN immediately, unwinding multi-year MPLS contracts can be a tedious process. For organizations with thousands of established locations, transitioning all at once introduces unnecessary operational risk.",
        "Lavelle Networks allows you to terminate MPLS circuits alongside internet links, creating a truly hybrid network. This capability lets you deploy SD-WAN at select locations initially to prove value, while leaving the remaining sites on your existing MPLS network until contracts expire.",
      ],
    },
    deployment: {
      title: "Flexible Deployment Architecture",
      description:
        "Consume your network the same way you consume cloud compute or storage. Lavelle Networks takes the simplicity of SD-WAN deployment to the absolute next level.",
      options: [
        {
          title: "Enterprise Private Data Center",
          description:
            "Deploy directly into your existing infrastructure on VMware, OpenStack, Azure Stack, or Nutanix Prism environments.",
        },
        {
          title: "Single-Tenant Controller",
          description:
            "Maintain absolute sovereignty over your network with a dedicated, isolated SD-WAN controller.",
        },
        {
          title: "Public Cloud Managed Services",
          description:
            "Host natively on AWS or Microsoft Azure for a fully managed, hands-off cloud deployment.",
        },
      ],
    },
    features: [
      {
        name: "Link Independence",
        description:
          "Operate across any combination of MPLS, 4G/LTE, and broadband internet with true carrier neutrality.",
      },
      {
        name: "Zero-Touch Provisioning",
        description:
          "Deploy branch networks in minutes without requiring certified IT staff on location.",
      },
      {
        name: "Application-Aware Routing",
        description:
          "Dynamically steer traffic based on application profiles, prioritizing business-critical tools automatically.",
      },
    ],
  },
  "features": {
    id: "features",
    hero: {
      eyebrow: "CloudStation Orchestrator",
      title: "Comprehensive SD-WAN Features",
      command: "Enhanced Network Experience at Scale",
      description: "Lavelle Networks delivers a complete portfolio of routing, security, and orchestration capabilities required to transform the modern enterprise edge.",
    },
    featureCategories: [
      {
        id: "experience",
        title: "Network Experience",
        description: "Optimized connectivity and seamless hybrid WAN capabilities designed to keep your applications performing flawlessly.",
        items: [
          { title: "Ease of Deployment", description: "Zero-touch provisioning, zero-peering architecture, and plug-and-play deployment at spoke locations with multi-NAT traversal." },
          { title: "Network Groups", description: "Multi-link elastic VPNs and complete network segmentation enabling full-mesh, any-to-any topologies." },
          { title: "Path Selection", description: "Flow-based load balancing driven by latency, jitter, packet loss (PLR), and capacity, with customizable WAN policies." },
          { title: "Enterprise Data Security", description: "AES-256 and SHA-256 encryption using CBC, Counter, and GCM modes, ensuring robust, high-performance data protection." },
          { title: "Tunnel Protocols", description: "Support for GRE, IPSEC, and Lavelle's specialized encapsulation for superior SD-WAN path performance." },
          { title: "Traffic Control", description: "Intent-driven QoS, precise bandwidth control, and granular traffic rate limiting." },
          { title: "Hybrid WAN", description: "True link independence supporting MPLS, P2P, ILL, and 4G/5G wireless connectivity." }
        ]
      },
      {
        id: "security",
        title: "Network Security",
        description: "Enterprise-grade protection with integrated firewall and strict access controls natively embedded in the WAN edge.",
        items: [
          { title: "Stateful Firewall", description: "Deep, stateful network session inspection directly at the branch." },
          { title: "FIPS Encryption", description: "Military-grade, FIPS-compliant cryptographic algorithms securing all transit data." },
          { title: "Internet Access Control", description: "Comprehensive web filtering and application access control, extending seamlessly to SaaS environments." },
          { title: "Device Access Control", description: "Locked down, authenticated, and fully encrypted command shell access for ultimate device security." }
        ]
      },
      {
        id: "branch",
        title: "Networking Branch",
        description: "Everything required to operate a sophisticated branch network, consolidated into a single edge architecture.",
        items: [
          { title: "LAN Management", description: "Integrated DHCP services and DNS proxy functionality natively on the appliance." },
          { title: "Advanced Routing", description: "Comprehensive support for BGP, OSPF, Static Routes, NAT, and VLAN segmentation." },
          { title: "Cloud Connect", description: "Extend physical branches into public/private clouds where virtual instances adopt your exact business policies." },
          { title: "Plane Separation", description: "Absolute separation of Control and Data planes—ensuring traffic continues flowing even if the orchestrator is unreachable." }
        ]
      },
      {
        id: "control",
        title: "Network Control",
        description: "Absolute administrative sovereignty, multi-tenant capabilities, and unmatched diagnostic visibility.",
        items: [
          { title: "Multi-Tenant Provisioning", description: "Create and securely manage multiple customer or subsidiary tenants from a single pane of glass." },
          { title: "Flexible Deployment", description: "Deploy the CloudStation controller on-premise, in your private cloud, or as a fully-managed SaaS offering." },
          { title: "Local Web Console", description: "Secure, intuitive web-based local management access directly on the CloudPort edge appliances." },
          { title: "Remote Diagnostics", description: "Advanced remote debugging, packet capture, and link testing without requiring a truck roll." }
        ]
      }
    ],
    features: []
  },
  "scaleaon": {
    id: "scaleaon",
    hero: {
      eyebrow: "Next-Gen Network Architecture",
      title: "ScaleAOn Architecture",
      command: "Gain Value at Scale, Continuously",
      description: "The next-generation network architecture designed to keep your WAN Always On. Top global enterprise brands trust Lavelle Networks to power their critical infrastructure.",
    },
    architectureFeatures: [
      {
        title: "Elastic Scalability",
        description: "Deploy private or public cloud controllers that scale infinitely with your business demands."
      },
      {
        title: "No Peering Protocol",
        description: "Solve private networking on the WAN with zero knowledge or reliance on legacy network protocols."
      },
      {
        title: "Logical Identifiers",
        description: "A revolutionary naming scheme that produces logical identifiers for every subnet—never memorize an IP address again."
      },
      {
        title: "Intent-Driven Framework",
        description: "Forget old-school transport connections like SSH. Our control plane fails over seamlessly without losing a single transaction."
      },
      {
        title: "Zero Error Segments",
        description: "Visual UI aids ensure you never write a single line of interface configuration while creating a VPN or WAN topology."
      },
      {
        title: "Total Packet Decoupling",
        description: "Isolate I/O, forwarding, and inspection. Any localized failure merely degrades the service without crippling the network."
      }
    ],
    differentiators: [
      {
        title: "Rock-Solid Fortress",
        description: "Expand your private network over the internet without deploying complex, brittle branch security appliances."
      },
      {
        title: "Slimmest NFV Architecture",
        description: "Leverage highly-optimized Linux Containers for unparalleled service chaining efficiency."
      },
      {
        title: "Zero Touch Provisioning",
        description: "Proven at scale: over 1,000 enterprise instances brought online in less than two weeks."
      },
      {
        title: "Ephemeral Encryption Keys",
        description: "Keys are refreshed so rapidly that there is zero need for dangerous persistent keys."
      },
      {
        title: "100% SDN Architecture",
        description: "Absolute centralized network intelligence distributed effortlessly across millions of endpoints."
      }
    ],
    features: []
  },
};
