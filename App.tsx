import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import TabBar from './screens/tabbar';
import LoginScreen from './screens/login';

// import { useHttp } from './hooks/http.hook';
import { useAuth } from './hooks/auth.hook';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_AUTH } from './AsyncStorage';
import { IUser } from './redux/initialState';

import SplashScreen from 'react-native-splash-screen';

import AnimatedSplash from 'react-native-animated-splash-screen';

const App: FC = () => {
	const [isLoaded, setIsLoaded] = useState(false);

	// const { request } = useHttp();
	const { login, isAuthenticated } = useAuth();

	console.log(isAuthenticated);

	useEffect(() => {
		async () => {
			const storageData: string | null = await AsyncStorage.getItem(ASYNC_STORAGE_AUTH);
			const data = JSON.parse(storageData || '{}');
			const { token, username } = data;
			if (data && token && username && typeof token === 'string' && typeof username === 'string') {
				login(data as IUser);
			}
			// logout(); // for testing only
		};

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		SplashScreen.hide();
	}, []);

	if (!isAuthenticated) {
		return (
			<AnimatedSplash
				translucent={true}
				isLoaded={isLoaded}
				logoImage={require('./Assets/Images/logo_splash_screen.png')}
				backgroundColor={'#F08080'}
				logoHeight={150}
				logoWidth={150}>
				<LoginScreen setIsLoaded={setIsLoaded} />
			</AnimatedSplash>
		);
	}

	return (
		<AnimatedSplash
			translucent={true}
			isLoaded={isLoaded}
			logoImage={require('./Assets/Images/logo_splash_screen.png')}
			backgroundColor={'#F08080'}
			logoHeight={150}
			logoWidth={150}>
			<View style={styles.mainContainer}>
				<TabBar setIsLoaded={setIsLoaded} />
			</View>
		</AnimatedSplash>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
	},
	signOutModalContainer: {
		borderRadius: 10,
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
	},
	tabBarContainer: {
		position: 'absolute',
		width: '100%',
		top: '90%',
		borderStyle: 'solid',
		borderTopWidth: 1,
		paddingTop: 7,
	},
	tabBar: {
		marginHorizontal: 15,
	},
});

export default App;
