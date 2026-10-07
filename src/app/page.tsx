import type { Metadata } from "next";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import NewArrivals from "@/components/home/new-arrivals";
import CatalogDrawers from "@/components/home/catalog-drawers";
import Spotlight from "@/components/home/spotlight";
import StackBuilder from "@/components/home/stack-builder";
import ReadingRoom, { faqs } from "@/components/home/reading-room";
import Donate from "@/components/home/donate";
import { ShelfTicker } from "@/components/kosha/ShelfTicker";
import { JsonLd } from "@/components/JsonLd";
import { getLibraries } from "@/lib/catalog";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: SITE_TITLE },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <ShelfTicker items={getLibraries()} />
      <HowItWorks />
      <NewArrivals />
      <CatalogDrawers />
      <Spotlight />
      <StackBuilder />
      <ReadingRoom />
      <Donate />
    </>
  );
}
