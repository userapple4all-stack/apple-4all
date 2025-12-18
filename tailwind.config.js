/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        porcelain: '#F6F6F6',
        glass: {
          100: 'rgba(255, 255, 255, 0.4)',
          200: 'rgba(255, 255, 255, 0.6)',
          border: 'rgba(255, 255, 255, 0.8)',
        }
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'blob': 'blob 20s infinite ease-in-out',
        'subtle-drift': 'drift 30s ease-in-out infinite alternate',
        'shimmer': 'shimmer 12s linear infinite',
        'slow-spin': 'spin 60s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(0.5deg)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '33%': { transform: 'translate(50px, -70px) scale(1.15)', borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.9)', borderRadius: '60% 40% 40% 60% / 40% 50% 60% 50%' },
          '100%': { transform: 'translate(0px, 0px) scale(1)', borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0) scale(1) rotate(0deg)' },
          '100%': { transform: 'translate(-3%, -2%) scale(1.05) rotate(1deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-150%) skewX(-20deg)' },
          '30%, 100%': { transform: 'translateX(250%) skewX(-20deg)' },
        }
      }
    },
  },
  plugins: [],
}