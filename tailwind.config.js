/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        cardBg: '#111827',
        primaryBlue: '#3B82F6',
        secondaryBlue: '#60A5FA',
      },
      boxShadow: {
        'electric-glow': '0 0 25px -5px rgba(59, 130, 246, 0.5)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-cyan': 'linear-gradient(to right, #3B82F6, #06B6D4)',
      }
    },
  },
  plugins: [],
}