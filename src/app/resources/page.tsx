import type { Metadata } from "next";
import { RESOURCES_CONTENT } from "@/lib/resources-content";
import { ProductHero } from "@/components/sections/ProductHero";

export const metadata: Metadata = {
  title: "Resources | Lavelle Networks",
  description: "EBooks, Case Studies, Use Cases and more!",
};

export default function ResourcesPage() {
  const { hero, categories } = RESOURCES_CONTENT;

  return (
    <main className="pb-24">
      <ProductHero title={hero.title} description={hero.description} />
      
      <div className="bg-white">
        {categories.map((categoryBlock, index) => (
          <section key={index} className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#1A1A1A] font-cormorant mb-12 border-b pb-4">
              {categoryBlock.category}
            </h2>
            <div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {categoryBlock.items.map((item, itemIdx) => (
                <div
                  key={itemIdx}
                  className="group relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-[#D4AF37]/50"
                >
                  <h3 className="text-xl font-semibold leading-7 text-[#1A1A1A] font-sans group-hover:text-[#D4AF37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4A4A4A]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
