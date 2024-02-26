import type { Config } from 'tailwindcss'

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#68775F",
        "primary-light": "#E5E7D5",
        secondary: "#DD835A",
        "secondary-light": "#B3ABBC",
        background: "#FFFCF5",
        "text-primary": "#050316",
        dark: "#2C2D30",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
        notoSans: ["var(--font-noto-sans-tc)"],
      },
      boxShadow: {
        "drop-shadow": "0px 2px 10px rgba(25, 1, 52, 0.12)",
      },
    },
  },
  plugins: [addVariablesForColors],
};


// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;
