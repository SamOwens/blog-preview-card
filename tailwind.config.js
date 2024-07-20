/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      colors: {
        yellow: '#F4D04E',
        'grey-950': '#111111',
        'grey-500': '#6B6B6B',
      },
      width: {
        'card-w': '20.438rem',
        'sm-card-w': '24rem',
      },
      height: {
        'card-h': '31.313rem',
        'sm-card-h': '32.625rem',
        'card-image': '12.5rem',
      },
      borderRadius: {
        card: '1.25rem',
        'card-image': '0.625rem',
        pill: '0.25rem',
      },
      dropShadow: {
        card: '8px 8px 0px #000000',
      },
    },
  },
  plugins: [],
};
