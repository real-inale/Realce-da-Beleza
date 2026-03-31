/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F8D7DA',
        nude: '#F5E6E8',
        black: '#0b0b0b',
        gold: '#D4AF37',
        'brand-gold': '#D4AF37',
        'brand-black': '#0b0b0b',
      },
      fontFamily: {
        title: ['var(--font-playfair)', 'serif'],
        body: ['var(--font-poppins)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}