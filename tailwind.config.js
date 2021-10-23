module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          orange: 'hsl(26, 100%, 55%)',
          paleorange: 'hsl(25, 100%, 94%)',
        },
        neutral: {
          vdarkgrayblue: 'hsl(220, 13%, 13%)',
          dgrayblue: 'hsl(219, 9%, 45%)',
          grayblue: 'hsl(220, 14%, 75%)',
          lgrayblue: ' hsl(223, 64%, 98%)',
        },
      },
      fontFamily: {
        main: ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
