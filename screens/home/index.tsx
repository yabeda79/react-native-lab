import React, { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBar from '../tabbar';

const Home: FC = () => {
	return (
		// <SafeAreaView>
		<View style={styles.mainContainer}>
			<Text>Home</Text>
			{/* <View style={styles.tabBarContainer}>
				<TabBar />
			</View> */}
		</View>
		// </SafeAreaView>
	);
};
export default Home;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		// height: '100%',
		backgroundColor: '#a88b8b',
		// marginTop: 150,
	},
	tabBarContainer: {
		position: 'absolute',
		width: '100%',
		bottom: 20,
		// justifyContent: 'flex-start',
		// alignContent: 'flex-start',
		// alignItems: 'flex-start',
	},
});
