/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./main.tsx",
    "./App.tsx",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./globals.css"
  ],
  theme: {
    extend: {}
  },
  plugins: []
}