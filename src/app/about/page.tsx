"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import SubmitLibraryModal from "@/components/modals/SubmitLibraryModal";
import RequestCategoryModal from "@/components/modals/RequestCategoryModal";

export default function AboutPage() {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

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

      <main className="relative z-10 max-w-5xl mx-auto py-20 px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6]/10 to-[#4F46E5]/10 backdrop-blur-sm border border-[#14B8A6]/20 rounded-full px-4 py-2 mb-6">
            <svg
              className="w-4 h-4 text-[#14B8A6]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              About Us
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
              What is
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] animate-gradient-x">
              Kosha?
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Your trusted companion for discovering the best free and open-source
            React UI libraries
          </p>
        </header>

        {/* Main Content */}
        <div className="space-y-12 animate-fade-in-up-delayed">
          {/* Mission Section */}
          <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#14B8A6]/20 to-[#0D9488]/20">
                <svg
                  className="w-6 h-6 text-[#14B8A6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              Kosha is a curated hub built by developers, for developers. We
              understand how overwhelming it can be to find the right UI library
              for your next project. That's why we've created a centralized
              platform where you can:
            </p>
            <ul className="space-y-3 text-lg text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#14B8A6] mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-slate-900 dark:text-white">
                    Discover
                  </strong>{" "}
                  free and open-source React UI component libraries
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#14B8A6] mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-slate-900 dark:text-white">
                    Compare
                  </strong>{" "}
                  libraries side-by-side with key metrics and features
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#14B8A6] mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-slate-900 dark:text-white">
                    Explore
                  </strong>{" "}
                  design inspiration from beautifully crafted interfaces
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 text-[#14B8A6] mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  <strong className="text-slate-900 dark:text-white">
                    Save time
                  </strong>{" "}
                  with curated, vetted resources instead of endless searching
                </span>
              </li>
            </ul>
          </section>

          {/* What We Provide Section */}
          <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#4F46E5]/20 to-[#6366F1]/20">
                <svg
                  className="w-6 h-6 text-[#4F46E5]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                What We Provide
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#14B8A6]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                  UI Component Libraries
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Carefully curated collections of React component libraries,
                  including popular choices like shadcn/ui, NextUI, DaisyUI, and
                  more. All completely free and open-source.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#4F46E5]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                  Design Inspiration
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  A gallery of beautiful interfaces, animations, and design
                  patterns to inspire your next project and help you visualize
                  possibilities.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#EC4899]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Developer Tools
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Essential information including GitHub stars, licenses,
                  documentation links, and live previews to help you make
                  informed decisions.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-[#0D9488]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  Quick Access
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Direct links to documentation, GitHub repositories, and live
                  demos so you can start building immediately without the
                  hassle.
                </p>
              </div>
            </div>
          </section>

          {/* Legal & Disclaimer Section */}
          <section className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#EC4899]/20 to-[#DB2777]/20">
                <svg
                  className="w-6 h-6 text-[#EC4899]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                Legal & Copyright
              </h2>
            </div>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p className="text-lg leading-relaxed">
                <strong className="text-slate-900 dark:text-white">
                  No Copyright Infringement Intended:
                </strong>{" "}
                Kosha is a curated directory and informational resource. We do
                not host, create, or claim ownership of any of the libraries,
                tools, or content featured on our platform.
              </p>
              <p className="text-lg leading-relaxed">
                All libraries and resources listed on Kosha are{" "}
                <strong className="text-slate-900 dark:text-white">
                  open-source projects
                </strong>{" "}
                created and maintained by their respective authors and
                communities. We simply provide:
              </p>
              <ul className="space-y-2 ml-6 list-disc text-lg">
                <li>
                  Direct links to official sources (GitHub repositories,
                  documentation sites, etc.)
                </li>
                <li>
                  Publicly available information (stars, licenses, descriptions)
                </li>
                <li>Aggregated content for easier discovery and comparison</li>
              </ul>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 mt-6 border border-slate-200 dark:border-slate-700">
                <p className="text-base leading-relaxed">
                  <strong className="text-slate-900 dark:text-white">
                    Attribution:
                  </strong>{" "}
                  All trademarks, logos, and brand names belong to their
                  respective owners. If you are a library maintainer and would
                  like us to update or remove your listing, please contact us
                  immediately and we will honor your request promptly.
                </p>
              </div>
              <p className="text-lg leading-relaxed mt-4">
                Our goal is to support and promote the amazing work of
                open-source developers by making their projects more
                discoverable to the community. We deeply respect intellectual
                property rights and the open-source ecosystem.
              </p>
            </div>
          </section>

          {/* Community Section */}
          <section className="bg-gradient-to-r from-[#14B8A6]/10 via-[#4F46E5]/10 to-[#EC4899]/10 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#14B8A6]/20 to-[#4F46E5]/20 mb-6">
                <svg
                  className="w-8 h-8 text-[#14B8A6]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Built for the Community
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                Kosha is a passion project created to give back to the developer
                community. We're constantly adding new libraries, updating
                information, and improving the platform based on feedback.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setIsSubmitModalOpen(true)}
                  className="group relative bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#10A093] hover:to-[#0F766E] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Suggest a Library
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
                <button
                  onClick={() => setIsRequestModalOpen(true)}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-700 hover:border-[#4F46E5] dark:hover:border-[#4F46E5] text-slate-900 dark:text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Share Feedback
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
          </section>
        </div>

        {/* Footer note */}
        <div className="text-center mt-16 animate-fade-in-up-delayed-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Made for the React developer community
          </p>
        </div>
      </main>

      {/* Modals */}
      <SubmitLibraryModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
      <RequestCategoryModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
    </>
  );
}
