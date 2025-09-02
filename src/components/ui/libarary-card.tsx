import React from "react";

interface LibraryCardProps {
  name: string;
  tagline: string;
  description: string;
  link: string;
  // banner can be a path string (from /public) or a React node (SVG/component)
  banner?: React.ReactNode | string;
  category?: string;
}

export const LibraryCard: React.FC<LibraryCardProps> = ({
  name,
  tagline,
  description,
  link,
  banner,
  category,
}) => {
  const renderBanner = () => {
    if (!banner) return null;
    if (typeof banner === "string") {
      return (
        <img
          src={banner}
          alt={`${name} banner`}
          className="h-20 w-auto object-contain"
        />
      );
    }
    return banner;
  };

  return (
    <article
      className="group relative overflow-hidden rounded-2xl bg-transparent shadow-2xl backdrop-blur-sm border border-slate-800/20 hover:shadow-2xl transform transition-transform duration-300 hover:-translate-y-1"
      aria-label={name}
    >
      {/* Banner area */}
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-r from-indigo-600 to-violet-500 p-6">
        <div className="absolute inset-0 opacity-8 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="relative z-10 flex items-center gap-4">
          <div className="rounded-full bg-white/10 p-3 flex items-center justify-center">
            {renderBanner()}
          </div>
          <div className="hidden sm:block text-white">
            <h3 className="text-xl font-semibold leading-tight">{name}</h3>
            <p className="text-sm opacity-90 mt-1">{tagline}</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h4 className="text-lg font-semibold truncate">{name}</h4>
            <p className="mt-1 text-sm opacity-80 line-clamp-3">
              {description}
            </p>
          </div>
          {category && (
            <span className="whitespace-nowrap rounded-full border border-cyan-500/30 bg-cyan-900/5 px-3 py-1 text-xs font-medium text-cyan-300">
              {category}
            </span>
          )}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Preview
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-700/30 bg-transparent px-3 py-2 text-sm text-cyan-300 hover:bg-cyan-900/5"
            aria-label={`Open ${name} docs`}
          >
            Docs
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>

          <span className="ml-auto text-xs opacity-70">Open-source · Free</span>
        </div>
      </div>
    </article>
  );
};
