import React, { FC, useState, useEffect } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { ScrollView, Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { vw, vh, savingsCash } from '../../variables';

const Saving: FC = () => {
	const [chekingsList, setCheckingList] = useState<Record<string, string>[] | []>();

	const getToday = () => {
		return new Date().toString().slice(0, 10);
	};

	const getBalance = () => {
		return `$${Math.round(chekingsList?.reduce((sum, el) => sum + parseFloat(el.amount), 0) * 100) / 100}`;
	};

	const getDepositDate = (createdAt: string): string => {
		return createdAt.slice(11, 19);
		// return id.toString();
	};

	const { request } = useHttp();

	const getCheckingList = async () => {
		const res = await request('/api/deposits/all');
		setCheckingList(res);
		getToday();
	};

	useEffect(() => {
		getCheckingList();
	}, []);
	return (
		<ScrollView style={{ marginBottom: 100 }}>
			<View style={styles.mainContainer}>
				<Text style={styles.cashText}>
					${savingsCash.split('.')[0]}.
					<Text style={styles.cashLowerText}>
						{savingsCash.split('.')[1].length === 1 ? savingsCash.split('.')[1] + '0' : savingsCash.split('.')[1]}
					</Text>
				</Text>

				<Text style={styles.cashTotalText}>Total available cash</Text>
				<Image style={styles.graphImage} source={require('../../Assets/Images/savingsGraphV23x.png')} />
				<View style={styles.searchContainer}>
					<View style={styles.totalDepositTextContainer}>
						<Text style={styles.interestText}>Total interest gained</Text>
						<Text style={styles.interestGainedText}>+$50.00</Text>
						<Text style={styles.goodnessText}>Goodness points Gained</Text>
						<Text style={styles.goodenessGainedText}>+600</Text>
					</View>
					<TextInput
						style={styles.input}
						placeholder="Search transactions"
						// onChangeText={(text) => searchHandler(text)}
					/>
					<TouchableOpacity style={styles.filterBtn}>
						<Text style={styles.filterBtnText}>Filter by</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.linkContainer}>
					<Text style={styles.todayDate}>
						End of {getToday()} balance: {getBalance()}
					</Text>
					{chekingsList?.map(({ id, amount, createdAt }) => {
						return (
							<TouchableOpacity key={id} style={styles.liContainer}>
								<Text style={styles.specialMainLiText}>Deposit</Text>
								<Text style={styles.specialLightLiText}>completed at {getDepositDate(createdAt)}</Text>
								<Text style={styles.specialLiCash}>
									${amount.split('.')[0]}.<Text style={styles.liLowerCash}>{amount.split('.')[1]}</Text>
								</Text>
							</TouchableOpacity>
						);
					})}
				</View>
			</View>
		</ScrollView>
	);
};
export default Saving;

const styles = StyleSheet.create({
	mainContainer: {
		alignItems: 'center',
		paddingVertical: 30,
		backgroundColor: '#fff',
	},
	cashText: {
		fontSize: 28,
		fontWeight: '300',
		marginVertical: 5,
	},
	cashLowerText: {
		fontSize: 18,
	},
	graphImage: {
		width: 95 * vw,
		height: 30 * vh,
		resizeMode: 'contain',
	},
	cashTotalText: {
		fontSize: 14,
		color: '#5e5e5e',
	},
	searchContainer: {
		backgroundColor: '#f6f7fa',
		display: 'flex',
		width: 100 * vw,
		height: 130,
		position: 'relative',
		marginVertical: 30,
	},
	totalDepositTextContainer: {
		paddingHorizontal: 5 * vw,
		paddingVertical: 10,
	},
	interestText: {
		fontSize: 18,
		position: 'absolute',
		top: 10,
		left: 25,
	},
	interestGainedText: {
		fontSize: 18,
		color: 'green',
		position: 'absolute',
		top: 10,
		right: 25,
	},
	goodnessText: {
		fontSize: 18,
		position: 'absolute',
		top: 40,
		left: 25,
	},
	goodenessGainedText: {
		fontSize: 18,
		color: 'green',
		position: 'absolute',
		top: 40,
		right: 25,
	},
	input: {
		height: 30,
		width: 60 * vw,
		paddingLeft: 15,
		fontSize: 18,
		marginLeft: 5 * vw,
		borderWidth: 1,
		borderColor: '#8a8585',
		borderRadius: 15,
		backgroundColor: '#fff',
		// alignSelf: 'flex-start',
		position: 'absolute',
		bottom: vh,
	},
	filterBtn: {
		position: 'absolute',
		marginRight: 5 * vw,
		right: 0,
		bottom: vh,
		height: 30,
		width: 25 * vw,
		borderWidth: 1,
		borderColor: '#8a8585',
		borderRadius: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	filterBtnText: {},
	linkContainer: {
		// height: 150 * vh,
		paddingBottom: 20,
		width: 90 * vw,
		alignSelf: 'center',
		borderRadius: 10,
		backgroundColor: '#f6f7fa',
		// marginBottom: 15,
	},
	todayDate: {
		padding: 10,
	},
	liContainer: {
		height: 50,
		width: '100%',
		// borderBottomWidth: 1,
		// borderColor: '#8a2727',
		marginHorizontal: 5,
		marginVertical: 5,
		// paddingBottom: 10,
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
	specialMainLiText: {
		fontSize: 20,
		fontWeight: '300',
		padding: 5,
		color: 'green',
	},
	specialLightLiText: {
		fontSize: 14,
		// color: '#5e5e5e',
		left: 5,
		color: 'green',
	},
	specialLiCash: {
		position: 'absolute',
		right: 30,
		top: 20,
		fontSize: 24,
		fontWeight: '300',
		marginVertical: 5,
		color: 'green',
	},
	specialLiLowerCash: { fontSize: 18 },
});
