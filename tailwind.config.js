module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/html.index,html',
  ],
  theme: {
    extend: {
      color: {
        boxShadow: {
        '3xl': '0 4px 6px 0 rgba(0, 0, 0, 0.47)',
      },
        'maingray': '#E4E4E4',
      },
      fontFamily: {
        'mont': ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
