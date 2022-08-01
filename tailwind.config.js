/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}"
    ],
    safelist: [
      {
        pattern: /^(from-|to-|bg-)/
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
