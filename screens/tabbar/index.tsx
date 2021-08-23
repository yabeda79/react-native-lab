import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '../../components/homeStack';
import AccountStack from '../../components/accountsStack';
// import Giving from '../giving';
// import Payments from '../payments';
// import Cards from '../cards';

import { Image } from 'react-native-elements/dist/image/Image';

import { NavigationContainer } from '@react-navigation/native';

// import HeaderLeftBtn from '../../components/headerleftbtn';
// import HeaderRightBtn from '../../components/headerrightbtn';
// import HeaderLogo from '../../components/headerlogo';

import { BlurView } from 'expo-blur';
// import HeaderTitle from '../../components/headerTitle';
import GivingStack from '../../components/givingStack';
import PaymentsStack from '../../components/PaymentsStack';
import CardsStack from '../../components/cardsStack';

interface ITabBar {}

type RootTabParamList = {
	Home: undefined;
	Accounts: undefined;
	Giving: undefined;
	Payments: undefined;
	Cards: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabBar: FC<ITabBar> = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={{
					tabBarActiveTintColor: '#F08080',
					tabBarBackground: () => <BlurView style={styles.blur} tint="light" intensity={90} />,
					tabBarStyle: {
						position: 'absolute',
					},

					headerShown: false,
					// headerLeft: () => <HeaderLeftBtn />,
					// headerRight: () => <HeaderRightBtn />,
					// headerTitle: () => <HeaderLogo />,
					// headerStyle: {
					// 	backgroundColor: '#F08080',
					// },
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
						// headerTitle: () => <HeaderLogo />,
						// headerTitleStyle: {
						// 	color: '#fff',
						// },
						// headerShown: true,
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
						// headerTitle: () => <HeaderTitle title={'123'} subtitle={'321'} />,
						// headerTitleStyle: {
						// 	color: '#fff',
						// },
					}}
				/>
				<Tab.Screen
					name="Giving"
					component={GivingStack}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Image
									source={require('../../Assets/Images/giving.png')}
									style={focused ? styles.activeIcon : styles.icon}
								/>
							</View>
						),
						// headerShown: true,
						// headerTitleStyle: {
						// 	color: '#fff',
						// },
						// headerTitle: () => <HeaderTitle title="Giving" subtitle={null} />,
					}}
				/>
				<Tab.Screen
					name="Payments"
					component={PaymentsStack}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Image
									source={require('../../Assets/Images/payment.png')}
									style={focused ? styles.activeIcon : styles.icon}
								/>
							</View>
						),
						// headerShown: true,
						// headerTitleStyle: {
						// 	color: '#fff',
						// },
						// headerTitle: () => <HeaderTitle title="Payments" subtitle={null} />,
					}}
				/>
				<Tab.Screen
					name="Cards"
					component={CardsStack}
					options={{
						tabBarIcon: ({ focused }) => (
							<View>
								<Image
									source={require('../../Assets/Images/cards.png')}
									style={focused ? styles.activeIcon : styles.icon}
								/>
							</View>
						),
						// headerShown: true,
						// headerTitleStyle: {
						// 	color: '#fff',
						// },
						// tabBarShowLabel: false,
						// tabBarIconStyle: { display: 'none' },
						// tabBarLabelStyle: { display: 'none' },
						// headerTitle: () => <HeaderTitle title="Cards" subtitle={null} />,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};
export default TabBar;

const styles = StyleSheet.create({
	mainContainer: {
		flexDirection: 'row',
		height: 50,
		zIndex: 3,
		justifyContent: 'space-between',
		alignContent: 'center',
	},
	iconContainer: {
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
