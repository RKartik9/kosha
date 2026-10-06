import { categories } from "@/data/categories";
import { libraries } from "@/data/libraries";
import { resources } from "@/data/resources";
import type {
  Category,
  CategoryKind,
  CategorySlug,
  Resource,
} from "@/data/types";

const all: Resource[] = [...libraries, ...resources];

const accessionIndex = new Map(all.map((r, i) => [r.slug, i + 1]));

export function getAll(): Resource[] {
  return all;
}

export function getLibraries(): Resource[] {
  return libraries;
}

export function getCategories(kind?: CategoryKind): Category[] {
  return kind ? categories.filter((c) => c.kind === kind) : categories;
}

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getByCategory(slug: CategorySlug | string): Resource[] {
  return all.filter((r) => r.category === slug);
}

export function getBySlug(slug: string): Resource | undefined {
  return all.find((r) => r.slug === slug);
}

export function getFeatured(): Resource[] {
  return all.filter((r) => r.featured);
}

export function getNew(limit = 6): Resource[] {
  return [...all]
    .sort((a, b) => b.addedAt.localeCompare(a.addedAt))
    .slice(0, limit);
}

export function getRelated(resource: Resource, limit = 4): Resource[] {
  const tags = new Set(resource.tags.map((t) => t.toLowerCase()));
  return all
    .filter((r) => r.slug !== resource.slug)
    .map((r) => ({
      r,
      score:
        (r.category === resource.category ? 3 : 0) +
        r.tags.filter((t) => tags.has(t.toLowerCase())).length,
    }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((x) => x.r);
}

export function search(query: string, pool: Resource[] = all): Resource[] {
  const q = query.trim().toLowerCase();
  if (!q) return pool;
  return pool.filter((r) =>
    [r.name, r.tagline, r.license, ...r.tags, ...(r.frameworks ?? [])]
      .join(" ")
      .toLowerCase()
      .includes(q)
  );
}

/** Library-style call number, e.g. "KSH 004.UI / 012". */
export function callNumber(resource: Resource): string {
  const cat = getCategory(resource.category);
  const n = String(accessionIndex.get(resource.slug) ?? 0).padStart(3, "0");
  return `KSH ${cat?.classNo ?? "000.00"} / ${n}`;
}

export function hostOf(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

/** Stable pseudo-random integer in [-range, range] derived from a string. */
export function jitter(seed: string, range = 9): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return (Math.abs(h) % (range * 2 + 1)) - range;
}

export const pricingLabel: Record<Resource["pricing"], string> = {
  oss: "Open Source",
  free: "Free",
  freemium: "Free Tier",
};
