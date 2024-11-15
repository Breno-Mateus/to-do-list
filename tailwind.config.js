/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorPrimary: '#515151',
        colorSecondary: '#000',
        textColor: '#fff',
        LimeGreen: '#32CD32'
      }
    },
  },
  plugins: [],
}

