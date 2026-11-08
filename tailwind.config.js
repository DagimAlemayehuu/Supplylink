/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#000000',
        panel: '#09090b',
        card: '#121217',
        accent: {
          red: '#ef233c',
          redDark: '#d90429',
          glow: 'rgba(239, 35, 60, 0.5)',
        },
        noir: {
          950: '#030304',
          900: '#09090b',
          850: '#111116',
          800: '#18181f',
          700: '#272730',
        },
        entity: {
          glow: '#06b6d4',
          border: '#0891b2',
          bg: '#041d24',
        },
        process: {
          glow: '#ef233c',
          border: '#dc2626',
          bg: '#220709',
        },
        store: {
          glow: '#f59e0b',
          border: '#d97706',
          bg: '#231604',
        },
      },
      fontFamily: {
        manrope: ['"Manrope"', 'sans-serif'],
        inter: ['"Inter"', 'sans-serif'],
        sans: ['"Manrope"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(239, 35, 60, 0.45)',
        'glow-red-lg': '0 0 60px -10px rgba(239, 35, 60, 0.6)',
        'glow-entity': '0 0 30px -5px rgba(6, 182, 212, 0.4)',
        'glow-store': '0 0 30px -5px rgba(245, 158, 11, 0.4)',
        'card-noir': '0 8px 32px 0 rgba(0, 0, 0, 0.6)',
      }
    },
  },
  plugins: [],
}
