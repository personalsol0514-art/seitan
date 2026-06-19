import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#7e8c5a",
        greenDark: "#5f6b42",
        greenSoft: "#eef1e4",
        cream: "#f8f6ef",
        creamDeep: "#f1ede1",
        ink: "#2f2f2b",
        sub: "#6b6b63",
        mute: "#9a9a8e",
        line: "#e7e3d7",
        clay: "#cf7a6a",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
