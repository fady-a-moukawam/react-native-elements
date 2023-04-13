import React from 'react';
import { View } from 'react-native';
import { Button, useThemeMode } from '@rneui/themed';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import PrimaryButton from 'components/atoms/buttons/PrimaryButton';

import theme from 'theme/theme';
import { faRotateBack } from '@fortawesome/free-solid-svg-icons/faRotateBack';

import styles from './Home.styles';

const Home = () => {
	const { mode, setMode } = useThemeMode();

	const { container } = styles;

	return (
		<View style={container}>
			<Button onPress={() => setMode(mode === 'light' ? 'dark' : 'light')}>
				my button
			</Button>
			<Button color="error">Error</Button>
			<Button color="success">Success</Button>
			<Button
				buttonStyle={{ backgroundColor: theme[`${mode}Colors`].textDisabled }}>
				Success
			</Button>
			<PrimaryButton title="test primary" />
			<PrimaryButton title="test primary disabled" isDisabled />
			<PrimaryButton title="test primary large" size="lg" />
			<PrimaryButton title="test primary disabled" isDisabled />
			<PrimaryButton title="test primary small" size="sm" />
			<PrimaryButton title="test primary disabled" isDisabled />
			<PrimaryButton title="test primary small" isOutlined />
			<PrimaryButton title="test primary disabled" isDisabled />
			<PrimaryButton
				title="test primary small"
				isClear
				Icon={<FontAwesomeIcon icon={faRotateBack} color="#f50" />}
			/>
		</View>
	);
};

export default Home;
