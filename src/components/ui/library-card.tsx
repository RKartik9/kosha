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
  const { name, tagline, logoUrl, tags, links, meta, featured } = data;
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
        <img
          src={logoUrl}
          alt={name + " logo"}
          className="w-12 h-12 rounded-lg bg-white/60 border border-cyan-200 object-contain"
        />
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
