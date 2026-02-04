/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // The Official Noctua Palette (adjusted for UI depth)
        noctua: {
          beige: '#D1C7B7',     // Main background (The fan frame color)
          bone: '#E3DAC9',      // Card backgrounds / Light mode surfaces
          brown: '#594239',     // Primary text (The fan blade color)
          russet: '#7D4B3E',    // Accents / Buttons (The rubber mount color)
          moss: '#6B705C',      // Secondary accent (Fall/Nature vibe)
          dark: '#3E2F28',      // Darker text for headers
        },
      },
      fontFamily: {
        // Ensures a technical but readable look
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        // A subtle vignette to make it feel like a physical object
        'noctua-gradient': 'radial-gradient(circle at center, #E3DAC9 0%, #D1C7B7 100%)',
      }
    },
  },
  plugins: [],
}
