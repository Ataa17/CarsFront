/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-heading': ['Montserrat', 'sans-serif', '600'],
        'montserrat-body': ['Montserrat', 'sans-serif', '400'],
      },
    },
  },
  plugins: [],
}