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
      },
      spacing: {
        card: "350px",
      },
      fontFamily: {
        principal: ["Montserrat"],
      },
      fontSize: {
        "base-card": ["15px", "28px"],
        "lg-card": ["18px", "28px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
