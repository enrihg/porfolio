/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        'bar1': 'bar1 1s',
        'bar2': 'bar2 1s',
        'bar3': 'bar3 1s'
      },
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
      },
      keyframes: {
        bar1: {
          '0%': { rotate: '0deg'},
          '100%': { rotate: '45deg', transform: 'translate(2px, 8px)'}
        },
        bar2: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0'},
        },
        bar3: {
          '0%': { rotate: '0deg'},
          '100%': {  rotate: '-45deg' , transform: 'translate(2px, -8px)'},
        },
      }
    },
  },
  plugins: [],
}

