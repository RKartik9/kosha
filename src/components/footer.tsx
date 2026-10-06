import Link from "next/link";
import { getAll, getByCategory, getCategories } from "@/lib/catalog";
import { NEW_ISSUE_URL, REPO_URL } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  const total = getAll().length;
  const libs = getCategories("library");
  const res = getCategories("resource");

  const columns = [
    { title: "UI libraries", items: libs },
    { title: "Design resources", items: res.slice(0, 5) },
    { title: "More resources", items: res.slice(5) },
  ];

  return (
    <footer className="mt-24 border-t-2 border-ink bg-card">
      <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 lg:grid-cols-[1.3fr_repeat(3,1fr)_1fr]">
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
              About Kosha
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              A hand-picked directory of free tools for people who build.
              Every listing is checked by a person before it goes live.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-wider text-ink">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-free opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-free" />
              </span>
              Suggestions welcome
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="border-b hairline pb-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                {col.title}
              </p>
              <ul>
                {col.items.map((c) => (
                  <li key={c.slug} className="flex items-baseline justify-between gap-2 border-b hairline py-2 text-sm">
                    <Link href={`/resources/${c.slug}`} className="link-ink min-w-0 truncate text-ink">
                      {c.name}
                    </Link>
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {getByCategory(c.slug).length}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <p className="border-b hairline pb-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
              More
            </p>
            <ul className="text-sm [&>li]:border-b [&>li]:border-[var(--rule)] [&>li]:py-2">
              <li><Link href="/gallery" className="link-ink">Component gallery</Link></li>
              <li><Link href="/compare" className="link-ink">Compare tools</Link></li>
              <li><Link href="/saved" className="link-ink">Saved</Link></li>
              <li><Link href="/about" className="link-ink">About</Link></li>
              <li>
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="link-ink">
                  Contribute on GitHub ↗
                </a>
              </li>
              <li>
                <a href={NEW_ISSUE_URL} target="_blank" rel="noopener noreferrer" className="link-ink">
                  Report an issue ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 overflow-hidden" aria-hidden="true">
          <p className="select-none font-accent text-[26vw] leading-[0.78] tracking-[-0.04em] text-ink md:text-[19rem]">
            Kosha<span className="text-marigold">.</span>
          </p>
        </div>

        <div className="flex flex-col items-start justify-between gap-2 border-t hairline py-5 font-semibold text-xs uppercase tracking-wider text-muted-foreground md:flex-row md:items-center">
          <span>© {year} Kosha · {total} free tools listed</span>
          <span>All trademarks belong to their owners · We link, we don&apos;t host</span>
        </div>
      </div>
    </footer>
  );
}
