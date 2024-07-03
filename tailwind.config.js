/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '50': '#f2f8fd',
        '100': '#e5eff9',
        '200': '#c5e0f2',
        '250': '#c7c7c7',
        '300': '#9fccea',
        '400': '#58a7d8',
        '500': '#328cc5',
        '600': '#2270a7',
        '700': '#1d5987',
        '800': '#1c4d70',
        '900': '#1c415e',
        '950': '#132a3e',
        '1000':'#0B1925',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

