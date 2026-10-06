export type Pricing = "oss" | "free" | "freemium";

export type Framework =
  | "React"
  | "Vue"
  | "Svelte"
  | "Angular"
  | "Web Components"
  | "Any";

export type CategoryKind = "library" | "resource";

export type CategorySlug =
  | "ui-kits"
  | "animation"
  | "headless"
  | "design-systems"
  | "data-forms"
  | "icons"
  | "fonts"
  | "illustrations"
  | "colors"
  | "backgrounds"
  | "stock-media"
  | "mockups-3d"
  | "templates"
  | "dev-utilities"
  | "inspiration";

export type Category = {
  slug: CategorySlug;
  name: string;
  kind: CategoryKind;
  /** Dewey-style class number printed on cards, e.g. "004.UI". */
  classNo: string;
  blurb: string;
  /** Selects one of the Kolam motif variants. */
  motif: number;
};

export type Resource = {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  docs?: string;
  github?: string;
  category: CategorySlug;
  tags: string[];
  license: string;
  pricing: Pricing;
  frameworks?: Framework[];
  stars?: string;
  /** ISO date the item was added to the archive. */
  addedAt: string;
  featured?: boolean;
};

export type GalleryItem = {
  id: number;
  title: string;
  category: string;
  library: string;
  liveUrl: string;
  description: string;
  tags: string[];
};
