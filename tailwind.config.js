/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fc',
          400: '#36abf8',
          500: '#0c8ee9',
          600: '#0070c7',
          700: '#0259a2',
          800: '#064c86',
          900: '#0b3f6f',
          950: '#072849',
        },
        accent: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow 4s infinite ease-in-out',
        'float': 'float 6s infinite ease-in-out',
        'pulse-subtle': 'pulseSubtle 2.5s infinite ease-in-out',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { opacity: '0.3', filter: 'blur(30px)' },
          '50%': { opacity: '0.7', filter: 'blur(45px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}

