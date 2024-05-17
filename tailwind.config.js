/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Oxygen: ["Oxygen", "sans-serif"],
        Figtree: ["Figtree", "sans-serif"],
        // Add more custom font families as needed
      },
    }
  },
  plugins: [],
}