import React, { FC } from 'react';
import { Image, View, StyleSheet } from 'react-native';

const HeaderBackBtn: FC = () => {
	return (
		<View style={styles.btnContainer}>
			<Image source={require('../../Assets/Images/back.png')} />
		</View>
	);
};

export default HeaderBackBtn;

const styles = StyleSheet.create({
	btnContainer: {
		width: 30,
		marginLeft: 10,
	},
});
