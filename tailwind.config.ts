import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sumi: "#16140f",
        sumiSoft: "#23201a",
        green: "#1e3a2b",
        greenDeep: "#152a1f",
        paper: "#f1ebdd",
        paper2: "#e7dec9",
        wood: "#6b4f34",
        woodLight: "#8a6a44",
        ink: "#1f1d18",
        inkSub: "#5c574c",
        line: "#d8cfba",
        lineDark: "rgba(255,255,255,0.14)",
      },
      fontFamily: {
        mincho: ["var(--font-mincho)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      borderRadius: {
        none: "0",
        DEFAULT: "0",
        sm: "0",
        md: "0",
        lg: "0",
      },
    },
  },
  plugins: [],
};

export default config;
