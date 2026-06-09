import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  Building2,
  Cloud,
  Database,
  Gauge,
  GitBranch,
  Globe2,
  LineChart,
  LockKeyhole,
  Network,
  RadioTower,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PRODUCTS_CONTENT } from "@/lib/products-content";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { CloudStationControllerPreview } from "@/components/sections/CloudStationControllerPreview";

const product = PRODUCTS_CONTENT["cloudstation-controller"];
const controller = product.controllerExperience;

const featureIcons: LucideIcon[] = [
  Network,
  ShieldCheck,
  BarChart3,
  Workflow,
  LockKeyhole,
];

const suiteIcons: LucideIcon[] = [RadioTower, Cloud, Database, LineChart];
const resourceIcons: LucideIcon[] = [Building2, Gauge, Globe2];

export const metadata: Metadata = {
  title: "CloudStation Controller | SD-WAN India",
  description:
    "Control Lavelle SD-WAN policy, segmentation, monitoring, and high availability from CloudStation Controller for enterprise networks in India.",
  alternates: {
    canonical: "/products/cloudstation-controller",
  },
  openGraph: {
    title: "CloudStation Controller | Lavelle Networks",
    description:
      "Intent-driven SDN policy, segmentation, monitoring, and high availability for Lavelle SD-WAN enterprise networks.",
    url: "/products/cloudstation-controller",
    images: [
      {
        url: "/og/default.png",
        width: 1200,
        height: 630,
        alt: "CloudStation Controller by Lavelle Networks",
      },
    ],
  },
};

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.hero.title,
  description: product.hero.description,
  brand: {
    "@type": "Brand",
    name: SITE_NAME,
  },
  url: `${SITE_URL}/products/cloudstation-controller`,
};

function getControllerContent() {
  if (!controller) {
    throw new Error("CloudStation Controller content is missing.");
  }

  return controller;
}

export default function CloudStationControllerPage() {
  const content = getControllerContent();

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#003F72] px-4 py-24 text-white sm:px-6 sm:py-28 lg:h-[100svh] lg:min-h-0 lg:px-8 lg:py-0">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_12%,#0078D4_0%,transparent_34%),linear-gradient(135deg,#003F72_0%,#1A1A1A_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#1A1A1A]/35 to-transparent" />

        <div className="mx-auto grid w-full max-w-[1480px] items-center gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(0,1.32fr)] xl:gap-12">
          <div className="max-w-[620px] lg:-ml-6 xl:-ml-12">
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-[#E6F3FB] lg:mb-6">
              <BadgeCheck className="h-4 w-4 text-[#1A9AE6]" aria-hidden="true" />
              {content.eyebrow}
            </div>
            <h1 className="max-w-3xl font-display text-4xl leading-tight text-white sm:text-5xl lg:text-[clamp(2.75rem,4vw,4.25rem)]">
              {product.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-8 text-[#E6F3FB] sm:text-2xl lg:mt-6">
              {content.heroCommand}
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/80 sm:text-lg lg:mt-5">
              {product.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#005A9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
              >
                {content.salesCtaLabel}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
              >
                {content.datasheetLabel}
              </Link>
            </div>
          </div>

          <CloudStationControllerPreview preview={content.preview} />
        </div>
      </section>

      <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
              {content.modelsTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4A4A4A]">{content.modelsDescription}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {product.models.map((model) => (
              <article
                key={model.name}
                className="rounded-xl border border-[#C8D6E5]/60 bg-white p-7 shadow-sm transition duration-200 hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[#E6F3FB] text-[#0078D4]">
                  <Boxes className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="font-display text-xl text-[#1A1A1A]">{model.name}</h3>
                <p className="mt-4 text-base leading-7 text-[#4A4A4A]">{model.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
                {content.featuresTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#4A4A4A]">
                {content.featuresDescription}
              </p>
            </div>

            <div className="grid gap-5">
              {content.capabilities.map((capability, index) => {
                const Icon = featureIcons[index] ?? Network;

                return (
                  <article
                    key={capability.name}
                    className="rounded-xl border border-[#C8D6E5]/60 bg-[#F7FAFD] p-6 shadow-sm sm:p-8"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <div className="flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-[#003F72] text-white">
                        <Icon className="h-7 w-7" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl text-[#1A1A1A]">
                          {capability.name}
                        </h3>
                        <p className="mt-3 text-base leading-7 text-[#4A4A4A]">
                          {capability.description}
                        </p>
                        <ul className="mt-6 grid gap-3 md:grid-cols-2">
                          {capability.points.map((point) => (
                            <li key={point} className="flex gap-3 text-sm leading-6 text-[#2B2B2B]">
                              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#0078D4]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {product.licenses && (
        <section className="bg-[#003F72] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl text-white sm:text-4xl">
                {content.licensesTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#E6F3FB]">
                {content.licensesDescription}
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
              {product.licenses.map((license) => (
                <article
                  key={license.name}
                  className="rounded-xl border border-white/15 bg-white p-8 text-[#1A1A1A] shadow-xl shadow-[#1A1A1A]/15"
                >
                  <Cloud className="h-10 w-10 text-[#0078D4]" aria-hidden="true" />
                  <h3 className="mt-6 font-display text-2xl text-[#003F72]">
                    {license.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#4A4A4A]">
                    {license.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
              {content.suiteTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4A4A4A]">{content.suiteDescription}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {content.suiteItems.map((item, index) => {
              const Icon = suiteIcons[index] ?? GitBranch;

              return (
                <article
                  key={item.name}
                  className="rounded-xl border border-[#C8D6E5]/60 bg-white p-6 shadow-sm transition duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#E6F3FB] text-[#0078D4]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-[#1A1A1A]">{item.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#4A4A4A]">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-xl border border-[#C8D6E5]/60 bg-[#F7FAFD] p-8 text-center shadow-sm sm:p-12">
          <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
            {content.transformationTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-[#4A4A4A]">
            {content.transformationDescription}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#0078D4] px-7 py-4 text-base font-semibold text-white transition hover:bg-[#005A9E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0078D4] focus-visible:ring-offset-2"
          >
            {content.salesCtaLabel}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-[#F7FAFD] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl text-[#1A1A1A] sm:text-4xl">
              {content.resourcesTitle}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4A4A4A]">{content.resourcesDescription}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.resources.map((resource, index) => {
              const Icon = resourceIcons[index] ?? Database;

              return (
                <article
                  key={resource.title}
                  className="rounded-xl border border-[#C8D6E5]/60 bg-white p-7 shadow-sm transition duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="rounded-full bg-[#E6F3FB] px-3 py-1 text-sm font-semibold text-[#005A9E]">
                      {resource.type}
                    </span>
                    <Icon className="h-7 w-7 text-[#0078D4]" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-xl text-[#1A1A1A]">{resource.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-[#4A4A4A]">{resource.description}</p>
                  <Link
                    href={resource.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0078D4] hover:text-[#005A9E]"
                  >
                    {content.datasheetLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#003F72] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div>
            <p className="text-base font-semibold uppercase text-[#1A9AE6]">
              {content.finalCtaTitle}
            </p>
            <h2 className="mt-4 font-display text-3xl text-white sm:text-4xl">
              {content.finalCtaHighlight}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#E6F3FB]">
              {content.finalCtaDescription}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-base font-semibold text-[#003F72] transition hover:bg-[#E6F3FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            >
              {content.salesCtaLabel}
            </Link>
            <Link
              href="/technology/scaleaon-architecture"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6F3FB]"
            >
              {content.secondaryCtaLabel}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
