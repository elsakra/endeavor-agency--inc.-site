export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        cream: {
          50: '#F5F2E8',
        },
      },
      letterSpacing: {
        tighter: '-0.04em',
      },
      lineHeight: {
        '0.85': '0.85',
      },
    },
  },
  plugins: [],
}