import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  BadgeCheck, 
  Expand, 
  ShieldOff, 
  Hash, 
  Route, 
  Zap, 
  Settings2,
  Shield, 
  HardDrive, 
  KeyRound, 
  Network, 
  ServerCog
} from "lucide-react";
import { SOLUTIONS_CONTENT } from "@/lib/solutions-content";

export const metadata: Metadata = {
  title: "ScaleAOn Architecture | Lavelle Networks",
  description: "Next-Gen network architecture designed to keep your WAN Always On. Gain Value at Scale, Continuously.",
  alternates: {
    canonical: "/solutions/scaleaon",
  },
  openGraph: {
    title: "ScaleAOn Architecture | Lavelle Networks",
    description: "Gain Value at Scale, Continuously with Lavelle Networks' flagship SDN architecture.",
    url: "/solutions/scaleaon",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "ScaleAOn Architecture by Lavelle Networks",
      },
    ],
  },
};

const solution = SOLUTIONS_CONTENT["scaleaon"];

function getSolutionContent() {
  if (!solution) throw new Error("ScaleAOn content is missing.");
  return solution;
}

export default function ScaleAOnPage() {
  const content = getSolutionContent();

  const archIcons = [Expand, ShieldOff, Hash, Route, Settings2, Zap];
  const diffIcons = [Shield, HardDrive, ServerCog, KeyRound, Network];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#1A1A1A] px-4 py-28 text-white sm:px-6 sm:py-32 xl:min-h-[90svh] xl:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#003F72_0%,transparent_80%),linear-gradient(135deg,#1A1A1A_0%,#0f0f0f_100%)]" />
        
        {/* Abstract network mesh effect */}
        <div className="absolute inset-0 -z-10 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
        
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="mx-auto w-full max-w-7xl flex flex-col items-center text-center">
          {content.hero.eyebrow && (
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#0078D4]/30 bg-[#0078D4]/10 px-5 py-2 text-sm font-medium text-[#1A9AE6] backdrop-blur-sm">
              <Network className="h-4 w-4" aria-hidden="true" />
              <span className="tracking-wide uppercase">{content.hero.eyebrow}</span>
            </div>
          )}
          <h1 className="max-w-5xl font-display text-[clamp(2.5rem,6vw,3.5rem)] leading-tight text-white lg:text-[clamp(3.5rem,5vw,4.5rem)]">
            {content.hero.title}
          </h1>
          {content.hero.command && (
            <p className="mt-8 font-display text-2xl text-[#E6F3FB] sm:text-3xl font-light tracking-wide">
              {content.hero.command}
            </p>
          )}
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/70 sm:text-xl">
            {content.hero.description}
          </p>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row justify-center w-full">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#1A9AE6] hover:shadow-[0_0_20px_rgba(0,120,212,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            >
              Consult an Architect
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Bar */}
      <div className="border-b border-[#C8D6E5]/40 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-semibold tracking-widest text-[#4A4A4A] uppercase">
            Trusted by the world's most demanding enterprises in BFSI, Logistics, Retail, and Government
          </p>
        </div>
      </div>

      {/* Architecture Features */}
      {content.architectureFeatures && (
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
                Engineering Breakthroughs
              </h2>
              <p className="mt-4 text-lg text-[#4A4A4A]">
                ScaleAOn is built from the ground up to eliminate the technical debt of legacy networking.
              </p>
            </div>
            
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {content.architectureFeatures.map((feature, i) => {
                const Icon = archIcons[i] ?? Zap;
                return (
                  <div key={feature.title} className="group relative border-t border-[#C8D6E5]/50 pt-8">
                    <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#0078D4] transition-all duration-300 group-hover:w-full" />
                    <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F7FAFD] text-[#003F72] shadow-sm ring-1 ring-[#C8D6E5]/50 group-hover:bg-[#0078D4] group-hover:text-white transition-colors duration-300">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-[#1A1A1A]">{feature.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#4A4A4A]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Differentiators (Why Lavelle) */}
      {content.differentiators && (
        <section className="bg-[#003F72] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 relative isolate">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,#005A9E_0%,transparent_60%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 items-start">
              <div className="sticky top-32">
                <BadgeCheck className="h-12 w-12 text-[#1A9AE6] mb-6" />
                <h2 className="font-display text-3xl sm:text-4xl text-white leading-tight">
                  Why Leading Brands Choose ScaleAOn
                </h2>
                <p className="mt-6 text-lg text-[#E6F3FB]/80 leading-relaxed">
                  We don't just route packets; we fundamentally secure and scale your enterprise connectivity using a 100% SDN-driven philosophy. 
                </p>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2">
                {content.differentiators.map((diff, i) => {
                  const Icon = diffIcons[i] ?? Shield;
                  return (
                    <div 
                      key={diff.title} 
                      className={`relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 backdrop-blur-md transition hover:bg-white/10 ${i === content.differentiators!.length - 1 ? 'sm:col-span-2' : ''}`}
                    >
                      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#0078D4]/20 text-[#1A9AE6]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-xl text-white">{diff.title}</h3>
                      <p className="mt-4 text-sm leading-6 text-[#E6F3FB]/70">
                        {diff.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Banner */}
      <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 text-center border-b border-[#C8D6E5]/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
            Experience ScaleAOn in Your Network
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
            Discover why the largest retail and financial networks trust Lavelle Networks to keep their business constantly connected.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
             <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#005A9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
              >
                Contact Sales Now
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
