/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors
        primary: "#252525",
        secondary: "#1A120B",
        customBlue: "rgb(0, 0, 255)",
        customYellow: "hsl(60, 100%, 50%)",
      },
    },
  },
  plugins: [],
}