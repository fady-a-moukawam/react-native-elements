import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider, Button, useThemeMode, createTheme} from '@rneui/themed';

const Test = () => {
	const {mode, setMode} = useThemeMode();

	return (
		<Button onPress={() => setMode(mode === 'light' ? 'dark' : 'light')}>
			my button
		</Button>
	);
};

const theme = createTheme({
	lightColors: {
		//generic
		white: '#ffffff',
		black: '#000000',
		transparent: 'transparent',
		//theme
		primary: '#e7e7e8',
		secondary: '',
		disabled: '',
		error: '',
		success: '',
		warning: '',
		background: '',
		//text
		textPrimary: '',
		textSecondary: '',
		textDisabled: '',
	},
	darkColors: {
		primary: '#000',
	},
	mode: 'light',
});

const App = () => {
	console.log('sdsd');
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider style={{flex: 1, backgroundColor: 'white'}}>
				<Test />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};

const styles = StyleSheet.create({});

export default App;
