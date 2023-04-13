import React from 'react';
import Proptypes from 'prop-types';
import { Button } from '@rneui/themed';

const PrimaryButton = ({
	title,
	isOutlined,
	isClear,
	isDisabled,
	isLoading,
	Icon,
	size,
}) => {
	const getButtonVariant = () => {
		if (isOutlined) {
			return 'outline';
		}

		if (isClear) {
			return 'clear';
		}

		return undefined;
	};

	return (
		<Button
			type={getButtonVariant()}
			size={size}
			disabled={isDisabled}
			loading={isLoading}
			icon={Icon}
			iconPosition="bottom">
			{title}
		</Button>
	);
};

export default PrimaryButton;

PrimaryButton.propTypes = {
	title: Proptypes.string.isRequired,
	isOutlined: Proptypes.bool,
	isDisabled: Proptypes.bool,
	isLoading: Proptypes.bool,
	isClear: Proptypes.bool,
	size: Proptypes.oneOf(['lg', 'md', 'sm']),
	Icon: Proptypes.any,
	// AnimatedIcon: Proptypes.object,
	// loading: Proptypes.bool,
	// disabled: Proptypes.bool,
	// testID: Proptypes.string.isRequired,
	// children: Proptypes.string,
	// LeadingIcon: Proptypes.any,
	// onLongPress: Proptypes.func,
	// TrailingIcon: Proptypes.any,
	// isDefaultColor: Proptypes.bool,
	// onPress: Proptypes.func.isRequired,
};

PrimaryButton.defaultProps = {
	isOutlined: false,
	isDisabled: false,
	isClear: false,
	isLoading: false,
	size: 'md',
	Icon: null,
	// style: null,
	// journey: null,
	// loading: false,
	// children: null,
	// disabled: false,
	// onLongPress: null,
	// LeadingIcon: null,
	// TrailingIcon: null,
	// isDefaultColor: false,
};
