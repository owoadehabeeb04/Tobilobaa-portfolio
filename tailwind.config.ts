import type { Config } from "tailwindcss";

/**
 * Type scale taken straight from the Figma artboard.
 *
 * Each key is named after the design's pixel value, and the emitted size is
 * that value times `--font-scale` (see app/globals.css). Keeping the Figma
 * number in the class name means a spec of "48px" maps to `text-fig-48` with no
 * mental arithmetic, while the rendered size stays tunable in one place.
 */
const figmaText = (px: number, lineHeight = "normal") =>
  [`calc(${px}px * var(--font-scale))`, { lineHeight }] as [
    string,
    { lineHeight: string }
  ];

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      /*
       * Semantic tokens — values live in app/globals.css and flip with
       * prefers-color-scheme. Use these instead of literal hexes.
       *
       * Background-only tokens are deliberately registered under
       * `backgroundColor` rather than `colors`: a `colors` entry named `base`
       * would also emit `.text-base`, silently shadowing Tailwind's built-in
       * `text-base` font-size utility.
       */
      colors: {
        title: "var(--text-title)",
        body: "var(--text-body)",
        label: "var(--text-label)",
        accent: "var(--accent)",
        "nav-fg": "var(--nav-fg)",
        "nav-active-fg": "var(--nav-active-fg)",
        "chat-bubble-fg": "var(--chat-bubble-fg)"
      },
      backgroundColor: {
        base: "var(--bg-base)",
        subtle: "var(--bg-subtle)",
        surface: "var(--bg-surface)",
        "surface-2": "var(--bg-surface-2)",
        btn: "var(--btn-bg)",
        "nav-glass": "var(--nav-glass)",
        "nav-active-bg": "var(--nav-active-bg)",
        "chat-bubble": "var(--chat-bubble-bg)"
      },
      borderColor: {
        DEFAULT: "var(--border)",
        base: "var(--border)",
        nav: "var(--nav-border)",
        "chat-bubble": "var(--chat-bubble-border)"
      },
      fontSize: {
        "fig-8": figmaText(8),
        "fig-10": figmaText(10),
        "fig-12": figmaText(12),
        "fig-14": figmaText(14),
        "fig-16": figmaText(16),
        "fig-20": figmaText(20),
        "fig-24": figmaText(24),
        "fig-32": figmaText(32, "1.15"),
        "fig-40": figmaText(40, "1.15"),
        "fig-48": figmaText(48, "1.15"),
        "fig-200": figmaText(200, "1")
      },
      fontFamily: {
        // New design system: Bebas Neue for display, DM Sans for body.
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        // `font-tinyBrushy` is used across the case-study pages and the about-me
        // polaroid caption. Repointed to the same Bebas Neue used for the
        // "TOBILOBA OWOADE" hero heading (font-display) instead of the old
        // hand-lettered TinyBrushy face, for one consistent display type across
        // the site — a single source, so every existing call site inherits it.
        tinyBrushy: ["var(--font-display)", "sans-serif"],
        // `font-Beginning` is used for body copy across the case-study pages.
        // Repointed to DM Sans — the same font-sans the hero bio paragraph
        // inherits from <body> with no explicit class — instead of the old
        // self-hosted "Beginning" face, for one consistent body type site-wide.
        Beginning: ["var(--font-sans)", "sans-serif"],
        IndieFlower: ["var(--font-indie-flower)", "cursive"]
      }
    }
  },
  plugins: []
};
export default config;
