/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#050505',
        panel: '#0a0a0a',
        card: '#0d0d0d',
        neon: {
          lime: '#BFFF00',
          glow: 'rgba(191, 255, 0, 0.3)',
          dim: 'rgba(191, 255, 0, 0.15)',
          deep: '#111a03',
        },
        noir: {
          950: '#050505',
          900: '#0a0a0a',
          850: '#111111',
          800: '#181818',
          700: '#262626',
        },
        entity: {
          glow: '#BFFF00',
          border: 'rgba(191, 255, 0, 0.5)',
          bg: '#080d02',
        },
        process: {
          glow: '#BFFF00',
          border: '#BFFF00',
          bg: '#0c1403',
        },
        store: {
          glow: '#f59e0b',
          border: '#fbbf24',
          bg: '#141003',
        },
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
        body: ['"Inter"', 'sans-serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        widestTechnical: '0.25em',
        ultraTechnical: '0.4em',
      },
      boxShadow: {
        'neon-lime': '0 0 20px rgba(191, 255, 0, 0.3)',
        'neon-lime-lg': '0 0 45px rgba(191, 255, 0, 0.25)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.8)',
      },
      transitionTimingFunction: {
        velocity: 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
