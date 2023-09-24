/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Jacques' : ['Jacques Francois Shadow', 'Helvetica'],
      'Major' : ['Major Mono Display', 'Helvetica'],
    }
  },
  plugins: [],
}