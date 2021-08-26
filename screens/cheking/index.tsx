import React, { FC, useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useHttp } from '../../hooks/http.hook';
import { chekingCash, vw, vh } from '../../variables';

const Cheking: FC = () => {
	const [chekingsList, setCheckingList] = useState<Record<string, string>[] | []>();
	// const [searchChekingsList, setSearchCheckingList] = useState<Record<string, string>[] | []>();
	// const [filters, setfilters] = useState<Record<string, string> | {}>();

	const { request } = useHttp();

	const getCheckingList = async () => {
		const res = await request('/api/deposits/all');
		setCheckingList(res);
		// setSearchCheckingList(res);
	};

	const searchHandler = (text) => {};

	useEffect(() => {
		getCheckingList();
	}, []);

	return (
		<ScrollView style={{ marginBottom: 100 }}>
			<View style={styles.mainContainer}>
				<Text style={styles.cashText}>
					${chekingCash.split('.')[0]}.
					<Text style={styles.cashLowerText}>
						{chekingCash.split('.')[1].length === 1 ? chekingCash.split('.')[1] + '0' : chekingCash.split('.')[1]}
					</Text>
				</Text>
				<Text style={styles.cashTotalText}>Total available cash</Text>
				<View style={styles.searchContainer}>
					<TextInput
						style={styles.input}
						placeholder="Search transactions"
						onChangeText={(text) => searchHandler(text)}
					/>
					<TouchableOpacity style={styles.filterBtn}>
						<Text style={styles.filterBtnText}>Filter by</Text>
					</TouchableOpacity>
				</View>
				{chekingsList?.map(({ title, amount, card, description, isSpecial }) => {
					return (
						<View style={styles.linkContainer}>
							<TouchableOpacity style={styles.liContainer}>
								<Text style={isSpecial ? styles.specialMainLiText : styles.mainLiText}>{title}</Text>
								<Text style={isSpecial ? styles.specialLightLiText : styles.lightLiText}>
									{description} | {card}
								</Text>
								<Text style={isSpecial ? styles.specialLiCash : styles.liCash}>
									${amount.split('.')[0]}.<Text style={styles.liLowerCash}>{amount.split('.')[1]}</Text>
								</Text>
							</TouchableOpacity>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};
export default Cheking;

const styles = StyleSheet.create({
	mainContainer: {
		alignItems: 'center',
		paddingVertical: 30,
	},
	cashText: {
		fontSize: 28,
		fontWeight: '300',
		marginVertical: 5,
	},
	cashLowerText: {
		fontSize: 18,
	},
	cashTotalText: {
		fontSize: 14,
		color: '#5e5e5e',
	},
	searchContainer: {
		display: 'flex',
		width: 90 * vw,
		position: 'relative',
		marginVertical: 30,
	},
	input: {
		height: 30,
		width: 60 * vw,
		paddingLeft: 15,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#8a8585',
		borderRadius: 15,
		backgroundColor: '#fff',
		alignSelf: 'flex-start',
	},
	filterBtn: {
		position: 'absolute',
		right: 0,
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
		height: 9 * vh,
		width: 90 * vw,
		alignSelf: 'center',
		borderRadius: 10,
		backgroundColor: '#fff',
		marginBottom: 15,
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
