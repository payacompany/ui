module.exports = {
	extends: [
		"plugin:vue/recommended",
		"plugin:prettier-vue/recommended",
		"prettier",
	],
	parserOptions: {
		parser: "babel-eslint",
		sourceType: "module",
		allowImportExportEverywhere: true,
	},
	settings: {
		"prettier-vue": {
			// Settings for how to process Vue SFC Blocks
			SFCBlocks: {
				/**
				 * Use prettier to process `<template>` blocks or not
				 *
				 * If set to `false`, you may need to enable those vue rules that are disabled by `eslint-config-prettier`,
				 * because you need them to lint `<template>` blocks
				 *
				 * @default true
				 */
				template: true,

				/**
				 * Use prettier to process `<script>` blocks or not
				 *
				 * If set to `false`, you may need to enable those rules that are disabled by `eslint-config-prettier`,
				 * because you need them to lint `<script>` blocks
				 *
				 * @default true
				 */
				script: true,

				/**
				 * Use prettier to process `<style>` blocks or not
				 *
				 * @default true
				 */
				style: true,

				// Settings for how to process custom blocks
				customBlocks: {
					// Treat the `<docs>` block as a `.markdown` file
					docs: { lang: "markdown" },

					// Treat the `<config>` block as a `.json` file
					config: { lang: "json" },

					// Treat the `<module>` block as a `.js` file
					module: { lang: "js" },

					// Ignore `<comments>` block (omit it or set it to `false` to ignore the block)
					comments: false,

					// Other custom blocks that are not listed here will be ignored
				},
			},

			// Use prettierrc for prettier options or not (default: `true`)
			usePrettierrc: true,

			// Set the options for `prettier.getFileInfo`.
			// @see https://prettier.io/docs/en/api.html#prettiergetfileinfofilepath-options
			fileInfoOptions: {
				// Path to ignore file (default: `'.prettierignore'`)
				// Notice that the ignore file is only used for this plugin
				ignorePath: ".testignore",

				// Process the files in `node_modules` or not (default: `false`)
				withNodeModules: false,
			},
		},
	},

	rules: {
		"prettier-vue/prettier": [
			"warn",
			{
				htmlWhitespaceSensitivity: "ignore",
				semi: true,
				singleQuote: true,
				doubleQuote: true,
				useTabs: true,
				trailingComma: "none",
				printWidth: 80,
				tabWidth: 4,
				semi: true,
				singleQuote: false,
				bracketSpacing: true,
				arrowParens: "avoid",
				endOfLine: "auto",
			},
		],
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "any",
				},
			},
		],
		"vue/no-use-v-if-with-v-for": ["off"],
		"vue/component-name-in-template-casing": ["off"],
		"vue/no-unused-components": ["off"],
		eqeqeq: ["off"],
		"no-new": ["off"],
	},
};
