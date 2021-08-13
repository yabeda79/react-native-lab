import React, { useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Modal, Button, Image } from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import { ThemeProvider } from 'react-native-elements';
// import appTheme from './theme';

import Accounts from './screens/accounts';
import Cards from './screens/cards';
import Cheking from './screens/cheking';
import Giving from './screens/giving';
import Home from './screens/home';
import Payments from './screens/payments';
import Saving from './screens/saving';
import SignIn from './screens/signin';
import TabBar from './screens/tabbar';
import HeaderLogo from './components/headerlogo';
import HeaderRightBtn from './components/headerrightbtn';
import HeaderLeftBtn from './components/headerleftbtn';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const App = () => {
	const Stack = createStackNavigator();

	const [isSignOutOpen, setIsSignOutOpen] = useState(false);

	const signOutChangeHandler = () => {
		setIsSignOutOpen(!isSignOutOpen);
	};

	return (
		// <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
		<View style={{ flex: 1 }}>
			<NavigationContainer>
				<StatusBar backgroundColor="#F08080" animated={true} />
				{/* <Header signOutChangeHandler={signOutChangeHandler} /> */}
				{/* <View style={styles.mainContainer}></View> */}
				{/* <ScrollView> */}
				<Stack.Navigator
					screenOptions={{
						headerStyle: {
							backgroundColor: '#F08080',
						},
					}}>
					<Stack.Screen
						component={Home}
						name="Home"
						options={{
							headerTitle: (props) => <HeaderLogo {...props} />,
							headerRight: () => <HeaderRightBtn signOutChangeHandler={signOutChangeHandler} />,
							headerLeft: () => <HeaderLeftBtn />,
						}}
					/>
					<Stack.Screen component={Accounts} name="Accounts" options={{ title: 'Accounts screen' }} />
					<Stack.Screen component={Giving} name="Giving" options={{ title: 'Giving screen' }} />
					<Stack.Screen component={Payments} name="Payment" options={{ title: 'Payment screen' }} />
					<Stack.Screen component={Cards} name="Cards" options={{ title: 'Cards screen' }} />
				</Stack.Navigator>
				{/* </ScrollView> */}
				<View style={styles.tabBarContainer}>
					<TabBar />
				</View>
				<Modal animationType="fade" visible={isSignOutOpen} onRequestClose={signOutChangeHandler} transparent={true}>
					<View style={styles.signOutModalContainer}>
						<Text style={styles.signOutModalText}>Sign Out</Text>
						<Button title="Close modal" onPress={signOutChangeHandler} />
					</View>
				</Modal>
			</NavigationContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		width: '100%',
		height: '100%',
		// backgroundColor: '#000',
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
		top: '100%',
		// justifyContent: 'flex-start',
		// alignContent: 'flex-start',
		// alignItems: 'flex-start',
	},
});

export default App;
