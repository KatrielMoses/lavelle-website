import type { Metadata } from "next";
import { SOLUTIONS_CONTENT } from "@/lib/solutions-content";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductFeatures } from "@/components/sections/ProductFeatures";

export const metadata: Metadata = {
  title: "SD-WAN Platform | Lavelle Networks",
  description: "Upgrade MPLS Networks to Cloud Ready WAN.",
};

export default function SDWANPlatformPage() {
  const solution = SOLUTIONS_CONTENT["sd-wan-platform"];

  return (
    <main>
      <ProductHero title={solution.hero.title} description={solution.hero.description} />
      
      {solution.overview && (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-8 text-[#4A4A4A] sm:text-xl sm:leading-9">
              {solution.overview}
            </p>
          </div>
        </section>
      )}

      <ProductFeatures features={solution.features} />
    </main>
  );
}
