// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ['./index.html','./src/**/*.{js,ts,tsx,jsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    screens: {
      tablet: '768px',
      desktop: '1124px',
      monitor: '1800px'
    },
    extend: {
      minHeight:{
        lg : '24rem'
      },
      backgroundImage:{
        'authBg': "url('../public/image/wrapper/blurbackground.png')",
        'sectionBg': "url('../public/image/wrapper/sectionbg.png')",
        'mainpolishBg':"url('../public/image/wrapper/mainpolishbg.png')",
        'contactusBg':"url('../public/image/wrapper/contactusbg.png')",
        'mobilemainBg':"url('../public/image/wrapper/mobilemainsectionbg.png')",
        'adsectionBg':"url('../public/image/wrapper/image.png')"
      }
    },
    colors:{
      primary:'#C26F2D',
      secondary:'#FBF6EF',
      secondarydark: '#D8B192',
      secondarylight: '#EAD7C3',
      darkgray: '#848383',
      white: '#FFFFFF',
      red: '#ff2c2c',
      lightgray: '#F3F4F6',
      midgray: '#DEE1E6',
      gold: '#F3C63F',
      green: '#12B76A'
    },
    fontSize: {
      '5xs': ['4px', { lineHeight: '8px', letterSpacing: '-0.005em' }],
      '4xs': ['6px', { lineHeight: '8px', letterSpacing: '-0.005em' }],
      '3xs': ['8px', { lineHeight: '12px', letterSpacing: '-0.005em' }],
      xxs: ['10px', { lineHeight: '20px', letterSpacing: '-0.005em' }],
      xs: ['12px', { lineHeight: '20px', letterSpacing: '-0.005em' }],
      sm: ['14px', { lineHeight: '24px', letterSpacing: '-0.005em' }],
      md: ['16px', { lineHeight: '28px', letterSpacing: '-0.005em' }],
      lg: ['20px', { lineHeight: '28px', letterSpacing: '-0.005em' }],
      xl: ['24px', { lineHeight: '36px', letterSpacing: '0.015em' }],
      '2xl': ['32px', { lineHeight: '48px', letterSpacing: '0.015em' }],
      '3xl': ['48px', { lineHeight: '56px', letterSpacing: '0.015em'}],
      '4xl': ['56px', { lineHeight: '64px', letterSpacing: '0.015em' }],
      '5xl': ['64px', { lineHeight: '80px', letterSpacing: '0.015em' }],
      xxl: ['96px', { lineHeight: '100px', letterSpacing: '0.015em' }],
      sms: ['14px', { lineHeight: '20px', letterSpacing: '0.15em' }],
    },
    fontFamily: {
      'poppins': ['poppins', 'sans-serif'],
      'montserrat': ['montserrat', 'sans-serif'],
      'lexend': ['lexend', 'sans-serif'],
      'manrope': ['manrope', 'sans-serif']
    },
  },
  plugins: [
    function ({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar":{
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none"
        }
      };
      addUtilities(newUtilities);
    }
  ],
}