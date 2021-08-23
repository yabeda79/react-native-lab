import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from '../headerTitle';
import HeaderRightBtn from '../headerrightbtn';
import HeaderBackBtn from '../headerBackBtn';
import HeaderLeftBtn from '../headerleftbtn';
import Giving from '../../screens/giving';
import Profile from '../../screens/profile';

const Stack = createStackNavigator();

const GivingStack: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
			}}>
			<Stack.Screen
				name="GivingScreen"
				component={Giving}
				options={({ navigation }) => ({
					headerLeft: () => <HeaderLeftBtn />,
					headerRight: () => <HeaderRightBtn navigation={navigation} />,
					headerTitle: () => <HeaderTitle title="Giving" subtitle="" />,
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

export default GivingStack;
