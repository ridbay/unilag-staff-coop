import type { Config } from 'tailwindcss'

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
        carouselOne: "url('/imgs/heroImg1.png')",
        carouselOneMobile: "url('/imgs/heroImg1Mobile.png')",
        carouselTwo: "url('/imgs/heroImg2.jpg')",
        carouselThree: "url('/imgs/heroImg1.png')",
        // carouselFour: "url('/imgs/carousel-img4.png')",
      },
      colors: {
        "theme-color": "#03a9f4",
      },
      keyframes: {
        dash: {
          "0%": {
            borderColor: "#3498db",
            backgroundColor: "transparent",
            transform: "rotate(0deg)",
          },
          "25%": {
            borderColor: "#e74c3c",
            backgroundColor: "rgba(231, 76, 60, 0.3)",
            transform: "rotate(90deg)",
          },
          "50%": {
            borderColor: "#2ecc71",
            backgroundColor: "transparent",
            transform: "rotate(180deg)",
          },
          "75%": {
            borderColor: "#f1c40f",
            backgroundColor: "rgba(241, 196, 15, 0.3)",
            transform: "rotate(270deg)",
          },
          "100%": {
            borderColor: "#3498db",
            backgroundColor: "transparent",
            transform: "rotate(360deg)",
          },
        },
      },
      animation: {
        "drag-drop": "dash 5s linear inifinte"
      }
    },
  },
  plugins: [],
};
export default config
