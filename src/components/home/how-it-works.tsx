import { IndexTab } from "@/components/kosha/IndexTab";

const steps = [
  {
    n: "01",
    title: "Browse",
    body: "Pick a category, such as UI libraries, icons or fonts, and filter by framework or price.",
  },
  {
    n: "02",
    title: "Save",
    body: "Tap the bookmark icon to save anything for later. No account needed; it stays in your browser.",
  },
  {
    n: "03",
    title: "Compare",
    body: "Put up to four tools side by side to compare frameworks, licenses and GitHub stars.",
  },
  {
    n: "04",
    title: "Build",
    body: "Click through to the official site or docs and start building. We only link, never re-host.",
  },
];

export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-24 md:px-6 lg:px-8">
      <IndexTab
        letter="A"
        label="How it works"
        title={<>Find the right tool in <em className="italic">four steps</em></>}
        description="From browsing to building, in a few clicks."
      />
      <ol className="grid border-l border-t hairline sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <li key={s.n} className="ruled relative border-b border-r hairline bg-card/60 px-6 pt-10 pb-10 pl-14 leading-7 [--rule-offset:2.5rem]">
            <span className="absolute -top-px left-6 rounded-b-[4px] bg-ink px-2 py-0.5 font-mono text-[11px] tracking-widest text-paper">
              {s.n}
            </span>
            <h3 className="font-display text-3xl leading-[56px] text-ink">{s.title}</h3>
            <p className="text-[0.95rem] leading-7 text-ink/80">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
