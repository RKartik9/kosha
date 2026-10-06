import type { MetadataRoute } from "next";
import { getAll, getCategories } from "@/lib/catalog";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kosha.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/libraries", "/resources", "/gallery", "/compare", "/about"].map(
    (p) => ({ url: `${base}${p}`, changeFrequency: "weekly" as const, priority: p ? 0.8 : 1 })
  );
  const drawers = getCategories().map((c) => ({
    url: `${base}/resources/${c.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));
  const cards = getAll().map((r) => ({
    url: `${base}/r/${r.slug}`,
    lastModified: new Date(r.addedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...pages, ...drawers, ...cards];
}
