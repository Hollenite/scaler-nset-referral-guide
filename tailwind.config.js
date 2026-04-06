/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#060f0d',
        'primary-card': '#0c1d1a',
        'primary-med': '#0f766e',
        'primary-light': '#14b8a6',
        'success': '#22c55e',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      }
    },
  },
  plugins: [],
}
