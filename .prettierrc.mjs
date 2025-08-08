/** @type {import("prettier").Config} */
export default {
	"useTabs": true,
	"singleQuote": true,
	"semi": false,
	"bracketSpacing": false,
	"printWidth": 100,

	plugins: ['prettier-plugin-what'],
	overrides: [
		{
			files: '*.what',
			options: {
				parser: 'what',
			},
		},
	],
};

