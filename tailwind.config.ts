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
        'BgBlue' : '#ECF1F7',
      },
      backdropBlur: {
        '16': '16px',
      },
      boxShadow: {
        custom: '0px 0px 0px 0px rgba(38, 43, 48, 0.02), 0px 0px 0px 0px rgba(38, 43, 48, 0.02), 0px 0px 1px 0px rgba(38, 43, 48, 0.02), 0px 0px 1px 0px rgba(38, 43, 48, 0.01), 0px 0px 1px 0px rgba(38, 43, 48, 0.00), 0px 0px 1px 0px rgba(38, 43, 48, 0.00)',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['focus'],
      backdropBlur: ['responsive'], // or other variants you need
    },
  },
  plugins: [],
}
export default config
