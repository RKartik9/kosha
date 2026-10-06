import type { Metadata } from "next";
import Link from "next/link";
import { IndexTab } from "@/components/kosha/IndexTab";
import { Drawer } from "@/components/kosha/Drawer";
import { getAll, getByCategory, getCategories } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Design resources",
  description:
    "Free icons, fonts, illustrations, colors, backgrounds, stock media, mockups, templates, developer utilities and inspiration galleries.",
};

export default function ResourcesPage() {
  const groups = [
    { kind: "resource" as const, letter: "B", label: "Design & media", title: "Design resources" },
    { kind: "library" as const, letter: "A", label: "Code", title: "UI libraries" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 pt-14 md:px-6 lg:px-8">
      <IndexTab
        as="h1"
        letter="B"
        label="Resources"
        title={<>Browse every <em className="italic">category</em></>}
        description={`${getAll().length} free tools in ${getCategories().length} categories: icons, fonts, colors, templates and more, alongside the code libraries.`}
        action={
          <Link href="/libraries" className="link-ink font-semibold text-xs uppercase tracking-wider text-ink">
            Looking for code? Browse UI libraries →
          </Link>
        }
      />

      {groups.map((g) => {
        const cats = getCategories(g.kind);
        return (
          <section key={g.kind} className="mb-20">
            <h2 className="mb-2 flex items-baseline gap-3 font-display text-3xl text-ink">
              {g.title}
              <span className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                {g.label} · {cats.length} categories
              </span>
            </h2>
            <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {cats.map((c) => (
                <Drawer key={c.slug} category={c} items={getByCategory(c.slug)} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
