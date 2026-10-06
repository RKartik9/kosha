import Link from "next/link";
import type { Resource } from "@/data/types";
import { jitter } from "@/lib/catalog";

const spines = [
  "bg-[#1e1b4b] text-[#f3eee3]",
  "bg-[#f2a93b] text-[#1e1b4b]",
  "bg-[#6b4a2f] text-[#f3eee3]",
  "bg-[#0f9e8e] text-[#f3eee3]",
  "bg-[#e9e2d2] text-[#1e1b4b]",
  "bg-[#3b3772] text-[#f3eee3]",
];

export function ShelfTicker({ items }: { items: Resource[] }) {
  const row = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y-2 border-ink bg-paper-deep">
      <div
        className="animate-ticker flex w-max items-end gap-1 px-1 pt-6 hover:[animation-play-state:paused]"
        style={{ "--ticker-duration": `${items.length * 2.4}s` } as React.CSSProperties}
      >
        {row.map((item, i) => {
          const j = jitter(item.slug, 6);
          return (
            <Link
              key={`${item.slug}-${i}`}
              href={`/r/${item.slug}`}
              tabIndex={i >= items.length ? -1 : undefined}
              aria-hidden={i >= items.length ? true : undefined}
              className={`${spines[Math.abs(j) % spines.length]} group relative flex shrink-0 items-center justify-center rounded-t-[3px] border-x border-t border-black/20 px-2 transition-transform duration-200 hover:-translate-y-3`}
              style={{ height: 150 + j * 6, width: 38 + Math.abs(j) * 2 }}
            >
              <span className="absolute inset-x-1 top-3 h-px bg-current opacity-40" />
              <span className="absolute inset-x-1 bottom-3 h-px bg-current opacity-40" />
              <span className="font-display text-[15px] leading-none whitespace-nowrap [writing-mode:vertical-rl] rotate-180">
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
      <div className="h-3 border-t-2 border-ink wood" aria-hidden="true" />
    </div>
  );
}
