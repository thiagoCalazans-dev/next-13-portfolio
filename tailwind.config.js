/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          100: "#ffffff",
          200: "#f5fdfe",
          400: "#656d72",
          600: "#232e35",
          700: "#273237",
          800: "#0a0e13",
          900: "#090d0f",
        },
        brand: {
          primary: "#14b8a6",
          secondary: "#f43f5e",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
