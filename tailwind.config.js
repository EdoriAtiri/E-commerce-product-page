module.exports = {
  purge: ['public/index.html', 'public/script.js'],
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
      width: {
        cart: '1.125rem',
      },
      inset: {
        itemNo: '-0.3125rem',
        22: '5.5rem',
        70: '70%',
        75: '75%',
        80: '80%',
        90: '90%',
        120: '120%',
      },
      fontSize: {
        xxs: '0.65rem',
      },
      borderRadius: {
        50: '50%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
