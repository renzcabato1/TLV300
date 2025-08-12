/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fontprimary': '#f0f0f0',
        'primary': '#000144'
      },
      screens: {
        'xs': '400px',
      },
    },
  },
  plugins: [],
}