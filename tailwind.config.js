/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
  'index.html'],
  theme: {
    extend: {    
      fontFamily: {
      body: ['Roboto', 'Arial', 'sans-serif'],
  }
},
  },
  plugins: [],
}
