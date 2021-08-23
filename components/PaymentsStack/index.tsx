import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from '../headerTitle';
import HeaderRightBtn from '../headerrightbtn';
import HeaderBackBtn from '../headerBackBtn';
import HeaderLeftBtn from '../headerleftbtn';
import Payments from '../../screens/payments';
import Profile from '../../screens/profile';

const Stack = createStackNavigator();

const PaymentsStack: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
			}}>
			<Stack.Screen
				name="PaymentsScreen"
				component={Payments}
				options={({ navigation }) => ({
					headerLeft: () => <HeaderLeftBtn />,
					headerRight: () => <HeaderRightBtn navigation={navigation} />,
					headerTitle: () => <HeaderTitle title="Payments" subtitle="" />,
					headerStyle: {
						backgroundColor: '#F08080',
					},
				})}
			/>
			<Stack.Screen
				name="Profile"
				component={Profile}
				options={({ navigation }) => ({
					headerRight: () => <HeaderRightBtn navigation={navigation} />,
					headerTitle: () => <HeaderTitle title="Profile" subtitle="Subtitle" />,
					headerBackTitleVisible: false,
					headerBackImage: () => <HeaderBackBtn />,
					headerStyle: {
						backgroundColor: '#F08080',
					},
				})}
			/>
		</Stack.Navigator>
	);
};

export default PaymentsStack;
