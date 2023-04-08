/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary-color': '#7695EC',
      white: '#ffffff',
      gray: {
        light: '#DDDDDD',
        dark: '#50514F',
      },
      tahiti: {
        100: '#cffafe',
        200: '#a5f3fc',
        300: '#67e8f9',
        400: '#22d3ee',
        500: '#06b6d4',
        600: '#0891b2',
        700: '#0e7490',
        800: '#155e75',
        900: '#164e63',
      },
      'federal-blue': '#1B1B1B',
    },
    extend: {},
  },
  plugins: [],
}