import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        text: "var(--text)",
        p3green: "var(--p3green)",
        p3greenLight: "var(--p3greenLight)",
      },
      boxShadow: {
        card: "0px 1px 3px 0px var(--text)",
      },
      gridTemplateColumns: {
        gallery: "repeat(auto-fit, 250px)",
      },
      backgroundImage: {
        skeleton: "linear-gradient(90deg, #c0c0c0, #212c35, #c0c0c0)",
      },
      animation: {
        skeletonAnimation: "shimmer 5.5s infinite"
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (utilities: Record<string, any>) => void }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for all browsers */
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none',   // Firefox
          '&::-webkit-scrollbar': {
            display: 'none',           // Chrome, Safari, and Opera
          },
        },
      });
    },
  ],
} satisfies Config;
