import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      text: "hsl(275, 52%, 91%)",
      textDark: "hsl(275, 52%, 9%)",
      background: "hsl(273, 50%, 7%)",
      primary: "hsl(270, 52%, 74%)",
      secondary: "hsl(275, 57%, 35%)",
      accent: "hsl(79, 50%, 60%)",
    },
  },
  plugins: [],
};
export default config;
