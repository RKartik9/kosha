import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/how-it-works";
import NewArrivals from "@/components/home/new-arrivals";
import CatalogDrawers from "@/components/home/catalog-drawers";
import Spotlight from "@/components/home/spotlight";
import StackBuilder from "@/components/home/stack-builder";
import ReadingRoom from "@/components/home/reading-room";
import Donate from "@/components/home/donate";
import { ShelfTicker } from "@/components/kosha/ShelfTicker";
import { getLibraries } from "@/lib/catalog";

export default function Home() {
  return (
    <>
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
