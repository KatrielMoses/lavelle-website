export interface TechFeature {
  name: string;
  description: string;
}

export interface TechPageContent {
  id: string;
  hero: {
    title: string;
    description: string;
  };
  overview?: string;
  features: TechFeature[];
}

export const TECHNOLOGY_CONTENT: Record<string, TechPageContent> = {
  "scaleaon-sd-wan": {
    id: "scaleaon-sd-wan",
    hero: {
      title: "ScaleAOn Architecture",
      description: "Next generation SD-WAN platform and the most comprehensive portfolio for transforming your enterprise network.",
    },
    overview:
      "Unfold Lavelle Networks revolutionary flagship technology - ScaleAOn - Cloud controlled SD-WAN that simplifies the complex art of creating scalable VPNs.",
    features: [
      {
        name: "Advantages over MPLS",
        description: "Reduces costs by providing optimized, multi-point connectivity and the flexibility to use economical WAN circuits. Proven to improve overall network performance by up to 90% compared to MPLS-only networks, while providing faster connectivity in remote areas.",
      },
      {
        name: "Advantages over DMVPN",
        description: "Unlike DMVPN, ScaleAOn simplifies network design with automated topology mechanisms, removes Hub dependency, offers advanced authentication (vs Pre-shared Key), and uses advanced policy frameworks over error-prone routing protocols.",
      },
      {
        name: "Enhanced Performance Optimization",
        description: "While IPSEC VPN lacks performance optimization attributes, ScaleAOn SD-WAN connects your sites while actively enhancing application performance.",
      },
      {
        name: "Reliability & Maintenance",
        description: "ScaleAOn is highly reliable with internet bandwidth aggregation and per-packet load balancing. Configuration and maintenance are drastically simplified through powerful network policies and automation frameworks.",
      },
    ],
  },
  "sd-net-converged-branch-networking": {
    id: "sd-net-converged-branch-networking",
    hero: {
      title: "SD-NET Converged Branch Networking",
      description: "Zero touch and zero trust based distributed deployment for maximum availability, optimal performance and end to end security.",
    },
    overview:
      "Create a perimeter that encompasses the physical and virtual place of business—from small and home offices to corporate locations, Data Centers, cloud infrastructure, and SaaS applications—secure from external, internal, and lateral threats.",
    features: [
      {
        name: "Network Availability",
        description: "Ensure the network is highly available for users and devices to seamlessly access critical applications.",
      },
      {
        name: "Optimal Experience",
        description: "Ensure this trusted group of users and devices accessing applications gets the most optimal, uninterrupted experience.",
      },
      {
        name: "Centralized Orchestration",
        description: "Provisioned, enforced, and monitored centrally from the cloud or directly from your Network Operations Center (NOC).",
      },
    ],
  },
  "built-to-scale": {
    id: "built-to-scale",
    hero: {
      title: "Built to Scale",
      description: "Horizontally scalable SD-WAN platform resulting in cost-effective and agile networks.",
    },
    overview:
      "CloudStation follows a Web Application architecture. By using a web architecture for a network controller, we have brought the scale element of the web into network control, management, and monitoring. This ensures that the solution scales, just like a web application—built using distributed micro-services.",
    features: [
      {
        name: "CloudStation Web Architecture",
        description: "Overcomes classic enterprise network scale issues. Our systems are capable of providing the resiliency, scale, and performance that enterprises need.",
      },
      {
        name: "Centralized Control Plane",
        description: "A true software-defined network with the control plane centralized in the CloudStation SDN Controller, leaving Edge Appliances (CloudPorts) to adhere to encrypted secure messages.",
      },
      {
        name: "Intent-Driven Framework",
        description: "An intent-driven configuration framework that does not need persistent legacy transport connections. The control plane can fail over to the right WAN path without losing a single transaction.",
      },
      {
        name: "Flexible Upgrades",
        description: "CloudPort devices securely retrieve the latest software versions from CloudStation. Upgrades can be scheduled and pushed to thousands of edge devices simultaneously.",
      },
    ],
  },
  "built-to-be-simple": {
    id: "built-to-be-simple",
    hero: {
      title: "Built to be Simple",
      description: "ScaleAOn is a Fit for Purpose SD-WAN solution.",
    },
    overview:
      "We address one of the key challenges of enterprises by providing flexible deployment and consumption models, ruling out the trend of “One Size Fits All.” All our hardware variants are primarily COTS appliances, and the true intelligence is in the software.",
    features: [
      {
        name: "Flexible Deployment",
        description: "Control plane elements like CloudStation can be deployed as physical appliances or within virtualized public/private cloud environments.",
      },
      {
        name: "Network as a Service (NaaS)",
        description: "A comprehensive consumption model providing an agile, OPEX-friendly approach to distributed networking.",
      },
      {
        name: "Multi-Tenancy & Single Pane",
        description: "CloudStation serves as a single 'MANO' Window—Management, Automation, Networking, and Orchestration—with full multi-tenancy support.",
      },
      {
        name: "Application-Based Routing",
        description: "Intelligent policy and application-based traffic routing, including local internet breakouts for specific SaaS applications.",
      },
    ],
  },
  "built-to-be-programmable": {
    id: "built-to-be-programmable",
    hero: {
      title: "Built to be Programmable",
      description: "API Centric Approach to Control Plane Communications.",
    },
    overview:
      "ScaleAOn SD-WAN is completely built using 100% RESTful APIs, where every edge node talks to the central controller using REST-based APIs. The controller via these APIs distributes the knowledge of subnets and provides viable paths to reach remote private subnets.",
    features: [
      {
        name: "API-Centric Operations",
        description: "Eliminates rigid command-line dependencies, allowing seamless integration with existing IT orchestration tools.",
      },
      {
        name: "Custom Application Classification",
        description: "By default, the system identifies standard enterprise applications but can be flexibly customized for environments running proprietary custom applications.",
      },
    ],
  },
  "our-approach-to-hybrid-wan": {
    id: "our-approach-to-hybrid-wan",
    hero: {
      title: "Our Approach to Hybrid WAN",
      description: "Dynamic Path Selection and intelligent path control.",
    },
    overview:
      "Lavelle Networks copyright ScaleAOn path selection provides an intelligent path control solution to deliver the best application experience to the end user, even in the case of varying WAN characteristics across one or more transports.",
    features: [
      {
        name: "Per-Packet Load Balancing",
        description: "Bandwidth aggregation in ScaleAOn uses per-packet load balancing (PPLB) to maximize bandwidth utilization and ensure chatty applications perform optimally without compromising others.",
      },
      {
        name: "Application Recognition Accuracy",
        description: "Enhances application steering through an accelerated overlay VPN network, providing the best quality of experience across any low-cost WAN.",
      },
      {
        name: "Improved Uptime",
        description: "Mitigate the cons of a single dedicated line or broadband connection by abstracting multiple transports into a unified, highly reliable hybrid WAN fabric.",
      },
    ],
  },
  "quality-of-experience": {
    id: "quality-of-experience",
    hero: {
      title: "Quality of Experience",
      description: "Impact of the right SD-WAN for Audio & Video traffic.",
    },
    overview:
      "The Quality of Experience (QoE) for users with Audio & Video applications determines the effectiveness of an SD-WAN solution. We bypass legacy, counter-productive techniques like Packet Duplication and Forward Error Correction (FEC) for superior proprietary algorithms.",
    features: [
      {
        name: "Latency & Jitter Control",
        description: "Network routing functions explicitly mitigate the impact of higher latency, jitter, and packet loss rates to deliver optimal QoE for AV applications.",
      },
      {
        name: "Quality Score Anchor",
        description: "The Lavelle Networks Quality Score approach anchors traffic on a network path that creates the optimal balance between Packet Loss Rate and Latency, preventing network congestion.",
      },
      {
        name: "Smart Detection Logic",
        description: "When conditions demand it, packets are replicated over meaningful WAN links, and intelligent gateway logic uses robust window protocols to discard replicated packets efficiently.",
      },
    ],
  },
  "our-approach-to-security": {
    id: "our-approach-to-security",
    hero: {
      title: "Our Approach to Security",
      description: "Advanced defense layers with strict isolation and anomaly detection.",
    },
    overview:
      "Modern network security requires moving beyond simple static filtering to comprehensive anomaly detection, containerized isolation, and artificial intelligence.",
    features: [
      {
        name: "Multi-layered Defense",
        description: "Incorporates 2nd level defense mechanisms with static authorization elements like URL Filtering and Stateful Firewalls.",
      },
      {
        name: "Advanced Threat Prevention",
        description: "Utilizes agile compute and storage capacity to identify and prevent advanced threats like ransomware and malware through sophisticated sandboxing.",
      },
      {
        name: "AI & Anomaly Detection",
        description: "Deploys correlational analytics, artificial intelligence, and machine learning to triage anomalies in user, application, and network behavior.",
      },
      {
        name: "Containerized NFV Isolation",
        description: "Security services at the edge are isolated from the main SD-WAN transport via a lean NFV model using strict containerization.",
      },
      {
        name: "Control Plane Security",
        description: "The control plane is isolated as a secure web service API, entirely separated from the data plane packet path. This ensures edge appliances are always reachable and manageable.",
      },
    ],
  },
  "sd-wan": {
    id: "sd-wan",
    hero: {
      title: "SD-WAN Deep Dive",
      description: "Understand the core mechanics, benefits, and architectural shifts of the Software-Defined Wide Area Network.",
    },
    overview:
      "Software-Defined Wide Area Networking (SD-WAN) decouples the networking hardware from its control mechanism. By utilizing an SDN-centric approach, enterprises can securely connect users to applications across any combination of transport services, including MPLS, LTE, and broadband internet.",
    features: [
      {
        name: "Transport Independence",
        description: "Abstracts the underlying transport networks, allowing seamless routing of traffic over any combination of internet and private lines without manual intervention.",
      },
      {
        name: "Dynamic Path Control",
        description: "Continuously monitors performance metrics like latency, jitter, and packet loss, automatically steering critical application traffic to the healthiest links in real-time.",
      },
      {
        name: "Zero-Touch Provisioning",
        description: "Edge appliances automatically authenticate, download their configuration policies, and establish encrypted tunnels without requiring on-site IT personnel.",
      },
      {
        name: "Application Visibility",
        description: "Deep packet inspection and behavioral analysis provide granular visibility into application performance, enabling precise QoS and security policies.",
      },
    ],
  },
};
