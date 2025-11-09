/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'catsImg': "url(/cats.jpg)",
      },
    },
  },
  plugins: [],
}

