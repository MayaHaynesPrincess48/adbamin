/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        // Neutral colors
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

        // Primary colors
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

        // Secondary colors
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

        // System colors
        success: "#24AC00",
        warning: "#FAD200",
        error: "#F04848",
        info: "#4C6AFF",
      },
    },
  },
  plugins: [],
};
