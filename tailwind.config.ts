import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgMain: "#FDFAF4",
        bgSub: "#F5EFE4",
        bgAccent: "#EDE4D8",
        border: "#D9CEB8",
        borderDark: "#C8B8A4",
        textMain: "#4A3728",
        textSub: "#7A6A5A",
        textMute: "#9E8E7E",
        accent: "#B89A7A",
        navFooter: "#4A3728",
        darkFooter: "#2A1E16",
      },
      fontFamily: {
        serif: ["var(--font-noto-serif-jp)", "serif"],
        sans: ["var(--font-noto-sans-jp)", "sans-serif"],
      },
      borderRadius: {
        none: "0",
      },
    },
  },
  plugins: [],
};

export default config;
