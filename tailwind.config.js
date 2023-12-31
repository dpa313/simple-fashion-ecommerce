/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'primary-text' : '#2D2D2D',
        'primary-bg' : '#FFC7D1',
        'primary-dark' : '#F49EAD'
      }
    },
  },
  plugins: [],
}

