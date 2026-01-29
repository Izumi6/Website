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
        // Cinematic Palette
        darkBg: '#050505',      // Deepest Black
        charcoal: '#0F0F10',    // Soft Black/Charcoal for cards
        primary: '#D4AF37',     // Metallic Gold
        secondary: '#E5E5E5',   // Off-white/Silver
        accent: '#C5A028',      // Darker Gold for accents
        warmAccent: '#F5F5DC',  // Beige/Cream for soft highlights
        
        // Semantic assignments
        glassWhite: 'rgba(255,255,255,0.05)',
        glassGold: 'rgba(212, 175, 55, 0.1)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'], // Optional for headings if added
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.15), 0 0 40px rgba(212, 175, 55, 0.05)',
        'glow-soft': '0 10px 40px -10px rgba(0,0,0,0.5)',
        'cinematic': '0 20px 40px -20px rgba(0,0,0,0.7)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

