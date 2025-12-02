/** @type {import('tailwindcss').Types.Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f3ff',
          100: '#eee9fe',
          200: '#ded6fe',
          300: '#c6b5fd',
          400: '#aa8bfa',
          500: '#8f5df5',
          600: '#7f38ec',
          700: '#7229d8',
          800: '#5f22b5',
          900: '#4f1d95',
          950: '#301065',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}