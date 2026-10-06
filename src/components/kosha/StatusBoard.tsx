"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function StatusBoard({
  value,
  label,
  className,
}: {
  value: string | number;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  const chars = String(value).split("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setShown(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("inline-flex flex-col gap-2", className)}>
      <div className="flex gap-1 [perspective:400px]" aria-label={`${value} ${label}`} role="img">
        {chars.map((ch, i) => (
          <span
            key={i}
            className="relative inline-flex h-14 w-10 items-center justify-center overflow-hidden rounded-[3px] bg-[#1e1b4b] font-mono text-3xl font-bold text-[#f3eee3] shadow-[inset_0_-2px_0_rgba(0,0,0,0.35)] dark:bg-[#26235a]"
          >
            <span
              className={cn("inline-block", shown ? "animate-flap" : "opacity-0")}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {ch}
            </span>
            <span className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-black/50" />
          </span>
        ))}
      </div>
      <span className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
    </div>
  );
}
