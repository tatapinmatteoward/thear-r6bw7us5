/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',
        accent: '#2E8B57',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
