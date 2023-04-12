import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from '@rneui/themed';
import {theme} from 'theme/theme';
import Home from 'screens/home/Home';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<SafeAreaProvider>
				<Home />
			</SafeAreaProvider>
		</ThemeProvider>
	);
};

export default App;
