/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#060708',
          900: '#0a0b0d',
          850: '#101216',
          800: '#16181f',
          700: '#212530',
          600: '#2d3342',
        },
        crimson: {
          DEFAULT: '#dc2626',
          bright: '#ef4444',
          dark: '#991b1b',
          muted: '#7f1d1d',
          faint: 'rgba(220, 38, 38, 0.12)',
        },
        steel: {
          DEFAULT: '#38bdf8',
          dark: '#0369a1',
          faint: 'rgba(56, 189, 248, 0.10)',
        },
        amber: {
          DEFAULT: '#f59e0b',
          dark: '#b45309',
          faint: 'rgba(245, 158, 11, 0.10)',
        },
      },
      fontFamily: {
        headline: ['"IBM Plex Sans"', '"Manrope"', 'sans-serif'],
        manrope: ['"Manrope"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        inter: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
        sans: ['"IBM Plex Sans"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.035em',
        widestTechnical: '0.22em',
        ultraTechnical: '0.35em',
      },
      boxShadow: {
        'industrial-sm': '0 2px 8px -1px rgba(0, 0, 0, 0.5)',
        'industrial-md': '0 4px 16px -2px rgba(0, 0, 0, 0.6), 0 1px 3px rgba(0, 0, 0, 0.4)',
        'industrial-lg': '0 12px 32px -4px rgba(0, 0, 0, 0.7), 0 4px 12px -2px rgba(0, 0, 0, 0.5)',
        'crimson-subtle': '0 4px 16px -2px rgba(220, 38, 38, 0.3)',
      },
    },
  },
  plugins: [],
}
