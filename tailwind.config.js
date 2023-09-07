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

      'md': {'min': '481px', 'max': '1023px'},
      // tablets

      'lg': {'min': '1024px'},
      // laptop

      'xl': {'min': '1280px'},
      // desktop

      '2xl': {'min': '1820px'},
      
    },
  },
  plugins: [],
}

