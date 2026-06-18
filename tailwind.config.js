/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: '#ff7eb9',
          light: '#ffe4f5',
          dark: '#381d4a'
        }
      }
    }
  },
  plugins: [],
};
