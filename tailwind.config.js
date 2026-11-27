/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#071318',
        surface: '#0b1d23',
        card: '#0e242b',
        line: '#173840',
        deep: '#040d10',
        fg: { DEFAULT: '#e2f1ef', soft: '#a3c2be', mute: '#729591' },
        accent: { DEFAULT: '#2dd4bf', dim: '#14b8a6', deep: '#0f766e', ink: '#042f2e' },
        amber: '#f2c14e',
        danger: '#fb7185',
      },
      fontFamily: {
        sans: ['MidDot', 'Overpass', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '1240px' },
    },
  },
  plugins: [],
}
