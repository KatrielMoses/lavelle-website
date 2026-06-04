export interface IndustryFeature {
  name: string;
  description: string;
}

export interface IndustryPageContent {
  id: string;
  title: string;
  description: string;
  challenges: string[];
  solutions: string[];
  useCases: IndustryFeature[];
  benefits: string[];
}

export const INDUSTRIES_CONTENT: Record<string, IndustryPageContent> = {
  "bfsi": {
    id: "bfsi",
    title: "BFSI (Banking, Financial Services, and Insurance)",
    description: "Empowering Financial Institutions with Advanced SD-WAN Solutions.",
    challenges: [
      "Ensure compliance with PCI DSS, GDPR, and RBI guidelines while protecting sensitive customer data.",
      "Seamless communication between geographically dispersed branches, ATMs, and data centers.",
      "High-speed, reliable connections to process real-time transactions without delays.",
      "Ensure business continuity with efficient disaster recovery mechanisms."
    ],
    solutions: [
      "Encryption, firewalls, and intrusion prevention systems ensure robust data protection.",
      "Manage the entire network from a single, centralized platform for simplified operations.",
      "Seamlessly connect with cloud-based applications like CRM, core banking systems, and payment gateways."
    ],
    useCases: [
      { name: "Secure Connections", description: "Securely connect branches and ATMs with high-speed, reliable networks to enhance operational efficiency." },
      { name: "Reduce Latency", description: "Reduce latency and increase transaction processing speeds." },
      { name: "Regulatory Compliance", description: "Ensure regulatory compliance with PCI DSS, GDPR, and RBI guidelines." },
      { name: "Disaster Recovery", description: "Establish a robust disaster recovery plan with fast recovery mechanisms to mitigate operational risks effectively." }
    ],
    benefits: [
      "Streamline operations and reduce latency with optimized network performance.",
      "Lower capital expenditure on traditional MPLS networks with SD-WAN's cost-effective alternatives.",
      "Ensure regulatory compliance with robust security protocols."
    ]
  },
  "logistics": {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "Empowering logistics with agile networks for real-time visibility, cost-efficiency, and optimized operations.",
    challenges: [
      "Ensuring that goods are tracked in real time, from origin to destination, is vital for operational efficiency.",
      "Efficiently managing inventory across multiple warehouses requires robust connectivity.",
      "Maintaining reliable communication with a fleet of vehicles across various geographies can be challenging.",
      "The growing use of IoT devices and sensors in logistics demands a network that can handle high volumes of data transmission."
    ],
    solutions: [
      "Enable real-time data collection and analysis from IoT devices and sensors.",
      "Ensure consistent network performance, even in remote or mobile environments.",
      "Allocate bandwidth dynamically based on the needs of different applications, such as ERP systems and GPS tracking."
    ],
    useCases: [
      { name: "Fleet Management", description: "Maintain constant communication with vehicles in transit through reliable, high-speed connectivity." },
      { name: "Warehouse Automation", description: "Support automated systems in warehouses with uninterrupted, high-performance network connections." },
      { name: "IoT Integration", description: "Enhance supply chain transparency by integrating IoT devices and sensors with cloud platforms." },
      { name: "Remote Connectivity", description: "Provide reliable network connectivity in remote locations, ensuring continuous operations." }
    ],
    benefits: [
      "Monitor goods and vehicles in real time, ensuring timely deliveries and optimized routes.",
      "Reduce delays and improve decision-making with real-time data access across the supply chain.",
      "Easily scale the network to accommodate new warehouses, distribution centers, and fleets."
    ]
  },
  "it": {
    id: "it",
    title: "Information Technology (IT)",
    description: "Agile SD-WAN solutions driving digital transformation with adaptable, resilient networks for modern IT infrastructure.",
    challenges: [
      "Migrating to and integrating with cloud platforms requires a network that can handle complex, multi-cloud environments.",
      "Protecting sensitive data from cyber threats is a top priority for IT organizations.",
      "Supporting remote and distributed teams necessitates secure and reliable access to company resources.",
      "As businesses grow, their network needs to scale quickly without compromising performance or security."
    ],
    solutions: [
      "Designed to seamlessly integrate with leading cloud platforms such as AWS, Azure, and Google Cloud.",
      "Implement a zero-trust approach to network security, ensuring that all access points are verified and secured.",
      "Prioritize critical business applications to ensure optimal performance."
    ],
    useCases: [
      { name: "Cloud Migration", description: "Facilitate seamless migration to cloud environments with minimal disruption." },
      { name: "Data Protection", description: "Protect sensitive data with end-to-end encryption and secure access controls." },
      { name: "Remote Work Support", description: "Support remote employees with secure, encrypted access to company resources." },
      { name: "Multi-Cloud Connectivity", description: "Enable seamless connectivity across multiple cloud environments." }
    ],
    benefits: [
      "Quickly adapt to changing network demands, supporting digital transformation initiatives.",
      "Protect against cyber threats with built-in security features, including encryption and firewalls.",
      "Optimize bandwidth usage and reduce operational costs with intelligent traffic management."
    ]
  },
  "retail": {
    id: "retail",
    title: "Retail",
    description: "Transforming retail with robust networks for seamless in-store, online, mobile, and supply chain operations.",
    challenges: [
      "Ensuring that POS systems are always online and processing transactions smoothly is critical for customer satisfaction.",
      "Retailers need to integrate various sales channels, including brick-and-mortar stores, e-commerce platforms, and mobile apps.",
      "Protecting sensitive customer information, such as payment details, is essential for building trust and meeting compliance requirements.",
      "Real-time inventory tracking across multiple locations requires a reliable and agile network."
    ],
    solutions: [
      "Ensure reliable connections for POS systems, reducing downtime and transaction failures.",
      "Seamlessly connect all sales channels, providing a consistent customer experience.",
      "Protect customer data with robust security measures, including PCI DSS compliance."
    ],
    useCases: [
      { name: "POS Reliability", description: "Ensure reliable connections for POS systems, reducing downtime and transaction failures." },
      { name: "Inventory Tracking", description: "Support real-time inventory tracking across multiple retail locations." },
      { name: "Customer Experience", description: "Enhance customer service with stable Wi-Fi connections for staff and customers." },
      { name: "Supply Chain Operations", description: "Connect retail stores with warehouses and suppliers for smooth operations." }
    ],
    benefits: [
      "Minimize transaction delays and improve in-store experiences with reliable POS connectivity.",
      "Optimize inventory management and reduce stock discrepancies, ensuring that products are always available.",
      "Protect customer data and payment information with industry-leading security features, ensuring compliance with PCI DSS.",
      "Easily scale the network to support new store openings, online sales channels, and digital marketing initiatives."
    ]
  },
  "healthcare": {
    id: "healthcare",
    title: "Healthcare",
    description: "Secure, reliable networks powering healthcare's digital transformation for enhanced patient care and operational efficiency.",
    challenges: [
      "Healthcare organizations must protect sensitive patient information and ensure compliance with regulations such as HIPAA.",
      "The rise of telemedicine requires high-performance, low-latency networks to support video consultations and remote patient monitoring.",
      "Accessing and sharing electronic health records across multiple locations demands a secure and reliable network.",
      "Connecting medical devices and ensuring they operate reliably in real-time is crucial for patient safety."
    ],
    solutions: [
      "Ensure compliance with healthcare regulations by protecting patient data with encryption, firewalls, and access controls.",
      "Provide high-bandwidth, low-latency connectivity for telemedicine services, ensuring smooth video consultations and data exchange.",
      "Enable secure, fast access to electronic health records, supporting efficient care coordination and decision-making."
    ],
    useCases: [
      { name: "Telemedicine Support", description: "Support telemedicine services with high-bandwidth, low-latency connections, ensuring a seamless experience." },
      { name: "Secure Records Access", description: "Ensure secure access to patient records and other critical applications, enabling healthcare providers to deliver informed care." },
      { name: "HIPAA Compliance", description: "Maintain compliance with healthcare regulations such as HIPAA through secure data transmission and storage." },
      { name: "Medical Imaging", description: "Support the transmission of large medical imaging files across the network, ensuring quick access for diagnostics." }
    ],
    benefits: [
      "Support real-time access to patient data and remote consultations, enabling more informed and timely care decisions.",
      "Protect sensitive patient information with industry-leading security features, ensuring compliance with healthcare regulations.",
      "Streamline operations and reduce costs with optimized network performance, allowing healthcare providers to focus on patient care.",
      "Easily scale the network to accommodate new facilities, medical devices, and healthcare applications."
    ]
  },
  "education": {
    id: "education",
    title: "Education",
    description: "Empowering education with scalable networks for enhanced learning, efficient administration, and limitless online resources.",
    challenges: [
      "The shift to online learning requires reliable, high-speed internet access across campuses and remote locations.",
      "Providing consistent Wi-Fi coverage across large campuses, including dormitories, classrooms, and administrative buildings, is a significant challenge.",
      "Protecting student and staff data from cyber threats and ensuring compliance with data privacy regulations is crucial.",
      "As educational institutions grow and evolve, their network infrastructure must be able to scale quickly and efficiently."
    ],
    solutions: [
      "Provide reliable, high-speed internet access for online classes and digital learning platforms.",
      "Ensure consistent Wi-Fi coverage across all campus locations, including dormitories, classrooms, and administrative offices.",
      "Simplify network management with a centralized platform that allows IT staff to monitor and manage the entire network from a single location."
    ],
    useCases: [
      { name: "Digital Learning", description: "Support online classes and digital learning platforms with reliable, high-speed internet access." },
      { name: "Campus Wi-Fi", description: "Provide consistent Wi-Fi coverage across campuses, ensuring that students, faculty, and staff have access." },
      { name: "Data Privacy (FERPA)", description: "Protect student and staff data with secure network protocols, ensuring compliance with data privacy regulations." },
      { name: "BYOD Support", description: "Support a wide range of personal devices used by students and staff, ensuring secure and reliable access." }
    ],
    benefits: [
      "Ensure uninterrupted access to online classes and resources, improving the overall learning experience for students.",
      "Provide seamless network access across all campus locations, supporting both academic and administrative functions.",
      "Safeguard sensitive information with robust security measures, protecting against cyber threats and ensuring compliance with data privacy regulations."
    ]
  },
  "manufacturing": {
    id: "manufacturing",
    title: "Manufacturing",
    description: "Driving manufacturing innovation with high-performance networks for smart factories, IoT, and automation efficiency.",
    challenges: [
      "The integration of IoT devices and automation systems requires a network that can handle high volumes of data in real-time.",
      "Ensuring seamless communication between factories, suppliers, and logistics partners is crucial for maintaining production efficiency.",
      "Protecting sensitive operational data from cyber threats is a top priority, especially as manufacturing systems become more connected.",
      "As manufacturing operations expand, the network infrastructure must be able to scale to accommodate new facilities, equipment, and digital initiatives."
    ],
    solutions: [
      "Support real-time data collection and analysis from IoT devices and automation systems.",
      "Ensure seamless communication between factories, suppliers, and logistics partners, enabling efficient operations.",
      "Protect sensitive operational data with robust security measures, including encryption, firewalls, and access controls."
    ],
    useCases: [
      { name: "Smart Factories", description: "Support the integration of IoT devices and automation systems in smart factories." },
      { name: "Supply Chain Communication", description: "Enable seamless communication between factories, suppliers, and logistics partners." },
      { name: "Operational Data Security", description: "Protect sensitive operational data with secure network protocols." },
      { name: "Remote Maintenance", description: "Support remote monitoring and maintenance of manufacturing equipment." }
    ],
    benefits: [
      "Support the integration of IoT devices and automation systems, enabling real-time data collection and analysis, and improving overall operational efficiency.",
      "Ensure seamless communication between factories, suppliers, and logistics partners, improving production efficiency and reducing delays.",
      "Safeguard sensitive operational data with robust security measures, protecting against cyber threats and ensuring compliance with industry regulations.",
      "Easily scale the network to accommodate new facilities, equipment, and digital initiatives."
    ]
  },
  "public-sector": {
    id: "public-sector",
    title: "Public Sector (PSU)",
    description: "Enabling PSUs with secure, scalable networks for efficient infrastructure development and public service operations.",
    challenges: [
      "Protecting sensitive data and ensuring compliance with government regulations is crucial for PSUs.",
      "PSUs often operate across multiple locations, requiring a network that can provide consistent performance across diverse geographies.",
      "Ensuring business continuity in the event of a disaster is a top priority for PSUs, as they provide essential services to the public.",
      "As PSUs expand their operations, their network infrastructure must be able to scale to accommodate new locations, services, and initiatives."
    ],
    solutions: [
      "Ensure compliance with government regulations by protecting sensitive data with encryption, firewalls, and access controls.",
      "Provide consistent network performance across multiple locations, ensuring that all operations run smoothly.",
      "Support disaster recovery efforts with automatic failover and redundant connections, ensuring that essential services remain online."
    ],
    useCases: [
      { name: "Administrative Networks", description: "Support the administrative functions of PSUs with secure, reliable network connections, ensuring smooth operations." },
      { name: "Field Operations", description: "Provide reliable network connectivity for field operations, ensuring the efficient delivery of essential services to the public." },
      { name: "Disaster Recovery", description: "Ensure business continuity with a robust disaster recovery plan, including automatic failover mechanisms." },
      { name: "Data Security", description: "Protect sensitive government data with secure network protocols, ensuring compliance with regulations." }
    ],
    benefits: [
      "Protect sensitive data with robust security measures, ensuring compliance with government regulations.",
      "Support the diverse operations of PSUs with reliable, high-performance network connections.",
      "Ensure essential services remain online during disasters with automatic failover and redundancy."
    ]
  }
};
