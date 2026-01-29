/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors
        primary: '#00C8FF', // Neon Cyan
        secondary: '#7C3AED', // Deep Purple
        accent: '#4CC9F0', // Soft Ice Blue
        warmAccent: '#FFB86B', // Minimal use
        darkBg: '#05060D',
        glassWhite: 'rgba(255,255,255,0.08)',
        // Legacy support
        coolBlue: '#00C8FF',
        deepPurple: '#7C3AED',
        cyanGlow: '#4CC9F0',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 6px 30px rgba(0,200,255,0.12), 0 8px 60px rgba(124,58,237,0.06)',
        'glow-lg': '0 8px 40px rgba(0,200,255,0.2), 0 12px 80px rgba(124,58,237,0.1)',
        'neon': '0 0 20px rgba(0,200,255,0.5), 0 0 40px rgba(124,58,237,0.3)',
        'neon-cyan': '0 0 30px rgba(0,200,255,0.6), 0 0 60px rgba(0,200,255,0.3)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

