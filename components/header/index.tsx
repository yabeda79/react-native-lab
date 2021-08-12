import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Header: FC = () => {
	return (
		<View style={styles.mainContainer}>
			<Text>Header</Text>
		</View>
	);
};
export default Header;

const styles = StyleSheet.create({
	mainContainer: {
		width: '100%',
		height: 50,
		position: 'absolute',
		top: 0,
		left: 0,
	},
});
