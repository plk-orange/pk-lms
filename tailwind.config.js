/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      pkgray: {
        xs: '#B9C1CB',
        sm: '#576475',
        md: '#2C333C',
        lg: '#1A1E23',
        xl: '#111417',
        xxl: '#29303D'
      },
      pkorange: {
        md: '#F4845F'
      }
    },
    listStyleType: {
      plus: '+'
      
    },
    extend: {},
  },
  plugins: [],
};
