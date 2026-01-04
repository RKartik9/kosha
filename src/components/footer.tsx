import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-[rgba(15,23,42,0.06)] dark:border-[rgba(255,255,255,0.08)] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="order-2 md:order-1">
            © {year} Kosha. All rights reserved.
          </div>

          <nav className="order-1 md:order-2" aria-label="Footer navigation">
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#14B8A6] transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <a
                  href="https://github.com/RKartik9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#14B8A6] transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
