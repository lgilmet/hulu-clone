/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
  ],
};
