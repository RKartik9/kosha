import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Features from "@/components/features";
import PopularLibraries from "@/components/popular-libraries";
import Stats from "@/components/stats";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <PopularLibraries />
      <Stats />
      <CTA />
    </>
  );
}
