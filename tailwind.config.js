/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
        serif: ['ClashGrotesk'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
