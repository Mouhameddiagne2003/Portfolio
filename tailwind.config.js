/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          firstColor: "#006DA4",
          titleColor: "hsl(0, 0%, 40%)",
          textColor: "hsl(0, 0%, 50%)",
          bodyColor: "hsl(0, 0%, 100%)",
          containerColor: "hsl(0, 0%, 93%)",
          borderColor: "hsl(0, 0%, 87%)",
          textWhite: "#fff"
      },
      fonts : {
          weight400: "400",
          weight500: "500",
          weight600: "600",
          weight700: "700",
          weight800: "800"
      },
        boxShadow: {
            shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        },
    },
  },
  plugins: [],
}

