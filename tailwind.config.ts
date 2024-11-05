import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-primary": "#1a2529",
        "dark-secondary": "#263237",
        accent: "#1da8cd",
      },
      fontFamily: {
        nunito: "var(--font-nunito)",
      },
    },
  },
  plugins: [],
};
export default config;
