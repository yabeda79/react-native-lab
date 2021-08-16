import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '../../components/homeStack';
import AccountStack from '../../components/accountsStack';
import Giving from '../giving';
import Payments from '../payments';
import Cards from '../cards';

import { Image } from 'react-native-elements/dist/image/Image';

import { NavigationContainer } from '@react-navigation/native';

import HeaderLeftBtn from '../../components/headerleftbtn';
import HeaderRightBtn from '../../components/headerrightbtn';
import HeaderLogo from '../../components/headerlogo';

import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator();

interface ITabBar {
	signOutChangeHandler: () => void;
}

const TabBar: FC<ITabBar> = ({ signOutChangeHandler }) => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#F08080',
					tabBarBackground: () => <BlurView style={styles.blur} tint="light" intensity={90} />,
					tabBarStyle: {
						position: 'absolute',
					},

					headerShown: true,
					headerLeft: () => <HeaderLeftBtn />,
					headerRight: () => <HeaderRightBtn signOutChangeHandler={signOutChangeHandler} />,
					// headerTitle: () => <HeaderLogo />,
					headerStyle: {
						backgroundColor: '#F08080',
					},
				}}>
				<Tab.Screen
					name="Home"
					component={HomeStack}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Image
									source={require('../../Assets/Images/home.png')}
									style={focused ? styles.activeIcon : styles.icon}
								/>
							</View>
						),
						headerTitle: () => <HeaderLogo />,
					}}
				/>
				<Tab.Screen
					name="Accounts"
					component={AccountStack}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Image
									source={require('../../Assets/Images/accounts.png')}
									style={focused ? styles.activeIcon : styles.icon}
								/>
							</View>
						),
						// insert custom headerlogo component
					}}
				/>
				<Tab.Screen
					name="Giving"
					component={Giving}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Image
									source={require('../../Assets/Images/giving.png')}
									style={focused ? styles.activeIcon : styles.icon}
								/>
							</View>
						),
					}}
				/>
				<Tab.Screen
					name="Payments"
					component={Payments}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Image
									source={require('../../Assets/Images/payment.png')}
									style={focused ? styles.activeIcon : styles.icon}
								/>
							</View>
						),
					}}
				/>
				<Tab.Screen
					name="Cards"
					component={Cards}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Image
									source={require('../../Assets/Images/cards.png')}
									style={focused ? styles.activeIcon : styles.icon}
								/>
							</View>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};
export default TabBar;

const styles = StyleSheet.create({
	mainContainer: {
		// width: '100%',
		flexDirection: 'row',
		height: 50,
		// position: 'absolute',
		// backgroundColor: 'purple',
		zIndex: 3,
		justifyContent: 'space-between',
		alignContent: 'center',
	},
	iconContainer: {
		// flex: 1,
		// backgroundColor: 'black',
		// width: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: 25,
		height: 25,
		tintColor: '#000',
	},
	activeIcon: {
		width: 25,
		height: 25,
		tintColor: '#F08080',
	},
	blur: {
		height: 1000,
	},
});
