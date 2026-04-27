import type { Config } from 'tailwindcss';

/**
 * Tailwind config for the "Cosmic Minimalism" design system.
 * Colors reference CSS variables in src/styles/globals.css so semantic tokens
 * (surface, accent-gold, ...) stay consistent across themes.
 */
const withVar = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: withVar('--cosmic-950'),
          900: withVar('--cosmic-900'),
          800: withVar('--cosmic-800'),
          700: withVar('--cosmic-700'),
        },
        starlight: {
          DEFAULT: withVar('--starlight'),
          muted: withVar('--starlight-muted'),
        },
        accent: {
          gold: withVar('--accent-gold'),
          'gold-soft': withVar('--accent-gold-soft'),
          violet: withVar('--accent-violet'),
          'violet-soft': withVar('--accent-violet-soft'),
          rose: withVar('--accent-rose'),
        },
        surface: {
          DEFAULT: withVar('--surface'),
          elevated: withVar('--surface-elevated'),
        },
        danger: withVar('--danger'),
        success: withVar('--success'),
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        serif: ['"Playfair Display"', 'ui-serif', 'Georgia', 'serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        glow: '0 0 0 1px rgb(var(--accent-violet) / 0.25), 0 10px 40px -10px rgb(var(--accent-violet) / 0.35)',
        'glow-gold':
          '0 0 0 1px rgb(var(--accent-gold) / 0.25), 0 10px 40px -10px rgb(var(--accent-gold) / 0.35)',
      },
      backgroundImage: {
        'cosmic-radial':
          'radial-gradient(circle at 20% 0%, rgb(var(--accent-violet) / 0.18), transparent 50%), radial-gradient(circle at 90% 10%, rgb(var(--accent-gold) / 0.10), transparent 55%)',
        'gold-violet':
          'linear-gradient(135deg, rgb(var(--accent-gold-soft)) 0%, rgb(var(--accent-gold)) 45%, rgb(var(--accent-violet)) 100%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 400ms ease-out both',
        shimmer: 'shimmer 2.4s linear infinite',
        twinkle: 'twinkle 3.2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
