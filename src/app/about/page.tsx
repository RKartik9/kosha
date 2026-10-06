import type { Metadata } from "next";
import { IndexTab } from "@/components/kosha/IndexTab";
import { Kolam } from "@/components/kosha/Kolam";
import { Stamp } from "@/components/kosha/Stamp";
import Donate from "@/components/home/donate";
import { getAll, getCategories } from "@/lib/catalog";
import { ISSUES_URL, NEW_ISSUE_URL, REPO_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Why Kosha exists, how we pick what gets listed, and how we respect the makers we link to.",
};

const articles = [
  {
    n: "01",
    title: "Why Kosha exists",
    body: [
      "Kosha (कोश) means treasury. It exists so that builders spend less time searching and more time making.",
      "We collect free UI libraries and design resources in one tidy place, so you can find, compare, save and ship.",
    ],
  },
  {
    n: "02",
    title: "What we list",
    body: [
      "A tool is listed only after a person has checked it: actively maintained, genuinely useful, free to start, and clearly licensed.",
      "Every listing has an honest label: Open Source for open-source licenses, Free for no-cost tools, and Free Tier where makers also sell extras.",
    ],
  },
  {
    n: "03",
    title: "Makers and copyright",
    body: [
      "Kosha does not host, copy or claim any of the libraries, tools or content it lists. We link only to official sites, documentation and repositories, and show publicly available facts.",
      "All trademarks, logos and names belong to their owners. Maintainers who want a listing updated or removed will be heard promptly.",
    ],
  },
  {
    n: "04",
    title: "Your privacy",
    body: [
      "No account is needed. Saved tools live in your own browser and are never sent to us.",
      "Kosha grows through suggestions from people like you. Every good find is credited to its maker.",
    ],
  },
];

const history = [
  { date: "Oct 2026", entry: "New design, ten design-resource categories, compare tool, saved items and search." },
  { date: "Jan 2026", entry: "Review step added, so every suggestion is checked before it goes live." },
  { date: "Aug 2025", entry: "Kosha launched with nineteen component libraries and an inspiration gallery." },
];

const team = [
  { role: "Curator", duty: "Picks what gets listed and reviews every suggestion.", motif: 4 },
  { role: "Contributors", duty: "Community members who suggest, correct and update listings.", motif: 7 },
  { role: "You", duty: "Suggest a free tool you love and we'll add it with credit.", motif: 12 },
];

const contribute = [
  { title: "Report an issue", body: "Broken link, outdated info or a bug on the site.", href: NEW_ISSUE_URL },
  { title: "Browse open issues", body: "See what's being worked on and pick something up.", href: ISSUES_URL },
  { title: "View the code", body: "Star the repo, fork it and send a pull request.", href: REPO_URL },
];

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-14 md:px-6 lg:px-8">
        <IndexTab
          as="h1"
          label="About"
          title={<>About <em className="italic">Kosha</em></>}
          description={`${getAll().length} free tools in ${getCategories().length} categories, and growing.`}
        />

        <section className="index-card ruled relative rounded-[4px] px-6 pt-10 pb-16 pl-16 leading-7 [--rule-offset:2.5rem] md:px-14 md:pl-24 [&::after]:hidden">
          <div className="absolute right-8 top-8 hidden md:block">
            <Stamp tone="marigold" rotate={9} className="text-sm">Since 2025</Stamp>
          </div>
          {articles.map((a) => (
            <article key={a.n} className="mb-10 max-w-3xl last:mb-0">
              <h2 className="flex items-baseline gap-4 font-display text-3xl leading-[56px] text-ink">
                <span className="text-sm font-semibold text-marigold-deep">{a.n}</span>
                {a.title}
              </h2>
              {a.body.map((p) => (
                <p key={p} className="text-[1.02rem] leading-7 text-ink/85">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </section>

        <section className="mt-24">
          <IndexTab label="Who's behind it" />
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((l) => (
              <div key={l.role} className="index-card rounded-[3px] px-6 pt-6 pb-12">
                <Kolam motif={l.motif} size={64} />
                <p className="mt-5 font-display text-2xl text-ink">{l.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{l.duty}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <IndexTab
            label="Contribute"
            title={<>Kosha is <em className="italic">open source</em></>}
            description="Found a broken link, a wrong label or a tool we should add? Open an issue or send a pull request on GitHub."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {contribute.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group index-card relative flex flex-col rounded-[3px] px-6 pt-6 pb-8 pr-14 transition-transform hover:-translate-y-1"
              >
                <span aria-hidden="true" className="absolute right-6 top-6 text-xl text-marigold-deep transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
                <p className="font-display text-2xl text-ink">{c.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-24">
          <IndexTab label="History" />
          <table className="w-full border-t-2 border-ink text-sm">
            <tbody>
              {history.map((l) => (
                <tr key={l.date} className="border-b hairline">
                  <th scope="row" className="w-32 py-4 pr-6 text-left align-top text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {l.date}
                  </th>
                  <td className="py-4 text-ink">{l.entry}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
      <Donate />
    </>
  );
}
