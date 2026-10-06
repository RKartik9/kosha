"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Category, Framework, Pricing, Resource } from "@/data/types";
import { IndexCard } from "./IndexCard";
import { cn } from "@/lib/utils";

const pricingOptions: { value: Pricing; label: string }[] = [
  { value: "oss", label: "Open source" },
  { value: "free", label: "Free" },
  { value: "freemium", label: "Free tier" },
];

function FilterGroup<T extends string>({
  title,
  options,
  value,
  onChange,
}: {
  title: string;
  options: { value: T; label: string; count?: number }[];
  value: T | null;
  onChange: (v: T | null) => void;
}) {
  return (
    <fieldset className="border-t hairline pt-4">
      <legend className="font-semibold text-[11px] uppercase tracking-wider text-muted-foreground">
        {title}
      </legend>
      <ul className="mt-2 flex flex-wrap gap-1.5 lg:block lg:space-y-0.5">
        {options.map((o) => {
          const active = value === o.value;
          return (
            <li key={o.value}>
              <button
                type="button"
                aria-pressed={active}
                onClick={() => onChange(active ? null : o.value)}
                className={cn(
                  "flex items-center gap-2 rounded-sm border px-2.5 py-1.5 text-left text-sm transition-colors lg:w-full lg:justify-between lg:border-0 lg:px-2",
                  active ? "border-ink bg-ink text-paper" : "border-[var(--rule)] text-ink hover:bg-card"
                )}
              >
                <span>{o.label}</span>
                {o.count !== undefined && (
                  <span className={cn("font-mono text-[10px]", active ? "text-paper/70" : "text-muted-foreground")}>
                    {o.count}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </fieldset>
  );
}

export function CatalogBrowser({
  items,
  categories,
  initialCategory = null,
}: {
  items: Resource[];
  categories?: Category[];
  initialCategory?: string | null;
}) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(initialCategory);
  const [framework, setFramework] = useState<Framework | null>(null);
  const [pricing, setPricing] = useState<Pricing | null>(null);
  const [sort, setSort] = useState<"az" | "new">("az");

  const frameworks = useMemo(() => {
    const counts = new Map<Framework, number>();
    items.forEach((r) => r.frameworks?.forEach((f) => counts.set(f, (counts.get(f) ?? 0) + 1)));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([value, count]) => ({ value, label: value === "Any" ? "Vanilla / any" : value, count }));
  }, [items]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items
      .filter((r) => !category || r.category === category)
      .filter((r) => !framework || r.frameworks?.includes(framework))
      .filter((r) => !pricing || r.pricing === pricing)
      .filter(
        (r) =>
          !q ||
          [r.name, r.tagline, r.license, ...r.tags].join(" ").toLowerCase().includes(q)
      )
      .sort((a, b) =>
        sort === "az" ? a.name.localeCompare(b.name) : b.addedAt.localeCompare(a.addedAt)
      );
  }, [items, query, category, framework, pricing, sort]);

  const activeCount = [category, framework, pricing, query.trim() || null].filter(Boolean).length;
  const reset = () => {
    setQuery("");
    setCategory(null);
    setFramework(null);
    setPricing(null);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[15rem_1fr]">
      <aside className="lg:sticky lg:top-24 lg:self-start">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or tag"
            className="h-11 w-full rounded-sm border-2 border-ink bg-card pl-9 pr-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-marigold"
          />
        </label>

        <div className="mt-6 space-y-4 lg:space-y-5">
          {categories && categories.length > 1 && (
            <FilterGroup
              title="Category"
              value={category}
              onChange={setCategory}
              options={categories.map((c) => ({
                value: c.slug,
                label: c.name,
                count: items.filter((r) => r.category === c.slug).length,
              }))}
            />
          )}
          {frameworks.length > 0 && (
            <FilterGroup title="Framework" value={framework} onChange={setFramework} options={frameworks} />
          )}
          <FilterGroup
            title="Pricing"
            value={pricing}
            onChange={setPricing}
            options={pricingOptions
              .map((p) => ({
                ...p,
                count: items.filter((r) => r.pricing === p.value).length,
              }))
              .filter((p) => p.count > 0)}
          />
        </div>
      </aside>

      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b hairline pb-3">
          <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground" aria-live="polite">
            Showing {filtered.length} of {items.length}
            {activeCount > 0 && (
              <button type="button" onClick={reset} className="ml-3 inline-flex items-center gap-1 text-ink underline-offset-4 hover:underline">
                <X className="h-3 w-3" /> clear
              </button>
            )}
          </p>
          <div className="flex rounded-sm border hairline p-0.5 font-semibold text-[11px] uppercase tracking-wider">
            {(["az", "new"] as const).map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setSort(s)}
                aria-pressed={sort === s}
                className={cn("rounded-[2px] px-3 py-1.5", sort === s ? "bg-ink text-paper" : "text-muted-foreground hover:text-ink")}
              >
                {s === "az" ? "A → Z" : "Newest"}
              </button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((r) => (
              <IndexCard key={r.slug} resource={r} />
            ))}
          </div>
        ) : (
          <div className="ruled rounded-[3px] border hairline bg-card px-16 py-16 leading-7 [--rule-offset:4rem]">
            <p className="font-display text-4xl text-ink">Nothing matches those filters.</p>
            <p className="mt-2 text-muted-foreground">
              Try removing a filter, or suggest a tool we&apos;re missing.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
