/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        custom: "#232c3917", // Define your custom border color
      },
    },

    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "768px",
        xl: "768px",
      },
    },
  },
  plugins: [],
};
