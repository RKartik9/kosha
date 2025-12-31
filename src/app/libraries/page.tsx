"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import {
  LibraryCard,
  SimpleLibraryCard,
  LibraryData,
} from "@/components/ui/library-card";
import SubmitLibraryModal from "@/components/modals/SubmitLibraryModal";
import RequestCategoryModal from "@/components/modals/RequestCategoryModal";

export default function LibrariesPage() {
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  // Featured library (banner card)
  const shadcnData: LibraryData = {
    name: "shadcn/ui",
    tagline:
      "Beautifully designed components built with Radix UI and Tailwind CSS",
    logoUrl: "/shadcn.svg",
    tags: ["Radix", "Tailwind", "React"],
    links: [
      { label: "Preview", url: "https://ui.shadcn.com/" },
      { label: "Docs", url: "https://ui.shadcn.com/docs" },
      { label: "GitHub", url: "https://github.com/shadcn-ui/ui" },
    ],
    meta: { stars: "75k+", license: "MIT" },
    featured: true,
  };

  // Modern & Tailwind-based libraries
  const modernLibraries: LibraryData[] = [
    {
      name: "Aceternity UI",
      tagline:
        "Stunning Tailwind CSS and Framer Motion components for modern web",
      logoUrl: "/aceternity.svg",
      tags: ["Tailwind", "Framer Motion", "Modern"],
      links: [
        { label: "Preview", url: "https://ui.aceternity.com/" },
        { label: "GitHub", url: "https://github.com/aceternity" },
      ],
      meta: { stars: "12k+", license: "MIT" },
    },
    {
      name: "Magic UI",
      tagline:
        "Collection of animated components built with React, Typescript, Tailwind CSS, and Framer Motion",
      logoUrl: "/magicui.svg",
      tags: ["Tailwind", "Framer Motion", "Animation"],
      links: [
        { label: "Preview", url: "https://magicui.design/" },
        { label: "Docs", url: "https://magicui.design/docs" },
        { label: "GitHub", url: "https://github.com/magicuidesign/magicui" },
      ],
      meta: { stars: "8k+", license: "MIT" },
    },
    {
      name: "NextUI",
      tagline:
        "Beautiful, fast and modern React UI library with server components support",
      logoUrl: "/nextui.svg",
      tags: ["React", "Design System", "RSC"],
      links: [
        { label: "Preview", url: "https://nextui.org/" },
        { label: "Docs", url: "https://nextui.org/docs/guide/introduction" },
        { label: "GitHub", url: "https://github.com/nextui-org/nextui" },
      ],
      meta: { stars: "22k+", license: "MIT" },
    },
    {
      name: "DaisyUI",
      tagline: "The most popular component library for Tailwind CSS",
      logoUrl: "/daisyui.svg",
      tags: ["Tailwind", "Themes", "Pure CSS"],
      links: [
        { label: "Preview", url: "https://daisyui.com/" },
        { label: "Docs", url: "https://daisyui.com/docs/install/" },
        { label: "GitHub", url: "https://github.com/saadeghi/daisyui" },
      ],
      meta: { stars: "33k+", license: "MIT" },
    },
    {
      name: "Park UI",
      tagline:
        "Beautifully designed components built on Ark UI with Tailwind and Panda CSS",
      logoUrl: "/parkui.svg",
      tags: ["Ark UI", "Tailwind", "Panda CSS"],
      links: [
        { label: "Preview", url: "https://park-ui.com/" },
        {
          label: "Docs",
          url: "https://park-ui.com/docs/overview/introduction",
        },
      ],
      meta: { stars: "2k+", license: "MIT" },
    },
    {
      name: "Flowbite",
      tagline:
        "Build websites even faster with components on top of Tailwind CSS",
      logoUrl: "/flowbite.svg",
      tags: ["Tailwind", "Templates", "Blocks"],
      links: [
        { label: "Preview", url: "https://flowbite.com/" },
        {
          label: "Docs",
          url: "https://flowbite.com/docs/getting-started/introduction/",
        },
        { label: "GitHub", url: "https://github.com/themesberg/flowbite" },
      ],
      meta: { stars: "7k+", license: "MIT" },
    },
  ];

  // Animation & Motion libraries
  const animationLibraries: LibraryData[] = [
    {
      name: "Framer Motion",
      tagline:
        "Production-ready motion library for React with simple declarative syntax",
      logoUrl: "/framermotion.svg",
      tags: ["Animation", "React", "Production"],
      links: [
        { label: "Preview", url: "https://www.framer.com/motion/" },
        { label: "Docs", url: "https://www.framer.com/motion/introduction/" },
        { label: "GitHub", url: "https://github.com/framer/motion" },
      ],
      meta: { stars: "23k+", license: "MIT" },
    },
    {
      name: "Auto Animate",
      tagline: "Add motion to your apps with a single line of code",
      logoUrl: "/autoanimate.svg",
      tags: ["Animation", "Zero Config", "Lightweight"],
      links: [
        { label: "Preview", url: "https://auto-animate.formkit.com/" },
        { label: "Docs", url: "https://auto-animate.formkit.com/" },
        { label: "GitHub", url: "https://github.com/formkit/auto-animate" },
      ],
      meta: { stars: "12k+", license: "MIT" },
    },
    {
      name: "React Spring",
      tagline: "Spring-physics based animation library for React",
      logoUrl: "/reactspring.svg",
      tags: ["Animation", "Spring Physics", "Performance"],
      links: [
        { label: "Preview", url: "https://www.react-spring.dev/" },
        { label: "Docs", url: "https://www.react-spring.dev/docs" },
        { label: "GitHub", url: "https://github.com/pmndrs/react-spring" },
      ],
      meta: { stars: "28k+", license: "MIT" },
    },
  ];

  // Headless UI Libraries
  const headlessLibraries: LibraryData[] = [
    {
      name: "Radix UI",
      tagline:
        "Unstyled, accessible components for building high‑quality design systems",
      logoUrl: "/radix.svg",
      tags: ["Headless", "Accessible", "Primitives"],
      links: [
        { label: "Preview", url: "https://www.radix-ui.com/" },
        {
          label: "Docs",
          url: "https://www.radix-ui.com/primitives/docs/overview/introduction",
        },
        { label: "GitHub", url: "https://github.com/radix-ui/primitives" },
      ],
      meta: { stars: "15k+", license: "MIT" },
    },
    {
      name: "Headless UI",
      tagline:
        "Completely unstyled, fully accessible UI components by Tailwind Labs",
      logoUrl: "/headlessui.svg",
      tags: ["Headless", "Accessible", "Tailwind"],
      links: [
        { label: "Preview", url: "https://headlessui.com/" },
        { label: "Docs", url: "https://headlessui.com/react/menu" },
        { label: "GitHub", url: "https://github.com/tailwindlabs/headlessui" },
      ],
      meta: { stars: "25k+", license: "MIT" },
    },
    {
      name: "Ark UI",
      tagline:
        "Headless UI components for building reusable, scalable Design Systems",
      logoUrl: "/arkui.svg",
      tags: ["Headless", "Framework Agnostic", "Accessible"],
      links: [
        { label: "Preview", url: "https://ark-ui.com/" },
        {
          label: "Docs",
          url: "https://ark-ui.com/react/docs/overview/introduction",
        },
        { label: "GitHub", url: "https://github.com/chakra-ui/ark" },
      ],
      meta: { stars: "3k+", license: "MIT" },
    },
  ];

  // Comprehensive UI Libraries
  const comprehensiveLibraries: LibraryData[] = [
    {
      name: "Mantine",
      tagline: "A fully featured React components library with 100+ hooks",
      logoUrl: "/mantine.svg",
      tags: ["Complete", "Hooks", "TypeScript"],
      links: [
        { label: "Preview", url: "https://mantine.dev/" },
        { label: "Docs", url: "https://mantine.dev/getting-started/" },
        { label: "GitHub", url: "https://github.com/mantinedev/mantine" },
      ],
      meta: { stars: "26k+", license: "MIT" },
    },
    {
      name: "Chakra UI",
      tagline: "Simple, modular and accessible component library for React",
      logoUrl: "/chakra.svg",
      tags: ["Accessible", "Modular", "Theme"],
      links: [
        { label: "Preview", url: "https://chakra-ui.com/" },
        { label: "Docs", url: "https://chakra-ui.com/docs/getting-started" },
        { label: "GitHub", url: "https://github.com/chakra-ui/chakra-ui" },
      ],
      meta: { stars: "37k+", license: "MIT" },
    },
    {
      name: "Ant Design",
      tagline: "An enterprise-class UI design language and React UI library",
      logoUrl: "/antd.svg",
      tags: ["Enterprise", "Complete", "i18n"],
      links: [
        { label: "Preview", url: "https://ant.design/" },
        { label: "Docs", url: "https://ant.design/docs/react/introduce" },
        { label: "GitHub", url: "https://github.com/ant-design/ant-design" },
      ],
      meta: { stars: "91k+", license: "MIT" },
    },
    {
      name: "MUI (Material UI)",
      tagline: "React components that implement Google's Material Design",
      logoUrl: "/mui.svg",
      tags: ["Material", "Complete", "Enterprise"],
      links: [
        { label: "Preview", url: "https://mui.com/" },
        { label: "Docs", url: "https://mui.com/material-ui/getting-started/" },
        { label: "GitHub", url: "https://github.com/mui/material-ui" },
      ],
      meta: { stars: "93k+", license: "MIT" },
    },
  ];

  // Specialized Libraries
  const specializedLibraries: LibraryData[] = [
    {
      name: "React Table",
      tagline: "Headless UI for building powerful tables & datagrids",
      logoUrl: "/tanstack.svg",
      tags: ["Tables", "Headless", "Data"],
      links: [
        { label: "Preview", url: "https://tanstack.com/table/latest" },
        {
          label: "Docs",
          url: "https://tanstack.com/table/latest/docs/introduction",
        },
        { label: "GitHub", url: "https://github.com/TanStack/table" },
      ],
      meta: { stars: "25k+", license: "MIT" },
    },
    {
      name: "Recharts",
      tagline: "A composable charting library built on React components",
      logoUrl: "/recharts.svg",
      tags: ["Charts", "Data Viz", "Composable"],
      links: [
        { label: "Preview", url: "https://recharts.org/" },
        { label: "Docs", url: "https://recharts.org/en-US/api" },
        { label: "GitHub", url: "https://github.com/recharts/recharts" },
      ],
      meta: { stars: "23k+", license: "MIT" },
    },
    {
      name: "React Hook Form",
      tagline:
        "Performant, flexible and extensible forms with easy-to-use validation",
      logoUrl: "/reacthookform.svg",
      tags: ["Forms", "Validation", "Performance"],
      links: [
        { label: "Preview", url: "https://react-hook-form.com/" },
        { label: "Docs", url: "https://react-hook-form.com/get-started" },
        {
          label: "GitHub",
          url: "https://github.com/react-hook-form/react-hook-form",
        },
      ],
      meta: { stars: "41k+", license: "MIT" },
    },
  ];

  // Helper for rendering cards
  const renderCards = (libs: LibraryData[]) =>
    libs.map((lib) => <SimpleLibraryCard key={lib.name} data={lib} />);

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

      <main className="relative z-10 max-w-7xl mx-auto py-20 px-6 lg:px-8">
        {/* Enhanced header with gradient and animations */}
        <header className="mx-auto max-w-4xl text-center mb-16 animate-fade-in-up">
          {/* Category badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#14B8A6]/10 to-[#4F46E5]/10 backdrop-blur-sm border border-[#14B8A6]/20 rounded-full px-4 py-2 mb-6">
            <svg
              className="w-4 h-4 text-[#14B8A6]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
              Component Libraries
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white">
              Best Open Source
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] animate-gradient-x">
              React Component Libraries
            </span>
          </h1>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Modern & Tailwind-based selections curated for speed, accessibility,
            and delightful UX ✨
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
              <span>Curated by experts</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-[#4F46E5] animate-pulse"
                style={{ animationDelay: "0.5s" }}
              />
              <span>Updated regularly</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300 dark:bg-slate-700" />
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-full bg-[#EC4899] animate-pulse"
                style={{ animationDelay: "1s" }}
              />
              <span>Production-ready</span>
            </div>
          </div>
        </header>

        {/* Featured row with enhanced styling */}
        <section
          aria-label="Featured"
          className="mb-20 animate-fade-in-up-delayed"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400/20 to-orange-400/20">
              <span className="text-2xl">⭐</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Featured Library
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Our top pick for your next project
              </p>
            </div>
          </div>
          <LibraryCard data={shadcnData} />
        </section>

        {/* Category: Modern & Tailwind-based */}
        <section
          aria-labelledby="modern-tailwind-heading"
          className="mb-20 animate-fade-in-up-delayed-2"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#14B8A6]/20 to-[#0D9488]/20">
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
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h2
                id="modern-tailwind-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                Modern & Tailwind-based
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Beautifully styled components built with Tailwind CSS
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(modernLibraries)}
          </div>
        </section>

        {/* Category: Animation & Motion */}
        <section
          aria-labelledby="animation-effects-heading"
          className="mb-20 animate-fade-in-up-delayed-3"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#4F46E5]/20 to-[#6366F1]/20">
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
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2
                id="animation-effects-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                Animation & Motion
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Bring your interfaces to life with smooth animations
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(animationLibraries)}
          </div>
        </section>

        {/* Category: Headless UI */}
        <section
          aria-labelledby="headless-heading"
          className="mb-20 animate-fade-in-up-delayed-3"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#EC4899]/20 to-[#DB2777]/20">
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
                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                />
              </svg>
            </div>
            <div>
              <h2
                id="headless-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                Headless & Unstyled
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Accessible primitives with full styling control
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(headlessLibraries)}
          </div>
        </section>

        {/* Category: Comprehensive */}
        <section
          aria-labelledby="comprehensive-heading"
          className="mb-20 animate-fade-in-up-delayed-3"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#F59E0B]/20 to-[#D97706]/20">
              <svg
                className="w-5 h-5 text-[#F59E0B]"
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
            </div>
            <div>
              <h2
                id="comprehensive-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                Complete UI Libraries
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Full-featured libraries with extensive component collections
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(comprehensiveLibraries)}
          </div>
        </section>

        {/* Category: Specialized */}
        <section
          aria-labelledby="specialized-heading"
          className="mb-20 animate-fade-in-up-delayed-3"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#7C3AED]/20">
              <svg
                className="w-5 h-5 text-[#8B5CF6]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <div>
              <h2
                id="specialized-heading"
                className="text-2xl font-bold text-slate-900 dark:text-white"
              >
                Specialized Libraries
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Purpose-built solutions for specific use cases
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderCards(specializedLibraries)}
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-24 animate-fade-in-up-delayed-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#14B8A6] via-[#4F46E5] to-[#EC4899] p-[2px]">
            <div className="relative bg-white dark:bg-slate-900 rounded-3xl p-12 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/5 via-transparent to-[#4F46E5]/5" />
              <div className="relative">
                <h3 className="text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  Can't find what you're looking for?
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                  Submit your favorite library or request a new category. We're
                  always expanding our collection!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsSubmitModalOpen(true)}
                    className="group relative bg-gradient-to-r from-[#14B8A6] to-[#0D9488] hover:from-[#10A093] hover:to-[#0F766E] text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center gap-2">
                      Submit a Library
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
                      Request Category
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
            </div>
          </div>
        </section>

        {/* Modals */}
        <SubmitLibraryModal
          isOpen={isSubmitModalOpen}
          onClose={() => setIsSubmitModalOpen(false)}
        />
        <RequestCategoryModal
          isOpen={isRequestModalOpen}
          onClose={() => setIsRequestModalOpen(false)}
        />
      </main>
    </>
  );
}
