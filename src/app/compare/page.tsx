import type { Metadata } from "next";
import { Suspense } from "react";
import { IndexTab } from "@/components/kosha/IndexTab";
import { CompareDesk } from "@/components/kosha/CompareDesk";
import { callNumber, getAll, getCategory } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Compare desk",
  description: "Compare free UI libraries and design resources side by side: frameworks, licenses, stars and tags.",
};

export default function ComparePage() {
  const entries = getAll().map((r) => ({
    ...r,
    callNo: callNumber(r),
    drawer: getCategory(r.category)?.name ?? "",
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
      <IndexTab
        as="h1"
        letter="D"
        label="Compare desk"
        title={<>Compare tools <em className="italic">side by side</em></>}
        description="Pick up to four tools to compare side by side. The page link updates as you go, so you can share it with a teammate."
      />
      <Suspense fallback={<p className="font-mono text-xs text-muted-foreground">Loading…</p>}>
        <CompareDesk entries={entries} />
      </Suspense>
    </div>
  );
}
