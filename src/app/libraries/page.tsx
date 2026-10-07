import type { Metadata } from "next";
import { breadcrumbJsonLd, itemListJsonLd, pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { FrameworkLinks } from "@/components/kosha/FrameworkLinks";
import { IndexTab } from "@/components/kosha/IndexTab";
import { CatalogBrowser } from "@/components/kosha/CatalogBrowser";
import Donate from "@/components/home/donate";
import { getCategories, getLibraries } from "@/lib/catalog";

export const metadata: Metadata = pageMeta({
  title: "Best Free UI Libraries & React Component Libraries (2026)",
  description:
    `Compare ${getLibraries().length} free and open-source UI libraries for React, Vue, Svelte and Angular: shadcn/ui, Radix UI, Chakra UI, Mantine, Magic UI, motion libraries, headless primitives and design systems.`,
  path: "/libraries",
  keywords: ["ui library", "react ui library", "react component library", "free ui components", "tailwind ui library", "open source ui library"],
});

export default function LibrariesPage() {
  const libs = getLibraries();
  const cats = getCategories("library");

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
        <IndexTab
          as="h1"
          letter="A"
          label="Libraries"
          title={<>Free UI <em className="italic">libraries</em></>}
          description={`${libs.length} free and open-source UI component libraries for React, Vue, Svelte and Angular, in ${cats.length} categories. Filter by category, framework or price.`}
        />
        <FrameworkLinks className="-mt-4 mb-10" />
        <CatalogBrowser items={libs} categories={cats} />
        <JsonLd
          data={[
            itemListJsonLd("Free UI libraries", libs),
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "UI libraries", path: "/libraries" },
            ]),
          ]}
        />
      </div>
      <Donate letter="Z" />
    </>
  );
}
