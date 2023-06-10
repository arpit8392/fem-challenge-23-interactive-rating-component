/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				orange: 'hsl(25, 97%, 53%)',
				lightGrey: 'hsl(217, 12%, 63%)',
				mediumGrey: 'hsl(216, 12%, 54%)',
				darkBlue: 'hsl(213, 19%, 18%)',
				veryDarkBlue: 'hsl(216, 12%, 8%)',
			},
			backgroundImage: {
				gradialDarkBg:
					'radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%)',
			},
		},
	},
	plugins: [],
}
