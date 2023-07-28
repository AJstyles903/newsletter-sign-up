/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "roboto-regular": ['Roboto-Regular', 'sans-serif'],
        "roboto-bold": ['Roboto-Bold', 'sans-serif'],
      },
      screens: {
        sm: "375px",
        md: "786px",
        lg: "1440px",
      },
      colors: {
        "tomato": "hsl(4, 100%, 67%)",
        "dark-slate-grey": "hsl(234, 29%, 20%)",
        "charcoal-grey": "hsl(235, 18%, 26%)",
        "grey": "hsl(231, 7%, 60%)",
      },
      animation:{
        "anime": "anime 16s linear infinite",
      }
    },
  },
  plugins: [],
}

