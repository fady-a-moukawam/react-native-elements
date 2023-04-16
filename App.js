import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LottieSplashScreen from 'react-native-lottie-splash-screen';
import { ThemeProvider } from '@rneui/themed';

import Home from 'screens/home/Home';

import { theme } from 'theme/theme';

LottieSplashScreen?.hide();

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
