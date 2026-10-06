import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, BookOpen, Github, Scale } from "lucide-react";
import { IndexCard } from "@/components/kosha/IndexCard";
import { Favicon } from "@/components/kosha/Favicon";
import { Kolam } from "@/components/kosha/Kolam";
import { SaveButton } from "@/components/kosha/SaveButton";
import { Stamp } from "@/components/kosha/Stamp";
import {
  getAll,
  getBySlug,
  getCategory,
  getRelated,
  hostOf,
  pricingLabel,
} from "@/lib/catalog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAll().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const r = getBySlug(slug);
  if (!r) return {};
  return { title: r.name, description: r.tagline };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const r = getBySlug(slug);
  if (!r) notFound();

  const cat = getCategory(r.category)!;
  const related = getRelated(r, 3);
  const shelved = new Date(r.addedAt).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const rows: [string, string][] = [
    ["Category", cat.name],
    ["License", r.license],
    ["Price", pricingLabel[r.pricing]],
    ...(r.frameworks ? [["Works with", r.frameworks.join(", ")] as [string, string]] : []),
    ...(r.stars ? [["GitHub stars", r.stars] as [string, string]] : []),
    ["Added on", shelved],
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
        <Link href="/resources" className="link-ink">All categories</Link>
        <span className="mx-2">/</span>
        <Link href={`/resources/${cat.slug}`} className="link-ink">{cat.name}</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{r.name}</span>
      </nav>

      <article className="index-card overflow-hidden rounded-[4px] pb-12">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-double hairline px-6 py-4 md:px-10">
          <span className="text-sm font-medium text-muted-foreground">{cat.name}</span>
          <span className="text-sm text-muted-foreground">{hostOf(r.url)}</span>
        </header>

        <div className="ruled relative grid gap-10 px-6 pt-8 pl-16 leading-7 [--rule-offset:2rem] md:grid-cols-[1.5fr_1fr] md:px-10 md:pl-20">
          <div>
            <div className="flex items-center gap-4">
              <Favicon url={r.url} name={r.name} size={44} />
              <Kolam motif={cat.motif} size={44} />
            </div>
            <h1 className="mt-6 font-display text-5xl leading-[1] text-ink md:text-7xl">{r.name}</h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-ink/85">{r.tagline}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {r.tags.map((t) => (
                <li key={t} className="rounded-sm border hairline bg-paper px-2 py-1 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-sm bg-ink px-5 font-semibold text-xs uppercase tracking-wider text-paper transition-colors hover:bg-marigold hover:text-[#1e1b4b]"
              >
                Visit site <ArrowUpRight className="h-4 w-4" />
              </a>
              {r.docs && (
                <a href={r.docs} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-sm border-2 border-ink px-5 font-semibold text-xs uppercase tracking-wider text-ink hover:bg-paper">
                  <BookOpen className="h-4 w-4" /> Docs
                </a>
              )}
              {r.github && (
                <a href={r.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-11 items-center gap-2 rounded-sm border-2 border-ink px-5 font-semibold text-xs uppercase tracking-wider text-ink hover:bg-paper">
                  <Github className="h-4 w-4" /> Source
                </a>
              )}
              <SaveButton slug={r.slug} name={r.name} variant="full" />
              <Link
                href={`/compare?items=${r.slug}`}
                className="inline-flex h-10 items-center gap-2 rounded-sm border hairline bg-card px-4 font-semibold text-xs uppercase tracking-wider text-ink hover:bg-accent"
              >
                <Scale className="h-4 w-4" /> Compare
              </Link>
            </div>
          </div>

          <aside className="relative">
            <dl className="border-t-2 border-ink">
              {rows.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[8rem_1fr] gap-3 border-b hairline py-2.5 text-sm">
                  <dt className="font-semibold text-[11px] uppercase tracking-wider text-muted-foreground">{k}</dt>
                  <dd className="text-ink">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex justify-end">
              <Stamp tone={r.pricing === "oss" ? "ink" : r.pricing === "free" ? "free" : "marigold"} rotate={-11} className="text-sm">
                {pricingLabel[r.pricing]}
              </Stamp>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-20">
          <p className="mb-6 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
            Similar tools
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((x) => (
              <IndexCard key={x.slug} resource={x} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
