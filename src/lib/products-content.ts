export interface ProductModel {
  name: string;
  description: string;
}

export interface ProductFeature {
  name: string;
  description: string;
}

export interface ProductLicense {
  name: string;
  description: string;
}

export interface ProductCapability {
  name: string;
  description: string;
  points: string[];
}

export interface ProductSuiteItem {
  name: string;
  description: string;
}

export interface ProductResource {
  type: string;
  title: string;
  description: string;
  href: string;
}

export interface CloudStationControllerExperience {
  eyebrow: string;
  heroCommand: string;
  dashboardLabel: string;
  dashboardTitle: string;
  dashboardDescription: string;
  dashboardStats: ProductModel[];
  overviewKicker: string;
  modelsTitle: string;
  modelsDescription: string;
  datasheetLabel: string;
  featuresTitle: string;
  featuresDescription: string;
  capabilities: ProductCapability[];
  licensesTitle: string;
  licensesDescription: string;
  suiteTitle: string;
  suiteDescription: string;
  suiteItems: ProductSuiteItem[];
  transformationTitle: string;
  transformationDescription: string;
  resourcesTitle: string;
  resourcesDescription: string;
  resources: ProductResource[];
  finalCtaTitle: string;
  finalCtaHighlight: string;
  finalCtaDescription: string;
  salesCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface CloudStationInsightsExperience {
  eyebrow: string;
  heroCommand: string;
  dashboardLabel: string;
  dashboardTitle: string;
  dashboardDescription: string;
  dashboardStats: ProductModel[];
  overviewKicker: string;
  modelsTitle: string;
  modelsDescription: string;
  datasheetLabel: string;
  featuresTitle: string;
  featuresDescription: string;
  capabilities: ProductCapability[];
  licensesTitle: string;
  licensesDescription: string;
  suiteTitle: string;
  suiteDescription: string;
  suiteItems: ProductSuiteItem[];
  transformationTitle: string;
  transformationDescription: string;
  resourcesTitle: string;
  resourcesDescription: string;
  resources: ProductResource[];
  finalCtaTitle: string;
  finalCtaHighlight: string;
  finalCtaDescription: string;
  salesCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface CloudPortDeploymentOption {
  name: string;
  description: string;
}

export interface CloudPortFormFactor {
  name: string;
  description: string;
}

export interface CloudPortEdgeExperience {
  eyebrow: string;
  heroCommand: string;
  applianceLabel: string;
  applianceTitle: string;
  applianceDescription: string;
  applianceStats: ProductModel[];
  overviewKicker: string;
  modelsTitle: string;
  modelsDescription: string;
  deploymentTitle: string;
  deploymentDescription: string;
  deploymentOptions: CloudPortDeploymentOption[];
  formFactorsTitle: string;
  formFactors: CloudPortFormFactor[];
  datasheetLabel: string;
  featuresTitle: string;
  featuresDescription: string;
  capabilities: ProductCapability[];
  suiteTitle: string;
  suiteDescription: string;
  suiteItems: ProductSuiteItem[];
  transformationTitle: string;
  transformationDescription: string;
  resourcesTitle: string;
  resourcesDescription: string;
  resources: ProductResource[];
  finalCtaTitle: string;
  finalCtaHighlight: string;
  finalCtaDescription: string;
  salesCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface CloudPortGatewayExperience {
  eyebrow: string;
  heroCommand: string;
  gatewayLabel: string;
  gatewayTitle: string;
  gatewayDescription: string;
  gatewayStats: ProductModel[];
  overviewKicker: string;
  modelsTitle: string;
  modelsDescription: string;
  datasheetLabel: string;
  featuresTitle: string;
  featuresDescription: string;
  capabilities: ProductCapability[];
  licensesTitle: string;
  licensesDescription: string;
  licenses: ProductLicense[];
  suiteTitle: string;
  suiteDescription: string;
  suiteItems: ProductSuiteItem[];
  transformationTitle: string;
  transformationDescription: string;
  resourcesTitle: string;
  resourcesDescription: string;
  resources: ProductResource[];
  finalCtaTitle: string;
  finalCtaHighlight: string;
  finalCtaDescription: string;
  salesCtaLabel: string;
  secondaryCtaLabel: string;
}

export interface ProductPageContent {
  id: string;
  hero: {
    title: string;
    description: string;
  };
  overview?: string;
  models: ProductModel[];
  features: ProductFeature[];
  licenses?: ProductLicense[];
  controllerExperience?: CloudStationControllerExperience;
  insightsExperience?: CloudStationInsightsExperience;
  edgeExperience?: CloudPortEdgeExperience;
  gatewayExperience?: CloudPortGatewayExperience;
}

export const PRODUCTS_CONTENT: Record<string, ProductPageContent> = {
  "cloudstation-controller": {
    id: "cloudstation-controller",
    hero: {
      title: "CloudStation Controller",
      description:
        "The wonderful magic of next generation SDN architecture, intent driven policies, network visibility with modern dashboards and network segmentation tools.",
    },
    overview:
      "CloudStation controller appliance suite of physical, virtual and cloud instances which provide next generation SDN architecture, intent driven policies, modern dashboards, network segmentation tools.",
    models: [
      {
        name: "100 - 2E Series",
        description: "Suitable for up to 100 Nodes/Locations",
      },
      {
        name: "1000 - 2E Series",
        description: "Suitable for up to 1000 Nodes/Locations",
      },
      {
        name: "XL Series",
        description:
          "Suitable for web scale deployment of large networks with tens of thousands of nodes.",
      },
    ],
    features: [
      {
        name: "Network Control",
        description:
          "Available on customer Premise/Cloud and as a service. Achieve network segmentations, using “Network Groups”, in minutes, rather than days of planning. Intent Driven policies, reducing the dependency on complex protocol configuration.",
      },
      {
        name: "High Availability",
        description:
          "DC/DR across geography or hybrid cloud. Active/Backup high availability.",
      },
      {
        name: "Network Monitoring",
        description:
          "Flow, Data Usage, Data rate visibility per user, per end point, per application. Historical Graphs for links as well as site. Per branch, per link – Bandwidth utilization, throughput, network scores. Configurable threshold based alerts for faults, Information and events.",
      },
      {
        name: "Advanced WAN Services",
        description:
          "Multipoint internet breakout and application based policies. Policy based quarantine host or branch. Multiple MPLS providers at site.",
      },
      {
        name: "Third Party Integrations",
        description:
          "3rd party integration using Rest APIs for custom monitoring and automation. Admin Authentication using Microsoft Active Directory.",
      },
    ],
    licenses: [
      {
        name: "ScaleAOn Controller Standard",
        description:
          "Network Control, High Availability, Network Monitoring, and Advanced WAN Services.",
      },
      {
        name: "ScaleAOn Controller Advanced",
        description:
          "All CloudStation Standard features plus provision to Create, Manage Multiple Customers or Tenant.",
      },
    ],
    controllerExperience: {
      eyebrow: "CloudStation Controller",
      heroCommand: "Command every branch from one control plane.",
      dashboardLabel: "ScaleAOn control fabric",
      dashboardTitle: "One dashboard for policy, segmentation, and network intelligence.",
      dashboardDescription:
        "CloudStation Controller is the operating console for Lavelle SD-WAN. It turns thousands of distributed links, branches, tenants, and policies into one governed view for Indian enterprises that cannot wait on manual network change windows.",
      dashboardStats: [
        {
          name: "1,000 nodes",
          description: "Deploy large branch networks in two weeks with centralized policy control.",
        },
        {
          name: "3 of 5",
          description: "Enterprise networks in India run on Lavelle SD-WAN.",
        },
        {
          name: "DC/DR",
          description: "Run across geography, hybrid cloud, active and backup architectures.",
        },
      ],
      overviewKicker:
        "Built as a physical, virtual, or cloud controller appliance, CloudStation gives network teams the authority to define intent once and apply it across branches, data centers, and cloud edges.",
      modelsTitle: "Controller Models",
      modelsDescription:
        "Choose the control plane that matches the size of your estate today and the expansion your board expects tomorrow.",
      datasheetLabel: "Download Datasheet",
      featuresTitle: "Software Features",
      featuresDescription:
        "The old site presented CloudStation as five pillars. This redesign keeps that product truth and gives each pillar the stature it deserves.",
      capabilities: [
        {
          name: "Network Control",
          description:
            "Central policy authority for segmentation, network groups, and intent-driven change across distributed WAN estates.",
          points: [
            "Available on customer premise, cloud, or as a managed service",
            "Network Groups create segmentation in minutes",
            "Intent policies reduce protocol-level configuration work",
          ],
        },
        {
          name: "High Availability",
          description:
            "Keep the controller fabric available across critical sites and cloud regions when business traffic cannot pause.",
          points: [
            "DC/DR across geography or hybrid cloud",
            "Active and backup high availability",
          ],
        },
        {
          name: "Network Monitoring",
          description:
            "Read flow, usage, link health, application behavior, and branch performance from one governed console.",
          points: [
            "Visibility by user, endpoint, application, link, and site",
            "Historical graphs for branches and WAN links",
            "Threshold alerts for faults, information, and events",
          ],
        },
        {
          name: "Advanced WAN Services",
          description:
            "Operate sophisticated WAN policy without turning every branch into a bespoke configuration project.",
          points: [
            "Multipoint internet breakout with application policy",
            "Policy-based quarantine for host or branch isolation",
            "Multiple MPLS providers at the same site",
          ],
        },
        {
          name: "Third Party Integrations",
          description:
            "Connect CloudStation into the monitoring, automation, and identity systems already trusted by enterprise IT.",
          points: [
            "REST APIs for monitoring and automation workflows",
            "Microsoft Active Directory for admin authentication",
          ],
        },
      ],
      licensesTitle: "Controller Software Licenses",
      licensesDescription:
        "Flexible feature-based subscriptions let teams buy the daily management and monitoring depth they need.",
      suiteTitle: "ScaleAOn SD-WAN Solution Suite",
      suiteDescription:
        "CloudStation Controller sits at the center of Lavelle's SD-WAN portfolio, governing the edge, gateway, and insights layers that move enterprise traffic.",
      suiteItems: [
        {
          name: "CloudPort Edge",
          description:
            "On-site network connectivity from 4G to fiber to V.35 serial E1 lines.",
        },
        {
          name: "CloudPort Gateway",
          description:
            "Data center and cloud aggregation with strong interoperability for SD-WAN edge networks.",
        },
        {
          name: "CloudStation Controller",
          description:
            "Intent-driven SDN architecture, modern dashboards, and segmentation tools.",
        },
        {
          name: "CloudStation Insights",
          description:
            "Flow analysis, dynamic path selection, network scores, and rapid usage visualization.",
        },
      ],
      transformationTitle:
        "Reduce reliance on legacy WAN and prepare for cloud-first growth.",
      transformationDescription:
        "Lavelle Networks solves the hardest WAN challenges for distributed enterprises with software-defined architecture designed for scale, speed, and security.",
      resourcesTitle: "Resources",
      resourcesDescription:
        "Use the controller story with proof, architecture context, and the latest ScaleAOn platform material.",
      resources: [
        {
          type: "Case study",
          title: "Godrej Network Transformation",
          description:
            "How Godrej modernized branch networking with Lavelle SD-WAN across multiple locations.",
          href: "/resources",
        },
        {
          type: "Datasheet",
          title: "ScaleAOn SD-WAN 12.1",
          description:
            "Platform details for enterprise teams comparing SD-WAN control, edge, gateway, and insights capabilities.",
          href: "/resources",
        },
        {
          type: "Technology brief",
          title: "ScaleAOn Architecture",
          description:
            "A closer look at the cloud-controlled architecture behind scalable enterprise VPNs.",
          href: "/technology/scaleaon-architecture",
        },
      ],
      finalCtaTitle: "Built for Scale, Speed and Security",
      finalCtaHighlight: "India's SD-WAN control plane for enterprise change.",
      finalCtaDescription:
        "Give your network team a controller that can match boardroom ambition, branch reality, and cloud migration pressure.",
      salesCtaLabel: "Contact Sales Now",
      secondaryCtaLabel: "Explore ScaleAOn",
    },
  },
  "cloudstation-insights": {
    id: "cloudstation-insights",
    hero: {
      title: "CloudStation Insights",
      description:
        "Advanced network flow analysis for dynamic path selection, automated performance characterization using network scores and more.",
    },
    overview:
      "Our CloudStation Insights Analytics appliance suite of physical, virtual and cloud instances which power the advanced network flow analysis that fuels our industry leading dynamic path selection, automated performance characterization using Network Scores, split second visualization of Top Network usage by user, flows or applications.",
    models: [
      {
        name: "100 - 2E Series",
        description: "Suitable for up to 100 Nodes/Locations",
      },
      {
        name: "1000 - 2E Series",
        description: "Suitable for up to 1000 Nodes/Locations",
      },
      {
        name: "XL Series",
        description:
          "Suitable for web scale deployment of large networks with tens of thousands of nodes.",
      },
    ],
    features: [
      {
        name: "Advanced Network Flow Analysis",
        description:
          "Advanced network flow analysis that fuels our industry leading dynamic path selection, an innovative technique developed to mitigate the problems like availability and performance in the last mile link connectivity.",
      },
      {
        name: "Network Scores",
        description:
          "Network Scores comprises of Quality Score, Capacity Score and Capacity Health Score for the entire network. These scores are normalized in a numerical way to describe an ISP's last mile connectivity characteristics in terms of its Quality and its Capacity.",
      },
      {
        name: "Enhanced Visibility of Network Usage",
        description:
          "Top application and top endpoint traffic usage. Bandwidth utilisation across applications and endpoints. Average and peak values for the transmitted and dropped packets in terms of the bandwidth to facilitate an in-depth view of the historical usage of the networks.",
      },
      {
        name: "Expandable Storage",
        description:
          "Flexible, expandable storage for specific long duration use cases of storing monitoring data (beyond the default of 30 days).",
      },
      {
        name: "Custom Analysis",
        description:
          "Raw statistics export for AI, machine learning for custom monitoring and automation.",
      },
    ],
    licenses: [
      {
        name: "ScaleAOn Insights Standard",
        description:
          "Advanced network flow analysis. Performance analysis using network scores, with expandable storage options.",
      },
      {
        name: "ScaleAOn Insights Advanced",
        description:
          "All ScaleAOn Insights Standard features plus raw statistics export for custom analysis.",
      },
    ],
    insightsExperience: {
      eyebrow: "CloudStation Insights",
      heroCommand: "See every flow before it becomes a fault.",
      dashboardLabel: "Network intelligence fabric",
      dashboardTitle: "Flow analytics, path selection, and network scores in one command view.",
      dashboardDescription:
        "CloudStation Insights is the analytics appliance for Lavelle SD-WAN. It studies flow behavior, link quality, capacity, user traffic, application usage, and historical performance so enterprise teams can act with evidence instead of guesswork.",
      dashboardStats: [
        {
          name: "Scores",
          description: "Quality, capacity, and capacity health scores for the full network.",
        },
        {
          name: "30+ days",
          description: "Expandable storage for longer monitoring history when operations demand it.",
        },
        {
          name: "Flows",
          description: "Split-second visibility into top users, applications, endpoints, and usage.",
        },
      ],
      overviewKicker:
        "Built as a physical, virtual, or cloud analytics appliance, CloudStation Insights powers dynamic path selection, automated performance characterization, and executive-grade network visibility.",
      modelsTitle: "Insights Models",
      modelsDescription:
        "Run analytics at the scale of your network, from controlled branch estates to web-scale deployments with thousands of locations.",
      datasheetLabel: "Download Datasheet",
      featuresTitle: "Software Features",
      featuresDescription:
        "The old site framed Insights around five analytics pillars. This version gives those pillars a sharper operating story for network leaders.",
      capabilities: [
        {
          name: "Advanced Network Flow Analysis",
          description:
            "Flow intelligence that feeds dynamic path selection and helps mitigate last-mile availability and performance issues.",
          points: [
            "Analyzes network flows across links, sites, users, and applications",
            "Supports dynamic path selection decisions",
            "Surfaces last-mile quality and availability signals",
          ],
        },
        {
          name: "Network Scores",
          description:
            "Normalize ISP and link behavior into scores that make network quality and capacity easier to compare.",
          points: [
            "Quality Score for last-mile performance",
            "Capacity Score for link headroom",
            "Capacity Health Score for network planning",
          ],
        },
        {
          name: "Enhanced Visibility of Network Usage",
          description:
            "Expose top applications, top endpoints, bandwidth utilization, and historical usage without combing through raw logs.",
          points: [
            "Top user, endpoint, and application traffic views",
            "Average and peak transmit and drop statistics",
            "Bandwidth views across applications and endpoints",
          ],
        },
        {
          name: "Expandable Storage",
          description:
            "Extend retention for monitoring history when compliance, operations, or troubleshooting windows demand more than default storage.",
          points: [
            "Long-duration monitoring use cases",
            "Storage beyond the default 30-day window",
          ],
        },
        {
          name: "Custom Analysis",
          description:
            "Export raw statistics for custom monitoring, automation, AI, and machine learning workflows.",
          points: [
            "Raw statistics export",
            "Custom monitoring and automation support",
          ],
        },
      ],
      licensesTitle: "Insights Software Licenses",
      licensesDescription:
        "Flexible feature-based subscriptions let teams choose the analytics depth, storage, and export capabilities they need.",
      suiteTitle: "ScaleAOn SD-WAN Solution Suite",
      suiteDescription:
        "CloudStation Insights completes the Lavelle SD-WAN portfolio by turning edge, gateway, and controller events into decisions network teams can trust.",
      suiteItems: [
        {
          name: "CloudPort Edge",
          description:
            "On-site network connectivity from 4G to fiber to V.35 serial E1 lines.",
        },
        {
          name: "CloudPort Gateway",
          description:
            "Data center and cloud aggregation with strong interoperability for SD-WAN edge networks.",
        },
        {
          name: "CloudStation Controller",
          description:
            "Intent-driven SDN architecture, modern dashboards, and segmentation tools.",
        },
        {
          name: "CloudStation Insights",
          description:
            "Flow analysis, dynamic path selection, network scores, and rapid usage visualization.",
        },
      ],
      transformationTitle:
        "Turn WAN complexity into measurable network truth.",
      transformationDescription:
        "Lavelle Networks gives distributed enterprises the analytics layer they need to move faster, prove performance, and prepare for cloud-first WAN innovation.",
      resourcesTitle: "Resources",
      resourcesDescription:
        "Pair the Insights story with deployment proof, SD-WAN platform details, and ScaleAOn architecture context.",
      resources: [
        {
          type: "Case study",
          title: "Godrej Network Transformation",
          description:
            "How Godrej modernized branch networking with Lavelle SD-WAN across multiple locations.",
          href: "/resources",
        },
        {
          type: "Datasheet",
          title: "ScaleAOn SD-WAN 12.1",
          description:
            "Platform details for enterprise teams comparing control, edge, gateway, and insights capabilities.",
          href: "/resources",
        },
        {
          type: "Technology brief",
          title: "ScaleAOn Architecture",
          description:
            "A closer look at the cloud-controlled architecture behind scalable enterprise VPNs.",
          href: "/technology/scaleaon-architecture",
        },
      ],
      finalCtaTitle: "Built for Scale, Speed and Security",
      finalCtaHighlight: "Analytics that make SD-WAN decisions defensible.",
      finalCtaDescription:
        "Give your network team visibility that explains why traffic moved, where capacity is strained, and what must change next.",
      salesCtaLabel: "Contact Sales",
      secondaryCtaLabel: "Explore ScaleAOn",
    },
  },
  "cloudport-edge": {
    id: "cloudport-edge",
    hero: {
      title: "CloudPort Edge",
      description:
        "Complete flexibility of network link type with 100% zero touch provisioning algorithm.",
    },
    overview:
      "All ScaleAOn Edge features are licensed using a flexible, capacity and usage-based model. CloudPort WAN/Edge appliance is available in physical form factor or as an \"any cloudprovider ready\" virtual appliance.",
    models: [
      {
        name: "ScaleAOn Edge Micro",
        description: "Suitable for IoT, Banking ATM & Retail POS use cases",
      },
      {
        name: "ScaleAOn Edge Lite",
        description: "Suitable for small branch offices with less than 25 users",
      },
      {
        name: "ScaleAOn Edge Turbo",
        description: "Suitable for regional offices with less than 100 users",
      },
      {
        name: "ScaleAOn Edge Dynamo",
        description: "For HQ Offices, BPO locations & services centers with unlimited users",
      },
    ],
    features: [
      {
        name: "ScaleAOn Edge Internet Protection",
        description:
          "Web protection with Internet filtering using Whitelist and Blacklist, extensible \"Go\" language based deep packet inspection engine for access control functions at application level, stateful Firewall and SIEM interoperability.",
      },
      {
        name: "Ease of Deployment",
        description:
          "True Zero touch provisioning made possible with a zero peering architecture, Private IP at branch, with multi-NAT traversal. Plug and Play deployment at spoke locations with no peering protocols on WAN.",
      },
      {
        name: "ScaleAOn Private Network Segmentation",
        description:
          "Next generation multi elastic VPNs with full mesh any to any VPN. Configurable through an easy to use and intuitive user interface. Allows for one click implementation of policies across thousands of locations enabling IT teams with incredible speed which wasn't possible with VPNs.",
      },
      {
        name: "Powerful Hybrid WAN Capabilities",
        description:
          "Network Link type independence provides incredible flexibility. Proven across every Hybrid WAN - Fibre, Copper, Coax, Serial, Wireless and more.",
      },
      {
        name: "Path Selection",
        description:
          "Network parameters for path selection include - latency, jitter, packet loss rate, network capacity. WAN policies to override or customize link selection. Flow based load balancing.",
      },
    ],
    edgeExperience: {
      eyebrow: "CloudPort Edge",
      heroCommand: "Any branch. Any link. One SD-WAN edge.",
      applianceLabel: "Branch edge fabric",
      applianceTitle: "Physical, virtual, or cloud edge for every location format.",
      applianceDescription:
        "CloudPort Edge brings Lavelle SD-WAN to the branch, campus, remote site, ATM network, retail point, and cloud edge. It supports links from 4G to fiber to V.35 serial while keeping provisioning controlled from the ScaleAOn architecture.",
      applianceStats: [
        {
          name: "4G to E1",
          description: "Run internet, wireless, fiber, copper, coax, serial, and legacy WAN links.",
        },
        {
          name: "Zero touch",
          description: "Bring spoke locations online without WAN peering protocols at the branch.",
        },
        {
          name: "Any cloud",
          description: "Use physical appliances, virtual machines, or cloud-ready edge form factors.",
        },
      ],
      overviewKicker:
        "All ScaleAOn Edge features use capacity and usage-based licensing, giving distributed enterprises a controlled way to modernize sites without forcing every branch into the same hardware shape.",
      modelsTitle: "Edge Models",
      modelsDescription:
        "Choose the edge class for the location, from ATM and POS estates to HQ offices and service centers with unlimited users.",
      deploymentTitle: "Deployment Modes",
      deploymentDescription:
        "CloudPort WAN/Edge can sit in branches, run as a virtual machine, or operate in cloud environments to connect users to applications.",
      deploymentOptions: [
        {
          name: "Physical",
          description:
            "Deploy in branches, remote sites, or campuses with integrated network services.",
        },
        {
          name: "Virtual",
          description:
            "Launch virtualized network services on approved infrastructure.",
        },
        {
          name: "Cloud",
          description:
            "Optimize cloud access and protect application performance.",
        },
      ],
      formFactorsTitle: "Location Formats",
      formFactors: [
        {
          name: "Small Format Locations",
          description: "SFL Series",
        },
        {
          name: "Medium Format Locations",
          description: "MFL Series",
        },
        {
          name: "Large Format Locations",
          description: "LFL Series",
        },
        {
          name: "Xtra Large Format Locations",
          description: "XL Series",
        },
      ],
      datasheetLabel: "Download Datasheet",
      featuresTitle: "ScaleAOn Edge Features",
      featuresDescription:
        "The old CloudPort page made the edge promise clear: protect the branch, provision fast, segment privately, support hybrid WAN, and pick the best path.",
      capabilities: [
        {
          name: "ScaleAOn Edge Internet Protection",
          description:
            "Web protection with filtering, deep packet inspection, stateful firewalling, and SIEM interoperability at the edge.",
          points: [
            "Whitelist and blacklist internet filtering",
            "Go-based deep packet inspection engine",
            "Application-level access control",
            "Stateful firewall and SIEM interoperability",
          ],
        },
        {
          name: "Ease of Deployment",
          description:
            "True zero-touch provisioning made for large spoke estates where manual branch configuration slows everything down.",
          points: [
            "Zero peering architecture",
            "Private IP at branch",
            "Multi-NAT traversal",
            "Plug-and-play spoke deployment",
          ],
        },
        {
          name: "ScaleAOn Private Network Segmentation",
          description:
            "Create multi-elastic VPNs with full-mesh any-to-any reach and one-click policy across thousands of sites.",
          points: [
            "Full-mesh any-to-any VPN",
            "Private segmentation policies",
            "One-click implementation across large networks",
          ],
        },
        {
          name: "Powerful Hybrid WAN Capabilities",
          description:
            "Keep link choice open across fiber, copper, coax, serial, wireless, MPLS, and internet paths.",
          points: [
            "Network link type independence",
            "Hybrid WAN across fiber, copper, coax, serial, and wireless",
            "Supports multiple provider mixes per site",
          ],
        },
        {
          name: "Path Selection",
          description:
            "Use latency, jitter, packet loss, capacity, WAN policy, and flow behavior to choose the best available path.",
          points: [
            "Latency, jitter, packet loss, and capacity signals",
            "WAN policy override controls",
            "Flow-based load balancing",
          ],
        },
      ],
      suiteTitle: "ScaleAOn SD-WAN Solution Suite",
      suiteDescription:
        "CloudPort Edge is the on-site reach of Lavelle SD-WAN, connecting branch users to applications while the gateway, controller, and insights layers govern traffic end to end.",
      suiteItems: [
        {
          name: "CloudPort Edge",
          description:
            "On-site network connectivity from 4G to fiber to V.35 serial E1 lines.",
        },
        {
          name: "CloudPort Gateway",
          description:
            "Data center and cloud aggregation with strong interoperability for SD-WAN edge networks.",
        },
        {
          name: "CloudStation Controller",
          description:
            "Intent-driven SDN architecture, modern dashboards, and segmentation tools.",
        },
        {
          name: "CloudStation Insights",
          description:
            "Flow analysis, dynamic path selection, network scores, and rapid usage visualization.",
        },
      ],
      transformationTitle:
        "Modernize branch WAN without surrendering link choice.",
      transformationDescription:
        "Lavelle Networks helps distributed enterprises move from legacy WAN dependency to software-defined branch networking built for scale, speed, and security.",
      resourcesTitle: "Resources",
      resourcesDescription:
        "Support the CloudPort Edge story with deployment proof, ScaleAOn platform material, and architecture context.",
      resources: [
        {
          type: "Case study",
          title: "Godrej Network Transformation",
          description:
            "How Godrej modernized branch networking with Lavelle SD-WAN across multiple locations.",
          href: "/resources",
        },
        {
          type: "Datasheet",
          title: "ScaleAOn SD-WAN 12.1",
          description:
            "Platform details for enterprise teams comparing edge, gateway, controller, and insights capabilities.",
          href: "/resources",
        },
        {
          type: "Technology brief",
          title: "ScaleAOn Architecture",
          description:
            "A closer look at the cloud-controlled architecture behind scalable enterprise VPNs.",
          href: "/technology/scaleaon-architecture",
        },
      ],
      finalCtaTitle: "Built for Scale, Speed and Security",
      finalCtaHighlight: "The branch edge for India's distributed enterprise.",
      finalCtaDescription:
        "Give every site the same SD-WAN discipline, whether it runs on 4G, fiber, serial links, virtual infrastructure, or cloud edge.",
      salesCtaLabel: "Contact Sales",
      secondaryCtaLabel: "Explore ScaleAOn",
    },
  },
  "cloudport-gateway": {
    id: "cloudport-gateway",
    hero: {
      title: "CloudPort Gateway",
      description:
        "Elastic, flexible and the most superior interoperability to aggregate and connect SD-WAN edge network to your data center or cloud networks.",
    },
    overview:
      "CloudPort Gateway appliance suite of physical, virtual and cloud instances with their powerful hardware and software capabilities handle thousands of VPN tunnels, large BGP or OSPF network aggregation and peering and advanced high availability architectures, to ensure the best network connection between SD-WAN edge/branches and applications.",
    models: [
      {
        name: "500-6E Series",
        description: "Up to 500Mbps with 6x1G Ethernet",
      },
      {
        name: "1000-6E Series",
        description: "Up to 1 Gbps with 6x1G Ethernet and one Expandable Interface Slot",
      },
      {
        name: "1000-2E Series",
        description: "Up to 1 Gbps with 2x1G Ethernet and two Expandable Interface Slot",
      },
      {
        name: "1000 Series",
        description: "Up to 10 Gbps with 4x1G Ethernet",
      },
    ],
    features: [
      {
        name: "BGP, OSPF Peering",
        description:
          "Support for both OSPF (Open Shortest Path First) and BGP (Border Gateway Protocol).",
      },
      {
        name: "Link Bonding to Upstream and Downstream Data Center Switches",
        description:
          "Get improved performance by transmitting several packets simultaneously down different links. Also, fast and transparent recovery in case one individual links failure.",
      },
      {
        name: "Multi Point Internet Breakout",
        description:
          "Flexibility to provide internet breakout both local and remote at the Data Center.",
      },
      {
        name: "NFV Service Chain with 3rd Party NGFW or WAN Op",
        description:
          "Can do network function virtualization with any device that supports NFV and the same component.",
      },
      {
        name: "DC/DR Traffic Re-Routing Capabilities",
        description:
          "Automatic DC/DR fail-over mechanism for a zero downtime environment.",
      },
      {
        name: "Cloud Support",
        description: "Any cloud support including Azure, AWS and GCP.",
      },
    ],
    gatewayExperience: {
      eyebrow: "CloudPort Gateway",
      heroCommand: "Aggregate every edge into one governed core.",
      gatewayLabel: "Data center aggregation fabric",
      gatewayTitle: "High-capacity gateway for tunnels, routing, cloud, and DC/DR.",
      gatewayDescription:
        "CloudPort Gateway aggregates SD-WAN edge networks into data centers and cloud environments. It is built for thousands of VPN tunnels, large BGP or OSPF peering domains, software-defined high availability, and controlled traffic movement between branches and applications.",
      gatewayStats: [
        {
          name: "10 Gbps",
          description: "Aggregate SD-WAN edge traffic with advanced gateway capacity licensing.",
        },
        {
          name: "BGP/OSPF",
          description: "Peer into enterprise routing domains with standard data center protocols.",
        },
        {
          name: "DC/DR",
          description: "Reroute traffic for high availability and zero downtime operating models.",
        },
      ],
      overviewKicker:
        "CloudPort Gateway is available across physical, virtual, and cloud instances so the aggregation layer can live where enterprise applications already run.",
      modelsTitle: "Gateway Models",
      modelsDescription:
        "Choose the gateway appliance for the throughput, interface count, and expansion path your data center or cloud edge requires.",
      datasheetLabel: "Download Datasheet",
      featuresTitle: "ScaleAOn Gateway Features",
      featuresDescription:
        "The old Gateway page focused on aggregation strength: routing, bonding, internet breakout, NFV, DC/DR, and public cloud support.",
      capabilities: [
        {
          name: "BGP, OSPF Peering",
          description:
            "Support enterprise routing with BGP and OSPF peering between SD-WAN edge networks and data center domains.",
          points: [
            "BGP peering support",
            "OSPF peering support",
            "Routes SD-WAN edge traffic into core networks",
          ],
        },
        {
          name: "Link Bonding to Data Center Switches",
          description:
            "Bond upstream and downstream switch links for better performance and faster recovery when individual links fail.",
          points: [
            "Parallel packet transmission across links",
            "Upstream and downstream switch bonding",
            "Transparent recovery on individual link failure",
          ],
        },
        {
          name: "Multi Point Internet Breakout",
          description:
            "Provide internet breakout locally or remotely from the data center with flexible policy control.",
          points: [
            "Local internet breakout",
            "Remote data center breakout",
            "Policy-driven breakout placement",
          ],
        },
        {
          name: "NFV Service Chain",
          description:
            "Support network function virtualization with third-party next-generation firewall or WAN optimization devices.",
          points: [
            "Third-party NGFW integration",
            "WAN optimization service chain support",
            "NFV-ready deployment model",
          ],
        },
        {
          name: "DC/DR Traffic Re-Routing",
          description:
            "Automatically reroute traffic across data center and disaster recovery environments for high availability.",
          points: [
            "Automatic DC/DR failover",
            "Zero downtime traffic model",
            "High availability across critical sites",
          ],
        },
        {
          name: "Cloud Support",
          description:
            "Extend gateway aggregation into public cloud environments including Azure, AWS, and GCP.",
          points: [
            "Azure support",
            "AWS support",
            "GCP support",
          ],
        },
      ],
      licensesTitle: "Gateway Licenses",
      licensesDescription:
        "Pay-as-you-scale capacity licenses upgrade aggregate connection capacity on CloudPort Gateway appliances.",
      licenses: [
        {
          name: "ScaleAOn Gateway Standard",
          description:
            "Aggregate up to 1 Gbps of SD-WAN edge traffic with BGP, OSPF peering and more.",
        },
        {
          name: "ScaleAOn Gateway Advanced",
          description:
            "Aggregate up to 10 Gbps of SD-WAN edge traffic with DC/DR traffic re-routing capabilities and more.",
        },
      ],
      suiteTitle: "ScaleAOn SD-WAN Solution Suite",
      suiteDescription:
        "CloudPort Gateway is the aggregation point of Lavelle SD-WAN, connecting branch edges to data centers, cloud networks, control policy, and analytics.",
      suiteItems: [
        {
          name: "CloudPort Edge",
          description:
            "On-site network connectivity from 4G to fiber to V.35 serial E1 lines.",
        },
        {
          name: "CloudPort Gateway",
          description:
            "Data center and cloud aggregation with strong interoperability for SD-WAN edge networks.",
        },
        {
          name: "CloudStation Controller",
          description:
            "Intent-driven SDN architecture, modern dashboards, and segmentation tools.",
        },
        {
          name: "CloudStation Insights",
          description:
            "Flow analysis, dynamic path selection, network scores, and rapid usage visualization.",
        },
      ],
      transformationTitle:
        "Connect branch SD-WAN to the enterprise core with authority.",
      transformationDescription:
        "Lavelle Networks helps distributed enterprises aggregate WAN traffic, protect application reachability, and modernize data center connectivity for cloud-first growth.",
      resourcesTitle: "Resources",
      resourcesDescription:
        "Use these resources to support the CloudPort Gateway story with proof, platform context, and ScaleAOn architecture detail.",
      resources: [
        {
          type: "Case study",
          title: "Godrej Network Transformation",
          description:
            "How Godrej modernized branch networking with Lavelle SD-WAN across multiple locations.",
          href: "/resources",
        },
        {
          type: "Datasheet",
          title: "ScaleAOn SD-WAN 12.1",
          description:
            "Platform details for enterprise teams comparing edge, gateway, controller, and insights capabilities.",
          href: "/resources",
        },
        {
          type: "Technology brief",
          title: "ScaleAOn Architecture",
          description:
            "A closer look at the cloud-controlled architecture behind scalable enterprise VPNs.",
          href: "/technology/scaleaon-architecture",
        },
      ],
      finalCtaTitle: "Built for Scale, Speed and Security",
      finalCtaHighlight: "Gateway capacity for enterprise SD-WAN scale.",
      finalCtaDescription:
        "Give every branch, data center, and cloud edge a high-capacity aggregation layer that keeps application access under control.",
      salesCtaLabel: "Contact Sales",
      secondaryCtaLabel: "Explore ScaleAOn",
    },
  },
};
