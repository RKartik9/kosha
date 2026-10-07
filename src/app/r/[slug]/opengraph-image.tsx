import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/KoshaMark";
import { getAll, getBySlug, getCategory, hostOf, pricingLabel } from "@/lib/catalog";

export const alt = "Tool details on Kosha";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAll().map((r) => ({ slug: r.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getBySlug(slug);
  const cat = r ? getCategory(r.category) : undefined;
  return new ImageResponse(
    r ? (
      <OgCard
        eyebrow={cat?.name ?? "Tool"}
        title={r.name}
        subtitle={r.tagline}
        footer={`${hostOf(r.url)} · ${pricingLabel[r.pricing]} · ${r.license}`}
      />
    ) : (
      <OgCard eyebrow="Kosha" title="Free tools for builders" subtitle="" footer="kosha" />
    ),
    size
  );
}
