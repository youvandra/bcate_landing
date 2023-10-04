import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-bg': "url('/bg.png')",
        'furniture': "url('https://www.lafurniturestore.com/media/wysiwyg/1-new_[Osaka].jpg')",
        'building': "url('https://ecay.design/wp-content/uploads/2022/02/Building-Blueprints-California-1000x683.jpg')",
        'interior': "url('https://www.dbs.id/id/iwov-resources/images/blog/Yuk-Intip-6-Desain-Interior-1404x630.jpg)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
