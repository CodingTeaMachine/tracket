import plugin from "tailwindcss/plugin";

const capitalizeFirst = plugin(function ({ addUtilities }) {
	const newUtilities = {
		'.capitalize-first:first-letter': {
			textTransform: 'uppercase',
		},
	}
	addUtilities(newUtilities, ['responsive', 'hover'])
})

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('path').join(require.resolve(
				'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	theme: {
		extend: {},
	},
	plugins: [
		capitalizeFirst,
		require('@tailwindcss/forms'),
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	],
}
