/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      }
    },
    daisyui: {
      themes: ["light", "wireframe"],
    },
    screens: {
      'sm': '600px',
      // => @media (min-width: '600px) { ... }

      'md': '900px',
      // => @media (min-width: 900px) { ... }

      'lg': '1200px',
      // => @media (min-width: 1200px) { ... }
    } 
  },
  plugins: [require("daisyui")],
};
