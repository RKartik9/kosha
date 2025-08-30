"use client";

import React from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-[rgba(15,23,42,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-background text-foreground sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-8">
          <span className="font-bold text-xl tracking-tight">Kosha</span>
          <div className="hidden md:flex gap-6 text-[15px] font-medium">
            <Link
              href="/libraries"
              className="hover:text-[#14B8A6] transition-colors"
            >
              Libraries
            </Link>
            <Link
              href="/gallery"
              className="hover:text-[#14B8A6] transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/playground"
              className="hover:text-[#14B8A6] transition-colors"
            >
              Playground
            </Link>
            <Link
              href="/spotlights"
              className="hover:text-[#14B8A6] transition-colors"
            >
              Spotlights
            </Link>
            <Link
              href="/community"
              className="hover:text-[#14B8A6] transition-colors"
            >
              Community
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button
            className="bg-[#FF7A00]/10 text-[#FF7A00] rounded-full px-4 py-2 font-semibold shadow-none hover:bg-[#FF7A00]/20 transition-all flex items-center gap-2"
            aria-label="Submit"
          >
            <Plus size={20} />
            <span className="hidden sm:inline">Submit</span>
          </Button>
        </div>
      </nav>
    </header>
  );
}
