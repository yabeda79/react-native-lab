import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';
import Saving from '../../screens/saving';
import Cheking from '../../screens/cheking';

const Stack = createStackNavigator();

const HomeStack: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="Home Screen" component={Home} />
			<Stack.Screen name="Saving" component={Saving} />
			<Stack.Screen name="Checking" component={Cheking} />
		</Stack.Navigator>
	);
};

export default HomeStack;
