import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { SolutionsOverview } from "@/components/sections/SolutionsOverview";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { IndustriesGrid } from "@/components/sections/IndustriesGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { Awards } from "@/components/sections/Awards";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Lavelle Networks — India's Largest SD-WAN Solutions Provider",
  description:
    "Every 3 out of 5 enterprise networks in India runs on Lavelle SD-WAN. Enterprise networking solutions for banking, logistics, healthcare, and more.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <SolutionsOverview />
      <ProductsShowcase />
      <IndustriesGrid />
      <Testimonials />
      <Awards />
      <CtaBanner />
    </>
  );
}
