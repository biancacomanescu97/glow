module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        citron: {  
          DEFAULT: '#91972A',  
          '10': "#FAFBEF",  
          '50': '#DEE297',  
          '100': '#D9DE87',  
          '200': '#CFD567',  
          '300': '#C4CC47',  
          '400': '#B0B733',  
          '500': '#91972A',  
          '600': '#676B1E',  
          '700': '#3D3F12',  
          '800': '#131305',  
          '900': '#000000'
        },
        floralwhite: {
          DEFAULT: "#FDF8ED",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
