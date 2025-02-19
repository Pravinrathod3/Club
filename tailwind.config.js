/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#121212',
        primary: '#00D4FF',
        secondary: '#FF7A00',
        text: '#EAEAEA'
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      },
      animation: {
        'matrix': 'matrix 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite'
      },
      keyframes: {
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00D4FF, 0 0 20px #00D4FF, 0 0 40px #00D4FF' },
          '50%': { boxShadow: '0 0 10px #00D4FF, 0 0 30px #00D4FF, 0 0 60px #00D4FF' }
        }
      }
    }
  },
  plugins: []
};