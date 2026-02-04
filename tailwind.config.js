/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // 1. THIS FIXES THE ALIGNMENT & PADDING
    container: {
      center: true,       // Automatically centers the container (margin-left: auto, margin-right: auto)
      padding: "2rem",    // Adds 2rem gap on left and right so text never touches the edge
      screens: {
        "2xl": "1400px",  // Limits the max width on giant screens so lines don't get too long
      },
    },
    extend: {
      // 2. YOUR COLOR THEME (From the previous step)
      colors: {
        border: "#C2B5A8",       // Dark Sand (High contrast borders)
        input: "#C2B5A8",
        ring: "#E85D04",
        background: "#EFEDE6",   // Warm Oatmeal (Darker than white)
        foreground: "#1A1A1A",   // Soft Black (High contrast text)
        
        primary: {
          DEFAULT: "#E85D04",    // Estus Orange
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#EBE9E4",    // Light Grey/Beige
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

        // Legacy mappings
        noctua: {
          beige: '#EFEDE6',
          bone: '#FFFFFF',
          brown: '#1A1A1A',
          russet: '#E85D04',
        },
      },
      backgroundImage: {
        'noctua-gradient': 'none',
      }
    },
  },
  plugins: [],
}
