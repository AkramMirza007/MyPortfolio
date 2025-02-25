/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Gowun: ["Gowun Batang", 'serif'],
        Ysabeau: ["Ysabeau SC", 'serif']
      },
    },
    textStroke: {
      '1': '1px',
      '2': '2px',
      '3': '5px',
    },
    textStrokeColor: {
      'black': '#000',
      'white': '#fff',
      'red': '#f00',
    },
    theme: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke-width': '1px',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke-width': '2px',
        },
        '.text-stroke-3': {
          '-webkit-text-stroke-width': '5px',
        },
        '.text-stroke-black': {
          '-webkit-text-stroke-color': '#000',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke-color': '#fff',
        },
        '.text-stroke-red': {
          '-webkit-text-stroke-color': '#f00',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}

