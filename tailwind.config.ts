import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {}
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				'.border-text': {
					color: 'transparent',
					'-webkit-text-stroke': '2px #2b2b2b'
				}
			})
		})
	]
}
export default config
