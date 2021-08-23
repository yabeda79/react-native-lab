import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';
import Saving from '../../screens/saving';
import Cheking from '../../screens/cheking';
import HeaderLogo from '../headerlogo';
import HeaderLeftBtn from '../headerleftbtn';
import HeaderRightBtn from '../headerrightbtn';
import HeaderTitle from '../headerTitle';
import HeaderBackBtn from '../headerBackBtn';

export type RootHomeStackParams = {
	HomeScreen: undefined;
	Saving: undefined;
	Checking: undefined;
};

const Stack = createStackNavigator<RootHomeStackParams>();

const HomeStack: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
			}}>
			<Stack.Screen
				name="HomeScreen"
				component={Home}
				options={{
					headerLeft: () => <HeaderLeftBtn />,
					headerRight: () => <HeaderRightBtn />,
					headerTitle: () => <HeaderLogo />,
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

export default HomeStack;
