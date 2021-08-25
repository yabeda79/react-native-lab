import React, { FC } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { vw, vh, chekingCash, savingsCash, goodnessCash, summary } from '../../variables';

interface IAccountHomeReview {
	navigateToHandler: (value: string) => void;
}

const AccountHomeReview: FC<IAccountHomeReview> = ({ navigateToHandler }) => {
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.mainTitle}>Accounts Overview</Text>
			<Text style={styles.cashText}>
				${summary.split('.')[0]}.
				<Text style={styles.lowerText}>
					{summary.split('.')[1].length === 1 ? summary.split('.')[1] + '0' : summary.split('.')[1]}
				</Text>
			</Text>
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
	);
};

export default AccountHomeReview;

const styles = StyleSheet.create({
	mainContainer: {
		width: 90 * vw,
		height: 34 * vh,
		borderRadius: 10,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	mainTitle: {
		marginTop: 10,
		fontSize: 18,
		fontWeight: 'bold',
	},
	cashText: {
		fontSize: 24,
		fontWeight: '300',
		marginVertical: 5,
	},
	lowerText: {
		fontSize: 18,
	},
	liContainer: {
		height: '24%',
		width: '100%',
		// backgroundColor: 'pink',
		borderBottomWidth: 1,
		borderColor: '#919090',
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
		bottom: 0,
		right: 5,
		transform: [{ rotateY: '180deg' }],
	},
	goodnessLogo: {
		position: 'absolute',
		left: 100,
		top: 10,
	},
});
