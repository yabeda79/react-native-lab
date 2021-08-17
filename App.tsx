import React, { useState, FC, useEffect } from 'react';
import { StyleSheet, Text, View, Modal, Button } from 'react-native';

import TabBar from './screens/tabbar';

import { useHttp } from './hooks/http.hook';
import { useAuth } from './hooks/auth.hook';

import store from './redux/store';
import { Provider, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_AUTH } from './AsyncStorage';
import { IUser } from './redux/initialState';

const App: FC = () => {
	const [isSignOutOpen, setIsSignOutOpen] = useState(false);

	const { request, loading } = useHttp();
	const { login, logout, isAuthenticated, user } = useAuth();

	useEffect(() => {
		async () => {
			const data = await JSON.parse(AsyncStorage.getItem(ASYNC_STORAGE_AUTH) || '{}');
			const { token, userId } = data;
			if (data && token && userId && typeof token === 'string' && typeof userId === 'string') {
				login(data as IUser);
			}
		};
	}, []);

	const signOutChangeHandler = () => {
		setIsSignOutOpen(!isSignOutOpen);
	};

	return (
		<Provider store={store}>
			<View style={styles.mainContainer}>
				<TabBar signOutChangeHandler={signOutChangeHandler} />

				<Modal animationType="fade" visible={isSignOutOpen} onRequestClose={signOutChangeHandler} transparent={true}>
					<View style={styles.signOutModalContainer}>
						<Text style={styles.signOutModalText}>Sign Out</Text>
						<Button title="Close modal" onPress={signOutChangeHandler} />
					</View>
				</Modal>
			</View>
		</Provider>
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
