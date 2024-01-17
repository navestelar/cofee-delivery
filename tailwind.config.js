/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo 2"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#000000',
      'yellow-700': '#C47F17',
      'yellow-500': '#DBAC2C',
      'yellow-300': '#F1E9C9',
      'purple-800': '#4B2995',
      'purple-500': '#8047F8',
      'purple-300': '#EBE5F9',
      'gray-50': '#FAFAFA',
      'gray-100': '#F3F2F2',
      'gray-200': '#EDEDED',
      'gray-300': '#E6E5E5',
      'gray-400': '#D7D5D5',
      'gray-500': '#8D8686',
      'gray-600': '#574F4D',
      'gray-700': '#403937',
      'gray-900': '#272221',
    },
  },
  plugins: [],
}
