import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gsbs-teal": {
          DEFAULT: "#226E93",
          dark: "#1a5674",
          light: "#2d8ab8",
        },
        "gsbs-green": {
          DEFAULT: "#3a7d44",
          dark: "#2d6235",
          light: "#4a9956",
        },
        "gsbs-earth": {
          DEFAULT: "#8B6914",
          dark: "#6d5310",
          light: "#a67d1a",
        },
        "gsbs-navy": "#1a2a2e",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
