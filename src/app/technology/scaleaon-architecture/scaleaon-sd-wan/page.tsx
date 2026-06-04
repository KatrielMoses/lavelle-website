import type { Metadata } from "next";
import { TECHNOLOGY_CONTENT } from "@/lib/technology-content";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductFeatures } from "@/components/sections/ProductFeatures";

export const metadata: Metadata = {
  title: "ScaleAOn SD-WAN | Lavelle Networks",
  description: "Next generation SD-WAN platform and the most comprehensive portfolio for transforming your enterprise network.",
};

export default function ScaleAOnSDWANPage() {
  const tech = TECHNOLOGY_CONTENT["scaleaon-sd-wan"];

  return (
    <main>
      <ProductHero title={tech.hero.title} description={tech.hero.description} />
      
      {tech.overview && (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-8 text-[#4A4A4A] sm:text-xl sm:leading-9">
              {tech.overview}
            </p>
          </div>
        </section>
      )}

      <ProductFeatures features={tech.features} />
    </main>
  );
}
