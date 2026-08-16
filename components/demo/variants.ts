export const DEMO_VARIANTS = [
  {
    slug: "side-by-side",
    letter: "A",
  },
  {
    slug: "featured-plus",
    letter: "B",
  },
  {
    slug: "toggle",
    letter: "C",
  },
  {
    slug: "compare",
    letter: "D",
  },
  {
    slug: "stack",
    letter: "E",
  },
] as const;

export type DemoVariantSlug = (typeof DEMO_VARIANTS)[number]["slug"];
