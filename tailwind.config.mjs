/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orchid: '#8224E3',
          ocean: '#009CC2',
          berry: '#B02994',
          peony: '#E490BD',
          amethyst: '#7F53AA',
          dark: '#190a2c',
          darker: '#10051e',
          surface: '#F8F4FD',
          card: '#FFFFFF',
          border: '#E8DDF5',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-orchid': '0 10px 25px -5px rgba(130, 36, 227, 0.3)',
        'glow-ocean': '0 10px 25px -5px rgba(0, 156, 194, 0.3)',
        card: '0 4px 20px -2px rgba(130, 36, 227, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 30px -8px rgba(130, 36, 227, 0.16), 0 8px 12px -3px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
