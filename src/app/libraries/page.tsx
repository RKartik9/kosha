import Navbar from "@/components/navbar";
import {
  LibraryCard,
  SimpleLibraryCard,
  LibraryData,
} from "@/components/ui/library-card";

export default function LibrariesPage() {
  // Featured library (banner card)
  const shadcnData: LibraryData = {
    name: "shadcn/ui",
    tagline: "Flexible components built on Radix UI + Tailwind",
    logoUrl: "/shadcn.svg",
    tags: ["Radix", "Tailwind", "React"],
    links: [
      { label: "Preview", url: "https://ui.shadcn.com/" },
      { label: "Docs", url: "https://ui.shadcn.com/docs" },
      { label: "GitHub", url: "https://github.com/shadcn/ui" },
    ],
    meta: { stars: "22k+", license: "MIT" },
    featured: true,
  };

  // Modern & Tailwind-based libraries
  const modernLibraries: LibraryData[] = [
    {
      name: "Aceternity UI",
      tagline:
        "Prebuilt Tailwind + Framer Motion components (modern animations).",
      logoUrl: "/aceternity.svg",
      tags: ["Tailwind", "Framer Motion"],
      links: [{ label: "Preview", url: "https://aceternity.com/ui" }],
      meta: { stars: "3k+", license: "MIT" },
    },
    {
      name: "NextUI",
      tagline: "Beautiful, lightweight, and fast with dark mode support.",
      logoUrl: "/nextui.svg",
      tags: ["React", "Design System"],
      links: [{ label: "Preview", url: "https://nextui.org/" }],
      meta: { stars: "12k+", license: "MIT" },
    },
    {
      name: "DaisyUI",
      tagline: "TailwindCSS component library with themes & utility classes.",
      logoUrl: "/daisyui.svg",
      tags: ["Tailwind", "Themes"],
      links: [{ label: "Preview", url: "https://daisyui.com/" }],
      meta: { stars: "25k+", license: "MIT" },
    },
    {
      name: "Flowbite",
      tagline: "Tailwind + Headless UI components (lots of templates too).",
      logoUrl: "/flowbite.svg",
      tags: ["Tailwind", "Headless"],
      links: [{ label: "Preview", url: "https://flowbite.com/" }],
      meta: { stars: "8k+", license: "MIT" },
    },
  ];

  // Animation & Effects libraries
  const animationLibraries: LibraryData[] = [
    {
      name: "Magic UI",
      tagline: "Motion-heavy Tailwind + Framer Motion components.",
      logoUrl: "/magicui.svg",
      tags: ["Framer Motion", "Tailwind"],
      links: [{ label: "Preview", url: "https://magicui.com/" }],
      meta: { stars: "2k+", license: "MIT" },
    },
    {
      name: "Framer Motion",
      tagline: "Production-grade animation library for React.",
      logoUrl: "/framermotion.svg",
      tags: ["Animation", "React"],
      links: [{ label: "Docs", url: "https://www.framer.com/motion/" }],
      meta: { stars: "22k+", license: "MIT" },
    },
    {
      name: "Motion UI",
      tagline: "Declarative animations, transitions, and effects.",
      logoUrl: "/motionui.svg",
      tags: ["Animation"],
      links: [{ label: "Docs", url: "https://motion-ui.com/" }],
      meta: { stars: "3k+", license: "MIT" },
    },
  ];

  // Helper for rendering cards
  const renderCards = (libs: LibraryData[]) =>
    libs.map((lib) => <SimpleLibraryCard key={lib.name} data={lib} />);

  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto py-16 px-6">
        <header className="mx-auto max-w-3xl text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Best Open Source React Component Libraries
          </h1>
          <p className="mt-4 text-lg">
            Modern & Tailwind-based selections curated for speed, accessibility,
            and delightful UX
          </p>
        </header>

        {/* Featured row */}
        <section aria-label="Featured" className="mb-12">
          <LibraryCard data={shadcnData} />
        </section>

        {/* Category: Modern & Tailwind-based */}
        <section aria-labelledby="modern-tailwind-heading" className="mb-12">
          <h2
            id="modern-tailwind-heading"
            className="text-2xl font-bold flex items-center gap-2 mb-4"
          >
            <span role="img" aria-label="lightning">
              ⚡
            </span>{" "}
            Modern & Tailwind-based
          </h2>
          <p className="mb-6 text-base text-slate-400">
            Polished component systems built for modern stacks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderCards(modernLibraries)}
          </div>
        </section>

        {/* Category: Animation & Effects */}
        <section aria-labelledby="animation-effects-heading" className="mb-12">
          <h2
            id="animation-effects-heading"
            className="text-2xl font-bold flex items-center gap-2 mb-4"
          >
            <span role="img" aria-label="palette">
              🎨
            </span>{" "}
            Animation & Effects
          </h2>
          <p className="mb-6 text-base text-slate-400">
            Make interfaces feel alive and responsive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {renderCards(animationLibraries)}
          </div>
        </section>

        {/* Add more categories here... */}
      </main>
    </>
  );
}
