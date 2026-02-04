/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        noctua: {
          beige: '#D1C7B7',     // Darker Background (Wall)
          bone: '#EAE2D6',      // Lighter Card (Paper)
          brown: '#594239',     // Text
          russet: '#7D4B3E',    // Button Accent
        },
      },
      backgroundImage: {
        'noctua-gradient': 'radial-gradient(circle at center, #EAE2D6 0%, #D1C7B7 100%)',
      }
    },
  },
  plugins: [],
}
