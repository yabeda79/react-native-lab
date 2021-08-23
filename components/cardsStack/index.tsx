import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from '../headerTitle';
import HeaderRightBtn from '../headerrightbtn';
import HeaderBackBtn from '../headerBackBtn';
import HeaderLeftBtn from '../headerleftbtn';
import Profile from '../../screens/profile';
import Cards from '../../screens/cards';

const Stack = createStackNavigator();

const CardsStack: FC = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: true,
			}}>
			<Stack.Screen
				name="CardsScreen"
				component={Cards}
				options={({ navigation }) => ({
					headerLeft: () => <HeaderLeftBtn />,
					headerRight: () => <HeaderRightBtn navigation={navigation} />,
					headerTitle: () => <HeaderTitle title="Cards" subtitle="" />,
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

export default CardsStack;
