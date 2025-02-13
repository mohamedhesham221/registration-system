/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'bg-color': 'rgb(239, 239, 239, 1)',
        'main-color': 'rgb(0, 0, 0)',
        'placeholder-color': 'rgb(0, 0, 0, 0.50)',
        'error-color': 'rgb(230, 70, 70, 1)',
        'border-color': 'rgb(216, 218, 220, 1)'
      },
      fontFamily: {
        inter: '"Inter", serif',
        poppins: '"Poppins", serif'
      },
      backgroundImage: {}
    },
  },
  plugins: [],
}

