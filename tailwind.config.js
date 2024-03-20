/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
  screens: {
    xs: "480px",
    ss: "620px",
    sm: "768px",
    md: "1060px",
    lg: "1200px",
    xl: "1700px",
  },
};
