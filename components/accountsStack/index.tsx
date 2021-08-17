import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Saving from '../../screens/saving';
import Cheking from '../../screens/cheking';
import Accounts from '../../screens/accounts';
import HeaderLeftBtn from '../headerleftbtn';
import HeaderBackBtn from '../headerBackBtn';
import HeaderRightBtn from '../headerrightbtn';
import HeaderTitle from '../headerTitle';

export type RootAccountsStackParams = {
	AccountsScreen: undefined;
	Saving: undefined;
	Checking: undefined;
};

const Stack = createStackNavigator<RootAccountsStackParams>();

const AccountStack: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
			}}>
			<Stack.Screen
				name="AccountsScreen"
				component={Accounts}
				options={{
					headerLeft: () => <HeaderLeftBtn />,
					headerRight: () => <HeaderRightBtn />,
					headerTitle: () => <HeaderTitle title="Accounts" subtitle={null} />,
					headerStyle: {
						backgroundColor: '#F08080',
					},
				}}
			/>
			<Stack.Screen
				name="Saving"
				component={Saving}
				options={{
					headerRight: () => <HeaderRightBtn />,
					headerTitle: () => <HeaderTitle title="Saving" subtitle="Subtitle" />,
					headerBackTitleVisible: false,
					headerBackImage: () => <HeaderBackBtn />,
					headerStyle: {
						backgroundColor: '#F08080',
					},
				}}
			/>
			<Stack.Screen
				name="Checking"
				component={Cheking}
				options={{
					headerRight: () => <HeaderRightBtn />,
					headerTitle: () => <HeaderTitle title="Checking" subtitle="Subtitle" />,
					headerBackTitleVisible: false,
					headerBackImage: () => <HeaderBackBtn />,
					headerStyle: {
						backgroundColor: '#F08080',
					},
				}}
			/>
		</Stack.Navigator>
	);
};

export default AccountStack;
