export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  href: string;
}

export interface Solution {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  icon: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: string;
}

export interface Client {
  name: string;
  logo: string;
  sector: string;
}

export interface Testimonial {
  quote: string;
  metric: string;
  author: string;
  role: string;
  company: string;
}

export interface Award {
  name: string;
  year: string;
  logo?: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}
