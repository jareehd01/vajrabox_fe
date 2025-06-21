/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      fontFamily: {
        heading: ['"Bodoni Moda"', 'serif'],
        body: ['"Lora"', 'serif'], // A softer, more readable serif
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        }
      },
      colors: {
        'text-gold-1': '#c19a42',
        'text-gold-2': '#edb125',
      }
    },
  },
  plugins: [],
}