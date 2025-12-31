"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Image from "next/image";

type GalleryItem = {
  id: number;
  title: string;
  category: string;
  library: string;
  imageUrl: string;
  liveUrl: string;
  description: string;
  tags: string[];
};

export default function GalleryPage() {
  const categories = [
    "All",
    "Buttons",
    "Cards",
    "Forms",
    "Navigation",
    "Animations",
    "Dashboards",
  ];
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Shiny Button with Reflection",
      category: "Buttons",
      library: "Magic UI",
      imageUrl: "/placeholder-button.jpg",
      liveUrl: "https://magicui.design/docs/components/shiny-button",
      description:
        "Modern button with animated shimmer effect and subtle reflections",
      tags: ["Shimmer", "Modern", "Interactive"],
    },
    {
      id: 2,
      title: "Bento Grid Layout",
      category: "Cards",
      library: "Aceternity UI",
      imageUrl: "/placeholder-card.jpg",
      liveUrl: "https://ui.aceternity.com/components/bento-grid",
      description:
        "Masonry-style grid layout inspired by Apple's design language",
      tags: ["Grid", "Layout", "Modern"],
    },
    {
      id: 3,
      title: "Multi-Step Form Wizard",
      category: "Forms",
      library: "shadcn/ui",
      imageUrl: "/placeholder-form.jpg",
      liveUrl: "https://ui.shadcn.com/docs/components/form",
      description:
        "Progressive form with validation and step indicators built with React Hook Form",
      tags: ["Wizard", "Validation", "Progressive"],
    },
    {
      id: 4,
      title: "Floating Dock Navigation",
      category: "Navigation",
      library: "Aceternity UI",
      imageUrl: "/placeholder-nav.jpg",
      liveUrl: "https://ui.aceternity.com/components/floating-dock",
      description:
        "macOS-inspired dock navigation with smooth animations and tooltips",
      tags: ["Dock", "macOS", "Smooth"],
    },
    {
      id: 5,
      title: "Text Reveal Animation",
      category: "Animations",
      library: "Framer Motion",
      imageUrl: "/placeholder-3d.jpg",
      liveUrl: "https://www.framer.com/motion/examples/#text-animations",
      description:
        "Smooth text reveal effect with character-by-character animation",
      tags: ["Text", "Reveal", "Typography"],
    },
    {
      id: 6,
      title: "Dashboard Template",
      category: "Dashboards",
      library: "shadcn/ui",
      imageUrl: "/placeholder-dashboard.jpg",
      liveUrl: "https://ui.shadcn.com/examples/dashboard",
      description:
        "Complete dashboard with sidebar, charts, tables, and responsive layout",
      tags: ["Complete", "Charts", "Responsive"],
    },
    {
      id: 7,
      title: "Aurora Background Effect",
      category: "Animations",
      library: "Aceternity UI",
      imageUrl: "/placeholder-neon.jpg",
      liveUrl: "https://ui.aceternity.com/components/aurora-background",
      description: "Mesmerizing aurora borealis effect for hero sections",
      tags: ["Aurora", "Hero", "Gradient"],
    },
    {
      id: 8,
      title: "3D Card Effect",
      category: "Cards",
      library: "Aceternity UI",
      imageUrl: "/placeholder-pricing.jpg",
      liveUrl: "https://ui.aceternity.com/components/3d-card-effect",
      description:
        "Interactive card with 3D tilt effect following mouse movement",
      tags: ["3D", "Interactive", "Tilt"],
    },
    {
      id: 9,
      title: "Command Menu (⌘K)",
      category: "Navigation",
      library: "shadcn/ui",
      imageUrl: "/placeholder-multistep.jpg",
      liveUrl: "https://ui.shadcn.com/docs/components/command",
      description:
        "Fast command palette with keyboard shortcuts and fuzzy search",
      tags: ["Command", "Search", "Keyboard"],
    },
    {
      id: 10,
      title: "Animated Tabs",
      category: "Navigation",
      library: "Aceternity UI",
      imageUrl: "/placeholder-tabs.jpg",
      liveUrl: "https://ui.aceternity.com/components/tabs",
      description: "Smooth tab transitions with animated underline indicator",
      tags: ["Tabs", "Smooth", "Animated"],
    },
    {
      id: 11,
      title: "Hero Video Dialog",
      category: "Animations",
      library: "Magic UI",
      imageUrl: "/placeholder-video.jpg",
      liveUrl: "https://magicui.design/docs/components/hero-video-dialog",
      description:
        "Elegant video player dialog for hero sections with smooth transitions",
      tags: ["Video", "Dialog", "Hero"],
    },
    {
      id: 12,
      title: "Animated Beam",
      category: "Animations",
      library: "Magic UI",
      imageUrl: "/placeholder-beam.jpg",
      liveUrl: "https://magicui.design/docs/components/animated-beam",
      description:
        "Animated connection lines between elements for showcasing integrations",
      tags: ["Beam", "Connections", "Integration"],
    },
  ];

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Enhanced gradient background with animation - matching other pages */}
      <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/20 via-[#4F46E5]/15 to-[#EC4899]/10 animate-gradient-shift" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(20,184,166,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(79,70,229,0.15),transparent_50%)]" />
      </div>

      {/* Animated floating shapes - matching other pages */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#14B8A6]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4F46E5]/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#EC4899]/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <main className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-8">
        {/* Enhanced header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6]/10 to-[#4F46E5]/10 backdrop-blur-sm border border-[#14B8A6]/20 rounded-full px-4 py-2 mb-6">
            <svg
              className="w-4 h-4 text-[#14B8A6]"
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
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Design Gallery
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
              Beautiful UI
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] animate-gradient-x">
              Inspiration
            </span>
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore stunning component designs and real-world examples built
            with popular React libraries
          </p>
        </header>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up-delayed">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white shadow-lg scale-105"
                  : "bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:scale-105 hover:shadow-md"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                {/* Image Container */}
                <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/20 via-[#4F46E5]/20 to-[#EC4899]/20" />

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
                      hoveredId === item.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-semibold hover:scale-110 transition-transform"
                    >
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
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      View Live
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Library Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-[#14B8A6]/10 to-[#4F46E5]/10 text-[#14B8A6] border border-[#14B8A6]/20">
                      {item.library}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#14B8A6] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up-delayed-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] p-[2px]">
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 via-transparent to-[#4F46E5]/5" />

              <div className="relative">
                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  Want to see your design here?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                  Submit your beautiful component designs and inspire thousands
                  of developers
                </p>
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#10A093] hover:to-[#0F766E] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Submit Design
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
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
