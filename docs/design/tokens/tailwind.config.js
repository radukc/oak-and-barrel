/**
 * Oak & Barrel - Tailwind CSS Configuration
 * ==========================================
 * Custom Tailwind configuration implementing the design system tokens.
 * Copy this to your project's tailwind.config.js and adjust paths as needed.
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      /* ========================================
         COLORS
         ======================================== */
      colors: {
        // Primary - Oak Amber
        primary: {
          50: '#FFF8E7',
          100: '#FFEFC2',
          200: '#FFE299',
          300: '#FFD166',
          400: '#FFBF33',
          500: '#F5A623',
          600: '#E08E00',
          700: '#B87200',
          800: '#8F5800',
          900: '#663F00',
          950: '#3D2600',
          DEFAULT: '#F5A623',
        },

        // Background - Cream
        cream: {
          DEFAULT: '#FFFBF5',
          warm: '#FFF5E6',
          deep: '#F5EBD9',
          subtle: '#EDE4D3',
        },

        // Text - Warm Neutrals
        charcoal: '#2D2A26',
        slate: '#4A4543',
        stone: '#7A746E',
        pebble: '#B5AFA8',

        // Accent - Food-Inspired
        accent: {
          paprika: '#C94C4C',
          basil: '#6B8E23',
          truffle: '#4A3728',
          saffron: '#F4C430',
          olive: '#808000',
        },

        // Semantic
        success: {
          50: '#E8F5E9',
          100: '#C8E6C9',
          500: '#4CAF50',
          600: '#43A047',
          700: '#388E3C',
          DEFAULT: '#4CAF50',
        },
        warning: {
          50: '#FFF3E0',
          100: '#FFE0B2',
          500: '#FF9800',
          600: '#FB8C00',
          700: '#F57C00',
          DEFAULT: '#FF9800',
        },
        error: {
          50: '#FFEBEE',
          100: '#FFCDD2',
          500: '#E53935',
          600: '#E53935',
          700: '#D32F2F',
          DEFAULT: '#E53935',
        },
        info: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          500: '#2196F3',
          600: '#1E88E5',
          700: '#1976D2',
          DEFAULT: '#2196F3',
        },

        // Border
        border: {
          light: '#F0EBE3',
          DEFAULT: '#E5DFD5',
          strong: '#D4CCC0',
          emphasis: '#B5AFA8',
        },
      },

      /* ========================================
         TYPOGRAPHY
         ======================================== */
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'Times New Roman', 'serif'],
        body: ['DM Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
        accent: ['Josefin Sans', 'Futura', 'Trebuchet MS', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },

      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-lg': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        caption: ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
        micro: ['0.625rem', { lineHeight: '1.3', fontWeight: '500' }],
      },

      /* ========================================
         SPACING & LAYOUT
         ======================================== */
      spacing: {
        '4.5': '1.125rem',  // 18px
        '5.5': '1.375rem',  // 22px
        '13': '3.25rem',    // 52px
        '15': '3.75rem',    // 60px
        '18': '4.5rem',     // 72px
        '22': '5.5rem',     // 88px
      },

      maxWidth: {
        'container-sm': '40rem',    // 640px
        'container-md': '48rem',    // 768px
        'container-lg': '64rem',    // 1024px
        'container-xl': '80rem',    // 1280px
        'container-2xl': '90rem',   // 1440px
      },

      /* ========================================
         BORDER RADIUS
         ======================================== */
      borderRadius: {
        'sm': '0.25rem',   // 4px
        'md': '0.5rem',    // 8px
        'lg': '0.75rem',   // 12px
        'xl': '1rem',      // 16px
        '2xl': '1.5rem',   // 24px
        '3xl': '2rem',     // 32px
      },

      /* ========================================
         SHADOWS
         ======================================== */
      boxShadow: {
        'xs': '0 1px 2px rgba(45, 42, 38, 0.04)',
        'sm': '0 2px 4px rgba(45, 42, 38, 0.06)',
        'md': '0 4px 8px rgba(45, 42, 38, 0.08), 0 2px 4px rgba(45, 42, 38, 0.04)',
        'lg': '0 8px 24px rgba(45, 42, 38, 0.12), 0 4px 8px rgba(45, 42, 38, 0.06)',
        'xl': '0 16px 48px rgba(45, 42, 38, 0.16), 0 8px 16px rgba(45, 42, 38, 0.08)',
        '2xl': '0 24px 64px rgba(45, 42, 38, 0.20)',
        'inner': 'inset 0 2px 4px rgba(45, 42, 38, 0.06)',
        'amber': '0 8px 24px rgba(245, 166, 35, 0.20)',
        'amber-lg': '0 16px 48px rgba(245, 166, 35, 0.25)',
        'card': '0 4px 12px rgba(45, 42, 38, 0.08)',
        'card-hover': '0 8px 24px rgba(45, 42, 38, 0.12)',
      },

      /* ========================================
         ANIMATIONS
         ======================================== */
      transitionDuration: {
        'instant': '50ms',
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'slower': '600ms',
      },

      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },

      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },

      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'fade-in-down': 'fade-in-down 0.4s ease-out',
        'scale-in': 'scale-in 0.25s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'slide-in-left': 'slide-in-left 0.3s ease-out',
        'bounce-in': 'bounce-in 0.6s ease-out',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },

      /* ========================================
         Z-INDEX
         ======================================== */
      zIndex: {
        'behind': '-1',
        'dropdown': '100',
        'sticky': '200',
        'overlay': '300',
        'modal': '400',
        'popover': '500',
        'toast': '600',
        'tooltip': '700',
      },

      /* ========================================
         ASPECT RATIOS
         ======================================== */
      aspectRatio: {
        'food-card': '4 / 3',
        'hero': '16 / 7',
        'chef': '3 / 4',
      },
    },
  },

  plugins: [
    // Add custom plugin for food-specific utilities
    function({ addUtilities, addComponents, theme }) {
      // Food image treatment
      addUtilities({
        '.food-image': {
          'border-radius': theme('borderRadius.lg'),
          'object-fit': 'cover',
          'filter': 'saturate(1.05) contrast(1.02)',
          'transition': 'filter 0.3s ease',
        },
        '.food-image-hover': {
          'filter': 'saturate(1.1) contrast(1.05) brightness(1.02)',
        },
      });

      // Text gradients
      addUtilities({
        '.text-gradient-amber': {
          'background': 'linear-gradient(135deg, #F5A623 0%, #FFD166 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      });

      // Glass effect
      addUtilities({
        '.glass': {
          'background': 'rgba(255, 251, 245, 0.8)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-dark': {
          'background': 'rgba(45, 42, 38, 0.8)',
          'backdrop-filter': 'blur(12px)',
          '-webkit-backdrop-filter': 'blur(12px)',
          'border': '1px solid rgba(255, 255, 255, 0.1)',
        },
      });

      // Warm overlay gradient
      addUtilities({
        '.overlay-warm': {
          'background': 'linear-gradient(180deg, transparent 0%, rgba(45, 42, 38, 0.6) 100%)',
        },
      });
    },
  ],
};
