/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:    '#0D0D1A',
        secondary:  '#2DD4BF',
        accent:     '#818CF8',
        background: '#0D0D1A',
        text:       '#E2E8F0',
        muted:      '#94A3B8',
        surface:    'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'glow-teal':   'radial-gradient(ellipse 60% 50% at 20% 30%, rgba(45,212,191,0.18) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(ellipse 55% 45% at 80% 70%, rgba(129,140,248,0.2) 0%, transparent 70%)',
        'glow-mid':    'radial-gradient(ellipse 40% 35% at 55% 50%, rgba(99,102,241,0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        glass:      '0 8px 32px rgba(0,0,0,0.4)',
        'glow-teal':   '0 0 30px rgba(45,212,191,0.25)',
        'glow-accent': '0 0 30px rgba(129,140,248,0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease both',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
