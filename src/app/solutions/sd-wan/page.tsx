import type { Metadata } from "next";
import Link from "next/link";
import { 
  ArrowRight, 
  BadgeCheck, 
  Network, 
  CloudOff, 
  AlertTriangle, 
  Coins, 
  ShieldCheck, 
  Gauge, 
  Server, 
  Globe2, 
  Building2, 
  Cloud, 
  ArrowRightLeft 
} from "lucide-react";
import { SOLUTIONS_CONTENT } from "@/lib/solutions-content";

export const metadata: Metadata = {
  title: "SD-WAN Platform | Lavelle Networks",
  description: "Upgrade your legacy network to a modern, scalable SD-WAN architecture that flawlessly integrates into cloud environments.",
  alternates: {
    canonical: "/solutions/sd-wan",
  },
  openGraph: {
    title: "Lavelle Networks SD-WAN Platform",
    description: "The Premier MPLS Alternative for cloud-driven enterprise infrastructure.",
    url: "/solutions/sd-wan",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "SD-WAN Platform by Lavelle Networks",
      },
    ],
  },
};

const solution = SOLUTIONS_CONTENT["sd-wan-platform"];

function getSolutionContent() {
  if (!solution) throw new Error("SD-WAN Platform content is missing.");
  return solution;
}

export default function SDWANPlatformPage() {
  const content = getSolutionContent();

  const anomalyIcons = [CloudOff, Gauge, AlertTriangle, Coins];
  const whyIcons = [Globe2, Network, Server, ShieldCheck];
  const deploymentIcons = [Building2, Server, Cloud];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#003F72] px-4 py-24 text-white sm:px-6 sm:py-28 lg:min-h-0 lg:h-[90svh] lg:px-8 lg:py-0">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_30%,#0078D4_0%,transparent_50%),linear-gradient(135deg,#003F72_0%,#1A1A1A_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#1A1A1A]/35 to-transparent" />

        <div className="mx-auto w-full max-w-7xl flex flex-col items-center text-center">
          {content.hero.eyebrow && (
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-[#E6F3FB]">
              <BadgeCheck className="h-4 w-4 text-[#1A9AE6]" aria-hidden="true" />
              {content.hero.eyebrow}
            </div>
          )}
          <h1 className="max-w-4xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-[clamp(3rem,5vw,5rem)]">
            {content.hero.title}
          </h1>
          {content.hero.command && (
            <p className="mt-6 font-display text-2xl text-[#1A9AE6] sm:text-3xl">
              {content.hero.command}
            </p>
          )}
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            {content.hero.description}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center w-full">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#005A9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            >
              Contact Sales Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            >
              Download Datasheet
            </Link>
          </div>
        </div>
      </section>

      {/* The Legacy WAN Anomaly */}
      {content.legacyAnomaly && (
        <section className="bg-white px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
                {content.legacyAnomaly.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
                {content.legacyAnomaly.description}
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {content.legacyAnomaly.painPoints.map((point, i) => {
                const Icon = anomalyIcons[i] ?? AlertTriangle;
                return (
                  <article key={point.title} className="relative overflow-hidden rounded-2xl border border-[#C8D6E5]/40 bg-[#F7FAFD] p-8 transition hover:border-[#0078D4]/30 hover:shadow-lg hover:shadow-[#0078D4]/5">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-[#C8D6E5]/50 text-[#003F72]">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-[#1A1A1A]">{point.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#4A4A4A]">{point.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Why SD-WAN */}
      {content.whySdWan && (
        <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-32 lg:px-8 border-y border-[#C8D6E5]/30">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-8 items-center">
              <div>
                <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl leading-tight">
                  {content.whySdWan.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
                  {content.whySdWan.description}
                </p>
                <div className="mt-10">
                   <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-base font-semibold text-[#0078D4] hover:text-[#005A9E] transition"
                  >
                    Discuss your network requirements
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {content.whySdWan.reasons.map((reason, i) => {
                  const Icon = whyIcons[i] ?? Network;
                  return (
                    <article key={reason.title} className="rounded-xl border border-[#C8D6E5]/60 bg-white p-6 shadow-sm transition hover:scale-[1.02] hover:shadow-md">
                      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F3FB] text-[#0078D4]">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-lg text-[#1A1A1A]">{reason.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-[#4A4A4A]">{reason.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* MPLS Replacement */}
      {content.mplsReplacement && (
        <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1 relative h-full min-h-[400px] w-full rounded-2xl bg-[#003F72] overflow-hidden p-8 flex flex-col justify-center shadow-xl">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_20%,rgba(255,255,255,0.05)_50%,transparent_80%)]" />
                <ArrowRightLeft className="h-16 w-16 text-[#1A9AE6] mb-8" strokeWidth={1.5} />
                <blockquote className="font-display text-3xl leading-snug text-white">
                  "Migrate your WAN gradually. No extreme rip and replace required."
                </blockquote>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-[2px] w-12 bg-[#1A9AE6]" />
                  <span className="text-sm font-semibold tracking-wider text-[#E6F3FB] uppercase">Lavelle Networks</span>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
                  {content.mplsReplacement.title}
                </h2>
                <p className="mt-6 text-xl text-[#0078D4] font-medium">
                  {content.mplsReplacement.description}
                </p>
                <div className="mt-8 space-y-6">
                  {content.mplsReplacement.paragraphs.map((para, i) => (
                    <p key={i} className="text-lg leading-8 text-[#4A4A4A]">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deployment */}
      {content.deployment && (
        <section className="bg-[#003F72] px-4 py-20 sm:px-6 sm:py-32 lg:px-8 text-white relative isolate">
           <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,#005A9E_0%,transparent_70%)]" />
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl sm:text-4xl">
                {content.deployment.title}
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#E6F3FB]">
                {content.deployment.description}
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {content.deployment.options.map((option, i) => {
                const Icon = deploymentIcons[i] ?? Server;
                return (
                  <article key={option.title} className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:bg-white/10 hover:-translate-y-1">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0078D4] text-white shadow-lg">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-xl text-white">{option.title}</h3>
                    <p className="mt-4 text-base leading-7 text-white/80">{option.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Banner */}
      <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8 text-center border-b border-[#C8D6E5]/40">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
            Ready to Upgrade Your Network to Next Generation WAN?
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#4A4A4A]">
            Keep your network always on with Lavelle Networks' advanced ScaleAOn technology. Experience the fastest scaling, most resilient network architecture deployed globally.
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
