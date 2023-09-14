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
        "carouselOne": "url('/imgs/carousel-img1.png')",
        "carouselTwo": "url('/imgs/carousel-img2.png')",
        "carouselThree": "url('/imgs/carousel-img3.png')",
        "carouselFour": "url('/imgs/carousel-img4.png')",
      },
      colors: {
        "theme-color": "#03a9f4",
      },
    },
  },
  plugins: [],
};
export default config
