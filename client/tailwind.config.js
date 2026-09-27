/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // Respect OS preference
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#16a34a',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        accent: {
          50:  '#fff7ed',
          100: '#ffedd5',
          500: '#ea580c',
          600: '#c2410c',
          700: '#9a3412',
        },
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
        ],
      },
      minHeight: {
        touch: '44px',
        screen: '100dvh',
      },
      minWidth: {
        touch: '44px',
      },
      animation: {
        'fade-in':  'fadeIn 200ms ease',
        'slide-up': 'slideUp 220ms ease',
        'scale-in': 'scaleIn 150ms ease',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' },                        to: { opacity: '1' } },
        slideUp: { from: { transform: 'translateY(8px)', opacity: '0' }, to: { transform: 'translateY(0)', opacity: '1' } },
        scaleIn: { from: { transform: 'scale(0.95)', opacity: '0' }, to: { transform: 'scale(1)', opacity: '1' } },
      },
      boxShadow: {
        'card':     '0 1px 4px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.06)',
        'card-lg':  '0 4px 24px rgba(0,0,0,0.10)',
        'floating': '0 8px 32px rgba(0,0,0,0.14)',
      },
    },
  },
  plugins: [],
};
