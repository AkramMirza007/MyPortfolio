/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Gowun: ["Gowun Batang", 'serif'],
        Ysabeau: ["Ysabeau SC", 'serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          'text-shadow': '2px 2px 4px rgb(255,255,255)' , // Custom shadow
        },
        '.text-shadow-md': {
          'text-shadow': '4px 4px 6px rgb(255,255,255)', // Medium shadow
        },
        '.text-shadow-lg': {
          'text-shadow': '6px 6px 8px rgb(0, 0, 0, 0.6)', // Large shadow
        },
      };

      addUtilities(newUtilities);
    },
  ],
}
