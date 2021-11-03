module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        citron: {
          DEFAULT: "#91972A",
          10: "#FAFBEF",
          50: "#DEE297",
          100: "#D9DE87",
          200: "#CFD567",
          300: "#C4CC47",
          400: "#B0B733",
          500: "#91972A",
          600: "#676B1E",
          700: "#3D3F12",
          800: "#131305",
          900: "#0B0C03",
        },
        floralwhite: {
          DEFAULT: "#DEE297",
          50: "#FAFBF1",
          100: "#F7F8E7",
          200: "#F1F3D3",
          300: "#EBEDBF",
          400: "#E4E8AB",
          500: "#DEE297",
          600: "#D9DE87",
          700: "#D4D977",
          800: "#CFD567",
          900: "#CAD057",
        },
        pine: {  
          DEFAULT: '#1D2A18',  
          '50': '#4F7342',  
          '100': '#4A6B3D',  
          '200': '#3F5B34',  
          '300': '#334A2B',  
          '400': '#283A21',  
          '500': '#1D2A18',  
          '600': '#162012',  
          '700': '#10170D',  
          '800': '#090D07',  
          '900': '#020302'
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
