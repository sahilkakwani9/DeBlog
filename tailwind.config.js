/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'One': ['"Russo One"', 'cursive'],
          'Two': ['Inter'],
          'Three': ['Padauk']
        },
    }
  },
  plugins: [],
}
