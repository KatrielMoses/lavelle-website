export interface AboutFeature {
  name: string;
  description: string;
}

export interface AboutPageContent {
  id: string;
  hero: {
    title: string;
    description: string;
  };
  overview?: string;
  features: AboutFeature[];
}

export const ABOUT_CONTENT: Record<string, AboutPageContent> = {
  "company": {
    id: "company",
    hero: {
      title: "The Future is in Progress Here",
      description: "Driving the next generation of enterprise networking.",
    },
    overview:
      "Lavelle Networks is built on a foundation of fierce passion and uncompromising integrity. We embrace diversity and treat every problem as a challenge that prompts invention.",
    features: [
      {
        name: "Respect & Integrity",
        description: "Respect everyone. Be intense in your integrity.",
      },
      {
        name: "Humility & Courage",
        description: "Stay grounded, stay humble. Listen to your fears, then push them aside with courage.",
      },
      {
        name: "Team Work",
        description: "Be fiercely passionate about teamwork and collaboration.",
      },
      {
        name: "Unthinkable Objectives",
        description: "Set unrealistic, impractical objectives to delight our customers, and then do the unthinkable to achieve them.",
      },
    ],
  },
  "leadership": {
    id: "leadership",
    hero: {
      title: "Leadership Team",
      description: "Meet the visionary leaders driving innovation in enterprise networking and SD-WAN solutions.",
    },
    overview:
      "Our strategic leaders are driving growth, operations, and market expansion by leveraging decades of experience across data centers, enterprise networks, and service providers.",
    features: [
      {
        name: "Shyamal Kumar",
        description: "As our CEO, Shyamal is a software product leader who has led platforms spanning data center, enterprise, and service provider networks. He is passionate about embracing SDN and cloud technologies to bring simplicity and performance to data networks.",
      },
      {
        name: "Drritiman Boraah",
        description: "Drritiman has two decades of experience in telecom and data networking technology. He built a team of fiercely passionate engineers focused on solving every customer network issue, paving the way for our customer-first mindset.",
      },
      {
        name: "Renzil Dsouza",
        description: "With over 20 years in the networking industry, Renzil leads the presales India team. He brings deep expertise in routers, switches, security, and wireless to deliver innovative and scalable solutions.",
      },
      {
        name: "Netaji Patil",
        description: "Netaji heads our sales and business development across multiple markets. A passionate speaker and advocate for customer success, he relentlessly pushes teams to win, retain, and grow our customers.",
      },
      {
        name: "Harish Kumtakar",
        description: "Leading product engineering, Harish has in-depth knowledge in network architectures like SDN, NFV, and VNF. He explores new technology advancements to build scalable, high-performing products.",
      },
      {
        name: "Samuel Natarajan",
        description: "A seasoned engineering leader driving efforts to harness cloud, edge, analytics, and security. His expertise spans SDN, SD-WAN, Big Data, Blockchain, IoT, and AI.",
      },
      {
        name: "Randhir Bhattacharya",
        description: "An experienced software architect who created the blueprint of our successful product execution. A perfectionist at heart regarding technology architectural choices.",
      },
      {
        name: "Hariharan NRS",
        description: "VP of Products & Solutions, Hariharan excels at overcoming operational challenges to deliver high-quality software products on time across Cloud, Wireless, and Wired Networking.",
      },
    ],
  },
  "executive-advisor": {
    id: "executive-advisor",
    hero: {
      title: "Executive Advisors",
      description: "Guiding Lavelle Networks with strategic vision and industry mastery.",
    },
    overview:
      "Our board of advisors and executive evangelists bring a wealth of operational, technological, and strategic experience to help shape the future of enterprise networking.",
    features: [
      {
        name: "BV Jagadeesh",
        description: "Kaaj Ventures Board Advisor and Observer.",
      },
      {
        name: "Shoaib Ahmed",
        description: "Chief Coach.",
      },
      {
        name: "Arun Shetty",
        description: "Chief Technology Evangelist.",
      },
    ],
  },
};
