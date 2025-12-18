/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
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
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 15s infinite',
        'subtle-drift': 'drift 20s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        drift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-2%, -2%)' },
        }
      }
    },
  },
  plugins: [],
}