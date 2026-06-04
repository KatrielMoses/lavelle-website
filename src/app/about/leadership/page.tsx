import type { Metadata } from "next";
import { ABOUT_CONTENT } from "@/lib/about-content";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductFeatures } from "@/components/sections/ProductFeatures";

export const metadata: Metadata = {
  title: "Leadership | Lavelle Networks",
  description: "Meet the visionary leaders driving innovation in enterprise networking.",
};

export default function LeadershipPage() {
  const content = ABOUT_CONTENT["leadership"];

  return (
    <main>
      <ProductHero title={content.hero.title} description={content.hero.description} />
      
      {content.overview && (
        <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-8 text-[#4A4A4A] sm:text-xl sm:leading-9">
              {content.overview}
            </p>
          </div>
        </section>
      )}

      <ProductFeatures features={content.features} />
    </main>
  );
}
