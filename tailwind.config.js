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
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-25%)' },
        }
      },
      colors: {
        primary: {
          50: '#f0fdf4',   // Lightest (for backgrounds)
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',   // Vibrant accent
          500: '#22c55e',   // Base Emerald
          600: '#16a34a',   // Hover states
          700: '#15803d',   // Primary buttons
          800: '#166534',   // Headers
          900: '#14532d',   // Darkest (footers/rich contrast)
        },
        // Supporting Luxury Colors
        gold: {
          500: '#d4af37',   // Classic gold (accent)
          600: '#b7950b',   // Darker gold (hover)
        },
        neutral: {
          cream: '#f5f5dc', // Soft background
          charcoal: '#1a1a1a', // Text
        },
        'text-gold-1': '#c19a42', // A muted gold
        'text-gold-2': '#edb125', // A bright gold/yellow
        'text-emerald-1': '#064e3b', // Dark grey, almost black (emerald 900)
      }
    },
  },
  plugins: [],
}