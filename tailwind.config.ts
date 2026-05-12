import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        ui: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      colors: {
        bg: "#060608",
        surface: "#0e0e12",
        surface2: "#15151b",
        border: "#1e1e28",
        border2: "#2a2a38",
        cream: "#f0ece3",
        muted: "#5a5a72",
        muted2: "#8a8aa0",
        accent: "#c9a84c",
        accent2: "#e8c96a",
      },
    },
  },
  plugins: [],
};

export default config;