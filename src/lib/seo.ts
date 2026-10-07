import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./site";

/** Next.js replaces (not merges) openGraph/twitter per page, so every page rebuilds them here. */
export function pageMeta({
  title,
  description,
  path,
  keywords,
  noindex,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  noindex?: boolean;
}): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: fullTitle }];
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_US",
      url: path,
      title: fullTitle,
      description,
      images,
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images },
    ...(noindex && { robots: { index: false, follow: true } }),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function itemListJsonLd(name: string, items: { name: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: `${SITE_URL}/r/${it.slug}`,
    })),
  };
}
