const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        Used: {
          white: "#FCFCFC",
          black: "#131313",
          dark: "#1E2225",
          grey: "#30333A",
          light_grey: "#939393",
          red: "#FF7F6C",
          yellow: "#FFDC70",
          green: "#A5F4C5",
        },
      },
      fontFamily: {
        Inter: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: ["prettier-plugin-tailwindcss"],
  },
};
export default config;
