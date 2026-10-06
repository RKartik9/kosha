export type Stack = {
  slug: string;
  name: string;
  purpose: string;
  items: string[];
};

export const stacks: Stack[] = [
  {
    slug: "landing-page",
    name: "The Landing Page",
    purpose: "A sharp marketing site in a weekend.",
    items: ["shadcn-ui", "motion", "lucide", "fontshare", "haikei"],
  },
  {
    slug: "dashboard",
    name: "The Dashboard",
    purpose: "Internal tools, admin panels and analytics.",
    items: ["shadcn-blocks", "tremor", "tanstack-table", "react-hook-form", "phosphor"],
  },
  {
    slug: "portfolio",
    name: "The Portfolio",
    purpose: "Expressive, motion-heavy personal sites.",
    items: ["gsap", "lenis", "react-three-fiber", "velvetyne", "godly"],
  },
];
