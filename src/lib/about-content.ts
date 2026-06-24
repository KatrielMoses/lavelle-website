export interface AboutFeature {
  name: string;
  description: string;
}

export interface AboutHeroContent {
  eyebrow: string;
  title: string;
  command: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
}

export interface AboutValuePillar {
  icon: "compass" | "shield" | "users" | "rocket" | "target" | "sparkles";
  title: string;
  description: string;
}

export interface AboutTimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface AboutOriginCard {
  label: string;
  value: string;
  description: string;
}

export interface AboutLeader {
  name: string;
  role: string;
  bio: string;
  featured?: boolean;
  initials: string;
}

export interface AboutAdvisor {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutClosingCta {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export interface AboutPageContent {
  id: string;
  hero: AboutHeroContent;
  // Used by company page (kept for backward-compat with old template consumers)
  features: AboutFeature[];
  overview?: string;
  // Company-page extras
  story?: { kicker: string; title: string; paragraphs: string[] };
  values?: AboutValuePillar[];
  timeline?: AboutTimelineEntry[];
  origin?: { title: string; description: string; cards: AboutOriginCard[] };
  stats?: AboutStat[];
  // Leadership-page extras
  leadershipIntro?: string;
  leadershipStats?: AboutStat[];
  leadership?: AboutLeader[];
  // Advisor-page extras
  boardIntro?: string;
  advisors?: AboutAdvisor[];
  // Shared closing CTA copy
  closingCta?: AboutClosingCta;
}

export const ABOUT_CONTENT: Record<string, AboutPageContent> = {
  company: {
    id: "company",
    hero: {
      eyebrow: "About Lavelle Networks",
      title: "The Company That Owns Indian Enterprise Networking",
      command: "Built in Bangalore. Deployed across the nation.",
      description:
        "Lavelle Networks is the SD-WAN and enterprise networking backbone of modern India. From the country's largest banks to its fastest-growing digital businesses, three out of every five enterprise networks run on the platform we built.",
      primaryCta: { label: "Talk to Our Team", href: "/contact" },
      secondaryCta: { label: "Explore Solutions", href: "/solutions" },
    },
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
    story: {
      kicker: "Our Story",
      title: "From a road in Bangalore to the backbone of Indian enterprise.",
      paragraphs: [
        "Lavelle Networks is named after Lavelle Road — one of Bangalore's oldest and most storied streets. The name carries an intention: to build a company with the lasting presence of the place it comes from.",
        "We were founded on a foundation of fierce passion and uncompromising integrity. We embrace diversity and treat every problem as a challenge that prompts invention — not as a constraint to be managed.",
        "Today, that intention has compounded into something measurable. Three out of every five enterprise networks in India run on Lavelle SD-WAN. Asia's largest SD-WAN deployment in banking lives on our platform. We deploy 1,000 nodes in two weeks. And we have helped India's largest enterprises reduce network hardware and software support costs by up to 40%.",
      ],
    },
    values: [
      {
        icon: "shield",
        title: "Respect & Integrity",
        description:
          "Respect everyone — customers, partners, colleagues, competitors. Be intense about integrity in every decision, every line of code, every commitment we make.",
      },
      {
        icon: "compass",
        title: "Humility & Courage",
        description:
          "Stay grounded and stay humble. Listen to your fears, then push them aside with courage. The most important work happens after the comfortable thing to do.",
      },
      {
        icon: "users",
        title: "Team Work",
        description:
          "Be fiercely passionate about teamwork and collaboration. The best outcomes are built by teams that argue honestly, decide cleanly, and execute as one.",
      },
      {
        icon: "rocket",
        title: "Unthinkable Objectives",
        description:
          "Set unrealistic, impractical objectives to delight our customers — then do the unthinkable to achieve them. Customers remember the team that aimed higher than they asked.",
      },
    ],
    timeline: [
      {
        year: "Origin",
        title: "Founded on Lavelle Road, Bangalore",
        description:
          "Lavelle Networks is born in the heart of Bangalore's enterprise-tech district, with a charter to bring SDN and cloud-grade intelligence to the Indian enterprise network.",
      },
      {
        year: "2019",
        title: "Asia's largest SD-WAN deployment in banking",
        description:
          "We deliver the largest SD-WAN rollout ever completed by a financial institution in Asia — a deployment that becomes the reference architecture for the industry.",
      },
      {
        year: "Scale",
        title: "1,000 nodes in 2 weeks",
        description:
          "Our team proves what's possible when software-defined networking meets operational discipline: 1,000 production nodes live in 14 days, end to end.",
      },
      {
        year: "Today",
        title: "Three out of five enterprise networks in India",
        description:
          "From banking to logistics to IT services, Lavelle SD-WAN becomes the default choice for India's most demanding distributed enterprises.",
      },
      {
        year: "Recognition",
        title: "ISO 27001 · NASSCOM Emerge 50 · CIO Choice · IAA",
        description:
          "The work earns industry recognition — ISO 27001:2013, NASSCOM Emerge 50, CIO Choice 2023, and IAA Vendor of Note.",
      },
    ],
    origin: {
      title: "The Name Is the Mission",
      description:
        "Lavelle Road, Bangalore — a street that has carried the ambitions of Indian enterprise for over a century. We built this company to carry that same weight, with the same quiet confidence.",
      cards: [
        {
          label: "Headquartered",
          value: "Bangalore",
          description: "Lavelle Road, in the heart of India's enterprise-tech district.",
        },
        {
          label: "Market Position",
          value: "#1 in India",
          description: "Three of every five Indian enterprise networks run on Lavelle SD-WAN.",
        },
        {
          label: "Fastest Growing",
          value: "SD-WAN India",
          description: "The fastest-growing SD-WAN company in the country, by deployment velocity.",
        },
      ],
    },
    stats: [
      { value: "3 of 5", label: "Enterprise Networks in India" },
      { value: "1,000+", label: "Nodes deployed in 2 weeks" },
      { value: "40%", label: "Reduction in support costs" },
      { value: "99.99%", label: "Network uptime, across deployments" },
    ],
    closingCta: {
      title: "Build the network India's enterprises actually run on.",
      description:
        "Talk to our team about SD-WAN, ScaleAOn, SD-NET, and Hybrid WAN — and see why the country's most demanding enterprises choose Lavelle.",
      primary: { label: "Talk to Our Team", href: "/contact" },
      secondary: { label: "See Our Solutions", href: "/solutions" },
    },
  },

  leadership: {
    id: "leadership",
    hero: {
      eyebrow: "Leadership",
      title: "The People Behind India's SD-WAN",
      command: "Engineers, operators, and operators-turned-leaders.",
      description:
        "Our strategic leaders are driving growth, operations, and market expansion by leveraging decades of experience across data centers, enterprise networks, and service providers — the same networks Lavelle's platform now powers.",
      primaryCta: { label: "Talk to Us", href: "/contact" },
      secondaryCta: { label: "Talk to Leadership", href: "/contact" },
    },
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
    leadershipIntro:
      "Eight leaders. One mission — to make Lavelle Networks the most trusted name in Indian enterprise networking. Below: the team turning that mission into shipped product, won deals, and satisfied customers.",
    leadershipStats: [
      { value: "20+", label: "Years of network-industry experience" },
      { value: "8", label: "Senior leaders driving strategy" },
      { value: "1,000+", label: "Nodes deployed in 2 weeks" },
      { value: "100%", label: "Built and led in India" },
    ],
    leadership: [
      {
        name: "Shyamal Kumar",
        role: "Chief Executive Officer",
        bio: "As our CEO, Shyamal is a software product leader who has led platforms spanning data center, enterprise, and service provider networks. He is passionate about embracing SDN and cloud technologies to bring simplicity and performance to data networks.",
        featured: true,
        initials: "SK",
      },
      {
        name: "Drritiman Boraah",
        role: "VP Engineering · Customer-First Engineering",
        bio: "Drritiman has two decades of experience in telecom and data networking technology. He built a team of fiercely passionate engineers focused on solving every customer network issue, paving the way for our customer-first mindset.",
        initials: "DB",
      },
      {
        name: "Renzil Dsouza",
        role: "Head of Presales, India",
        bio: "With over 20 years in the networking industry, Renzil leads the presales India team. He brings deep expertise in routers, switches, security, and wireless to deliver innovative and scalable solutions.",
        initials: "RD",
      },
      {
        name: "Netaji Patil",
        role: "Head of Sales & Business Development",
        bio: "Netaji heads our sales and business development across multiple markets. A passionate speaker and advocate for customer success, he relentlessly pushes teams to win, retain, and grow our customers.",
        initials: "NP",
      },
      {
        name: "Harish Kumtakar",
        role: "Head of Product Engineering",
        bio: "Leading product engineering, Harish has in-depth knowledge in network architectures like SDN, NFV, and VNF. He explores new technology advancements to build scalable, high-performing products.",
        initials: "HK",
      },
      {
        name: "Samuel Natarajan",
        role: "Engineering Leader · Cloud, Edge & Security",
        bio: "A seasoned engineering leader driving efforts to harness cloud, edge, analytics, and security. His expertise spans SDN, SD-WAN, Big Data, Blockchain, IoT, and AI.",
        initials: "SN",
      },
      {
        name: "Randhir Bhattacharya",
        role: "Principal Software Architect",
        bio: "An experienced software architect who created the blueprint of our successful product execution. A perfectionist at heart regarding technology architectural choices.",
        initials: "RB",
      },
      {
        name: "Hariharan NRS",
        role: "VP, Products & Solutions",
        bio: "VP of Products & Solutions, Hariharan excels at overcoming operational challenges to deliver high-quality software products on time across Cloud, Wireless, and Wired Networking.",
        initials: "HN",
      },
    ],
    closingCta: {
      title: "Build your career inside India's #1 SD-WAN.",
      description:
        "We're hiring engineers, sales leaders, and operators who want to do the most ambitious work of their careers — on the network backbone of Indian enterprise.",
      primary: { label: "Talk to Leadership", href: "/contact" },
      secondary: { label: "Talk to a Leader", href: "/contact" },
    },
  },

  "executive-advisor": {
    id: "executive-advisor",
    hero: {
      eyebrow: "Executive Advisors",
      title: "Strategic Counsel from India's Tech Fronteer",
      command: "Operators who have built what we are building.",
      description:
        "Our board of advisors and executive evangelists bring a wealth of operational, technological, and strategic experience to help shape the future of enterprise networking — and the future of Lavelle Networks.",
      primaryCta: { label: "Connect With Us", href: "/contact" },
      secondaryCta: { label: "See Leadership", href: "/about/leadership" },
    },
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
    boardIntro:
      "The advisors below shape Lavelle's strategy from the outside in — bringing decades of venture, technology, and operational experience to the table. They are partners in our ambition to own Indian enterprise networking.",
    advisors: [
      {
        name: "BV Jagadeesh",
        role: "Kaaj Ventures — Board Advisor & Observer",
        bio: "BV Jagadeesh serves as Board Advisor and Observer to Lavelle Networks through Kaaj Ventures, bringing deep operating experience from the venture side of enterprise technology to the company's strategy and capital decisions.",
        initials: "BJ",
      },
      {
        name: "Shoaib Ahmed",
        role: "Chief Coach",
        bio: "Shoaib Ahmed serves as Chief Coach to the leadership team, working closely with our executives on the disciplines, frameworks, and operating rhythms that turn ambitious technology companies into durable institutions.",
        initials: "SA",
      },
      {
        name: "Arun Shetty",
        role: "Chief Technology Evangelist",
        bio: "Arun Shetty serves as Chief Technology Evangelist, representing Lavelle Networks across the broader technology ecosystem — with customers, partners, analyst communities, and the industry at large.",
        initials: "AS",
      },
    ],
    closingCta: {
      title: "Want to be part of our story?",
      description:
        "Talk to our team about partnerships, advisory, and the future of Indian enterprise networking.",
      primary: { label: "Connect With Us", href: "/contact" },
      secondary: { label: "See Leadership", href: "/about/leadership" },
    },
  },
};
