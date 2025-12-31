"use client";

import React from "react";

export interface LibraryData {
  name: string;
  tagline: string;
  logoUrl: string;
  tags: string[];
  links: { label: string; url: string }[];
  meta?: { stars?: string; size?: string; license?: string };
  featured?: boolean;
}

export const LibraryCard: React.FC<{ data: LibraryData }> = ({ data }) => {
  const { name, tagline, tags, links, meta, featured } = data;

  // Generate a consistent color based on the name
  const getColorFromName = (str: string) => {
    const colors = [
      "from-[#14B8A6] to-[#0D9488]", // Teal
      "from-[#4F46E5] to-[#4338CA]", // Indigo
      "from-[#EC4899] to-[#DB2777]", // Pink
      "from-[#F59E0B] to-[#D97706]", // Amber
      "from-[#8B5CF6] to-[#7C3AED]", // Purple
      "from-[#06B6D4] to-[#0891B2]", // Cyan
    ];
    const hash = str
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colors[hash % colors.length];
  };

  return (
    <article
      className="relative rounded-[14px] border border-cyan-200/30 bg-gradient-to-br from-cyan-100/10 via-indigo-100/10 to-white/5 shadow-lg backdrop-blur-sm p-6 flex flex-col gap-4 min-h-[220px] focus-within:ring-2 focus-within:ring-indigo-400 transition-transform duration-200 hover:-translate-y-1 motion-reduce:transition-none"
      tabIndex={0}
      aria-label={name}
    >
      {featured && (
        <span className="absolute top-4 right-4 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-full shadow text-slate-900">
          Featured
        </span>
      )}
      <div className="flex items-center gap-4">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${getColorFromName(
            name
          )} flex items-center justify-center text-white font-bold text-xl shadow-md`}
        >
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="text-lg font-bold leading-tight">{name}</h3>
          <p className="text-sm opacity-80 mt-1 line-clamp-1">{tagline}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-cyan-600/20 text-cyan-700 dark:text-cyan-300 px-2 py-1 rounded-full text-xs font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
      {meta && (
        <div className="flex gap-4 text-xs text-slate-500 mt-2">
          {meta.stars && <span>★ {meta.stars}</span>}
          {meta.size && <span>{meta.size}</span>}
          {meta.license && <span>{meta.license}</span>}
        </div>
      )}
      <div className="flex gap-3 mt-4">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 min-w-[80px] justify-center"
          >
            {link.label}
            <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </article>
  );
};

export const SimpleLibraryCard: React.FC<{ data: LibraryData }> = ({
  data,
}) => <LibraryCard data={data} />;
