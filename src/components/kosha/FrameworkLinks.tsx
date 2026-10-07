import Link from "next/link";
import { frameworkPages, getByFramework } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function FrameworkLinks({ current, className }: { current?: string; className?: string }) {
  return (
    <nav aria-label="Browse UI libraries by framework" className={cn("flex flex-wrap items-center gap-2", className)}>
      <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">By framework</span>
      <Link
        href="/libraries"
        aria-current={!current ? "page" : undefined}
        className={cn(
          "rounded-sm border px-3 py-1.5 text-sm transition-colors",
          !current ? "border-ink bg-ink text-paper" : "hairline bg-card text-ink hover:bg-ink hover:text-paper"
        )}
      >
        All
      </Link>
      {frameworkPages.map((f) => (
        <Link
          key={f.slug}
          href={`/libraries/${f.slug}`}
          aria-current={current === f.slug ? "page" : undefined}
          className={cn(
            "rounded-sm border px-3 py-1.5 text-sm transition-colors",
            current === f.slug ? "border-ink bg-ink text-paper" : "hairline bg-card text-ink hover:bg-ink hover:text-paper"
          )}
        >
          {f.name} UI libraries
          <span className="ml-1.5 text-xs opacity-60">{getByFramework(f.framework).length}</span>
        </Link>
      ))}
    </nav>
  );
}
