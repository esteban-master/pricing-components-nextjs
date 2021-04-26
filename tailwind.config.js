const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      background: "#F7F7FE",
    }),
    extend: {
      colors: {
        principal: {
          DEFAULT: "#4A4D60",
          light: "#6E728E",
        },
        morado: {
          light: "#A2A7F0",
          dark: "#696EDD",
        },
        fuchsia: colors.fuchsia,
        "mensaje-chat": {
          light: "#9341C8",
          dark: "#6E5D7E",
        },
        "boton-enviar": "#3E2753",
      },
      height: {
        172: "43rem",
      },
      width: {
        62: "247px",
        120: "30rem",
      },
      maxWidth: {
        "5.5xl": "1050px",
      },
      fontFamily: {
        principal: ["Montserrat"],
        "principal-chat-app": ["Rubik"],
      },
      fontSize: {
        "base-card": ["15px", "28px"],
        "lg-card": ["18px", "28px"],
        xxs: "0.6rem",
        "4.5xl": "40px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
