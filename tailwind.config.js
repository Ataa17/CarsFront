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
  },plugins: [
    require('daisyui'),
  ],
  darkMode: false, 
  daisyui: {
    themes: [
      {
        light: {
          primary: "#161A1D", 
          secondary: "#660708",
          accent: "#BA181B",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ], 
  },
}