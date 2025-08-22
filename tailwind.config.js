/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // important: tells Tailwind to scan your files
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as default sans
      },
    },  // you can customize colors etc here
  },
  plugins: [],
};
