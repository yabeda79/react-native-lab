import React, { FC } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, TouchableOpacity, Image } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootAccountsStackParams } from '../../components/accountsStack';

import { summary, savingsCash, chekingCash, goodnessCash, vh, vw } from '../../variables';

type AccountsScreenNavProp = StackNavigationProp<RootAccountsStackParams, 'AccountsScreen'>;

interface IAccounts {
	navigation: AccountsScreenNavProp;
}

const BUTTONS = [
	{
		id: 1,
		source: require('../../Assets/Images/circleButtonSend3x.png'),
		title: 'Send',
	},
	{
		id: 2,
		source: require('../../Assets/Images/circleButtonPay3x.png'),
		title: 'Pay',
	},
	{
		id: 3,
		source: require('../../Assets/Images/circleButtonChecking3x.png'),
		title: 'Transfer',
	},
];

const Accounts: FC<IAccounts> = ({ navigation }) => {
	const navigateToHandler = (path: string) => {
		switch (path) {
			case 'Saving':
				navigation.navigate('Saving');
				break;
			case 'Checking':
				navigation.navigate('Checking');
				break;
			default:
				break;
		}
	};

	return (
		<ScrollView style={styles.mainContainer}>
			<View style={styles.summaryContainer}>
				<Text style={styles.summaryText}>
					${summary.split('.')[0]}.
					<Text style={styles.summaryLowerText}>
						{summary.split('.')[1].length === 1 ? summary.split('.')[1] + '0' : summary.split('.')[1]}
					</Text>
				</Text>
				<Text style={styles.totalText}>Total available cash</Text>
				<View style={styles.btnMainContainer}>
					{BUTTONS.map(({ id, source, title }) => (
						<TouchableOpacity style={styles.btnContainer} key={id}>
							<Image style={styles.btnImage} source={source} />
							<Text style={styles.btnTitle}>{title}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
			<View style={styles.linkContainer}>
				<TouchableOpacity style={styles.liContainer} onPress={() => navigateToHandler('Checking')}>
					<Text style={styles.mainLiText}>Checking</Text>
					<Text style={styles.lightLiText}>Main account (...1488)</Text>
					<Text style={styles.liCash}>
						${chekingCash.split('.')[0]}.<Text style={styles.liLowerCash}>{chekingCash.split('.')[1]}</Text>
					</Text>
					<View style={styles.liNavBtn}>
						<Image style={styles.liNavBtnImg} source={require('../../Assets/Images/back.png')} />
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.linkContainer}>
				<TouchableOpacity style={styles.liContainer} onPress={() => navigateToHandler('Saving')}>
					<Text style={styles.mainLiText}>Savings</Text>
					<Text style={styles.lightLiText}>Buy a house (...1488)</Text>
					<Text style={styles.liCash}>
						${savingsCash.split('.')[0]}.<Text style={styles.liLowerCash}>{savingsCash.split('.')[1]}</Text>
					</Text>
					<View style={styles.liNavBtn}>
						<Image style={styles.liNavBtnImg} source={require('../../Assets/Images/back.png')} />
					</View>
				</TouchableOpacity>
			</View>
			<View style={styles.linkContainer}>
				<TouchableOpacity style={styles.liContainer}>
					<Text style={styles.mainLiText}>Goodness</Text>
					<Image style={styles.goodnessLogo} source={require('../../Assets/Images/heart.png')} />
					<Text style={styles.lightLiText}>Cash Rewards</Text>
					<Text style={styles.liCash}>
						${goodnessCash.split('.')[0]}.<Text style={styles.liLowerCash}>{goodnessCash.split('.')[1]}</Text>
					</Text>
					<View style={styles.liNavBtn}>
						<Image style={styles.liNavBtnImg} source={require('../../Assets/Images/back.png')} />
					</View>
				</TouchableOpacity>
			</View>

			{/* <Text>Accounts</Text>
			<Button title="Go to Saving" onPress={() => navigation.navigate('Saving')} />
			<Button title="Go to Checking" onPress={() => navigation.navigate('Checking')} /> */}
		</ScrollView>
	);
};
export default Accounts;

const styles = StyleSheet.create({
	mainContainer: {},
	summaryContainer: {
		alignItems: 'center',
		marginVertical: 30,
	},
	summaryText: {
		fontSize: 28,
		fontWeight: '300',
		marginVertical: 5,
	},
	summaryLowerText: {
		fontSize: 18,
	},
	totalText: {
		fontSize: 14,
		color: '#5e5e5e',
	},
	btnMainContainer: {
		// justifyContent: 'space-between',
		flexDirection: 'row',
		alignItems: 'flex-start',
	},
	btnContainer: {
		marginHorizontal: 20,
		marginVertical: 20,
	},
	btnImage: {
		width: 60,
		height: 60,
		resizeMode: 'contain',
	},
	btnTitle: {
		alignSelf: 'center',
	},
	linkContainer: {
		height: 9 * vh,
		width: 90 * vw,
		alignSelf: 'center',
		borderRadius: 10,
		backgroundColor: '#fff',
		marginBottom: 15,
	},
	tabBarContainer: {
		position: 'absolute',
		width: '100%',
		bottom: 20,
	},
	liContainer: {
		height: '100%',
		width: '100%',
		// backgroundColor: 'pink',
		// borderBottomWidth: 1,
		// borderColor: '#919090',
		marginHorizontal: 5,
		marginVertical: 5,
	},
	mainLiText: {
		fontSize: 20,
		fontWeight: '300',
		padding: 5,
	},
	lightLiText: {
		fontSize: 14,
		color: '#5e5e5e',
		left: 5,
	},
	liCash: {
		position: 'absolute',
		right: 30,
		top: 20,
		fontSize: 24,
		fontWeight: '300',
		marginVertical: 5,
	},
	liLowerCash: { fontSize: 18 },
	liNavBtn: {},
	liNavBtnImg: {
		position: 'absolute',
		// backgroundColor: '#F08080',
		tintColor: '#F08080',
		bottom: 5,
		right: 10,
		transform: [{ rotateY: '180deg' }],
	},
	goodnessLogo: {
		position: 'absolute',
		left: 100,
		top: 10,
	},
});
