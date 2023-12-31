import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ContentBlack': '#121212',
        'MainYellow': '#FFDE31',
      },
      backdropBlur: {
        '16': '16px',
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ['responsive'], // or other variants you need
    },
  },
  plugins: [],
}
export default config
