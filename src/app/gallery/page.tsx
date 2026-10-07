import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { IndexTab } from "@/components/kosha/IndexTab";
import { ExhibitionWall } from "@/components/kosha/ExhibitionWall";
import Donate from "@/components/home/donate";
import { galleryCategories, galleryItems } from "@/data/gallery";

export const metadata: Metadata = pageMeta({
  title: "UI Component Gallery: Live React Component Examples",
  description: "Browse standout free React components from Magic UI, Aceternity UI, shadcn/ui and more, with links to live demos.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
        <IndexTab
          as="h1"
          letter="C"
          label="Gallery"
          title={<>Component <em className="italic">gallery</em></>}
          description={`${galleryItems.length} standout UI components, such as buttons, cards, modals and animations, from the libraries on Kosha. Click any card to try the real component on the maker's site.`}
        />
        <ExhibitionWall items={galleryItems} categories={galleryCategories} />
      </div>
      <Donate letter="Z" />
    </>
  );
}
