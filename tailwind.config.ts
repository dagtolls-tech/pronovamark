import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0A0A0A',
          coral: '#E8665A',
          'coral-dark': '#C94D42',
          'coral-light': '#F5A49D',
          cream: '#FAF7F2',
          'cream-dark': '#F0EBE3',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F4F1EC',
          200: '#E8E3DA',
          300: '#D0C9BC',
          400: '#ADA79C',
          500: '#7C766E',
          600: '#58524A',
          700: '#3A3630',
          800: '#201D18',
          900: '#0A0A0A',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        container: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'count-up': 'countUp 2s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(10,10,10,0.06)',
        'card-hover': '0 8px 32px 0 rgba(10,10,10,0.12)',
        coral: '0 8px 32px 0 rgba(232,102,90,0.25)',
      },
    },
  },
  plugins: [],
}

export default config
