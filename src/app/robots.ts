import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kosha.dev";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/admin", "/get-user-id", "/saved"] },
    sitemap: `${base}/sitemap.xml`,
  };
}
