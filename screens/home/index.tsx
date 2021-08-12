import React, { FC } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Home: FC = () => {
	return (
		// <SafeAreaView>
		<View style={styles.mainContainer}>
			<Text>Home</Text>
		</View>
		// </SafeAreaView>
	);
};
export default Home;

const styles = StyleSheet.create({
	mainContainer: {
		height: '80%',
		backgroundColor: '#a88b8b',
		marginTop: 150,
	},
});
