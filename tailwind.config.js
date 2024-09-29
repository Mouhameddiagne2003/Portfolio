/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          firstColor: 'var(--fist-color)',
          titleColor: "var(--title-color)",
          textColor: "var(--text-color)",
          bodyColor: "var(--body-color)",
          containerColor: "var(--container-color)",
          borderColor: "var(--border-color)",
          textWhite: "var(--text-white)"
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

