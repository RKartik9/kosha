"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Kolam } from "@/components/kosha/Kolam";
import { CatalogSearch, type SearchEntry } from "@/components/kosha/CatalogSearch";
import { useSaved } from "@/hooks/use-saved";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/libraries", label: "UI Libraries" },
  { href: "/resources", label: "Design Resources" },
  { href: "/gallery", label: "Gallery" },
  { href: "/compare", label: "Compare" },
  { href: "/saved", label: "Saved" },
  { href: "/about", label: "About" },
];

function isActive(pathname: string, href: string) {
  if (href === "/resources") {
    return pathname.startsWith("/resources") || pathname.startsWith("/r/");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5 text-ink", className)}
      aria-label="Kosha home"
    >
      <Kolam motif={4} size={34} className="transition-transform duration-500 group-hover:rotate-45" />
      <span className="font-accent text-[1.9rem] leading-none">
        Kosha<span className="text-marigold-deep">.</span>
      </span>
    </Link>
  );
}

export default function NavbarClient({ entries }: { entries: SearchEntry[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { saved } = useSaved();

  useEffect(() => setMounted(true), []);

  return (
    <header className="sticky top-0 z-50 border-b hairline bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <Wordmark />

        <nav aria-label="Primary" className="hidden h-full items-end gap-0.5 lg:flex">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative -mb-px inline-flex items-center gap-1.5 rounded-t-[6px] border border-b-0 px-3 text-sm font-medium transition-all duration-200",
                  active
                    ? "h-11 border-[var(--rule)] bg-card text-ink"
                    : "h-9 border-transparent text-muted-foreground hover:h-10 hover:border-[var(--rule)] hover:bg-card/60 hover:text-ink"
                )}
              >
                {item.label}
                {item.href === "/saved" && saved.length > 0 && (
                  <span className="ml-0.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-marigold px-1 text-[9px] font-bold text-[#1e1b4b]">
                    {saved.length}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <CatalogSearch entries={entries} />
          <ModeToggle />

          {!mounted ? (
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-sm border hairline bg-card text-ink lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" />
            </button>
          ) : (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-sm border hairline bg-card text-ink lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </button>
            </SheetTrigger>
            <SheetContent side="top" className="h-[100dvh] border-0 bg-paper p-0">
              <SheetHeader className="border-b hairline px-5 py-4">
                <SheetTitle className="text-left">
                  <span className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                    Menu
                  </span>
                </SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="relative flex flex-col px-5 pt-4 before:absolute before:inset-y-0 before:left-9 before:w-px before:bg-marigold/55">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b hairline py-4 pl-10"
                  >
                    <span className="font-display text-3xl text-ink">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          )}
        </div>
      </div>
    </header>
  );
}
