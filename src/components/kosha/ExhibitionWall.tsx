"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { GalleryItem } from "@/data/types";
import { cn } from "@/lib/utils";
import { Kolam } from "./Kolam";

const palettes = [
  ["#1e1b4b", "#f2a93b", "#f3eee3"],
  ["#f2a93b", "#1e1b4b", "#fbf8f1"],
  ["#0f9e8e", "#f3eee3", "#1e1b4b"],
  ["#6b4a2f", "#f2a93b", "#f3eee3"],
  ["#e9e2d2", "#1e1b4b", "#0f9e8e"],
];
const ratios = ["aspect-[4/5]", "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[16/11]"];

function Artwork({ item }: { item: GalleryItem }) {
  const [bg, fg, accent] = palettes[item.id % palettes.length];
  const variant = item.id % 4;

  return (
    <div
      className={cn("relative overflow-hidden", ratios[item.id % ratios.length])}
      style={{ background: bg, color: fg }}
      aria-hidden="true"
    >
      {variant === 0 && (
        <>
          <div className="absolute -right-10 -top-10 h-2/3 w-2/3 rounded-full" style={{ background: fg }} />
          <div className="absolute bottom-6 left-6 h-1/4 w-1/2" style={{ background: accent }} />
        </>
      )}
      {variant === 1 && (
        <div className="absolute inset-6 grid grid-cols-3 gap-2">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-sm" style={{ background: i % 4 === 0 ? accent : fg, opacity: i % 3 === 1 ? 0.35 : 1 }} />
          ))}
        </div>
      )}
      {variant === 2 && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Kolam motif={item.id} size={150} className="opacity-90" />
        </div>
      )}
      {variant === 3 && (
        <>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="absolute inset-x-6 h-2 rounded-full" style={{ top: `${18 + i * 12}%`, width: `${40 + ((i * 17) % 45)}%`, background: i === 2 ? accent : fg }} />
          ))}
        </>
      )}
      <span className="absolute bottom-3 right-4 font-accent text-6xl italic leading-none opacity-90" style={{ color: accent }}>
        {item.title.charAt(0)}
      </span>
    </div>
  );
}

export function ExhibitionWall({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <>
      <div className="mb-12 flex flex-wrap gap-2" role="group" aria-label="Filter exhibits">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-sm border px-3 py-1.5 font-semibold text-xs uppercase tracking-wider transition-colors",
              active === c ? "border-ink bg-ink text-paper" : "hairline bg-card text-ink hover:border-ink"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-10 sm:columns-2 lg:columns-3">
        {shown.map((item) => (
          <figure key={item.id} className="group mb-12 break-inside-avoid">
            <a
              href={item.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block border-[10px] border-[#2a1d12] bg-[#fbf8f1] p-5 shadow-[0_22px_34px_-22px_rgba(30,27,75,0.75)] transition-transform duration-300 group-hover:-translate-y-1 dark:border-[#3a2a1d]"
              aria-label={`View ${item.title} live on ${item.library}`}
            >
              <Artwork item={item} />
            </a>
            <figcaption className="mx-auto mt-4 w-[88%] rounded-[2px] border hairline bg-card px-4 py-3 shadow-sm">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-display text-xl leading-tight text-ink">{item.title}</p>
                <span className="font-mono text-[10px] text-muted-foreground">No. {String(item.id).padStart(3, "0")}</span>
              </div>
              <p className="mt-1 font-semibold text-[11px] uppercase tracking-wider text-muted-foreground">
                {item.library} · {item.category}
              </p>
              <p className="mt-2 text-sm text-ink/80">{item.description}</p>
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-ink mt-2 inline-flex items-center gap-1 font-semibold text-xs uppercase tracking-wider text-ink"
              >
                See it live <ArrowUpRight className="h-3 w-3" />
              </a>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
