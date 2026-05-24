import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        linkedin: {
          blue: "#0A66C2",
          "blue-hover": "#004182",
          bg: "#F3F2EF",
          card: "#FFFFFF",
          border: "#D6D9DC",
          muted: "#666666",
          text: "#191919",
          search: "#EDF3F8",
        },
      },
      maxWidth: {
        linkedin: "1128px",
      },
      blur: {
        ambient: "120px",
        "ambient-lg": "140px",
      },
      animation: {
        "ambient-float": "ambient-float 32s ease-in-out infinite",
      },
      keyframes: {
        "ambient-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(24px, -18px) scale(1.04)" },
          "66%": { transform: "translate(-12px, 12px) scale(0.98)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
