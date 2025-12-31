import React from "react";
import Link from "next/link";

export default function PopularLibraries() {
  const libraries = [
    {
      name: "shadcn/ui",
      description:
        "Beautifully designed components built with Radix UI and Tailwind CSS.",
      stars: "22k+",
      category: "UI Components",
      gradient: "from-[#14B8A6] to-[#0D9488]",
      previewUrl: "https://ui.shadcn.com/",
      docsUrl: "https://ui.shadcn.com/docs",
    },
    {
      name: "NextUI",
      description:
        "Beautiful, fast and modern React UI library with dark mode support.",
      stars: "12k+",
      category: "Design System",
      gradient: "from-[#4F46E5] to-[#6366F1]",
      previewUrl: "https://nextui.org/",
      docsUrl: "https://nextui.org/docs/guide/introduction",
    },
    {
      name: "DaisyUI",
      description: "The most popular component library for Tailwind CSS.",
      stars: "25k+",
      category: "Tailwind",
      gradient: "from-[#EC4899] to-[#DB2777]",
      previewUrl: "https://daisyui.com/",
      docsUrl: "https://daisyui.com/docs/install/",
    },
    {
      name: "Framer Motion",
      description:
        "Production-ready motion library for React with simple declarative syntax.",
      stars: "22k+",
      category: "Animation",
      gradient: "from-[#F59E0B] to-[#D97706]",
      previewUrl: "https://www.framer.com/motion/",
      docsUrl: "https://www.framer.com/motion/introduction/",
    },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-8 bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Popular Picks
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Most loved{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899]">
              by developers
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            These are the libraries that developers trust and use in production
            every day.
          </p>
        </div>

        {/* Libraries Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {libraries.map((library, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${library.gradient} text-white`}
                >
                  {library.category}
                </span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-semibold">{library.stars}</span>
                </div>
              </div>

              {/* Library Name */}
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#14B8A6] group-hover:to-[#4F46E5] transition-all">
                {library.name}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {library.description}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <a
                  href={library.previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors text-sm font-medium text-slate-900 dark:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Preview
                </a>
                <a
                  href={library.docsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl transition-colors text-sm font-medium text-slate-900 dark:text-white"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  Docs
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className="text-center animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          <Link
            href="/libraries"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#10A093] hover:to-[#0F766E] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Explore All Libraries
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
