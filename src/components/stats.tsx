import React from "react";

export default function Stats() {
  const stats = [
    {
      value: "50+",
      label: "Component Libraries",
      description: "Carefully curated and vetted",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
    {
      value: "200+",
      label: "Design Inspirations",
      description: "Beautiful UI examples",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
    {
      value: "100%",
      label: "Free & Open Source",
      description: "No paywalls, ever",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      value: "10k+",
      label: "Developers Helped",
      description: "And counting daily",
      icon: (
        <svg
          className="w-8 h-8"
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
      ),
    },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Decorative background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <div className="w-full h-full max-w-5xl bg-gradient-to-r from-[#14B8A6]/20 via-[#4F46E5]/20 to-[#EC4899]/20 blur-3xl rounded-full" />
        </div>

        <div className="relative">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Trusted by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899]">
                thousands of developers
              </span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Join a growing community of developers who rely on Kosha for their
              UI needs.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#14B8A6]/5 via-[#4F46E5]/5 to-[#EC4899]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-[#14B8A6]/10 to-[#4F46E5]/10 text-[#14B8A6] mb-4 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>

                    {/* Value */}
                    <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 mb-2">
                      {stat.value}
                    </div>

                    {/* Label */}
                    <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                      {stat.label}
                    </div>

                    {/* Description */}
                    <div className="text-sm text-slate-500 dark:text-slate-400">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
