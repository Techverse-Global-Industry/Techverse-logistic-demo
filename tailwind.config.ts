import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./hooks/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A122A",
        midnight: "#0B1726",
        sand: "#E7DECD",
        forest: "#3A5135",
        cloud: "#F4F7FA",
        rosegray: "#B4968B",
        success: "#27C281",
        warning: "#F6B73C",
        danger: "#F05A67"
      },
      boxShadow: {
        glow: "0 0 80px rgba(231,222,205,0.16)",
      },
      backgroundImage: {
        "grid-fade": "linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)"
      }
    },
  },
  plugins: [],
};
export default config;
