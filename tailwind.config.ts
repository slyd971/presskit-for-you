import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        ink: "#0D1016",
        sand: "#F4EFE7",
        mist: "#A8B1C7",
        line: "rgba(255,255,255,0.08)",
        panel: "rgba(255,255,255,0.05)",
        panelStrong: "rgba(255,255,255,0.1)",
      },
      backgroundImage: {
        noise:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.09), transparent 22%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.08), transparent 26%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.06), transparent 28%)",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(4, 8, 20, 0.18)",
        glow: "0 24px 80px rgba(255, 145, 77, 0.18)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        "8xl": "92rem",
      },
      letterSpacing: {
        tighter2: "-0.05em",
      },
    },
  },
  plugins: [],
};

export default config;
