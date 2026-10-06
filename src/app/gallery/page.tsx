import type { Metadata } from "next";
import { IndexTab } from "@/components/kosha/IndexTab";
import { ExhibitionWall } from "@/components/kosha/ExhibitionWall";
import Donate from "@/components/home/donate";
import { galleryCategories, galleryItems } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Component gallery",
  description: "A curated exhibition of standout components from Magic UI, Aceternity UI, shadcn/ui and more.",
};

export default function GalleryPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
        <IndexTab
          as="h1"
          letter="C"
          label="Gallery"
          title={<>The exhibition <em className="italic">wall</em></>}
          description={`${galleryItems.length} standout components from the libraries on Kosha. Click any one to see it live on the maker's site.`}
        />
        <ExhibitionWall items={galleryItems} categories={galleryCategories} />
      </div>
      <Donate letter="Z" />
    </>
  );
}
