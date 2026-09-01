/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#000435',
          orange: '#f55d1b',
          white: '#ffffff',
        },
        primary: {
          DEFAULT: '#000435',
          dark: '#000435',
          light: '#000435',
        },
        secondary: {
          DEFAULT: '#f55d1b',
        },
        accent: {
          DEFAULT: '#f55d1b',
        },
        navy: {
          DEFAULT: '#000435',
          950: '#000435',
          900: '#000435',
          850: '#000435',
          800: '#000435',
        },
        copper: {
          DEFAULT: '#f55d1b',
          light: '#f55d1b',
          dark: '#f55d1b',
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
