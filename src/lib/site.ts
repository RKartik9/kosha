export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://kosha.rohitkartik.in").replace(/\/$/, "");
export const SITE_NAME = "Kosha";
export const SITE_TITLE = "Kosha — Free UI Libraries, React Component Libraries & Design Resources";
export const SITE_DESCRIPTION =
  "Kosha is a free, hand-picked directory of the best UI libraries and React component libraries, plus Vue, Svelte and Angular kits, icons, fonts, illustrations, colors and templates. Compare and save tools, no sign-up.";
export const SITE_KEYWORDS = [
  "Kosha",
  "ui library",
  "ui libraries",
  "react library",
  "react ui library",
  "react component library",
  "free ui components",
  "tailwind component library",
  "shadcn alternatives",
  "vue ui library",
  "svelte ui library",
  "angular ui library",
  "headless ui",
  "animation library",
  "free icons",
  "free fonts",
  "design resources",
  "developer tools",
];

export const REPO_URL = "https://github.com/RKartik9/kosha";
export const ISSUES_URL = `${REPO_URL}/issues`;
export const NEW_ISSUE_URL = `${REPO_URL}/issues/new`;
export const PULLS_URL = `${REPO_URL}/pulls`;

export const absoluteUrl = (path = "") => `${SITE_URL}${path}`;
