/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "lg": "1440px",
      },
      backgroundImage: {
        "sm-home-hero": "url('/home/mobile/image-header.jpg')",
        "md-home-hero": "url('/home/tablet/image-header.jpg')",
        "lg-home-hero": "url('/home/desktop/image-hero.jpg')",
        "sm-featured-product": "url('/home/desktop/pattern-circles.svg')",
        "sm-primary-product": "url('/home/mobile/image-speaker-zx7.jpg')",
        "md-primary-product": "url('/home/tablet/image-speaker-zx7.jpg')",
        "lg-primary-product": "url('/home/desktop/image-speaker-zx7.jpg')",
      },
      backgroundPosition: {
        "sm-featured-product-pos": "50% -120px",
        "md-featured-product-pos": "50% -282px",
        "lg-featured-product-pos": "-165px -10px",
      },
      backgroundSize: {
        "sm-featured-product-size": "170% auto",
      },
      colors: {
        "primary": "#D87D4A",
        "primary-light": "#FBAF85",
        "off-black": "#101010",
        "off-grey": "#F1F1F1",
        "off-white": "#FAFAFA",
        "error": "#CD2C2C",
      },
      spacing: {
        "7.5": "1.875rem", // 30px @ 16px base
        "9.5": "2.375rem", // 38px @ 16px base
        "13": "3.25rem", // 52px @ 16px base
        "14": "3.5rem", // 56px @ 16px base
        "15": "3.75rem", // 60px @ 16px base
        "17.5": "4.375rem", // 70px @ 16px base
        "18": "4.5rem", // 72px @ 16px base
        "22": "5.5rem", // 88px @ 16px base
        "22.5": "5.625em", // 90px @ 16px base
        "24": "6rem", // 96px @ 16px base
        "25": "6.25rem", // 100px @ 16px base
        "25.5": "6.375rem", // 102px @ 16px base
        "27": "6.75rem", // 108px @ 16px base
        "28": "7rem", // 112px @ 16px base
        "30": "7.5rem", // 120px @ 16px base
        "31": "7.75rem", // 124px @ 16px base
        "32": "8rem", // 128px @ 16px base
        "33": "8.25rem", // 132px @ 16px base
        "34": "8.5rem", // 136px @ 16px base
        "35": "8.75rem", // 140px @ 16px base
        "40": "10rem", // 160px @ 16px base
        "42": "10.5rem", // 168px @ 16px base
        "43": "10.75rem", // 172px @ 16px base
        "50": "12.5rem", // 200px @ 16px base
        "56": "14rem", // 224px @ 16px base
        "60": "15rem", // 240px @ 16px base
        "61.5": "15.375rem", // 246px @ 16px base
        "70": "17.5rem", // 280px @ 16px base
        "87": "21.75rem", // 348px @ 16px base
        "95": "23.75rem", // 380px @ 16px base
        "111": "27.75rem", // 444px @ 16px base
        "135": "33.75rem", // 540px @ 16px base
        "143": "35.75rem", // 572px @ 16px base
        "158": "39.5rem", // 632px @ 16px base
        "182": "45.5rem", // 728px @ 16px base
        "196.5": "49.125rem", // 786px @ 16px base
        "277.25": "69.313rem", // 1109px @ 16px base
      },
      fontSize: {
        "12px": "12px",
        "13px": "13px",
        "14px": "14px",
        "15px": "15px",
        "7": "1.75rem", // 28px @ 16px base
        "8": "2rem", // 32px @ 16px base
        "10": "2.5rem", // 40px @ 16px base
        "14": "3.5rem", // 56px @ 16px base
      },
      letterSpacing: {
        "1px": "1px",
        "2px": "2px",
        "10px": "10px",
      },
      lineHeight: {
        "19": "1.188rem", // 19px @ 16px base
        "14.5": "3.625rem", // 58px @ 16px base
      },
    },
  },
  plugins: [],
}
