import React, { FC, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
// import { getUserSelector } from '../../redux/selectors';
import { isAuthenticatedSelector } from '../../redux/selectors';
import { vh, vw } from '../../variables';

interface IChangeData {
	username?: string;
	description?: string;
	email?: string;
}

const Profile: FC = () => {
	// const user = useSelector(getUserSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);

	// add get request logic (initial data)
	// add post request logic (changing profile data)

	const [chagedData, setChangedData] = useState<IChangeData>();
	const [emailActive, setEmailActive] = useState(false);
	const [descriptionActive, setDescriptionActive] = useState(false);
	const [isEditorMode, setEditorMode] = useState(false);

	const inputHandler = (text: string, name: string) => {
		setChangedData({ ...chagedData, [name]: text });
	};

	return (
		<ScrollView>
			<View style={styles.avatarImageContainer}>
				<Image
					style={styles.avatarImage}
					source={
						isAuthenticated ? require('../../Assets/Images/oval3x.png') : require('../../Assets/Images/oval3x.png')
					}
				/>
			</View>
			<View style={styles.btnContainer}>
				{isEditorMode ? (
					<View>
						<TouchableOpacity
							style={styles.editBtn}
							onPress={() => {
								setEditorMode(false);
							}}>
							<Text style={styles.btnText}>Save changes</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.cancelBtn}
							onPress={() => {
								setEditorMode(false);
							}}>
							<Text style={styles.btnText}>Cancel</Text>
						</TouchableOpacity>
					</View>
				) : (
					<TouchableOpacity
						style={styles.editBtn}
						onPress={() => {
							setEditorMode(true);
						}}>
						<Text style={styles.btnText}>Edit profile</Text>
					</TouchableOpacity>
				)}
			</View>
			<View style={styles.usernameInputContainer}>
				<Text style={styles.inputLabel}>Username:</Text>
				{isEditorMode ? (
					<TextInput
						style={!emailActive ? styles.input : styles.inputActive}
						placeholder="Change your username"
						onChangeText={(text) => inputHandler(text, 'username')}
						onFocus={() => {
							setEmailActive(true);
							// setPasswordActive(false);
						}}
					/>
				) : (
					<Text style={styles.profileText}>Username</Text>
				)}
			</View>
			<View style={styles.emailInputContainer}>
				<Text style={styles.inputLabel}>Email:</Text>
				{isEditorMode ? (
					<TextInput
						style={!emailActive ? styles.input : styles.inputActive}
						placeholder="Change your email address"
						onChangeText={(text) => inputHandler(text, 'email')}
						onFocus={() => {
							setEmailActive(true);
							setDescriptionActive(false);
						}}
					/>
				) : (
					<Text style={styles.profileText}>Email</Text>
				)}
			</View>
			<View style={styles.descriptionInputContainer}>
				<Text style={styles.inputLabel}>Description:</Text>
				{isEditorMode ? (
					<TextInput
						style={!descriptionActive ? styles.input : styles.inputActive}
						numberOfLines={4}
						placeholder="Some interesting about you"
						onChangeText={(text) => inputHandler(text, 'description')}
						onFocus={() => {
							setDescriptionActive(true);
							setEmailActive(false);
						}}
					/>
				) : (
					<Text style={styles.profileText}>Description</Text>
				)}
			</View>
		</ScrollView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	avatarImageContainer: {
		marginVertical: 15,
		marginHorizontal: 30,
	},
	btnContainer: {
		position: 'absolute',
		width: 100 * vw,
	},
	editBtn: {
		position: 'absolute',
		top: 30,
		right: 40,
		backgroundColor: '#F08080',
		width: 150,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	btnText: {
		fontSize: 18,
	},
	cancelBtn: {
		position: 'absolute',
		top: 80,
		right: 40,
		backgroundColor: '#F08080',
		width: 150,
		height: 40,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	avatarImage: {
		height: 130,
		width: 130,
	},
	usernameInputContainer: {
		position: 'absolute',
		top: 20 * vh, // 220
		width: '100%',
		padding: 20,
	},
	emailInputContainer: {
		position: 'absolute',
		top: 34 * vh, // 220
		width: '100%',
		padding: 20,
	},
	input: {
		height: 60,
		fontSize: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
	},
	inputActive: {
		height: 60,
		fontSize: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#F08080',
	},
	inputLabel: {
		fontSize: 20,
	},
	descriptionInputContainer: {
		position: 'absolute',
		top: 48 * vh, // 220
		width: '100%',
		padding: 20,
	},
	profileText: {
		marginTop: 30,
		fontSize: 20,
	},
});
