import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sovereign: {
          bg: "#05070B",
          panel: "#0B0F17",
          surface: "#111827",
          elevated: "#172033",
          amber: "#D97706",
          cyan: "#38BDF8",
          text: "#F8FAFC",
          muted: "#94A3B8"
        }
      }
    }
  },
  plugins: []
};

export default config;
