import type { Resource } from "@/data/types";
import { callNumber } from "@/lib/catalog";
import { cn } from "@/lib/utils";

export function AccessionNo({
  resource,
  className,
}: {
  resource: Resource;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-[11px] tracking-wider text-muted-foreground",
        className
      )}
    >
      {callNumber(resource)}
    </span>
  );
}
