/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // --- THE NEW THEME ---
        border: "#C2B5A8",       // Dark Sand (High contrast borders)
        input: "#C2B5A8",
        ring: "#E85D04",
        background: "#EFEDE6",   // Warm Oatmeal (Darker than white, makes cards pop)
        foreground: "#1A1A1A",   // Soft Black (High contrast text)
        
        primary: {
          DEFAULT: "#E85D04",    // Estus Orange
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#EBE9E4",    // Light Grey/Beige for subtle backgrounds
          foreground: "#1A1A1A",
        },
        destructive: {
          DEFAULT: "#EF4444",
          foreground: "#FAFAFA",
        },
        muted: {
          DEFAULT: "#D1CEC7",
          foreground: "#5C5C5C",
        },
        accent: {
          DEFAULT: "#FFFFFF",
          foreground: "#1A1A1A",
        },
        card: {
          DEFAULT: "#FFFFFF",    // Pure White
          foreground: "#1A1A1A",
        },

        // --- BACKWARDS COMPATIBILITY ---
        // This maps your existing code (noctua-bone, noctua-russet) 
        // to the new theme colors automatically.
        noctua: {
          beige: '#EFEDE6',     // Was Wall -> Now New Background
          bone: '#FFFFFF',      // Was Paper -> Now Pure White Card
          brown: '#1A1A1A',     // Was Brown Text -> Now Soft Black
          russet: '#E85D04',    // Was Brown/Red -> Now Estus Orange
        },
      },
      backgroundImage: {
        // Removed the radial gradient to ensure a clean, flat, high-contrast look
        'noctua-gradient': 'none',
      }
    },
  },
  plugins: [],
}
