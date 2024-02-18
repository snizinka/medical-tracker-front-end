import { screens } from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./**/*.{vue,ts,js}'],
  theme: {
    extend: {
      screens: {
        ...screens
      },
    },
  },
  plugins: [],
}

