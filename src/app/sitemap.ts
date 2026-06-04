import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/products",
    "/products/cloudstation-controller",
    "/products/cloudstation-insights",
    "/products/cloudport-edge",
    "/products/cloudport-gateway",
    "/solutions",
    "/solutions/sd-wan",
    "/solutions/scaleaon",
    "/solutions/sd-net",
    "/solutions/hybrid-wan",
    "/industries",
    "/industries/bfsi",
    "/industries/logistics",
    "/industries/healthcare",
    "/industries/retail",
    "/industries/manufacturing",
    "/industries/education",
    "/technology",
    "/about",
    "/partners",
    "/resources",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
