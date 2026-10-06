"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Plus, X } from "lucide-react";
import type { Resource } from "@/data/types";
import { Favicon } from "./Favicon";
import { cn } from "@/lib/utils";

const MAX = 4;

export type CompareEntry = Resource & { callNo: string; drawer: string };

const pricing: Record<Resource["pricing"], string> = {
  oss: "Open source",
  free: "Free",
  freemium: "Free tier",
};

export function CompareDesk({ entries }: { entries: CompareEntry[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [query, setQuery] = useState("");

  const bySlug = useMemo(() => new Map(entries.map((e) => [e.slug, e])), [entries]);
  const selected = (params.get("items") ?? "")
    .split(",")
    .map((s) => bySlug.get(s.trim()))
    .filter((x): x is CompareEntry => Boolean(x))
    .slice(0, MAX);

  const setItems = (slugs: string[]) => {
    const qs = slugs.length ? `?items=${slugs.join(",")}` : "";
    router.replace(`${pathname}${qs}`, { scroll: false });
  };
  const add = (slug: string) => {
    setItems([...selected.map((s) => s.slug), slug]);
    setQuery("");
  };
  const remove = (slug: string) => setItems(selected.filter((s) => s.slug !== slug).map((s) => s.slug));

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return entries
      .filter((e) => !selected.some((s) => s.slug === e.slug))
      .filter((e) => `${e.name} ${e.tags.join(" ")} ${e.drawer}`.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query, entries, selected]);

  const sharedFrameworks = useMemo(() => {
    if (selected.length < 2) return new Set<string>();
    const [first, ...rest] = selected.map((s) => new Set(s.frameworks ?? []));
    return new Set([...first].filter((f) => rest.every((r) => r.has(f))));
  }, [selected]);

  const rows: { label: string; render: (e: CompareEntry) => React.ReactNode }[] = [
    { label: "Category", render: (e) => e.drawer },
    { label: "License", render: (e) => e.license },
    { label: "Price", render: (e) => pricing[e.pricing] },
    {
      label: "Works with",
      render: (e) =>
        e.frameworks?.length ? (
          <span className="flex flex-wrap gap-1">
            {e.frameworks.map((f) => (
              <span
                key={f}
                className={cn(
                  "rounded-sm border px-1.5 py-0.5 font-semibold text-[11px] uppercase",
                  sharedFrameworks.has(f) ? "border-transparent bg-marigold text-[#1e1b4b]" : "hairline"
                )}
              >
                {f}
              </span>
            ))}
          </span>
        ) : (
          "—"
        ),
    },
    { label: "GitHub stars", render: (e) => e.stars ?? "—" },
    { label: "Tags", render: (e) => e.tags.join(", ") },
    {
      label: "Links",
      render: (e) => (
        <span className="flex flex-wrap gap-x-3 gap-y-1 font-semibold text-xs uppercase tracking-wider">
          <a className="link-ink" href={e.url} target="_blank" rel="noopener noreferrer">Site ↗</a>
          {e.docs && <a className="link-ink" href={e.docs} target="_blank" rel="noopener noreferrer">Docs ↗</a>}
          {e.github && <a className="link-ink" href={e.github} target="_blank" rel="noopener noreferrer">Repo ↗</a>}
        </span>
      ),
    },
    { label: "Added", render: (e) => e.addedAt },
  ];

  return (
    <div>
      <div className="relative max-w-xl">
        <label className="block">
          <span className="font-semibold text-[11px] uppercase tracking-wider text-muted-foreground">
            Add a tool ({selected.length}/{MAX})
          </span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            disabled={selected.length >= MAX}
            placeholder={selected.length >= MAX ? "The desk is full" : "Type a name, e.g. Mantine"}
            className="mt-2 h-12 w-full rounded-sm border-2 border-ink bg-card px-4 text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-marigold disabled:opacity-60"
          />
        </label>
        {suggestions.length > 0 && (
          <ul className="absolute inset-x-0 top-full z-20 mt-1 overflow-hidden rounded-sm border-2 border-ink bg-card shadow-lg">
            {suggestions.map((s) => (
              <li key={s.slug}>
                <button
                  type="button"
                  onClick={() => add(s.slug)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-2.5 text-left text-sm hover:bg-accent"
                >
                  <span className="flex items-center gap-2">
                    <Plus className="h-3.5 w-3.5" /> {s.name}
                  </span>
                  <span className="text-xs text-muted-foreground">{s.drawer}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {selected.length === 0 ? (
        <div className="ruled mt-10 rounded-[3px] border hairline bg-card px-16 py-16 leading-7 [--rule-offset:4rem]">
          <p className="font-display text-4xl text-ink">The desk is empty.</p>
          <p className="mt-2 max-w-lg text-muted-foreground">
            Add two to four tools above, or start from a ready-made stack on the{" "}
            <Link href="/#checkout" className="link-ink text-ink">home page</Link>.
          </p>
        </div>
      ) : (
        <div className="mt-10 overflow-x-auto rounded-[3px] border-2 border-ink bg-card">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr>
                <th className="w-40 border-b-2 border-ink p-4 text-left font-semibold text-[11px] font-normal uppercase tracking-wider text-muted-foreground">
                  Ledger
                </th>
                {selected.map((e) => (
                  <th key={e.slug} className="border-b-2 border-l hairline border-b-ink p-4 text-left align-top font-normal">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Favicon url={e.url} name={e.name} size={22} />
                        <Link href={`/r/${e.slug}`} className="link-ink font-display text-2xl leading-tight text-ink">
                          {e.name}
                        </Link>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(e.slug)}
                        aria-label={`Remove ${e.name}`}
                        className="rounded-sm p-1 text-muted-foreground hover:bg-accent hover:text-ink"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{e.tagline}</p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="odd:bg-paper/50">
                  <th scope="row" className="border-b hairline p-4 text-left align-top font-semibold text-[11px] font-normal uppercase tracking-wider text-muted-foreground">
                    {row.label}
                  </th>
                  {selected.map((e) => (
                    <td key={e.slug} className="border-b border-l hairline p-4 align-top text-ink">
                      {row.render(e)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {sharedFrameworks.size > 0 && (
            <p className="border-t hairline px-4 py-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
              Highlighted frameworks are supported by every tool above.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
