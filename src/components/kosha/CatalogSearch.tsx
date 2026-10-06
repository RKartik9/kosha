"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export type SearchEntry = {
  slug: string;
  name: string;
  category: string;
  callNo: string;
  tags: string;
};

const pages = [
  { href: "/libraries", label: "All UI libraries" },
  { href: "/resources", label: "All design resources" },
  { href: "/gallery", label: "Component gallery" },
  { href: "/compare", label: "Compare tools" },
  { href: "/saved", label: "Saved" },
  { href: "/about", label: "About Kosha" },
];

function rankEntry(value: string, search: string, keywords?: string[]) {
  const q = search.trim().toLowerCase();
  if (!q) return 1;
  const name = value.toLowerCase();
  if (name.startsWith(q)) return 1;
  if (name.includes(q)) return 0.8;
  if (keywords?.some((k) => k.toLowerCase().includes(q))) return 0.4;
  return 0;
}

export function CatalogSearch({ entries }: { entries: SearchEntry[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  const groups = entries.reduce<Record<string, SearchEntry[]>>((acc, e) => {
    (acc[e.category] ??= []).push(e);
    return acc;
  }, {});

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group inline-flex h-9 items-center gap-2 rounded-sm border hairline bg-card pl-3 pr-1.5 text-sm text-muted-foreground transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-marigold"
        aria-label="Search"
      >
        <Search className="h-4 w-4" />
        <span className="hidden lg:inline">Search</span>
        <kbd className="ml-1 hidden rounded-[2px] border hairline bg-paper px-1.5 py-0.5 font-mono text-[10px] text-ink sm:inline">
          ⌘K
        </kbd>
      </button>

      {mounted && (
      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Search Kosha"
        description="Search every library and resource on Kosha"
        className="rounded-[4px] border-2 border-ink bg-card sm:max-w-xl"
        filter={rankEntry}
      >
        <CommandInput placeholder="Look up a library, icon set, font, tool…" />
        <CommandList className="max-h-[60vh]">
          <CommandEmpty>
            <span className="font-display text-xl">No results.</span>
            <span className="mt-1 block text-xs text-muted-foreground">
              Try another word, or suggest a tool we&apos;re missing.
            </span>
          </CommandEmpty>
          <CommandGroup heading="Pages">
            {pages.map((p) => (
              <CommandItem key={p.href} value={p.label} keywords={["room", "page"]} onSelect={() => go(p.href)}>
                {p.label}
              </CommandItem>
            ))}
          </CommandGroup>
          {Object.entries(groups).map(([category, items]) => (
            <CommandGroup key={category} heading={category}>
              {items.map((item) => (
                <CommandItem
                  key={item.slug}
                  value={item.name}
                  keywords={[item.tags, item.category, item.callNo]}
                  onSelect={() => go(`/r/${item.slug}`)}
                  className="justify-between"
                >
                  <span>{item.name}</span>
                  
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
      )}
    </>
  );
}
