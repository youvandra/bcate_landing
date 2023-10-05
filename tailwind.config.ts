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
        'interior': "url('https://media.designcafe.com/wp-content/uploads/2021/07/12182507/dark-interior-designs-for-your-home.jpg')",
        'others': "url('https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-black-light-effect-architectural-background-image_262495.jpg')",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
export default config
