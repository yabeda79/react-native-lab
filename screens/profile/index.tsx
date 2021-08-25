import React, { FC, useState, useEffect } from 'react';
import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	Image,
	TextInput,
	TouchableOpacity,
	Platform,
	Modal,
	Button,
} from 'react-native';
import { useSelector } from 'react-redux';
import { useAuth } from '../../hooks/auth.hook';
import { useHttp } from '../../hooks/http.hook';
import { IUser } from '../../redux/initialState';
import { getUserSelector } from '../../redux/selectors';
import { isAuthenticatedSelector } from '../../redux/selectors';
import { vh, vw } from '../../variables';

import DateTimePicker from '@react-native-community/datetimepicker';

interface IChangeData {
	username?: string;
	description?: string;
	email?: string;
	dateOfBirth: string | undefined;
}

const PROFILE_IMAGES = [
	{
		id: 1,
		source: require('../../Assets/Images/oval3x.png'),
	},
	{
		id: 2,
		source: require('../../Assets/Images/avatar3x.png'),
	},
];

const Profile: FC = () => {
	const user = useSelector(getUserSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);

	let profileImage = { source: require('../../Assets/Images/oval3x.png') };

	// add get request logic (initial data)
	// add post request logic (changing profile data)
	console.log(user);

	const [chagedData, setChangedData] = useState<IChangeData>({
		username: user?.username,
		email: user?.email,
		description: user?.description,
		dateOfBirth: user?.dateOfBirth,
	});

	const [userNameActive, setUserNameActive] = useState(false);
	const [emailActive, setEmailActive] = useState(false);
	const [descriptionActive, setDescriptionActive] = useState(false);
	const [isEditorMode, setEditorMode] = useState(false);
	const [showDatePicker, setShowDatePicker] = useState(true);
	const [date, setDate] = useState(new Date());
	const [isChooseImage, setIsChooseImage] = useState(false);
	// const [image, setImage] = useState();
	// const [date, setDate] = useState(user?.dateOfBirth ? user.dateOfBirth : new Date());

	const inputHandler = (text: string, name: string) => {
		setChangedData({ ...chagedData, [name]: text });
	};

	const dateHandler = (event, selectedDate: Date) => {
		const currentDate = selectedDate || date;
		setShowDatePicker(Platform.OS === 'ios');
		setChangedData({ ...chagedData, dateOfBirth: currentDate.toString() });
	};

	// console.log(chagedData);

	const { request } = useHttp();
	const { login } = useAuth();

	// const getProfile = async () => {
	// 	const data = await request('/api/info', 'GET', { email: user?.email });
	// };

	// useEffect(() => {
	// 	getProfile();
	// }, []);

	const confirmChangesHandler = async () => {
		const data = await request('/api/profile/save', 'POST', chagedData);
		login(data as IUser);
	};

	const changeImageHandler = (source) => {
		profileImage.source = source;
		// {...profileImage, source: source}
	};

	console.log(profileImage);

	return (
		<ScrollView>
			<View style={styles.avatarImageContainer}>
				<TouchableOpacity
					onPress={() => {
						setIsChooseImage(true);
					}}>
					<Image
						style={styles.avatarImage}
						source={isAuthenticated ? profileImage : require('../../Assets/Images/avatar3x.png')}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.btnContainer}>
				{isEditorMode ? (
					<View>
						<TouchableOpacity
							style={styles.editBtn}
							onPress={() => {
								setEditorMode(false);
								confirmChangesHandler();
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
						style={!userNameActive ? styles.input : styles.inputActive}
						placeholder="Change your username"
						defaultValue={user?.username ? user.username : 'Username'}
						onChangeText={(text) => inputHandler(text, 'username')}
						onFocus={() => {
							setUserNameActive(true);
							setEmailActive(false);
							setDescriptionActive(false);
							// setPasswordActive(false);
						}}
					/>
				) : (
					<Text style={styles.profileText}>{user?.username ? user.username : 'Username'}</Text>
				)}
			</View>
			<View style={styles.emailInputContainer}>
				<Text style={styles.inputLabel}>Email:</Text>
				{isEditorMode ? (
					<TextInput
						style={!emailActive ? styles.input : styles.inputActive}
						placeholder="Change your email address"
						defaultValue={user?.email ? user.email : 'Email'}
						onChangeText={(text) => inputHandler(text, 'email')}
						onFocus={() => {
							setUserNameActive(false);
							setEmailActive(true);
							setDescriptionActive(false);
						}}
					/>
				) : (
					<Text style={styles.profileText}>{user?.email ? user.email : 'Email'}</Text>
				)}
			</View>
			<View style={styles.descriptionInputContainer}>
				<Text style={styles.inputLabel}>Description:</Text>
				{isEditorMode ? (
					<TextInput
						style={!descriptionActive ? styles.input : styles.inputActive}
						numberOfLines={4}
						defaultValue={user?.description ? user.description : 'Description'}
						placeholder="Some interesting about you"
						onChangeText={(text) => inputHandler(text, 'description')}
						onFocus={() => {
							setDescriptionActive(true);
							setEmailActive(false);
							setUserNameActive(false);
						}}
					/>
				) : (
					<Text style={styles.profileText}>{user?.description ? user.description : 'Description'}</Text>
				)}
			</View>
			<View style={styles.datePickerContainer}>
				<Text style={styles.inputLabel}>Date of birth:</Text>
				{isEditorMode ? (
					showDatePicker && (
						<>
							<DateTimePicker
								style={styles.datePicker}
								testID="dateTimePicker"
								value={date}
								mode="date"
								is24Hour={true}
								display="default"
								onChange={dateHandler}
							/>
						</>
					)
				) : (
					<Text style={styles.datePickerText}>{user?.dateOfBirth ? user.dateOfBirth.slice(0, 16) : '123'}</Text>
				)}
			</View>
			<Modal
				animationType="fade"
				visible={isChooseImage}
				onRequestClose={() => {
					setIsChooseImage(false);
				}}
				transparent={true}>
				<View style={styles.modalContainer}>
					<Text style={styles.modalText}>Choose your profile image</Text>
					{PROFILE_IMAGES.map(({ source, id }) => (
						<TouchableOpacity
							key={id}
							onPress={() => {
								changeImageHandler(source);
								setIsChooseImage(false);
							}}>
							<View style={styles.modalImgContainer}>
								<Image style={styles.modalImg} source={source} />
							</View>
						</TouchableOpacity>
					))}

					<View style={styles.modalBtnContainer}>
						<TouchableOpacity
							onPress={() => {
								setIsChooseImage(false);
							}}>
							<Text style={styles.modalCloseBtnText}>Close window</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
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
		marginTop: 18,
		fontSize: 20,
	},
	datePickerContainer: {
		position: 'absolute',
		top: 62 * vh, // 220
		width: '100%',
		padding: 20,
	},
	datePicker: {
		position: 'absolute',
		top: 14,
		left: 150,
		width: 150,
	},
	datePickerText: {
		position: 'absolute',
		top: 20,
		left: 150,
		width: 200,
		fontSize: 20,
	},
	modalContainer: {
		width: 80 * vw,
		position: 'absolute',
		alignSelf: 'center',
		top: 25 * vh,
		backgroundColor: '#fff',
		borderRadius: 30,
		padding: 10,
		height: 50 * vh,
	},
	modalText: {
		fontSize: 18,
		alignSelf: 'center',
	},
	modalImgContainer: {
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		// height: 50 * vh,
	},
	modalImg: {
		width: 100,
		height: 100,
		resizeMode: 'contain',
		marginHorizontal: 20,
		marginVertical: 10,
		// borderWidth: 1,
	},
	modalBtnContainer: {
		alignSelf: 'center',
		fontSize: 16,
		height: 20,
		position: 'absolute',
		// top: 0,
		bottom: 30,
	},
	modalCloseBtnText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#3532e2',
	},
});
