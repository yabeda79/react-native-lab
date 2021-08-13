import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../home';
import Accounts from '../accounts';
import Giving from '../giving';
import Payments from '../payments';
import Cards from '../cards';
import { Image } from 'react-native-elements/dist/image/Image';

import { BlurView } from 'expo-blur';
const Tab = createBottomTabNavigator();

const TabBar: FC = ({ navigation }) => {
	return (
		// <Tab.Navigator
		// 	screenOptions={{
		// 		tabBarActiveTintColor: '#F08080',
		// 		tabBarBackground: () => <BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill} />,
		// 		headerShown: false,
		// 	}}>
		// 	<Tab.Screen
		// 		name="Home"
		// 		component={Home}
		// 		options={{
		// 			tabBarIcon: ({ focused }) => (
		// 				<View>
		// 					<Image
		// 						source={require('../../Assets/Images/home.png')}
		// 						style={focused ? styles.activeIcon : styles.icon}
		// 					/>
		// 				</View>
		// 			),
		// 		}}
		// 	/>
		// 	<Tab.Screen
		// 		name="Accounts"
		// 		component={Accounts}
		// 		options={{
		// 			tabBarIcon: ({ focused }) => (
		// 				<View>
		// 					<Image
		// 						source={require('../../Assets/Images/accounts.png')}
		// 						style={focused ? styles.activeIcon : styles.icon}
		// 					/>
		// 				</View>
		// 			),
		// 		}}
		// 	/>
		// 	<Tab.Screen
		// 		name="Giving"
		// 		component={Giving}
		// 		options={{
		// 			tabBarIcon: ({ focused }) => (
		// 				<View>
		// 					<Image
		// 						source={require('../../Assets/Images/giving.png')}
		// 						style={focused ? styles.activeIcon : styles.icon}
		// 					/>
		// 				</View>
		// 			),
		// 		}}
		// 	/>
		// 	<Tab.Screen
		// 		name="Payments"
		// 		component={Payments}
		// 		options={{
		// 			tabBarIcon: ({ focused }) => (
		// 				<View>
		// 					<Image
		// 						source={require('../../Assets/Images/payment.png')}
		// 						style={focused ? styles.activeIcon : styles.icon}
		// 					/>
		// 				</View>
		// 			),
		// 		}}
		// 	/>
		// 	<Tab.Screen
		// 		name="Cards"
		// 		component={Cards}
		// 		options={{
		// 			tabBarIcon: ({ focused }) => (
		// 				<View>
		// 					<Image
		// 						source={require('../../Assets/Images/cards.png')}
		// 						style={focused ? styles.activeIcon : styles.icon}
		// 					/>
		// 				</View>
		// 			),
		// 		}}
		// 	/>
		// </Tab.Navigator>

		<BlurView tint="light" intensity={100} style={StyleSheet.absoluteFill}>
			<View style={styles.mainContainer}>
				<TouchableOpacity>
					<View style={styles.iconContainer}>
						<Image
							source={require('../../Assets/Images/home.png')}
							// style={focused ? styles.activeIcon : styles.icon}
							style={styles.icon}
						/>
						<Text>Home</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.iconContainer}>
						<Image
							source={require('../../Assets/Images/accounts.png')}
							// style={focused ? styles.activeIcon : styles.icon}
							style={styles.icon}
						/>
						<Text>Accounts</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.iconContainer}>
						<Image
							source={require('../../Assets/Images/giving.png')}
							// style={focused ? styles.activeIcon : styles.icon}
							style={styles.icon}
						/>
						<Text>Giving</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.iconContainer}>
						<Image
							source={require('../../Assets/Images/payment.png')}
							// style={focused ? styles.activeIcon : styles.icon}
							style={styles.icon}
						/>
						<Text>Payment</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity>
					<View style={styles.iconContainer}>
						<Image
							source={require('../../Assets/Images/cards.png')}
							// style={focused ? styles.activeIcon : styles.icon}
							style={styles.icon}
						/>
						<Text>Cards</Text>
					</View>
				</TouchableOpacity>
			</View>
		</BlurView>
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
});
