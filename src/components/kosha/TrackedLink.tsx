"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import posthog from "posthog-js";

export function TrackedLink({
  event,
  properties,
  onClick,
  ...props
}: ComponentProps<typeof Link> & {
  event: string;
  properties?: Record<string, unknown>;
}) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        posthog.capture(event, properties);
        onClick?.(e);
      }}
    />
  );
}

export function OutboundLink({
  slug,
  linkType,
  source,
  onClick,
  ...props
}: Omit<ComponentProps<"a">, "target" | "rel"> & {
  href: string;
  slug: string;
  linkType: "site" | "docs" | "github";
  source: string;
}) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        posthog.capture("library_outbound_clicked", {
          slug,
          link_type: linkType,
          source,
          url: props.href,
        });
        onClick?.(e);
      }}
    />
  );
}
