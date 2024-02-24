/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // Like this, we overwrite everything
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },

    // If we want to keep everything from Tailwind but add to it
    extend: {
      fontSize: {
        huge: '80rem',
      },
      height: {
        screen: '100dvh', //Stands for dynamic view height, it solves an issue on small screens
      },
    },
  },
  plugins: [],
};
