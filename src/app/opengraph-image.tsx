import { ImageResponse } from "next/og";
import { OgCard } from "@/components/og/KoshaMark";
import { getAll, getLibraries } from "@/lib/catalog";

export const alt = "Kosha — Free UI libraries, React component libraries and design resources";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <OgCard
        eyebrow="Directory"
        title="Free UI libraries & design resources"
        subtitle="React, Vue, Svelte and Angular component libraries, plus icons, fonts, illustrations, colors and templates."
        footer={`${getLibraries().length} UI libraries · ${getAll().length} free tools`}
      />
    ),
    size
  );
}
