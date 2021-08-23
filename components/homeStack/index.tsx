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
import Profile from '../../screens/profile';

export type RootHomeStackParams = {
	HomeScreen: undefined;
	Saving: undefined;
	Checking: undefined;
	Profile: undefined;
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
				options={({ navigation }) => ({
					headerLeft: () => <HeaderLeftBtn />,
					headerRight: () => <HeaderRightBtn navigation={navigation} />,
					headerTitle: () => <HeaderLogo />,
					headerStyle: {
						backgroundColor: '#F08080',
					},
				})}
			/>
			<Stack.Screen
				name="Saving"
				component={Saving}
				options={({ navigation }) => ({
					headerRight: () => <HeaderRightBtn navigation={navigation} />,
					headerTitle: () => <HeaderTitle title="Saving" subtitle="Subtitle" />,
					headerBackTitleVisible: false,
					headerBackImage: () => <HeaderBackBtn />,
					headerStyle: {
						backgroundColor: '#F08080',
					},
				})}
			/>
			<Stack.Screen
				name="Checking"
				component={Cheking}
				options={({ navigation }) => ({
					headerRight: () => <HeaderRightBtn navigation={navigation} />,
					headerTitle: () => <HeaderTitle title="Checking" subtitle="Subtitle" />,
					headerBackTitleVisible: false,
					headerBackImage: () => <HeaderBackBtn />,
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

export default HomeStack;
