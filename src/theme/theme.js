import {createTheme} from '@rneui/themed';

const theme = createTheme({
	lightColors: {
		//built in:
		primary: '#5ea9ff',
		secondary: 'rgb(173, 20, 87)',
		error: 'rgba(214, 61, 57, 1)',
		warning: 'rgba(255, 193, 7, 1)',
		success: 'rgba(86, 219, 15, 1)',
		disabled: 'rgb(227, 230, 232)',
		//generic
		white: '#ffffff',
		black: '#000000',
		transparent: 'transparent',
		//theme
		background: '',
		//text
		textPrimary: '',
		textSecondary: '',
		textDisabled: '#bd4d94',
	},
	darkColors: {
		//built in:
		primary: '#000000',
		secondary: 'rgb(173, 20, 87)',
		error: 'rgba(214, 61, 57, 1)',
		warning: 'rgba(255, 193, 7, 1)',
		success: 'rgba(86, 219, 15, 1)',
		disabled: 'rgb(227, 230, 232)',
		//generic
		white: '#ffffff',
		black: '#000000',
		transparent: 'transparent',
		//theme
		background: '',
		//text
		textPrimary: '',
		textSecondary: '',
		textDisabled: '#444444',
	},
	mode: 'light',
});

export {theme};
