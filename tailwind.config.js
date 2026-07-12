/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fira Sans Extra Condensed"', 'sans-serif'],
        body: ['Quicksand', 'sans-serif']
      },
      colors: {
        bg: 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        surface: 'var(--surface)',
        ink: 'var(--text)',
        muted: 'var(--muted)',
        purple: {
          DEFAULT: 'var(--purple)',
          deep: 'var(--purple-deep)',
          ink: 'var(--purple-ink)'
        },
        orange: 'var(--orange)',
        rule: 'var(--rule)'
      }
    }
  },
  plugins: []
}
