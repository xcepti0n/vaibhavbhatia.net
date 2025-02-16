/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4A90E2',
        secondary: '#50E3C2',
        accent: '#D0021B',
        background: '#F5F5F5',
        text: '#333333',
      },
    },
  },
  plugins: [],
};
