/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  animation: {
    'ping-custom': 'pingcustom 1s 1',
    'bounce-custom': 'bouncecustom 1s infinite',
  },
  keyframes: {
    pingcustom: {
      '0%, 50%': {
        transform: 'scale(100%)',
      },
      '50%, 100%': {
        transform: 'scale(200%)',
        opacity: 0.05,
      },
      '100%': {
        transform: 'scale(200%)',
        opacity: 0,
      },
    },
    bouncecustom: {
      '0%, 100%': {
        transform: 'translateY(-100%)',
        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
      },
      '50%': {
        transform: 'translateY(0)',
        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover', 'focus-within', 'hover', 'focus', 'active'],
    },
  },
}

