import type { Metadata } from "next";
import { TECHNOLOGY_CONTENT } from "@/lib/technology-content";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductFeatures } from "@/components/sections/ProductFeatures";

export const metadata: Metadata = {
  title: "Built to be Simple | Lavelle Networks",
  description: "ScaleAOn is a Fit for Purpose SD-WAN solution.",
};

export default function BuiltToBeSimplePage() {
  const tech = TECHNOLOGY_CONTENT["built-to-be-simple"];

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
