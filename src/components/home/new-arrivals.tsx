import Link from "next/link";
import { IndexTab } from "@/components/kosha/IndexTab";
import { IndexCard } from "@/components/kosha/IndexCard";
import { getNew } from "@/lib/catalog";

export default function NewArrivals() {
  const items = getNew(6);

  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 md:px-6 lg:px-8">
      <IndexTab
        letter="B"
        label="New"
        title={<>Recently <em className="italic">added</em></>}
        description="The newest free tools we've added to Kosha."
        action={
          <Link href="/libraries" className="link-ink font-semibold text-xs uppercase tracking-wider text-ink">
            See all UI libraries →
          </Link>
        }
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((r) => (
          <IndexCard key={r.slug} resource={r} stamp="New" stampTone="marigold" />
        ))}
      </div>
    </section>
  );
}
