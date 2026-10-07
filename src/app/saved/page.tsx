import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { IndexTab } from "@/components/kosha/IndexTab";
import { SavedShelf } from "@/components/kosha/SavedShelf";
import { getAll } from "@/lib/catalog";

export const metadata: Metadata = pageMeta({
  title: "Saved",
  description: "The libraries and resources you have saved on Kosha.",
  path: "/saved",
  noindex: true,
});

export default function SavedPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
      <IndexTab
        as="h1"
        letter="E"
        label="Saved"
        title={<>Your saved <em className="italic">tools</em></>}
        description="Everything you've bookmarked, kept privately in this browser."
      />
      <SavedShelf items={getAll()} />
    </div>
  );
}
