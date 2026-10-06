import { callNumber, getAll, getCategory } from "@/lib/catalog";
import NavbarClient from "./navbar-client";

export default function Navbar() {
  const entries = getAll().map((r) => ({
    slug: r.slug,
    name: r.name,
    category: getCategory(r.category)?.name ?? "Other",
    callNo: callNumber(r),
    tags: r.tags.join(" "),
  }));

  return <NavbarClient entries={entries} />;
}
