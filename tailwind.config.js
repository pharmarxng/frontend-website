import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
      'medium': '550px',
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        primary: {
          100: '#2D547B',
        },
        secondary: {
          100: 'ebebeb',
          200: '#D9D9D9',

        },
        search:{
          100: "#B5B5B5"
        },
        deepBlue: {
          100: "#1A4570"
        }
      },
      fontFamily:{body: ['Nunito'],
        dancing: ["Dancing Script", "cursive"],
        poppins: ['Poppins', "sans-serif"],
        inter: ["Inter", "sans-serif" ],
        roboto: ["Roboto", "sans-serif"]
      },
      fontSize:{
        "midbase": ["18px", {
          lineHeight: "22px"
        }]
      }
    },
  },
  plugins: [],
}

