/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        lg: "1080px",
        md: "768px",
      },
      fontFamily: {
        gloria: ["gloriahallelujah-regular"],
      },
    },
  },
  plugins: [],
};
