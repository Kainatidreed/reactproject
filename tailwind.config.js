/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        'right':{
          '0%,100%':{
            transform:'translateX(100px) rotate(120deg)'
      
          }
        }
      },
      animation:{
        'right':'right 1.5s ease-in-out infinite'

      }

    },
  },
  plugins: [],
}

