// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-petroleo': '#183153',
        'ciano-eletrico': '#00fff7',
        'verde-lima': '#a8ff04',
        'magenta': '#ff00c8',
      },
      fontFamily: {
        'sans': ['Inter', 'Montserrat', 'Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
