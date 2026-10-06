"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  ink: "text-ink",
  marigold: "text-marigold-deep",
  free: "text-free",
} as const;

export type StampTone = keyof typeof tones;

export function Stamp({
  children,
  tone = "ink",
  rotate = -6,
  className,
}: {
  children: ReactNode;
  tone?: StampTone;
  rotate?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [inked, setInked] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInked(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={cn("stamp", tones[tone], inked && "stamp-in", className)}
      style={{ "--stamp-rot": `${rotate}deg` } as CSSProperties}
    >
      {children}
    </span>
  );
}