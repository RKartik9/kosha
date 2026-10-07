"use client";

import { useState } from "react";
import posthog from "posthog-js";
import SubmitLibraryModal from "@/components/modals/SubmitLibraryModal";
import RequestCategoryModal from "@/components/modals/RequestCategoryModal";
import { Stamp } from "@/components/kosha/Stamp";
import { NEW_ISSUE_URL, REPO_URL } from "@/lib/site";

export default function Donate({ letter = "G" }: { letter?: string }) {
  const [submitOpen, setSubmitOpen] = useState(false);
  const [requestOpen, setRequestOpen] = useState(false);

  const fields = [
    ["Tool name", "e.g. a lovely icon set"],
    ["Website", "https://"],
    ["Category", "Icons, Fonts, Libraries…"],
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 md:px-6 lg:px-8">
      <div className="relative grid overflow-hidden rounded-[4px] bg-ink text-paper md:grid-cols-[1.2fr_1fr]">
        <div className="p-8 md:p-14">
          <p className="font-semibold text-xs uppercase tracking-wider text-paper/70">
            Suggest a tool
          </p>
          <h2 className="mt-4 font-display text-5xl leading-[0.98] md:text-7xl">
            Know a free tool we&apos;re <em className="italic text-marigold">missing</em>?
          </h2>
          <p className="mt-6 max-w-lg text-paper/75">
            Tell us about it. We review every suggestion and add the good ones,
            with credit to the maker.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                setSubmitOpen(true);
                posthog.capture("submit_library_opened");
              }}
              className="inline-flex h-12 items-center rounded-sm bg-marigold px-6 font-semibold text-xs uppercase tracking-wider text-[#1e1b4b] transition-transform hover:-translate-y-0.5"
            >
              Suggest a tool
            </button>
            <button
              type="button"
              onClick={() => {
                setRequestOpen(true);
                posthog.capture("request_category_opened");
              }}
              className="inline-flex h-12 items-center rounded-sm border-2 border-paper/60 px-6 font-semibold text-xs uppercase tracking-wider text-paper transition-colors hover:border-paper"
            >
              Request a category
            </button>
          </div>
          <p className="mt-6 text-sm text-paper/70">
            Prefer GitHub?{" "}
            <a href={NEW_ISSUE_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-paper underline decoration-marigold underline-offset-4 hover:text-marigold">
              Open an issue
            </a>{" "}
            or{" "}
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-paper underline decoration-marigold underline-offset-4 hover:text-marigold">
              contribute on GitHub ↗
            </a>
          </p>
        </div>

        <div className="relative p-8 md:p-10">
          <div className="relative rotate-[2deg] rounded-[3px] bg-[#fbf8f1] p-6 text-[#1e1b4b] shadow-[0_24px_40px_-24px_rgba(0,0,0,0.8)]">
            <div className="flex items-center justify-between border-b-2 border-double border-[#1e1b4b]/30 pb-3">
              <p className="font-semibold text-[11px] uppercase tracking-wider">Suggestion form</p>
              
            </div>
            <div className="mt-2 space-y-1">
              {fields.map(([label, hint]) => (
                <div key={label} className="border-b border-dashed border-[#1e1b4b]/30 py-3">
                  <p className="font-semibold text-[11px] uppercase tracking-wider text-[#55527e]">{label}</p>
                  <p className="font-accent text-xl italic text-[#1e1b4b]/40">{hint}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-end justify-between">
              <p className="font-semibold text-[11px] uppercase tracking-wider text-[#55527e]">
                Reviewed by the Kosha team
              </p>
              <Stamp tone="free" rotate={-12} className="text-[#0f9e8e]">
                Thank you
              </Stamp>
            </div>
          </div>
        </div>
      </div>

      <SubmitLibraryModal isOpen={submitOpen} onClose={() => setSubmitOpen(false)} />
      <RequestCategoryModal isOpen={requestOpen} onClose={() => setRequestOpen(false)} />
    </section>
  );
}
