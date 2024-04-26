/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        royalblue: {
          DEFAULT: '#4169e1',
        },
      },
    },
  },
  plugins: [],
};
