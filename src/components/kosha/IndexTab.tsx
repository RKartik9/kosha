import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function IndexTab({
  label,
  title,
  description,
  action,
  className,
  as: Heading = "h2",
}: {
  letter?: string;
  label: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex items-end">
        <span className="relative -mb-px inline-flex items-center gap-2 rounded-t-[6px] border border-b-0 hairline bg-card px-4 pt-1.5 pb-2 font-semibold text-xs uppercase tracking-wider text-ink">
          <span className="h-2 w-2 rounded-full bg-marigold" aria-hidden="true" />
          {label}
        </span>
        <span className="flex-1 border-b hairline" />
      </div>
      {(title || description || action) && (
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            {title && (
              <Heading className="font-display text-4xl leading-[1.05] text-ink md:text-5xl">
                {title}
              </Heading>
            )}
            {description && (
              <p className="mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
                {description}
              </p>
            )}
          </div>
          {action}
        </div>
      )}
    </div>
  );
}
