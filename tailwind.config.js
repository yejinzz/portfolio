/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBg: '#222',
        point: '#6c92af',
        point80: '#6c92af80',
        point40: '#6c92af40',
        gray: '#959595',
        gray50: '#95959550',
      },
      keyframes: {
        scrollDown: {
          '50%': {
            transform: 'translateY(-10px)',
            opacity: 1,
          },
        },
        fadeIn: {
          '50%': {
            opacity: 1,
          },
        },
        rotateText: {
          '0%': {
            transform: 'rotate(0)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        scrollDown: 'scrollDown 2s infinite 2s',
        fadeIn: 'fadeIn 2s infinite 2s',
        rotateText: 'rotateText 20s linear infinite',
      },
      backgroundImage: {
        main: 'url("/image/noise.gif")',
      },
      fontFamily: {
        pretendard: ['Pretendard'],
        montserrat: ['Montserrat'],
        poppins: ['Poppins'],
        cabinet: ['Cabinet'],
      },
    },
  },
  plugins: [],
};
