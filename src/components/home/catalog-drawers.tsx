import { IndexTab } from "@/components/kosha/IndexTab";
import { Drawer } from "@/components/kosha/Drawer";
import { getByCategory, getCategories } from "@/lib/catalog";

export default function CatalogDrawers() {
  const cats = getCategories();

  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 md:px-6 lg:px-8">
      <IndexTab
        letter="C"
        label="Categories"
        title={<>Browse by <em className="italic">category</em></>}
        description={`${cats.length} categories, from UI libraries to icons and fonts. Pick one to see everything in it.`}
      />
      <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cats.map((c) => (
          <Drawer key={c.slug} category={c} items={getByCategory(c.slug)} />
        ))}
      </div>
    </section>
  );
}
