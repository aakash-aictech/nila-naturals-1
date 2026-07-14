import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#355E3B",
          dark: "#264429",
          light: "#4A7752",
        },
        sage: {
          DEFAULT: "#5E7A55",
          light: "#7C9672",
        },
        cream: {
          DEFAULT: "#F8F5EE",
          dark: "#F0EADB",
          card: "#FFFDF8",
        },
        gold: {
          DEFAULT: "#C6A15B",
          light: "#D9BC85",
          dark: "#A3803F",
        },
        ink: "#2E2E2E",
        petal: {
          DEFAULT: "#E8B4B8",
          dark: "#D98E93",
        },
        kraft: {
          DEFAULT: "#C9A672",
          dark: "#9C7B4C",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(53, 94, 59, 0.25)",
        card: "0 10px 40px -10px rgba(46, 46, 46, 0.12)",
        gold: "0 8px 30px -8px rgba(198, 161, 91, 0.45)",
        premium:
          "0 30px 70px -25px rgba(53, 94, 59, 0.35), 0 10px 25px -12px rgba(198, 161, 91, 0.25)",
        nav: "0 8px 32px -8px rgba(46, 46, 46, 0.10)",
      },
      borderRadius: {
        organic: "2rem 1rem 2rem 1rem",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 12s ease-in-out infinite",
        "spin-slow": "spin 40s linear infinite",
        "sway": "sway 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(3deg)" },
        },
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
