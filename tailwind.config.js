/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}', './src/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        serif: ['ClashGrotesk'],
      },
    },
  },
  plugins: [],
};
