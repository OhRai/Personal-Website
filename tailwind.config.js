/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        SansBold: ['SansBold', 'sans-serif'],
        SansRegular: ['SansRegular', 'sans-serif'],
        SansLight: ['SansLight', 'sans-serif'],
        SansMedium: ['SansMedium', 'sans-serif'],
        SansThin: ['SansThin', 'sans-serif'],
        SansExtraLight: ['SansExtraLight', 'sans-serif'],
        SansSemiBold: ['SansSemiBold', 'sans-serif'],
        SansBlack: ['SansBlack', 'sans-serif'],
        SansExtraBold: ['SansExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}