import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IndexTab } from "@/components/kosha/IndexTab";
import { CatalogBrowser } from "@/components/kosha/CatalogBrowser";
import { FrameworkLinks } from "@/components/kosha/FrameworkLinks";
import { JsonLd } from "@/components/JsonLd";
import Donate from "@/components/home/donate";
import type { Resource } from "@/data/types";
import {
  frameworkPages,
  getByFramework,
  getCategories,
  getCategory,
  getFrameworkPage,
} from "@/lib/catalog";
import { breadcrumbJsonLd, itemListJsonLd, pageMeta } from "@/lib/seo";

type Params = { framework: string };

const intros: Record<string, string> = {
  react:
    "The best free React UI libraries and React component libraries in one place: Tailwind-based kits like shadcn/ui, accessible headless primitives like Radix UI, animation libraries, full design systems and data-grid and form tools. Every library here is free to use and checked by a person.",
  vue:
    "Free Vue UI libraries and Vue 3 component libraries: complete component kits, headless primitives, animation tools and design systems that work with Vue and Nuxt.",
  svelte:
    "Free Svelte UI libraries and SvelteKit component libraries: component kits, headless building blocks and motion tools for Svelte apps.",
  angular:
    "Free Angular UI libraries and Angular component libraries: Material-style kits, design systems and data tools for Angular apps.",
};

const starValue = (s?: string) => {
  if (!s) return 0;
  const n = parseFloat(s);
  return /k/i.test(s) ? n * 1000 : n;
};

const topPicks = (items: Resource[], n = 5) =>
  [...items]
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured) || starValue(b.stars) - starValue(a.stars))
    .slice(0, n);

const nameList = (items: Resource[]) =>
  items.length > 1
    ? `${items.slice(0, -1).map((r) => r.name).join(", ")} and ${items[items.length - 1].name}`
    : items[0]?.name ?? "";

function faqsFor(name: string, items: Resource[]) {
  const picks = topPicks(items);
  const oss = items.filter((r) => r.pricing === "oss");
  const headless = items.filter((r) => r.category === "headless");
  const motion = items.filter((r) => r.category === "animation");
  return [
    {
      q: `What is the best free ${name} UI library?`,
      a: `It depends on your project, but popular free ${name} UI libraries include ${nameList(picks)}. Kosha lists ${items.length} free ${name} component libraries you can filter by category, license and price.`,
    },
    {
      q: `Are these ${name} component libraries free for commercial use?`,
      a: `All ${items.length} libraries are free to start. ${oss.length} are open source under licenses such as MIT or Apache 2.0, which allow commercial use. Always check each library's license before shipping.`,
    },
    ...(headless.length
      ? [{
          q: `What is a headless ${name} UI library?`,
          a: `A headless library gives you accessible behaviour (focus, keyboard, ARIA) without any styling, so you design the look yourself. Free headless options for ${name} include ${nameList(headless.slice(0, 4))}.`,
        }]
      : []),
    ...(motion.length
      ? [{
          q: `Which free ${name} animation libraries are available?`,
          a: `For motion and animation in ${name}, try ${nameList(motion.slice(0, 4))}.`,
        }]
      : []),
  ];
}

export function generateStaticParams(): Params[] {
  return frameworkPages.map((f) => ({ framework: f.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { framework } = await params;
  const fw = getFrameworkPage(framework);
  if (!fw) return {};
  const items = getByFramework(fw.framework);
  return pageMeta({
    title: `Best Free ${fw.name} UI Libraries & Component Libraries (2026)`,
    description: `${items.length} hand-picked free ${fw.name} UI libraries and ${fw.name} component libraries, including ${nameList(topPicks(items, 4))}. Compare licenses, GitHub stars and features.`,
    path: `/libraries/${fw.slug}`,
    keywords: [
      `${fw.name.toLowerCase()} ui library`,
      `${fw.name.toLowerCase()} library`,
      `${fw.name.toLowerCase()} component library`,
      `best ${fw.name.toLowerCase()} ui library`,
      `free ${fw.name.toLowerCase()} components`,
    ],
  });
}

export default async function FrameworkPage({ params }: { params: Promise<Params> }) {
  const { framework } = await params;
  const fw = getFrameworkPage(framework);
  if (!fw) notFound();

  const items = getByFramework(fw.framework);
  const cats = getCategories("library").filter((c) => items.some((r) => r.category === c.slug));
  const picks = topPicks(items);
  const faqs = faqsFor(fw.name, items);

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          <Link href="/libraries" className="link-ink">UI libraries</Link>
          <span className="mx-2">/</span>
          <span className="text-ink">{fw.name}</span>
        </nav>
        <IndexTab
          as="h1"
          label={`${items.length} free libraries`}
          title={<>Free {fw.name} UI <em className="italic">libraries</em></>}
          description={intros[fw.slug]}
        />
        <FrameworkLinks current={fw.slug} className="-mt-4 mb-10" />

        <section aria-labelledby="top-picks" className="mb-14 rounded-[4px] border hairline bg-card p-6 md:p-8">
          <h2 id="top-picks" className="font-display text-2xl text-ink">
            Popular free {fw.name} component libraries
          </h2>
          <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {picks.map((r, i) => (
              <li key={r.slug} className="flex items-baseline gap-3 border-b hairline py-2">
                <span className="text-xs font-semibold text-marigold-deep">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <Link href={`/r/${r.slug}`} className="font-medium text-ink link-ink">{r.name}</Link>
                  <span className="text-muted-foreground"> · {getCategory(r.category)?.name}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <CatalogBrowser items={items} categories={cats} />

        <section aria-labelledby="fw-faq" className="mt-24">
          <h2 id="fw-faq" className="font-display text-3xl text-ink md:text-4xl">
            {fw.name} UI library FAQ
          </h2>
          <div className="mt-6 border-t-2 border-ink">
            {faqs.map((f) => (
              <div key={f.q} className="border-b hairline py-5">
                <h3 className="font-display text-xl text-ink">{f.q}</h3>
                <p className="mt-2 max-w-3xl text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <JsonLd
          data={[
            itemListJsonLd(`Free ${fw.name} UI libraries`, items),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "UI libraries", path: "/libraries" },
              { name: `${fw.name} UI libraries`, path: `/libraries/${fw.slug}` },
            ]),
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]}
        />
      </div>
      <Donate />
    </>
  );
}
