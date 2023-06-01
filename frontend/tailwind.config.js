/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundClip: {
        text: "text",
      },
      gradientColorStops: (theme) => ({
        "gradient-start": "#FF0080",
        "gradient-end": "#7928CA",
      }),
    },
  },
  plugins: [],
};
