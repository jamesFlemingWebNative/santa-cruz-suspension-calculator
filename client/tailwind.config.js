/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", "sans-serif"],
      },
      colors: {
        "eerie-black": "#232023",
      },
    },
  },
  plugins: [],
};
