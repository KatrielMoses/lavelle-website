import type { Metadata } from "next";
import { USE_CASES_CONTENT } from "@/lib/usecases-content";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductFeatures } from "@/components/sections/ProductFeatures";

export const metadata: Metadata = {
  title: "Office 365 Performance | Lavelle Networks",
  description: "ScaleAOn SD-WAN for Enterprise Applications.",
};

export default function Office365Page() {
  const useCase = USE_CASES_CONTENT["office-365-performance"];

  return (
    <main>
      <ProductHero title={useCase.hero.title} description={useCase.hero.description} />
      
      {useCase.overview && (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-8 text-[#4A4A4A] sm:text-xl sm:leading-9">
              {useCase.overview}
            </p>
          </div>
        </section>
      )}

      <ProductFeatures features={useCase.features} />
    </main>
  );
}
