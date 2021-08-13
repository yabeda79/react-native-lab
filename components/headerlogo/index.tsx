import React, { FC } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

interface IHeaderProps {
	signOutChangeHandler?(): void;
}

const HeaderLogo: FC<IHeaderProps> = ({ signOutChangeHandler }) => {
	return (
		// <View style={styles.mainContainer}>
		// 	<Image style={styles.logoImage} source={require('../../Assets/Images/logo.png')} />

		// 	<TouchableOpacity activeOpacity={0.5} style={styles.menuBtnContainer}>
		// 		<Image style={styles.menuBtn} source={require('../../Assets/Images/burgerMenuIcon.png')} />
		// 	</TouchableOpacity>

		// 	<TouchableOpacity activeOpacity={0.5} style={styles.profileBtnContainer} onPress={signOutChangeHandler}>
		// 		<Image style={styles.profileBtn} source={require('../../Assets/Images/avatar.png')} />
		// 	</TouchableOpacity>
		// </View>
		<Image style={styles.logoImage} source={require('../../Assets/Images/logo.png')} />
	);
};
export default HeaderLogo;

const styles = StyleSheet.create({
	mainContainer: {
		width: '100%',
		height: 100,
		flexDirection: 'row-reverse',
		justifyContent: 'center',
		alignItems: 'flex-end',
		backgroundColor: '#F08080',
	},
	logoImage: {
		resizeMode: 'contain',
		height: 50,
		width: 150,
		bottom: 0,
	},
	menuBtnContainer: {
		width: 50,
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	menuBtn: {
		width: 20,
		height: 20,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 14,
		zIndex: 2,
	},
	profileBtnContainer: {
		width: 50,
		position: 'absolute',
		bottom: 0,
		left: 0,
	},
	profileBtn: {
		width: 30,
		height: 30,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 10,
		zIndex: 2,
		resizeMode: 'contain',
	},
});
