import React from "react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] p-[2px] animate-fade-in-up">
          <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-12 md:p-16 text-center">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 via-transparent to-[#4F46E5]/5" />

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6]/10 to-[#4F46E5]/10 backdrop-blur-sm border border-[#14B8A6]/20 rounded-full px-4 py-2 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14B8A6] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#14B8A6]"></span>
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                  Start Building Today
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Ready to build something{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899]">
                  amazing?
                </span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Explore our collection of handpicked libraries, find design
                inspiration, and start shipping beautiful interfaces in minutes.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/libraries"
                  className="group relative bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#10A093] hover:to-[#0F766E] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    Browse Libraries
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
                </Link>
                <Link
                  href="/gallery"
                  className="group relative bg-white dark:bg-slate-800 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 hover:border-[#4F46E5] dark:hover:border-[#4F46E5] text-slate-900 dark:text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center justify-center gap-2">
                    View Gallery
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
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#14B8A6]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span>Free forever</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#4F46E5]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>No sign-up required</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[#EC4899]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Updated weekly</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
