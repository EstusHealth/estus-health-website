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
          beige: '#D1C7B7',     // DARKER: For the main page background
          bone: '#EAE2D6',      // LIGHTER: For the cards (Understanding PDA, etc.)
          brown: '#594239',     // Text color
          russet: '#7D4B3E',    // Button color
        },
      },
      backgroundImage: {
        'noctua-gradient': 'radial-gradient(circle at center, #EAE2D6 0%, #D1C7B7 100%)',
      }
    },
  },
  plugins: [],
}
