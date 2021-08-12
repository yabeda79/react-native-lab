module.exports = {
	root: true,
	extends: ['prettier', '@react-native-community'],
	plugins: ['prettier'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				// endOfLine: 'auto',
			},
		],
		indent: ['off', 2],
		'react/react-in-jsx-scope': 'off',
		'linebreak-style': ['error', 'unix'],
		'max-len': [
			'warn',
			{
				code: 120,
				tabWidth: 2,
				comments: 1000,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			},
		],
	},
};
