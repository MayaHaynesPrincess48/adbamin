import { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      maxWidth: {
        "8xl": "90rem",
        "9xl": "96rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "neutral-10": "#CECECE",
        "neutral-20": "#DADADA",
        "neutral-30": "#858585",
        "neutral-40": "#5C5C5C",
        "neutral-50": "#333333",
        "neutral-base": "#0A0A0A",
        "neutral-60": "#080808",
        "neutral-70": "#070707",
        "neutral-80": "#050505",
        "neutral-90": "#030303",
        "neutral-100": "#020202",
        "primary-10": "#CCD4E0",
        "primary-20": "#AABBCC",
        "primary-30": "#8094B3",
        "primary-40": "#567099",
        "primary-50": "#284D80",
        "primary-base": "#012966",
        "primary-60": "#012255",
        "primary-70": "#011B44",
        "primary-80": "#011533",
        "primary-90": "#000E22",
        "primary-100": "#000814",
        "secondary-10": "#F6D4CF",
        "secondary-20": "#EFBBAF",
        "secondary-30": "#E89588",
        "secondary-40": "#E07160",
        "secondary-50": "#D84E38",
        "secondary-base": "#D02A10",
        "secondary-60": "#AD230D",
        "secondary-70": "#B81C0B",
        "secondary-80": "#681508",
        "secondary-90": "#450E05",
        "secondary-100": "#2A0803",
        success: "#24AC00",
        warning: "#FAD200",
        error: "#F04848",
        info: "#4C6AFF",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
