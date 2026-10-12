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
      // Tokens du design system (design-system/presskit/tokens.json).
      colors: {
        ink: "#0D1016",
        "ink-editorial": "#10141D",
        paper: "#F7F5F0",
        sand: "#F4EFE7",
        mist: "#A8B1C7",
        steel: "#7B869A",
        surface: {
          760: "#1D2430",
          800: "#171D28",
          850: "#111620",
          900: "#0D1118",
        },
        "light-section-end": "#F6F7F8",
        "text-secondary-light": "#4D5561",
        "text-muted-light": "#5D6470",
        whatsapp: {
          DEFAULT: "#25D366",
          hover: "#1FBD59",
          ink: "#07140C",
        },
        accent: {
          gold: "#F4C26B",
          orange: "#FF9152",
          ochre: "#D5A928",
          red: "#D04C57",
          mint: "#63E6BE",
          pink: "#FF8DAA",
          tan: "#D7A86E",
        },
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
        "button-primary": "0 18px 50px rgba(255, 255, 255, 0.16)",
        panel: "0 12px 42px rgba(0, 0, 0, 0.16)",
        "panel-hover": "0 18px 58px rgba(0, 0, 0, 0.22)",
        "card-hover": "0 28px 90px rgba(0, 0, 0, 0.34)",
      },
      borderRadius: {
        "4xl": "2rem",
        "mockup-desktop": "0.9rem",
        "mockup-mobile": "1.1rem",
      },
      maxWidth: {
        "8xl": "92rem",
      },
      letterSpacing: {
        tighter2: "-0.05em",
        label: "0.22em",
      },
      transitionDuration: {
        feedback: "var(--duration-feedback)",
        fast: "320ms",
        hover: "var(--duration-hover)",
        reveal: "var(--duration-reveal)",
        slow: "720ms",
      },
      transitionTimingFunction: {
        presskit: "var(--ease-presskit)",
        "presskit-out": "var(--ease-presskit-out)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
