/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        victinet: {
          forest: '#0B3B2E',
          green: '#16A34A',
          mint: '#E8F5EE',
          canvas: '#F4F7F6',
        },
      },
    },
  },
  plugins: [],
}