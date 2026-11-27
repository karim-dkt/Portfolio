/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#fbfbf2',
        land: '#f3f1e2',
        sea: { DEFAULT: '#bfe3ee', deep: '#8fcadb', soft: '#e3f2f6' },
        ink: { DEFAULT: '#13242e', soft: '#3d5461', mute: '#5d707a' },
        contour: '#a8551b',
        route: { DEFAULT: '#d6127e', dark: '#b00e68', soft: '#fbe3ef' },
        night: { DEFAULT: '#0d1c24', soft: '#16303d' },
        line: '#e3e1cf',
      },
      fontFamily: {
        sans: ['MidDot', 'Overpass', 'system-ui', 'sans-serif'],
        mono: ['"Overpass Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { page: '1240px' },
    },
  },
  plugins: [],
}
