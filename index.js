/**
 * @format
 */
// import React from 'react';
import { AppRegistry } from 'react-native';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
import App from './App';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => (
// 	<Provider store={store}>
// 		<App />
// 	</Provider>
// ));

AppRegistry.registerComponent(appName, () => App);
