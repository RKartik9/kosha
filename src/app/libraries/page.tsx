import type { Metadata } from "next";
import { IndexTab } from "@/components/kosha/IndexTab";
import { CatalogBrowser } from "@/components/kosha/CatalogBrowser";
import Donate from "@/components/home/donate";
import { getCategories, getLibraries } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Libraries",
  description:
    "Free and open-source UI component libraries for React, Vue, Svelte and Angular: component kits, motion, headless primitives, design systems and data tools.",
};

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
          description={`${libs.length} free and open-source component libraries in ${cats.length} categories. Filter by category, framework or price.`}
        />
        <CatalogBrowser items={libs} categories={cats} />
      </div>
      <Donate letter="Z" />
    </>
  );
}
