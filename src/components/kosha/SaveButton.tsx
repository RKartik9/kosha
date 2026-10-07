"use client";

import { Bookmark, BookmarkCheck } from "lucide-react";
import posthog from "posthog-js";
import { useSaved } from "@/hooks/use-saved";
import { cn } from "@/lib/utils";

export function SaveButton({
  slug,
  name,
  variant = "icon",
  className,
}: {
  slug: string;
  name: string;
  variant?: "icon" | "full";
  className?: string;
}) {
  const { isSaved, toggle } = useSaved();
  const saved = isSaved(slug);
  const Icon = saved ? BookmarkCheck : Bookmark;

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(slug);
        posthog.capture(saved ? "library_unsaved" : "library_saved", { slug, name });
      }}
      aria-pressed={saved}
      aria-label={saved ? `Remove ${name} from saved` : `Save ${name}`}
      title={saved ? "Saved. Click to remove" : "Save for later"}
      className={cn(
        "relative z-10 inline-flex items-center gap-2 rounded-sm border hairline transition-colors focus-visible:outline-2 focus-visible:outline-marigold",
        saved
          ? "bg-marigold text-[#1e1b4b] border-transparent"
          : "bg-card hover:bg-accent text-ink",
        variant === "icon" ? "h-8 w-8 justify-center" : "h-10 px-4 font-semibold text-xs uppercase tracking-wider",
        className
      )}
    >
      <Icon className="h-4 w-4" />
      {variant === "full" && <span>{saved ? "Saved" : "Save"}</span>}
    </button>
  );
}
