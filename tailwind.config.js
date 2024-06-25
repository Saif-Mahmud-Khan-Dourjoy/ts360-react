/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
      },
      boxShadow:{
        homeButtom:"0px 61px 17px 0px rgba(0, 0, 0, 0.00), 0px 39px 16px 0px rgba(0, 0, 0, 0.01), 0px 22px 13px 0px rgba(0, 0, 0, 0.04), 0px 10px 10px 0px rgba(0, 0, 0, 0.07), 0px 2px 5px 0px rgba(0, 0, 0, 0.08)",
      }
    },
  },
  plugins: [],
}

