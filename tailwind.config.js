


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jost', 'sans-serif'], 
      },
    },
  },
  darkMode: 'class', // Enable dark mode variant
  variants: {
    extend: {},
  },
  plugins: [],
};

