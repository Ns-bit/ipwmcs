/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        tlight: 'rgb(var(--light) / <alpha-value>)',
        tblue: 'rgb(var(--blue) / <alpha-value>)',
        tlightblue: 'rgb(var(--light-blue) / <alpha-value>)',
        tgrey: 'rgb(var(--grey) / <alpha-value>)',
        tdarkgrey: 'rgb(var(--dark-grey) / <alpha-value>)',
        tdark: 'rgb(var(--dark) / <alpha-value>)',
        tred: 'rgb(var(--red) / <alpha-value>)',
        tyellow: 'rgb(var(--yellow) / <alpha-value>)',
        tlightyellow: 'rgb(var(--light-yellow) / <alpha-value>)',
        torange: 'rgb(var(--orange) / <alpha-value>)',
        tlightrange: 'rgb(var(--light-orange) / <alpha-value>)',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
};
