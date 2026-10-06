import { Plus } from "lucide-react";
import { IndexTab } from "@/components/kosha/IndexTab";
import { NEW_ISSUE_URL } from "@/lib/site";

export const faqs = [
  {
    q: "What exactly is Kosha?",
    a: "Kosha means treasury. It is a hand-picked directory of free UI libraries and design resources: component kits, motion tools, icons, fonts, illustrations, colors, templates, utilities and inspiration galleries.",
  },
  {
    q: "Is everything here really free?",
    a: "Yes, with honest labels. “Open Source” means it has an open-source license, “Free” means free to use without paying, and “Free Tier” means the main product is free but the maker also sells extras.",
  },
  {
    q: "How do you decide what gets listed?",
    a: "A person checks every tool: it must be actively maintained, genuinely useful, free to start, and clearly licensed. We prefer a short, trusted list over a long, noisy one.",
  },
  {
    q: "Do I need an account to save tools?",
    a: "No. Saved tools are stored in your own browser. Nothing is sent to us, and you can clear them at any time from the Saved page.",
  },
  {
    q: "Do you host or redistribute any of these files?",
    a: "Never. Kosha only links to official sites, docs and repositories. All names, logos and trademarks belong to their owners.",
  },
  {
    q: "I maintain a library. How do I update or remove it?",
    a: "Use the “Suggest a tool” form at the bottom of the page or open an issue on GitHub (github.com/RKartik9/kosha). Updates and removals are honored promptly.",
  },
];

export default function ReadingRoom() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-28 md:px-6 lg:px-8">
      <IndexTab
        letter="F"
        label="FAQ"
        title={<>Frequently asked <em className="italic">questions</em></>}
      />
      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        <div className="relative hidden lg:block">
          <div className="sticky top-28 rotate-[-2deg] rounded-[3px] border hairline bg-marigold p-8 text-[#1e1b4b] shadow-[0_18px_30px_-18px_rgba(30,27,75,0.6)]">
            <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-[#1e1b4b] shadow" aria-hidden="true" />
            <p className="font-semibold text-xs uppercase tracking-wider">Still curious?</p>
            <p className="mt-3 font-display text-4xl leading-[1.05]">
              We're happy to help.
            </p>
            <p className="mt-4 text-sm">
              Can&apos;t find your answer? Open an issue on GitHub and
              we&apos;ll reply.
            </p>
            <a
              href={NEW_ISSUE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex h-11 items-center rounded-sm bg-[#1e1b4b] px-5 text-xs font-semibold uppercase tracking-wider text-[#fbf8f1] transition-transform hover:-translate-y-0.5"
            >
              Open an issue ↗
            </a>
          </div>
        </div>
        <div className="border-t-2 border-ink">
          {faqs.map((f, i) => (
            <details key={f.q} className="group border-b hairline" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-baseline gap-5 py-6 [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-xs text-marigold-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 font-display text-2xl text-ink md:text-3xl">{f.q}</span>
                <Plus className="h-5 w-5 shrink-0 text-ink transition-transform duration-200 group-open:rotate-45" />
              </summary>
              <p className="max-w-2xl pb-7 pl-10 text-ink/80">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
