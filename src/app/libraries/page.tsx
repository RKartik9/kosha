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

      {/* Enhanced gradient background with animation - matching hero */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/20 via-[#4F46E5]/15 to-[#EC4899]/10 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.15),transparent_50%)]" />
      </div>

      {/* Animated floating shapes - matching hero */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-8">
        {/* Enhanced header with gradient and animations */}
        <header className="mx-auto max-w-4xl text-center mb-16 animate-fade-in-up">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6]/10 to-[#4F46E5]/10 backdrop-blur-sm border border-[#14B8A6]/20 rounded-full px-4 py-2 mb-6">
            <svg
              className="w-4 h-4 text-[#14B8A6]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Component Libraries
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
              Best Open Source
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] animate-gradient-x">
              React Component Libraries
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Modern & Tailwind-based selections curated for speed, accessibility,
            and delightful UX ✨
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
              <span>Curated by experts</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <span>Updated regularly</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <span>Production-ready</span>
            </div>
          </div>
        </header>

        {/* Featured row with enhanced styling */}
        <section
          aria-label="Featured"
          className="mb-20 animate-fade-in-up-delayed"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20">
              <span className="text-2xl">⭐</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Featured Library
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Our top pick for your next project
              </p>
            </div>
          </div>
          <LibraryCard data={shadcnData} />
        </section>

        {/* Category: Modern & Tailwind-based */}
        <section
          aria-labelledby="modern-tailwind-heading"
          className="mb-20 animate-fade-in-up-delayed-2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6]/20 to-[#0D9488]/20">
              <span role="img" aria-label="lightning" className="text-2xl">
                ⚡
              </span>
            </div>
            <div>
              <h2
                id="modern-tailwind-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                Modern & Tailwind-based
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Polished component systems built for modern stacks
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(modernLibraries)}
          </div>
        </section>

        {/* Category: Animation & Effects */}
        <section
          aria-labelledby="animation-effects-heading"
          className="mb-20 animate-fade-in-up-delayed-3"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5]/20 to-[#6366F1]/20">
              <span role="img" aria-label="palette" className="text-2xl">
                🎨
              </span>
            </div>
            <div>
              <h2
                id="animation-effects-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                Animation & Effects
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Make interfaces feel alive and responsive
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(animationLibraries)}
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-24 animate-fade-in-up-delayed-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] p-[2px]">
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 via-transparent to-[#4F46E5]/5" />
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  Can't find what you're looking for?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                  Submit your favorite library or request a new category. We're
                  always expanding our collection!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group relative bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#10A093] hover:to-[#0F766E] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center gap-2">
                      Submit a Library
                      <svg
                        className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </span>
                  </button>
                  <button className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 hover:border-[#4F46E5] dark:hover:border-[#4F46E5] text-slate-900 dark:text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <span className="flex items-center gap-2">
                      Request Category
                      <svg
                        className="w-5 h-5 group-hover:rotate-12 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
