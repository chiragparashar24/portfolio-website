import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1320px',
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D4FF',
          50: '#E5FBFF',
          100: '#B8F2FF',
          200: '#7DE6FF',
          300: '#3DD9FF',
          400: '#00D4FF',
          500: '#00B5DB',
          600: '#0091AF',
          700: '#006B82',
          800: '#004555',
          900: '#002B36',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          50: '#F3EBFE',
          100: '#E1CFFD',
          200: '#C4A0FB',
          300: '#A570F8',
          400: '#8E54F2',
          500: '#7C3AED',
          600: '#6320D6',
          700: '#4C19A6',
          800: '#341172',
          900: '#1F0A47',
        },
        accent: {
          DEFAULT: '#00FFB3',
          50: '#E5FFF7',
          100: '#B8FFE6',
          200: '#7DFFD0',
          300: '#3DFFBF',
          400: '#00FFB3',
          500: '#00D695',
          600: '#00A876',
          700: '#007A57',
          800: '#004D38',
          900: '#002419',
        },
        background: '#0B1120',
        surface: '#111827',
        'surface-2': '#1A2236',
        'surface-3': '#212B45',
        'border-soft': 'rgba(148, 163, 184, 0.12)',
        'border-strong': 'rgba(148, 163, 184, 0.24)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00D4FF 0%, #7C3AED 100%)',
        'gradient-accent': 'linear-gradient(135deg, #00FFB3 0%, #00D4FF 100%)',
        'gradient-mesh':
          'radial-gradient(at 20% 20%, rgba(0,212,255,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(124,58,237,0.18) 0px, transparent 50%), radial-gradient(at 80% 80%, rgba(0,255,179,0.10) 0px, transparent 50%)',
        'glass-shine':
          'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(0, 212, 255, 0.25)',
        'glow-lg': '0 0 80px rgba(0, 212, 255, 0.35)',
        'glow-purple': '0 0 40px rgba(124, 58, 237, 0.30)',
        'glow-accent': '0 0 40px rgba(0, 255, 179, 0.25)',
        glass:
          '0 8px 32px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        gradient: 'gradient 8s ease infinite',
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 30s linear infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(0, 212, 255, 0.3)' },
          '50%': { borderColor: 'rgba(124, 58, 237, 0.5)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '70ch',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
