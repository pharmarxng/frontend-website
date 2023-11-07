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
      "mdPro":"870px",
      "mdLite": "970px",
      ...defaultTheme.screens,
    },
    extend: {
      colors:{
        primary: {
          100: '#2D547B',
          200: '#2B2B2B;',
        },
        secondary: {
          100: '#ebebeb',
          200: '#D9D9D9',
          300: '#1A4570',

        },
        search:{
          100: "#B5B5B5"
        },
        deepBlue: {
          100: "#1A4570"
        },
        grey:{
          100: '#2b2b2b'
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
        }],
        "header": ['40px', {
          lineHeight: "48px"
        }]
      },

    },
  },
  plugins: [],
}

