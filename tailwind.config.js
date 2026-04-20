/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#1a1a1a",
          secondary: "#262626",
          border: "#333333",
          text: "#eff1f6f2",
        },
        leetcode: {
          easy: "#00af9b",
          medium: "#ffb800",
          hard: "#ff2d55",
        }
      }
    },
  },
  plugins: [],
}
