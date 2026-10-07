import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StatusBoard } from "@/components/kosha/StatusBoard";
import { Stamp } from "@/components/kosha/Stamp";
import { getAll, getBySlug, getCategories, getCategory, getLibraries, hostOf } from "@/lib/catalog";
import type { Resource } from "@/data/types";

const fan = ["fontshare", "shadcn-ui", "lucide"];
const fanStyles = [
  "-rotate-[9deg] -translate-x-10 group-hover:-translate-x-28 group-hover:-rotate-[14deg]",
  "rotate-[1deg] z-10 group-hover:-translate-y-4",
  "rotate-[10deg] translate-x-10 group-hover:translate-x-28 group-hover:rotate-[15deg]",
];
const fanStamps: { label: string; tone: "ink" | "marigold" | "free" }[] = [
  { label: "Free", tone: "free" },
  { label: "Open Source", tone: "ink" },
  { label: "ISC", tone: "marigold" },
];

function MiniCard({ r, i }: { r: Resource; i: number }) {
  return (
    <div
      className={`index-card absolute inset-x-0 top-0 mx-auto w-[min(19rem,78vw)] rounded-[3px] pb-9 transition-transform duration-500 ease-out ${fanStyles[i]}`}
    >
      <div className="flex justify-between border-b-2 border-double hairline px-5 pt-4 pb-3 text-xs font-medium text-muted-foreground">
        <span>{getCategory(r.category)?.name}</span>
        <span>{hostOf(r.url)}</span>
      </div>
      <div className="ruled-plain px-5 pt-3 leading-7 [--rule-offset:0.75rem]">
        <p className="font-display text-3xl leading-7 text-ink">{r.name}</p>
        <p className="text-sm leading-7 text-ink/80 line-clamp-3">{r.tagline}</p>
        <p className="font-semibold text-[11px] uppercase leading-7 tracking-wider text-muted-foreground">
          {r.tags.join(" · ")}
        </p>
      </div>
      <div className="px-5 pt-3">
        <Stamp tone={fanStamps[i].tone} rotate={[-10, -5, 7][i]}>
          {fanStamps[i].label}
        </Stamp>
      </div>
    </div>
  );
}

export default function Hero() {
  const total = getAll().length;
  const cards = fan.map((s) => getBySlug(s)).filter(Boolean) as Resource[];

  return (
    <section className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 pt-16 pb-24 md:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:pt-24">
        <div className="animate-rise">
          <p className="inline-flex items-center gap-3 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
            <span className="h-px w-8 bg-ink" />
            Free UI libraries · React components · Design resources
          </p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-ink sm:text-6xl lg:text-[5.2rem]">
            A treasury of{" "}
            <em className="relative whitespace-nowrap italic">
              free tools
              <svg className="absolute bottom-[0.02em] left-0 h-[0.16em] w-full text-marigold" viewBox="0 0 200 16" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 11 C 50 2, 120 2, 198 9" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" />
              </svg>
            </em>{" "}
            for people who build.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Kosha is a hand-picked directory of free UI libraries and React
            component libraries, plus Vue, Svelte and Angular kits, icons, fonts,
            illustrations and templates. Everything is free to use and checked by
            a real person.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/libraries"
              className="group inline-flex h-12 items-center gap-2 rounded-sm bg-ink px-6 font-semibold text-xs uppercase tracking-wider text-paper transition-colors hover:bg-marigold hover:text-[#1e1b4b]"
            >
              Browse UI libraries
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex h-12 items-center gap-2 rounded-sm border-2 border-ink px-6 font-semibold text-xs uppercase tracking-wider text-ink transition-colors hover:bg-card"
            >
              Browse design resources
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-end gap-10">
            <StatusBoard value={total} label="Free tools listed" />
            <dl className="grid grid-cols-2 gap-x-8 gap-y-1 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
              <dt>UI libraries</dt>
              <dd className="text-ink">{getLibraries().length}</dd>
              <dt>Categories</dt>
              <dd className="text-ink">{getCategories().length}</dd>
              <dt>Price</dt>
              <dd className="text-ink">Free</dd>
            </dl>
          </div>
        </div>

        <div className="group relative mx-auto h-[22rem] w-full md:h-[26rem] lg:h-[29rem] max-w-md" aria-hidden="true">
          {cards.map((r, i) => (
            <MiniCard key={r.slug} r={r} i={i} />
          ))}
          <p className="absolute -bottom-4 inset-x-0 hidden text-center md:block font-accent text-lg italic text-muted-foreground">
            hover to fan the cards
          </p>
        </div>
      </div>
    </section>
  );
}
