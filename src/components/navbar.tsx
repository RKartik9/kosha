"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X, Library, Images, Info } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/libraries", label: "Libraries", icon: Library },
  { href: "/gallery", label: "Showcase", icon: Images },
  { href: "/about", label: "About", icon: Info },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-[rgba(15,23,42,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-foreground sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8 h-20">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="hover:text-[#14B8A6] transition-colors font-bold text-lg flex items-center"
          >
            {/* Light / default logo (larger and centered) */}
            <img
              src="/logo-light.png"
              alt="Kosha"
              className="h-16 md:h-20 lg:h-24 block dark:hidden object-contain mr-4"
              height={96}
              width={96}
            />
            {/* Dark mode logo (larger and centered) */}
            <img
              src="/logo-dark.png"
              alt="Kosha"
              className="h-16 md:h-20 lg:h-24 hidden dark:block object-contain mr-4"
              height={96}
              width={96}
            />
          </Link>
          <div className="hidden md:flex gap-6 text-[15px] font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-[#14B8A6] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ModeToggle />

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-accent transition-colors group"
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-[#14B8A6] transition-colors" />
                      <span className="text-base font-medium group-hover:text-[#14B8A6] transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
