import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'card-height': '519px',
      },
      width: {
        'card-width': '372px',
      },
      backgroundImage: {
        'card-back': "url('/images/card-back.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
