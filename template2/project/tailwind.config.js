/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'forest': {
          50: '#f3f9f3',
          100: '#e7f3e7',
          200: '#c3e0c3',
          300: '#9fcd9f',
          400: '#57a657',
          500: '#0f7f0f',
          600: '#0e720e',
          700: '#0b5f0b',
          800: '#094c09',
          900: '#073e07'
        }
      },
      fontFamily: {
        'old-standard': ['Old Standard TT', 'serif'],
        'open-sans': ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
};