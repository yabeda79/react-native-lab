import React, { FC } from 'react';
import { StyleSheet, Image } from 'react-native';

interface IHeaderProps {
	signOutChangeHandler?(): void;
}

const HeaderLogo: FC<IHeaderProps> = () => {
	return <Image style={styles.logoImage} source={require('../../Assets/Images/logo.png')} />;
};
export default HeaderLogo;

const styles = StyleSheet.create({
	logoImage: {
		resizeMode: 'contain',
		height: 50,
		width: 150,
		bottom: 0,
	},
});
