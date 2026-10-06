"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

function hostOf(url: string) {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
}

export function Favicon({
  url,
  name,
  size = 28,
  className,
}: {
  url: string;
  name: string;
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  const host = hostOf(url);

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex items-center justify-center rounded-sm bg-ink text-paper font-display",
          className
        )}
        style={{ width: size, height: size, fontSize: size * 0.6 }}
      >
        {name.charAt(0)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://www.google.com/s2/favicons?domain=${host}&sz=64`}
      alt=""
      width={size}
      height={size}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("rounded-sm bg-card object-contain", className)}
    />
  );
}
