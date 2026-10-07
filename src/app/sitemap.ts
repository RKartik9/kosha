import type { MetadataRoute } from "next";
import { frameworkPages, getAll, getCategories } from "@/lib/catalog";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const all = getAll();
  const latest = new Date(all.reduce((m, r) => (r.addedAt > m ? r.addedAt : m), "2025-01-01"));

  const pages: MetadataRoute.Sitemap = [
    { url: SITE_URL, priority: 1, changeFrequency: "weekly", lastModified: latest },
    { url: `${SITE_URL}/libraries`, priority: 0.95, changeFrequency: "weekly", lastModified: latest },
    ...frameworkPages.map((f) => ({
      url: `${SITE_URL}/libraries/${f.slug}`,
      priority: 0.9,
      changeFrequency: "weekly" as const,
      lastModified: latest,
    })),
    { url: `${SITE_URL}/resources`, priority: 0.85, changeFrequency: "weekly", lastModified: latest },
    { url: `${SITE_URL}/gallery`, priority: 0.6, changeFrequency: "monthly" },
    { url: `${SITE_URL}/compare`, priority: 0.5, changeFrequency: "monthly" },
    { url: `${SITE_URL}/about`, priority: 0.4, changeFrequency: "yearly" },
  ];

  const categories = getCategories().map((c) => ({
    url: `${SITE_URL}/resources/${c.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
    lastModified: latest,
  }));

  const tools = all.map((r) => ({
    url: `${SITE_URL}/r/${r.slug}`,
    lastModified: new Date(r.addedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...pages, ...categories, ...tools];
}
