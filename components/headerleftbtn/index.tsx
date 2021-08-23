import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

const HeaderLeftBtn: FC = () => {
	return (
		<TouchableOpacity>
			<Image style={styles.menuBtn} source={require('../../Assets/Images/burgerMenuIcon.png')} />
		</TouchableOpacity>
	);
};

export default HeaderLeftBtn;

const styles = StyleSheet.create({
	menuBtn: {
		width: 20,
		height: 20,
		marginLeft: 10,
		marginRight: 10,
		// marginBottom: 14,
		zIndex: 2,
	},
});
