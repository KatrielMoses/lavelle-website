import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { INDUSTRIES_CONTENT } from "@/lib/industries-content";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductFeatures } from "@/components/sections/ProductFeatures";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const resolvedParams = await params;
  const industry = INDUSTRIES_CONTENT[resolvedParams.slug];

  if (!industry) {
    return {
      title: "Industry Not Found | Lavelle Networks",
    };
  }

  return {
    title: `${industry.title} | Lavelle Networks`,
    description: industry.description,
  };
}

export async function generateStaticParams() {
  return Object.keys(INDUSTRIES_CONTENT).map((slug) => ({
    slug,
  }));
}

export default async function IndustryPage({ params }: Props) {
  const resolvedParams = await params;
  const industry = INDUSTRIES_CONTENT[resolvedParams.slug];

  if (!industry) {
    notFound();
  }

  return (
    <main className="pb-24">
      <ProductHero title={industry.title} description={industry.description} />
      
      {/* Challenges & Solutions Grid */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-[#1A1A1A] mb-6">
                Challenges in {industry.title}
              </h2>
              <ul className="space-y-4">
                {industry.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#0078D4]/10 text-[#0078D4]">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                    </span>
                    <span className="text-lg leading-8 text-[#4A4A4A]">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl sm:text-3xl text-[#1A1A1A] mb-6">
                Lavelle Networks' SD-WAN Solutions
              </h2>
              <ul className="space-y-4">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-4">
                    <span className="flex-shrink-0 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-lg leading-8 text-[#4A4A4A]">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Use Cases */}
      <ProductFeatures features={industry.useCases} />

      {/* Benefits */}
      <section className="bg-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl sm:text-3xl text-center text-[#1A1A1A] mb-12">
            Benefits of Lavelle Networks' SD-WAN
          </h2>
          <div className="space-y-6">
            {industry.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-[#F7FAFD] border-l-4 border-[#0078D4] p-6 rounded-r-xl">
                <p className="text-base lg:text-lg text-[#4A4A4A]">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
