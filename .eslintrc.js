module.exports = {
	root: true,
	extends: ['@react-native-community', 'prettier'],
	rules: {
		'no-console': 2,
		'no-unused-vars': [
			'error',
			{
				args: 'after-used',
			},
		],
		'react-native/no-inline-styles': 2,
		'react-native/no-unused-styles': 2,
		'react-native/no-single-element-style-arrays': 2,
	},
};
