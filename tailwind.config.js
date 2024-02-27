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

      'md': '905px',
      // => @media (min-width: 905px) { ... }

      'lg': '1240px',
      // => @media (min-width: 1240px) { ... }
    } 
  },
  plugins: [require("daisyui")],
};
