import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

import TabBar from './screens/tabbar';

const App = () => {
	const [isSignOutOpen, setIsSignOutOpen] = useState(false);

	const signOutChangeHandler = () => {
		setIsSignOutOpen(!isSignOutOpen);
	};

	return (
		<View style={styles.mainContainer}>
			{/* headerTitle: (props) => <HeaderLogo {...props} />*/}

			<TabBar signOutChangeHandler={signOutChangeHandler} />

			<Modal animationType="fade" visible={isSignOutOpen} onRequestClose={signOutChangeHandler} transparent={true}>
				<View style={styles.signOutModalContainer}>
					<Text style={styles.signOutModalText}>Sign Out</Text>
					<Button title="Close modal" onPress={signOutChangeHandler} />
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	signOutModalContainer: {
		borderRadius: 10,
		// position: 'absolute',
		backgroundColor: 'pink',
		marginTop: 350,
	},
	signOutModalText: {
		fontSize: 20,
		textAlign: 'center',
		padding: 20,
	},
	menuBtn: {
		width: 20,
		height: 20,
		marginLeft: 10,
		marginRight: 10,
		marginBottom: 14,
		// zIndex: 2,
	},
	tabBarContainer: {
		position: 'absolute',
		width: '100%',
		// bottom: '100%',
		top: '90%',
		borderStyle: 'solid',
		borderTopWidth: 1,
		paddingTop: 7,

		// justifyContent: 'flex-start',
		// alignContent: 'flex-start',
		// alignItems: 'flex-start',
	},
	tabBar: {
		marginHorizontal: 15,
	},
});

export default App;
