import { resolveProjectPath } from "wasp/dev";

/** @type {import('tailwindcss').Config} */
export default {
  content: [resolveProjectPath('./src/**/*.{js,jsx,ts,tsx}')],
  theme: {
     extend: {
      fontFamily: {
        'shadows': ['"Shadows Into Light"', 'cursive'], // Use 'cursive' as fallback
      },
    },
  },
  plugins: [],
}