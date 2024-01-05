/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "text-grad":
          "linear-gradient(85deg, #FFF 0%, rgba(255, 255, 255, 0.50) 92.15%)",
        linearGrad:
          "linear-gradient(85deg, #FFF 0%, rgba(255, 255, 255, 0.50) 92.15%)",
      },
      backgroundColor: { navBg: "rgba(8, 6, 10, 0.83)" },
      fontFamily: {
        "roboto-flex": ["Roboto Flex", "sans-serif"],
      },
      colors: {
        blue: "#B130FF",
        whiteLight: "rgba(255, 255, 255, 0.05)",
        whiteLightt: "rgba(238, 237, 238, 0.87)",
        borderThree: "rgba(255, 255, 255, 0.05)",
        shadowColor: "rgba(106, 255, 103, 0.09)",
        green: "#6AFF67",
        yellow: "#FFD643",
        red: "#FF725F",
      },
    },
  },
  plugins: [],
};
