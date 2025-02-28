const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    screens: {
      sm: "320px",
      md: "640px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/src/assets/png/tiny.png')",
        "peer-background": "url('/src/assets/png/home-ex.png')",
        "outsourced-background": "url('/src/assets/png/2home-exchange.png')",
      },
      colors: {
        gradientColorStart: "#4C1EF5",
        gradientColorEnd: "#65068B",
        border: "#373737",
        text: "#FFFFFF",
        textp: "#7B768C",
        primary: "#4C1EF5",
        disabledPrimary: "rgba(76, 30, 245, 0.5)",
        purpleprimary: "#070105",
        purpleblack: "#04010F",
        purplewhite: "#F3F0FE",
        line: "#262626",
        dashboard: "#0C0B12",
        logintext: "#9E9BAB",
        side: "#4b1ef1",
        input: "#0A090F",
      },

      fontFamily: {
        "br-regular": ["br-regular", "sans-serif"],
        "br-light": ["br-light", "sans-serif"],
        "br-regular-italic": ["br-regular-italic", "sans-serif"],
        "br-bold": ["br-bold", "sans-serif"],
        "br-semibold": ["br-semibold", "sans-serif"],
        "br-bold-italic": ["br-bold-italic", "sans-serif"],
        "br-thin": ["br-thin", "sans-serif"],
      },
    },
  },
  plugins: [],
};