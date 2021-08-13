import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

interface IHeaderRightBtn {
	signOutChangeHandler(value: boolean): void;
}

const HeaderRightBtn: FC<IHeaderRightBtn> = ({ signOutChangeHandler }) => {
	return (
		<TouchableOpacity onPress={signOutChangeHandler}>
			<Image style={styles.menuBtn} source={require('../../Assets/Images/avatar.png')} />
		</TouchableOpacity>
	);
};

export default HeaderRightBtn;

const styles = StyleSheet.create({
	menuBtn: {
		width: 30,
		height: 30,
		marginLeft: 10,
		marginRight: 10,
		// marginBottom: 14,
		zIndex: 2,
	},
});
