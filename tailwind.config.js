/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
  theme: {
    colors: {
      black: "#3f402b",
      orange: "#f54800",
      yellow: "#feb516",
      blue: "#3a59dd",
      red: "#ff486d",
      green: "#47b052",
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
    },
  },
};
