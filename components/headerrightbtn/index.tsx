import React, { FC, useEffect, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootHomeStackParams } from '../../components/homeStack';
import { useSelector } from 'react-redux';
import { getUserSelector } from '../../redux/selectors';

type ProfileScreenNavProp = StackNavigationProp<RootHomeStackParams, 'Profile'>;

interface IHeaderRightBtn {
	navigation: ProfileScreenNavProp;
}

const HeaderRightBtn: FC<IHeaderRightBtn> = ({ navigation }) => {
	const user = useSelector(getUserSelector);
	// const [image, setImage] = useState<string>();

	// useEffect(() => {
	// 	user?.profileImg ? setImage(user.profileImg) : setImage('../../Assets/Images/avatar.png');
	// }, []);

	return (
		<TouchableOpacity
			onPress={() => {
				navigation.navigate('Profile');
			}}>
			<Image
				style={styles.menuBtn}
				// source={user?.profileImg ? require(image) : require('../../Assets/Images/avatar.png')}
				source={require('../../Assets/Images/oval.png')}
			/>
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
