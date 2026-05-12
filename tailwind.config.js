/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: '#00FF00',
        dark: '#080808',
        surface: '#121212',
        muted: '#888888',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Unbounded', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
