/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f7ff',
          100: '#e8efff',
          500: '#2246cc',
          700: '#18318e',
          900: '#0f1e5d',
        },
      },
      boxShadow: {
        panel: '0 14px 38px -18px rgba(15, 30, 93, 0.45)',
      },
    },
  },
  plugins: [],
}
