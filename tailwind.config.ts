import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
        colors: {
        primary: '#0A39CF', // Primary color
        secondary: '#D8FAF2', // Secondary color
        tertiary: '#0034BA', // Secondary color
        accent: '#FFC145', // Accent color
        background: '#F1FCFF', // Background color
        subtext: '#525353', // Subtext color
        text: '#01100A', // Text color
        dashboard1: '#171819', // Background dashboard1 color
        dashboard2: '#1B1E1F', // Background dashboard2 color
      },
    },
  },
  plugins: [],
};
export default config;
