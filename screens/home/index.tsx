import React, { FC } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

// import { RouteProp } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';

// type RootStackParamList = {
// 	Home: undefined;
// };

// type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

// type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface IHome {
	// navigation: HomeScreenNavigationProp;
	navigation: { navigate: (value: string) => void };
}

const Home: FC<IHome> = ({ navigation }) => {
	return (
		<ScrollView style={styles.mainContainer}>
			<View style={styles.mainContainer}>
				<Text>Home</Text>
				<Button title="Go to Saving" onPress={() => navigation.navigate('Saving')} />
				<Button title="Go to Checking" onPress={() => navigation.navigate('Checking')} />
			</View>
		</ScrollView>
	);
};
export default Home;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		height: 10000,
	},
	tabBarContainer: {
		position: 'absolute',
		width: '100%',
		bottom: 20,
	},
});
