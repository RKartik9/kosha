"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { GalleryItem } from "@/data/types";
import { cn } from "@/lib/utils";
import { ComponentPreview } from "./ComponentPreview";

export function ExhibitionWall({
  items,
  categories,
}: {
  items: GalleryItem[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((i) => i.category === active);
  const count = (c: string) => (c === "All" ? items.length : items.filter((i) => i.category === c).length);

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter components by type">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-sm border px-3 py-1.5 text-sm font-medium transition-colors",
              active === c ? "border-ink bg-ink text-paper" : "hairline bg-card text-ink hover:border-ink"
            )}
          >
            {c}
            <span className="ml-1.5 text-xs opacity-60">{count(c)}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((item) => (
          <a
            key={item.id}
            href={item.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-[4px] border hairline bg-card shadow-[0_14px_30px_-24px_rgba(30,27,75,0.7)] transition-all duration-300 hover:-translate-y-1 hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-marigold"
          >
            <ComponentPreview item={item} className="border-b hairline" />
            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {item.category} · {item.library}
              </p>
              <h2 className="mt-1.5 font-display text-xl leading-tight text-ink">{item.title}</h2>
              <p className="mt-2 flex-1 text-sm text-ink/75">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink">
                See it live on {item.library}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
