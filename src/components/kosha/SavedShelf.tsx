"use client";

import Link from "next/link";
import type { Resource } from "@/data/types";
import { useSaved } from "@/hooks/use-saved";
import { IndexCard } from "./IndexCard";

export function SavedShelf({ items }: { items: Resource[] }) {
  const { saved, clear } = useSaved();
  const cards = saved
    .map((slug) => items.find((r) => r.slug === slug))
    .filter((r): r is Resource => Boolean(r));

  if (cards.length === 0) {
    return (
      <div className="ruled rounded-[3px] border hairline bg-card px-16 py-16 leading-7 [--rule-offset:4rem]">
        <p className="font-display text-4xl text-ink">Your shelf is empty.</p>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Tap the bookmark icon on any tool to save it. Saved tools stay in
          this browser only, no account needed.
        </p>
        <Link
          href="/libraries"
          className="mt-8 inline-flex h-11 items-center rounded-sm bg-ink px-5 font-semibold text-xs uppercase tracking-wider text-paper hover:bg-marigold hover:text-[#1e1b4b]"
        >
          Browse UI libraries
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b hairline pb-3">
        <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
          {cards.length} saved
        </p>
        <div className="flex gap-2">
          <Link
            href={`/compare?items=${cards.slice(0, 4).map((c) => c.slug).join(",")}`}
            className="inline-flex h-9 items-center rounded-sm bg-ink px-4 font-semibold text-xs uppercase tracking-wider text-paper hover:bg-marigold hover:text-[#1e1b4b]"
          >
            Compare {Math.min(cards.length, 4)}
          </Link>
          <button
            type="button"
            onClick={() => {
              if (confirm("Remove all saved tools?")) clear();
            }}
            className="inline-flex h-9 items-center rounded-sm border hairline px-4 font-semibold text-xs uppercase tracking-wider text-ink hover:bg-card"
          >
            Clear all
          </button>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((r) => (
          <IndexCard key={r.slug} resource={r} stamp="On loan" stampTone="marigold" />
        ))}
      </div>
    </div>
  );
}
