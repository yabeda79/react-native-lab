import React, { FC } from 'react';
import { StyleSheet, Text, View, ScrollView, Button } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootAccountsStackParams } from '../../components/accountsStack';

type AccountsScreenNavProp = StackNavigationProp<RootAccountsStackParams, 'AccountsScreen'>;

interface IAccounts {
	navigation: AccountsScreenNavProp;
}

const Accounts: FC<IAccounts> = ({ navigation }) => {
	return (
		<ScrollView style={styles.mainContainer}>
			<View style={styles.mainContainer}>
				<Text>Accounts</Text>
				<Button title="Go to Saving" onPress={() => navigation.navigate('Saving')} />
				<Button title="Go to Checking" onPress={() => navigation.navigate('Checking')} />
			</View>
		</ScrollView>
	);
};
export default Accounts;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		height: 10000,
	},
	tabBarContainer: {
		position: 'absolute',
		width: '100%',
		bottom: 20,
	},
});
