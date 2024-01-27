import type { Config } from "tailwindcss";

// link to theme https://colorhunt.co/palette/e23e5788304e522546311d3f

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary":"#E23E57",
        "secondary":"#88304E",
        "third":"#522546",
        "fourth": "#311D3F"
      }
    },
  },
  plugins: [],
};
export default config;
