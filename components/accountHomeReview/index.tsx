import React, { FC } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { vw, vh } from '../../variables';

interface IAccountHomeReview {
	navigateToHandler: (value: string) => void;
}

const AccountHomeReview: FC<IAccountHomeReview> = ({ navigateToHandler }) => {
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.mainTitle}>Accounts Overview</Text>
			<Text style={styles.cashText}>
				$7000,<Text style={styles.lowerText}>00</Text>
			</Text>
			<View style={styles.liContainer}>
				<Text style={styles.mainLiText}>Checking</Text>
				<Text style={styles.lightLiText}>Main account (...1488)</Text>
				<Text style={styles.liCash}>
					$1500<Text style={styles.liLowerCash}>26</Text>
				</Text>
				<TouchableOpacity style={styles.liNavBtn} onPress={() => navigateToHandler('Checking')}>
					<Image style={styles.liNavBtnImg} source={require('../../Assets/Images/back.png')} />
				</TouchableOpacity>
			</View>
			<View style={styles.liContainer}>
				<Text style={styles.mainLiText}>Saving</Text>
				<Text style={styles.lightLiText}>Main account (...1488)</Text>
				<Text style={styles.liCash}>
					$1500<Text style={styles.liLowerCash}>26</Text>
				</Text>
				<TouchableOpacity style={styles.liNavBtn}>
					<Image style={styles.liNavBtnImg} source={require('../../Assets/Images/back.png')} />
				</TouchableOpacity>
			</View>
			<View style={styles.liContainer}>
				<Text style={styles.mainLiText}>Cheking</Text>
				<Text style={styles.lightLiText}>Main account (...1488)</Text>
				<Text style={styles.liCash}>
					$1500<Text style={styles.liLowerCash}>26</Text>
				</Text>
				<TouchableOpacity style={styles.liNavBtn}>
					<Image style={styles.liNavBtnImg} source={require('../../Assets/Images/back.png')} />
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AccountHomeReview;

const styles = StyleSheet.create({
	mainContainer: {
		width: 90 * vw,
		height: 40 * vh,
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
		height: '26%',
		width: '100%',
		backgroundColor: 'pink',
		borderWidth: 1,
		borderColor: 'black',
	},
	mainLiText: {
		fontSize: 20,
		fontWeight: '300',
		padding: 5,
	},
	lightLiText: {
		fontSize: 14,
		color: '#5e5e5e',
	},
	liCash: {},
	liLowerCash: {},
	liNavBtn: {},
	liNavBtnImg: {
		position: 'absolute',
		// backgroundColor: '#F08080',
		tintColor: '#F08080',
		bottom: 0,
		right: 5,
		transform: [{ rotateY: '180deg' }],
	},
});
