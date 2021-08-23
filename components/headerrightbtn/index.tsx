import React, { FC } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootHomeStackParams } from '../../components/homeStack';

type ProfileScreenNavProp = StackNavigationProp<RootHomeStackParams, 'Profile'>;

interface IHeaderRightBtn {
	navigation: ProfileScreenNavProp;
}

const HeaderRightBtn: FC<IHeaderRightBtn> = ({ navigation }) => {
	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Profile');
			}}>
			<Image style={styles.menuBtn} source={require('../../Assets/Images/avatar.png')} />
		</TouchableOpacity>
	);
};

export default HeaderRightBtn;

const styles = StyleSheet.create({
	menuBtn: {
		width: 30,
		height: 30,
		marginLeft: 10,
		marginRight: 10,
		// marginBottom: 14,
		zIndex: 2,
	},
});
