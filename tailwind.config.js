/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050816',
        surface: '#0F172A',
        card: 'rgba(255, 255, 255, 0.05)',
        glass: 'rgba(255, 255, 255, 0.08)',
        primary: {
          DEFAULT: '#4F8CFF',
          hover: '#3b78f0',
          glow: 'rgba(79, 140, 255, 0.35)',
        },
        secondary: {
          DEFAULT: '#7C3AED',
          hover: '#6d28d9',
          glow: 'rgba(124, 58, 237, 0.35)',
        },
        accent: {
          DEFAULT: '#22D3EE',
          glow: 'rgba(34, 211, 238, 0.35)',
        },
        highlight: '#F59E0B',
        success: '#10B981',
        heading: '#FFFFFF',
        body: '#CBD5E1',
        muted: '#64748B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'aurora': 'aurora 20s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-x': 'gradient-x 15s ease infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      keyframes: {
        aurora: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'border-glow': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.9 },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(79, 140, 255, 0.15)',
        'glow-md': '0 0 30px rgba(79, 140, 255, 0.25)',
        'glow-lg': '0 0 50px rgba(79, 140, 255, 0.35)',
        'glow-purple': '0 0 30px rgba(124, 58, 237, 0.3)',
        'glow-cyan': '0 0 30px rgba(34, 211, 238, 0.3)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
