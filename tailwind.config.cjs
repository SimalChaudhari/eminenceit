/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#006FB8",
        "sky-blue": "#00BFEC",
        "custome-blue": "#000435",
      },
    },
  },
  plugins: [],
});
