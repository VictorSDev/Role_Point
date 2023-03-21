/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   regular: "Outfit_400Regular",
      //   medium: "Outfit_500Medium",
      //   semibold: "Outfit_600SemiBold",
      //   bold: "Outfit_700Bold",
      //   black: "Outfit_900Black",
      // },
    },
  },
  plugins: [],
}
