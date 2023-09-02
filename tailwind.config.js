/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{jsx,js,html}"],
  theme: {
    extend: {
      colors: {
        "primary": "#bde9fb",
        "secondary": "#98bcea",
        "tertiary": "#281a39",
        "quaternary": "#2061b7",
        "portfolio": "#150050",
      },
    },
    screens: {
      'sm': {'min': '320px', 'max': '480px'},
      // phones

      'md': {'min': '481px', 'max': '768px'},
      // tables

      'lg': {'min': '769px', 'max': ' 1024px'},
      // laptops

      'xl': {'min': '1025px', 'max': '1200px'},
      // desktops
    },
  },
  plugins: [],
}

