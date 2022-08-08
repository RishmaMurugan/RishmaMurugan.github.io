/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'ivory': '#f4eae6',
      'blue': '#236687',
      'coral': '#e57f84',
      'dark-blue': '#2f5061',
    },
    fontFamily: {
      'sans': '"Josefin Sans"'
    },
  },
  plugins: [],
}
