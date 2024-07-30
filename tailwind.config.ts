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
      background: "hsl(273, 50%, 7%)",
      primary: "hsl(271, 52%, 74%)",
      secondary: "hsl(39, 52%, 30%)",
      accent: "hsl(79, 50%, 60%)",
    },
  },
  plugins: [],
};
export default config;
