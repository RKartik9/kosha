import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-background text-foreground pt-16 pb-24 flex flex-col items-center justify-center overflow-hidden min-h-[90vh]">
      {/* Enhanced gradient background with animation */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/20 via-[#4F46E5]/15 to-[#EC4899]/10 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.15),transparent_50%)]" />
      </div>

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 md:px-8">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-full px-4 py-2 mb-8 shadow-lg animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14B8A6]"></span>
          </span>
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
            ✨ Discover your next favorite tool
          </span>
        </div>

        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-6 tracking-tight text-balance animate-fade-in-up">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
            All the layers of design & dev,
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] animate-gradient-x">
            in one Kosha.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 font-medium max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delayed">
          The curated hub for fast discovery, inspiration, and developer-first
          design tools. Everything you need, beautifully organized.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 animate-fade-in-up-delayed-2">
          <a
            href="/libraries"
            className="group relative bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#10A093] hover:to-[#0F766E] text-white font-semibold px-8 py-4 rounded-2xl shadow-[0_8px_30px_rgba(20,184,166,0.3)] hover:shadow-[0_8px_40px_rgba(20,184,166,0.4)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Explore Libraries
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </a>
          <a
            href="/gallery"
            className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 hover:border-[#4F46E5] dark:hover:border-[#4F46E5] text-slate-900 dark:text-white font-semibold px-8 py-4 rounded-2xl shadow-[0_8px_30px_rgba(15,23,42,0.1)] hover:shadow-[0_8px_40px_rgba(79,70,229,0.2)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2 transform hover:scale-105"
          >
            <span className="flex items-center gap-2">
              Browse Inspiration
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Enhanced search bar */}
        <form className="max-w-2xl mx-auto animate-fade-in-up-delayed-3">
          <label htmlFor="search" className="sr-only">
            Search libraries, inspiration, tools…
          </label>
          <div className="group relative flex items-center bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-2 border-slate-200/50 dark:border-slate-700/50 hover:border-[#14B8A6]/50 dark:hover:border-[#14B8A6]/50 focus-within:border-[#14B8A6] dark:focus-within:border-[#14B8A6] rounded-2xl px-5 py-4 shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_8px_40px_rgba(20,184,166,0.15)] transition-all duration-300">
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-slate-400 group-focus-within:text-[#14B8A6] transition-colors mr-3"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="search"
              name="search"
              type="text"
              autoComplete="off"
              placeholder="Search libraries, inspiration, tools…"
              className="flex-1 bg-transparent outline-none text-base placeholder:text-slate-400 dark:placeholder:text-slate-500 text-slate-900 dark:text-white"
              minLength={2}
            />
            <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700 rounded-lg">
              <span>⌘</span>K
            </kbd>
          </div>
        </form>
      </div>

      {/* Enhanced trust row with stats */}
      <div className="relative z-10 mt-16 animate-fade-in-up-delayed-4">
        <div className="flex flex-wrap items-center justify-center gap-8 text-center text-slate-600 dark:text-slate-400 text-sm font-medium">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#14B8A6]/20 to-[#14B8A6]/5 flex items-center justify-center">
              <span className="text-lg">📚</span>
            </div>
            <span>
              <span className="font-bold text-slate-900 dark:text-white">
                50+
              </span>{" "}
              Libraries
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-300 dark:bg-slate-700" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4F46E5]/20 to-[#4F46E5]/5 flex items-center justify-center">
              <span className="text-lg">✨</span>
            </div>
            <span>
              <span className="font-bold text-slate-900 dark:text-white">
                200+
              </span>{" "}
              Inspirations
            </span>
          </div>
          <div className="hidden sm:block w-px h-6 bg-slate-300 dark:bg-slate-700" />
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#EC4899]/20 to-[#EC4899]/5 flex items-center justify-center">
              <span className="text-lg">🎯</span>
            </div>
            <span>
              <span className="font-bold text-slate-900 dark:text-white">
                1
              </span>{" "}
              Hub
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
