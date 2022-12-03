/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      width: {
        '1/9': '11.11111111111111%',
      },
      height: {
        '1/9': '11.11111111111111%',
      }
  },
  },
  plugins: [],
}
