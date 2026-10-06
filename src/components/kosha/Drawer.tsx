import Link from "next/link";
import type { Category, Resource } from "@/data/types";
import { Kolam } from "./Kolam";

export function Drawer({
  category,
  items,
}: {
  category: Category;
  items: Resource[];
}) {
  const peek = items.slice(0, 3);

  return (
    <Link
      href={`/resources/${category.slug}`}
      className="group relative block pt-14 focus-visible:outline-none"
      aria-label={`${category.name}: ${items.length} tools`}
    >
      {/* Cards peeking out of the drawer on hover */}
      <div className="pointer-events-none absolute inset-x-6 top-14 h-24" aria-hidden="true">
        {peek.map((item, i) => (
          <div
            key={item.slug}
            className="absolute inset-x-0 top-0 h-20 rounded-t-[3px] border hairline bg-card px-3 pt-2 shadow-sm transition-transform duration-300 ease-out group-hover:-translate-y-[var(--lift)] group-focus-visible:-translate-y-[var(--lift)]"
            style={
              {
                "--lift": `${46 - i * 12}px`,
                left: `${i * 10}px`,
                right: `${(2 - i) * 10}px`,
                zIndex: 3 - i,
                transitionDelay: `${i * 40}ms`,
              } as React.CSSProperties
            }
          >
            <span className="block truncate font-display text-base leading-tight text-ink">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <div className="wood relative z-10 rounded-[4px] p-3 shadow-[0_14px_30px_-18px_rgba(30,27,75,0.7)] transition-transform duration-300 group-hover:translate-y-1 group-focus-visible:ring-2 group-focus-visible:ring-marigold">
        <div className="flex items-stretch gap-3 rounded-[3px] bg-black/10 p-3">
          <div className="brass min-w-0 flex-1 rounded-[3px] p-[3px] shadow-inner">
            <div className="flex h-full min-h-[3.75rem] items-center gap-2.5 overflow-hidden rounded-[2px] bg-[#fbf8f1] px-2.5 py-2 text-[#1e1b4b]">
              <Kolam motif={category.motif} size={32} className="shrink-0 text-[#1e1b4b]" />
              <div className="min-w-0">
                <p className="line-clamp-2 break-words font-display text-base leading-tight">
                  {category.name}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 flex items-center justify-between px-1">
          <span className="font-semibold text-[11px] uppercase tracking-wider text-[#f3eee3]/80">
            {items.length} tools
          </span>
          <span className="brass block h-3 w-16 rounded-full shadow-[inset_0_-1px_0_rgba(0,0,0,0.35)]" />
          <span className="font-semibold text-[11px] uppercase tracking-wider text-[#f3eee3]/80 transition-colors group-hover:text-marigold">
            Open →
          </span>
        </div>
      </div>
    </Link>
  );
}
