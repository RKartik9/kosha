import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndexTab } from "@/components/kosha/IndexTab";
import { CatalogBrowser } from "@/components/kosha/CatalogBrowser";
import { Kolam } from "@/components/kosha/Kolam";
import { getByCategory, getCategories, getCategory } from "@/lib/catalog";
import { breadcrumbJsonLd, itemListJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return getCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return {};
  const items = getByCategory(cat.slug);
  const label = cat.kind === "library" ? `${cat.name} UI Libraries` : cat.name;
  return pageMeta({
    title: `${items.length} Best Free ${label} (2026)`,
    description: `${cat.blurb} ${items.length} hand-picked free tools including ${items.slice(0, 4).map((r) => r.name).join(", ")}.`,
    path: `/resources/${cat.slug}`,
    keywords: [`free ${cat.name.toLowerCase()}`, `best ${cat.name.toLowerCase()}`, ...items.slice(0, 5).map((r) => r.name)],
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const items = getByCategory(cat.slug);
  const siblings = getCategories(cat.kind).filter((c) => c.slug !== cat.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="mb-8 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
        <Link href="/resources" className="link-ink">All categories</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{cat.name}</span>
      </nav>

      <div className="flex items-start gap-6">
        <Kolam motif={cat.motif} size={88} className="hidden shrink-0 sm:block" />
        <IndexTab
          as="h1"
          className="flex-1"
          letter={cat.name.charAt(0)}
          label={`${items.length} free tools`}
          title={cat.name}
          description={cat.blurb}
        />
      </div>

      <CatalogBrowser items={items} />
      <JsonLd
        data={[
          itemListJsonLd(`Free ${cat.name}`, items),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "All categories", path: "/resources" },
            { name: cat.name, path: `/resources/${cat.slug}` },
          ]),
        ]}
      />

      <section className="mt-24">
        <p className="mb-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
          Other categories
        </p>
        <ul className="flex flex-wrap gap-2">
          {siblings.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/resources/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-sm border hairline bg-card px-3 py-2 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                
                {s.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
