import Link from "next/link";
import { IndexTab } from "@/components/kosha/IndexTab";
import { Stamp } from "@/components/kosha/Stamp";
import { stacks } from "@/data/stacks";
import { getBySlug, getCategory } from "@/lib/catalog";

export default function StackBuilder() {
  return (
    <section id="checkout" className="mx-auto max-w-7xl scroll-mt-20 px-4 pt-28 md:px-6 lg:px-8">
      <IndexTab
        letter="E"
        label="Starter stacks"
        title={<>Start with a <em className="italic">ready-made stack</em></>}
        description="Hand-picked tool sets for common projects. Open one to compare the tools side by side."
        action={
          <Link href="/compare" className="link-ink font-semibold text-xs uppercase tracking-wider text-ink">
            Build your own →
          </Link>
        }
      />
      <div className="grid gap-8 md:grid-cols-3">
        {stacks.map((stack, si) => (
          <Link
            key={stack.slug}
            href={`/compare?items=${stack.items.join(",")}`}
            className="group relative block rounded-[3px] border-2 border-ink bg-card p-6 transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex items-start justify-between border-b-2 border-ink pb-3">
              <div>
                <p className="font-semibold text-[11px] uppercase tracking-wider text-muted-foreground">
                  Stack {si + 1}
                </p>
                <h3 className="mt-1 font-display text-3xl text-ink">{stack.name}</h3>
              </div>
              <Stamp tone={(["ink", "marigold", "free"] as const)[si]} rotate={[8, -7, 5][si]}>
                All free
              </Stamp>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{stack.purpose}</p>
            <table className="mt-4 w-full text-sm">
              <thead>
                <tr className="text-left uppercase tracking-wider text-muted-foreground">
                  <th className="pb-1 font-normal">#</th>
                  <th className="pb-1 font-normal">Tool</th>
                  <th className="pb-1 text-right font-normal">Category</th>
                </tr>
              </thead>
              <tbody>
                {stack.items.map((slug, i) => {
                  const r = getBySlug(slug);
                  if (!r) return null;
                  return (
                    <tr key={slug} className="border-t border-dashed hairline">
                      <td className="py-1.5 text-muted-foreground">{i + 1}</td>
                      <td className="py-1.5 text-ink">{r.name}</td>
                      <td className="py-1.5 text-right text-muted-foreground">
                        {getCategory(r.category)?.name}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p className="mt-5 font-semibold text-xs uppercase tracking-wider text-ink transition-colors group-hover:text-marigold-deep">
              Compare these tools →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
