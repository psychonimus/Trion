/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060c1a',
          900: '#040813',
          850: '#080f20',
          800: '#0a1226',
        },
        copper: {
          DEFAULT: '#b07d3a',
          light: '#c89552',
          dark: '#92642a',
        },
      },
      fontFamily: {
        primary: ['"Manrope"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        secondary: ['"Inter"', '"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
