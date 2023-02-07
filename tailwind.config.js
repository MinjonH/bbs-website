/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				ttHoves: ['TT Hoves', 'sans-serif'],
				belleza: ['Belleza', 'sans-serif'],
				loveloLine: ['Lovelo Line', 'sans-serif'],
				openSans: ['Open Sans', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {
			visibility: ['group-hover'],
		},
	},
	plugins: [],
};
