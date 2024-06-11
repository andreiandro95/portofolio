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
        "background-dark": "linear-gradient(315deg, #000000 0%, #414141 74%)",
        "background-light":
          "linear-gradient( 95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64% )",
      },
      backgroundColor: {
        "background-container-dark": "#1B1B1B",
        "background-container-light": "rgb(200, 236, 252); ",
        "background-card-dark": "rgba(50, 50, 50, 0.9)",
        "backgorund-card-light": "rgba(220, 240, 255, 0.9)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
