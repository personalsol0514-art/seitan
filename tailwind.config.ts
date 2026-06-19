import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#f7f1e6",
        cream2: "#efe6d4",
        green: "#1f6b46",
        greenDark: "#15532f",
        greenHeader: "#123d27",
        orange: "#ec7324",
        orangeDark: "#d4621a",
        ink: "#2a2a26",
        sub: "#5f5b52",
        line: "#e2dac8",
        star: "#f5a623",
      },
      fontFamily: {
        head: ["var(--font-head)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
