import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { IndexTab } from "@/components/kosha/IndexTab";
import { Stamp } from "@/components/kosha/Stamp";
import { Favicon } from "@/components/kosha/Favicon";
import { SaveButton } from "@/components/kosha/SaveButton";
import { getCategory, getFeatured, hostOf } from "@/lib/catalog";

function weekOfYear(d: Date) {
  const start = Date.UTC(d.getUTCFullYear(), 0, 1);
  return Math.floor((d.getTime() - start) / (7 * 24 * 3600 * 1000));
}

export default function Spotlight() {
  const featured = getFeatured();
  const pick = featured[weekOfYear(new Date()) % featured.length];
  const cat = getCategory(pick.category);

  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 md:px-6 lg:px-8">
      <IndexTab letter="D" label="Pick of the week" />
      <div className="index-card grid overflow-hidden rounded-[4px] pb-0 md:grid-cols-[1.4fr_1fr] [&::after]:hidden">
        <div className="ruled relative p-8 pl-16 leading-7 [--rule-offset:2rem] md:p-12 md:pl-20 md:[--rule-offset:3rem]">
          <p className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
            {cat?.name}
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[1] text-ink md:text-7xl">
            {pick.name}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-7 text-ink/85">{pick.tagline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href={`/r/${pick.slug}`}
              className="inline-flex h-11 items-center rounded-sm bg-ink px-5 font-semibold text-xs uppercase tracking-wider text-paper transition-colors hover:bg-marigold hover:text-[#1e1b4b]"
            >
              View details
            </Link>
            <a
              href={pick.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-1.5 rounded-sm border-2 border-ink px-5 font-semibold text-xs uppercase tracking-wider text-ink hover:bg-paper"
            >
              Visit {hostOf(pick.url)} <ArrowUpRight className="h-4 w-4" />
            </a>
            <SaveButton slug={pick.slug} name={pick.name} variant="full" />
          </div>
          <div className="absolute right-8 top-8 hidden md:block">
            <Stamp tone="marigold" rotate={12} className="text-sm">Staff pick</Stamp>
          </div>
        </div>
        <aside className="flex flex-col justify-between gap-8 border-t-2 border-dashed hairline bg-paper-deep p-8 md:border-t-0 md:border-l-2 md:p-12">
          <div className="flex items-center gap-4">
            <Favicon url={pick.url} name={pick.name} size={48} />
            <div>
              <p className="text-xs font-medium text-muted-foreground">{cat?.name}</p>
              <p className="text-sm text-ink">{pick.license} license</p>
            </div>
          </div>
          <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm">
            <dt className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Tags</dt>
            <dd className="text-ink">{pick.tags.join(", ")}</dd>
            {pick.frameworks && (
              <>
                <dt className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Works with</dt>
                <dd className="text-ink">{pick.frameworks.join(", ")}</dd>
              </>
            )}
            <dt className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Added</dt>
            <dd className="text-ink">{new Date(pick.addedAt).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</dd>
          </dl>
          <p className="font-accent text-2xl italic leading-snug text-ink">
            &ldquo;The kind of tool you bookmark once and recommend forever.&rdquo;
            <span className="mt-2 block font-semibold text-xs not-italic uppercase tracking-wider text-muted-foreground">
              — The Kosha team
            </span>
          </p>
        </aside>
      </div>
    </section>
  );
}
