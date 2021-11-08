module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "pulse-bg-once": "pulse-bg-once 3s ease-in forwards",
      },
      keyframes: {
        "pulse-bg-once": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      transitionDelay: {
        5000: "5000ms",
      },
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
          DEFAULT: "#1D2A18",
          50: "#4F7342",
          100: "#4A6B3D",
          200: "#3F5B34",
          300: "#334A2B",
          400: "#283A21",
          500: "#1D2A18",
          600: "#162012",
          700: "#10170D",
          800: "#090D07",
          900: "#020302",
        },
        propolis: {
          DEFAULT: '#CC910D',
          '50': '#F8DB98',
          '100': '#F7D485',
          '200': '#F5C65F',
          '300': '#F2B938',
          '400': '#F0AB12',
          '500': '#CC910D',
          '600': '#976C0A',
          '700': '#634606',
          '800': '#2E2103',
          '900': '#000000'
        },
        ginseng: {
          DEFAULT: '#AF7D26',
          '50': '#EBD0A2',
          '100': '#E7C891',
          '200': '#E0B770',
          '300': '#D9A64E',
          '400': '#D1952D',
          '500': '#AF7D26',
          '600': '#815C1C',
          '700': '#533B12',
          '800': '#251A08',
          '900': '#000000'
        },
        magenta: {  
          DEFAULT: '#7F006A',  '50': '#FF66E6',  '100': '#FF4CE1',  '200': '#FF19D9',  '300': '#E500BF',  '400': '#B20095',  '500': '#7F006A',  '600': '#600050',  '700': '#420037',  '800': '#23001D',  '900': '#050004'},
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
