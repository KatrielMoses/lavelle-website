export interface ResourceItem {
  title: string;
  description: string;
}

export interface ResourceCategory {
  category: string;
  items: ResourceItem[];
}

export interface ResourcesPageContent {
  hero: {
    title: string;
    description: string;
  };
  categories: ResourceCategory[];
}

export const RESOURCES_CONTENT: ResourcesPageContent = {
  hero: {
    title: "Software Defined Networking",
    description: "EBooks, Case Studies, Use Cases and more!",
  },
  categories: [
    {
      category: "Case Studies",
      items: [
        {
          title: "Kalupur Bank",
          description: "Achieved 70% cost savings along with enhanced visibility, manageability, network uptime, and QoS across all branches.",
        },
        {
          title: "Havells - Unbeatable scale and speed",
          description: "Transformed network & achieved nearly 100% uptime across all branches using SD-WAN.",
        },
        {
          title: "Gokak Mills",
          description: "Improved its application and network performance using SD-WAN.",
        },
        {
          title: "MaxLife Insurance",
          description: "Achieved key goals for WAN transformation across its multiple branches.",
        },
        {
          title: "Retail Digital Transformation 2.0",
          description: "1200+ Retail Store chain underwent a Network Transformation to meet the demands of the Cloud era.",
        },
        {
          title: "Connecting Public Health Care with SD-WAN",
          description: "Impact a national project at scale, and proving that India will go digital faster than anyone can imagine.",
        },
      ],
    },
    {
      category: "Technical Docs",
      items: [
        {
          title: "ScaleAOn SD-WAN 12.0 Datasheet",
          description: "ScaleAOn SD-WAN 12.0 is the future-ready SD-WAN platform with advanced intelligence and deeper automation across the most robust enterprise networking stack.",
        },
        {
          title: "State of SD-WAN in India Report 2020",
          description: "In this report, we bring to you a distilled analysis of the sweeping phenomenon of SD-WAN in the Indian enterprise market.",
        },
        {
          title: "Intel Network Builders - Lavelle Networks Solution Brief",
          description: "Lavelle’s ScaleAon SD-WANs offload cloud traffic to IP networks for exceptional performance while helping maintain quality security.",
        },
      ],
    },
    {
      category: "White Papers",
      items: [
        {
          title: "ScaleAOn SD-WAN for Logistics Industry",
          description: "An overview of Lavelle Networks ScaleAOn SD-WAN solution to connect numerous locations of a logistics company with data centers.",
        },
        {
          title: "ScaleAOn SD-WAN for Pharmaceutical Industry",
          description: "SD-WAN solution to connect various entities of the ecosystem of a pharmaceutical company.",
        },
        {
          title: "ScaleAOn SD-WAN for Public Sector",
          description: "SD-WAN solution to connect remote facilities, corporate offices, plants, mines, etc. of public sector units (PSUs) with data centers.",
        },
        {
          title: "ScaleAOn SD-WAN for Manufacturing Industry",
          description: "SD-WAN solution to connect the Manufacturing factories, warehouses, service centers and branch offices to Data Center.",
        },
        {
          title: "SASE - The Future of SD-WAN & Network Security",
          description: "A combination of network-as-a-service capabilities such as SD-WAN, WAN optimization, etc. and Security-as-a-Service.",
        },
        {
          title: "ScaleAOn SD-WAN for Banking Industry",
          description: "SD-WAN solution to connect the Retail Branch Locations, Corporate Locations and ATMs to Data Center.",
        },
        {
          title: "ZTP – Zero Touch Provisioning",
          description: "WAN edge or branch networking has been traditionally a manual and complex IT maintenance activity.",
        },
        {
          title: "Designing India's Leap Into Digital Economy",
          description: "The state of SD-WAN adoption in India and key insights into next generation networking technology.",
        },
        {
          title: "An Introduction to SD-WAN",
          description: "Read about what SD-WAN technology is, how it benefits your organization and a comparison of SD-WAN with MPLS, VPN and P2P.",
        },
        {
          title: "Demystifying MPLS",
          description: "A deeper look at MPLS, and explain it in today's language, so you can make the best decisions for your enterprise network.",
        },
        {
          title: "Implementing Software Defined WAN",
          description: "Get insights from the team which pulled off the world’s most grueling SD-WAN transition of 1000 locations in two weeks.",
        },
      ],
    },
  ],
};
