/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },

      colors: {
        gray: {
          50: '#e7e7e8',
          100: '#b6b6b9',
          200: '#929297',
          300: '#616168',
          400: '#42424a',
          500: '#13131d',
          600: '#11111a',
          700: '#0d0d15',
          800: '#0a0a10',
          900: '#08080c',
        },
        blue: {
          50: '#e8f1fb',
          100: '#b9d3f3',
          200: '#97beed',
          300: '#67a0e5',
          400: '#498de0',
          500: '#1c71d8',
          600: '#1967c5',
          700: '#145099',
          800: '#0f3e77',
          900: '#0c2f5b',
        },
        purple: {
          50: '#efe6fd',
          100: '#ceb0fa',
          200: '#b78af7',
          300: '#9654f4',
          400: '#8133f1',
          500: '#6200ee',
          600: '#5900d9',
          700: '#4600a9',
          800: '#360083',
          900: '#290064',
        },
      },
    },
  },
  plugins: [],
}
