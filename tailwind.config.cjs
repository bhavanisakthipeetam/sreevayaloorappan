/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Warm parchment palette (light theme)
        "svk-bg":       "#fdf8f0",   // warm parchment main background
        "svk-mid":      "#f5ede0",   // section alternates
        "svk-card":     "#fffdf7",   // card background
        "svk-light":    "#e8d8c0",   // borders, subtle areas
        "svk-bright":   "#4a8a5e",   // forest green accent
        "svk-glow":     "#3a7a4e",   // deeper green
        // Gold (darker for readability on light bg)
        "gold":         "#9a6e0a",
        "gold-dim":     "#7a5508",
        "gold-pale":    "#c9952a",
        "gold-muted":   "#b87e20",
        // Text (dark for light background)
        "ivory":        "#1c1408",
        "ivory-dim":    "#3d2e18",
        "text-prim":    "#1c1408",
        "text-sec":     "#4a3c22",
        "text-mute":    "#8a7458",
        // Accents
        "terracotta":   "#c05a2e",
        "rust":         "#8b3a1a",
        "jade":         "#2a6b40",
        "sage":         "#4a7a5a",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
        heading: ['"Cormorant Garamond"', ...defaultTheme.fontFamily.serif],
        body:    ['"Raleway"', ...defaultTheme.fontFamily.sans],
        accent:  ['"Cinzel"', ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        "gold-gradient":   "linear-gradient(135deg, #b87e20, #d4a82a)",
        "green-gradient":  "linear-gradient(135deg, #f0e8d8, #e8d8c0)",
        "card-gradient":   "linear-gradient(145deg, #fffdf7, #f5ede0)",
      },
      boxShadow: {
        "gold-glow":  "0 0 30px rgba(154,110,10,0.12), 0 4px 20px rgba(0,0,0,0.08)",
        "jade-glow":  "0 0 40px rgba(74,138,94,0.12)",
        "card":       "0 4px 24px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
      },
      animation: {
        "fade-up":   "fadeUp 0.7s ease both",
        "fade-in":   "fadeIn 0.6s ease both",
        "bob":       "bob 2.5s ease-in-out infinite",
        "shimmer":   "shimmer 3s ease-in-out infinite",
        "float":     "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp:   { "0%": { opacity:"0", transform:"translateY(24px)" }, "100%": { opacity:"1", transform:"translateY(0)" } },
        fadeIn:   { "0%": { opacity:"0" }, "100%": { opacity:"1" } },
        bob:      { "0%,100%": { transform:"translateX(-50%) translateY(0)" }, "50%": { transform:"translateX(-50%) translateY(6px)" } },
        shimmer:  { "0%,100%": { opacity:"0.6" }, "50%": { opacity:"1" } },
        float:    { "0%,100%": { transform:"translateY(0)" }, "50%": { transform:"translateY(-8px)" } },
      },
    },
  },
  plugins: [],
};
