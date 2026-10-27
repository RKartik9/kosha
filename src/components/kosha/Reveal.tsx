"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

// Fades + rises in once, when this element itself scrolls into view (not its section).
// For grids, pass delay={(i % cols) * 0.12} so each row ripples left to right.
export function Reveal({
  as = "div",
  delay = 0,
  y = 28,
  className,
  children,
}: {
  as?: "div" | "li";
  delay?: number;
  y?: number;
  className?: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, ease: EASE, delay }}
      className={className}
    >
      {children}
    </Tag>
  );
}
