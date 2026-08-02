import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // DotTech Brand Colors
        brand: {
          blue: "#1A56DB",
          purple: "#7C3AED",
          cyan: "#06B6D4",
          indigo: "#4F46E5",
          "blue-light": "#3B82F6",
          "purple-light": "#A855F7",
        },
        // Dark theme backgrounds
        dark: {
          950: "#03040A",
          900: "#080C16",
          850: "#0D1525",
          800: "#111827",
          750: "#141D2E",
          700: "#1C2333",
          600: "#243048",
          500: "#2D3A52",
        },
        // Glass card surfaces
        glass: {
          DEFAULT: "rgba(13, 21, 37, 0.65)",
          light: "rgba(20, 29, 46, 0.80)",
          border: "rgba(255, 255, 255, 0.06)",
          "border-hover": "rgba(99, 102, 241, 0.35)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-gradient": "linear-gradient(135deg, #1A56DB 0%, #7C3AED 100%)",
        "brand-gradient-h": "linear-gradient(90deg, #1A56DB 0%, #7C3AED 100%)",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(26, 86, 219, 0.25) 0%, transparent 70%)",
        "card-glow": "radial-gradient(ellipse at top left, rgba(79, 70, 229, 0.15) 0%, transparent 60%)",
        "dark-mesh": "radial-gradient(at 27% 37%, rgba(26, 86, 219, 0.07) 0px, transparent 50%), radial-gradient(at 97% 21%, rgba(124, 58, 237, 0.07) 0px, transparent 50%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "beam": "beam 3s ease-in-out infinite",
        "counter": "counter 2s ease-out forwards",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "slide-right": "slide-right 0.5s ease-out forwards",
        "slide-left": "slide-left 0.5s ease-out forwards",
        "spin-slow": "spin 8s linear infinite",
        "marquee": "marquee 30s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4", boxShadow: "0 0 20px rgba(26, 86, 219, 0.2)" },
          "50%": { opacity: "1", boxShadow: "0 0 40px rgba(26, 86, 219, 0.6)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        beam: {
          "0%": { transform: "translateX(-100%) skewX(-15deg)" },
          "100%": { transform: "translateX(400%) skewX(-15deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-right": {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-left": {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        "glow-blue": "0 0 30px rgba(26, 86, 219, 0.35)",
        "glow-purple": "0 0 30px rgba(124, 58, 237, 0.35)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.35)",
        "card-glass": "0 8px 32px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px rgba(79, 70, 229, 0.15)",
        "nav": "0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)",
        "inner-glow": "inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
