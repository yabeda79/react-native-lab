import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View } from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ThemeProvider } from 'react-native-elements';
import appTheme from './theme';

import Accounts from './screens/accounts';
import Cards from './screens/cards';
import Cheking from './screens/cheking';
import Giving from './screens/giving';
import Home from './screens/home';
import Payments from './screens/payments';
import Saving from './screens/saving';
import SignIn from './screens/signin';
import TabBar from './screens/tabbar';
import Header from './components/header';

import { NavigationContainer } from '@react-navigation/native';

const App = () => {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor="#F08080" animated={true} />
			<Header />
			<View style={styles.mainContainer}>
				<TabBar />
			</View>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		width: '100%',
		height: '100%',
		backgroundColor: '#000',
	},
});

export default App;
