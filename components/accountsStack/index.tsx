import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Saving from '../../screens/saving';
import Cheking from '../../screens/cheking';
import Accounts from '../../screens/accounts';

const Stack = createStackNavigator();

const AccountStack: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}>
			<Stack.Screen name="Accounts Screen" component={Accounts} />
			<Stack.Screen name="Saving" component={Saving} />
			<Stack.Screen name="Checking" component={Cheking} />
		</Stack.Navigator>
	);
};

export default AccountStack;
