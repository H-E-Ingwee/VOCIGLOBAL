import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'voci': {
          'dark-blue': '#14213d',
          'blue': '#007bff',
          'red': '#B00000',
          'gold': '#C28B00',
          'light-blue': '#e6f2ff',
          'gray': '#5a6268',
        },
      },
      fontFamily: {
        'display': ['Montserrat', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-voci': 'linear-gradient(135deg, #14213d 0%, #0d1a33 100%)',
        'gradient-light': 'linear-gradient(135deg, #e6f2ff 0%, #d9ecff 100%)',
      },
      boxShadow: {
        'card': '0 18px 45px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 28px 55px rgba(0, 0, 0, 0.12)',
        'icon': '0 10px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
