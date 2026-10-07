import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/data/types";
import { getCategory, hostOf, jitter, pricingLabel } from "@/lib/catalog";
import { cn } from "@/lib/utils";
import { Stamp, type StampTone } from "./Stamp";
import { Favicon } from "./Favicon";
import { SaveButton } from "./SaveButton";
import { OutboundLink } from "./TrackedLink";

const pricingTone: Record<Resource["pricing"], StampTone> = {
  oss: "ink",
  free: "free",
  freemium: "marigold",
};

export function IndexCard({
  resource,
  stamp,
  stampTone,
  className,
}: {
  resource: Resource;
  stamp?: string;
  stampTone?: StampTone;
  className?: string;
}) {
  const tilt = jitter(resource.slug, 1) * 0.4;

  return (
    <article
      className={cn(
        "index-card group flex flex-col rounded-[3px] pb-9 transition-transform duration-200 ease-out hover:-translate-y-1 hover:rotate-0 focus-within:-translate-y-1",
        className
      )}
      style={{ rotate: `${tilt}deg` }}
    >
      <header className="flex items-start justify-between gap-3 border-b-2 border-double hairline px-5 pt-4 pb-3">
        <span className="text-xs font-medium text-muted-foreground">
          {getCategory(resource.category)?.name}
        </span>
        <Favicon url={resource.url} name={resource.name} size={22} />
      </header>

      <div className="ruled-plain flex-1 px-5 pt-3 leading-7 [--rule-offset:0.75rem]">
        <h3 className="font-display text-[1.7rem] leading-7 text-ink">
          <Link
            href={`/r/${resource.slug}`}
            className="link-ink after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
          >
            {resource.name}
          </Link>
        </h3>
        <p className="text-xs leading-7 text-muted-foreground">
          {hostOf(resource.url)}
        </p>
        <p className="text-[0.92rem] leading-7 text-ink/85 line-clamp-3">
          {resource.tagline}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 px-5 pt-3">
        {resource.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="rounded-sm border hairline px-1.5 py-0.5 font-semibold text-[11px] uppercase tracking-wider text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <footer className="flex items-center justify-between gap-2 px-5 pt-4">
        <Stamp
          tone={stampTone ?? pricingTone[resource.pricing]}
          rotate={jitter(resource.slug + "s", 8)}
        >
          {stamp ?? pricingLabel[resource.pricing]}
        </Stamp>
        <div className="flex items-center gap-1.5">
          <SaveButton slug={resource.slug} name={resource.name} />
          <OutboundLink
            href={resource.url}
            slug={resource.slug}
            linkType="site"
            source="index_card"
            aria-label={`Visit ${resource.name}`}
            className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-paper transition-colors hover:bg-marigold hover:text-[#1e1b4b]"
          >
            <ArrowUpRight className="h-4 w-4" />
          </OutboundLink>
        </div>
      </footer>
    </article>
  );
}
