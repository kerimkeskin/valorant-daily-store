/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        bold: ['FFMarkW05-Bold', 'sans-serif'],
        medium: ['FFMarkW05-Medium', 'sans-serif'],
        heavy: ['FFMarkW05-heavy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
