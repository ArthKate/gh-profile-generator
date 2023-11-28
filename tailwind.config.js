/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    fontFamily: {
      sans: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      square: ['Nova Square', 'sans-serif'],
      mono: ['IBM Plex Mono', 'monospace'],
    },
  },
  plugins: [],
};
