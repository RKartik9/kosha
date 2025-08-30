import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full bg-background text-foreground pt-12 pb-20 flex flex-col items-center justify-center overflow-hidden">
      {/* Gradient wash background */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        aria-hidden="true"
      >
        <div
          className="w-full h-full bg-gradient-to-r from-[#14B8A6]/10 via-[#4F46E5]/10 to-transparent"
          style={{ opacity: 0.12 }}
        />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4 md:px-8">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.15] mb-4 tracking-tight text-balance">
          All the layers of design & dev, in one Kosha.
        </h1>
        <p className="text-lg md:text-xl text-slate-700 dark:text-white/80 mb-8 font-medium">
          The curated hub for fast discovery, inspiration, and developer-first
          design tools.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="/libraries"
            className="bg-[#14B8A6] hover:bg-[#10A093] text-white font-semibold px-6 py-3 rounded-[14px] shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition-all focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
          >
            Explore Libraries
          </a>
          <a
            href="/gallery"
            className="bg-white border border-[rgba(15,23,42,0.06)] hover:bg-slate-50 text-slate-900 font-semibold px-6 py-3 rounded-[14px] shadow-[0_4px_14px_rgba(15,23,42,0.06)] transition-all focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:ring-offset-2"
          >
            Browse Inspiration
          </a>
        </div>
        {/* Search bar */}
        <form className="max-w-xl mx-auto">
          <label htmlFor="search" className="sr-only">
            Search libraries, inspiration, tools…
          </label>
          <div className="flex items-center bg-white dark:bg-slate-900 border border-[rgba(15,23,42,0.06)] dark:border-[rgba(255,255,255,0.08)] rounded-[14px] px-4 py-3 shadow-[0_4px_14px_rgba(15,23,42,0.06)]">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-slate-400 mr-2"
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
              className="w-full bg-transparent outline-none text-[15px] placeholder:text-slate-400 dark:placeholder:text-slate-400"
              minLength={2}
            />
          </div>
        </form>
      </div>
      {/* Trust row */}
      <div className="relative z-10 mt-12 text-center text-slate-500 dark:text-white/60 text-[15px] font-medium">
        <span>50+ curated libraries, 200+ inspirations, 1 hub</span>
      </div>
    </section>
  );
}
