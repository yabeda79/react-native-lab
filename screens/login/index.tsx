import React, { FC, useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput,
	ScrollView,
	Alert,
	TouchableOpacity,
	ActivityIndicator,
	KeyboardAvoidingView,
} from 'react-native';
import { useHttp } from '../../hooks/http.hook';
import { useAuth } from '../../hooks/auth.hook';
import { IUser } from '../../redux/initialState';

import { vw, vh } from '../../variables';

type loginData = Record<string, string | null>;

const LoginScreen: FC = () => {
	const [loginData, setLoginData] = useState<loginData>();
	const [emailActive, setEmailActive] = useState(false);
	const [passwordActive, setPasswordActive] = useState(false);

	const { request, error, loading } = useHttp();
	const { login } = useAuth();

	const loginHandler = async () => {
		const data = await request('/api/auth/login', 'POST', loginData);
		login(data as IUser);
	};

	const inputHandler = (text: string, name: string) => {
		setLoginData({ ...loginData, [name]: text });
	};

	console.log((320 * 100) / 844);

	return (
		<ScrollView>
			<View style={styles.mainContainer}>
				<View style={styles.loginTextCon}>
					<Text style={styles.loginText}>Login</Text>
				</View>
				{error ? <Text style={styles.errorText}>{error}</Text> : null}
				<View style={styles.emailInputContainer}>
					<Text style={styles.inputLabel}>Email</Text>
					<TextInput
						style={!emailActive ? styles.input : styles.inputActive}
						placeholder="Enter your email address"
						onChangeText={(text) => inputHandler(text, 'email')}
						onFocus={() => {
							setEmailActive(true);
							setPasswordActive(false);
						}}
					/>
				</View>
				<View style={styles.passwordInputContainer}>
					<Text style={styles.inputLabel}>Password</Text>
					<TextInput
						secureTextEntry={true}
						style={!passwordActive ? styles.input : styles.inputActive}
						placeholder="Enter your password"
						onChangeText={(text) => inputHandler(text, 'password')}
						onFocus={() => {
							setEmailActive(false);
							setPasswordActive(true);
						}}
					/>
					<TouchableOpacity style={styles.forgotBtn} onPress={() => Alert.alert('Forgot password')}>
						<Text style={styles.forgotText}>FORGOT PASSWORD</Text>
					</TouchableOpacity>
					{/* <Button title="Login" onPress={() => Alert.alert('Login')} /> */}
				</View>
				<KeyboardAvoidingView behavior="padding" style={styles.loginBtnContainer}>
					<TouchableOpacity style={styles.loginBtn} onPress={loginHandler}>
						{loading ? <ActivityIndicator animating={loading} /> : <Text style={styles.loginBtnText}>LOGIN</Text>}
					</TouchableOpacity>
				</KeyboardAvoidingView>
				<View style={styles.otherBtnContainer}>
					<Text style={styles.otherBtnConLabel}>Lets test 2 ways to log in</Text>
					<TouchableOpacity style={styles.touchIdBtn}>
						<Text style={styles.otherBtnText}>Touch ID</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.faceIdBtn}>
						<Text style={styles.otherBtnText}>Face ID</Text>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
};
export default LoginScreen;

const styles = StyleSheet.create({
	mainContainer: {
		width: 100 * vw,
		height: 100 * vh,
		position: 'relative',
	},
	loginTextCon: {
		position: 'absolute',
		top: 14 * vh, // 120
		marginLeft: 30,
		borderBottomWidth: 4,
		borderBottomColor: '#F08080',
		// marginBottom: 10,
	},
	loginText: {
		fontSize: 40,
	},
	errorText: {
		marginLeft: 20,
		position: 'absolute',
		top: 24 * vh,
		color: 'red',
	},
	emailInputContainer: {
		position: 'absolute',
		top: 26 * vh, // 220
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
	passwordInputContainer: {
		position: 'absolute',
		top: 38 * vh, // 320
		width: '100%',
		padding: 20,
		display: 'flex',
	},
	forgotBtn: {
		marginTop: 10,
		alignSelf: 'flex-end',
	},
	forgotText: {
		color: '#F08080',
		fontWeight: 'bold',
	},
	loginBtnContainer: {
		position: 'absolute',
		width: '100%',
		alignItems: 'center',
		bottom: 30 * vh,
	},
	loginBtn: {
		width: '80%',
		borderRadius: 20,
		height: 40,
		backgroundColor: '#F08080',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	loginBtnText: {
		fontSize: 15,
		color: '#fff',
	},
	otherBtnContainer: {
		width: 100 * vw,
		position: 'absolute',
		height: 65,
		top: 88 * vh,
		// alignContent: 'space-around',
		// alignItems: 'space-between',
		// justifyContent: 'space-between',
		// justifyContent: 'space-around',
	},
	otherBtnConLabel: {
		alignSelf: 'center',
		color: '#5e5e5e',
		marginBottom: 10,
	},
	touchIdBtn: {
		width: 40 * vw,
		height: 30,
		borderRadius: 10,
		borderColor: '#000',
		borderWidth: 1,
		paddingVertical: 5,
		paddingHorizontal: 30,
		position: 'absolute',
		left: 20,
		bottom: 0,
	},
	faceIdBtn: {
		width: 40 * vw,
		height: 30,
		borderRadius: 10,
		borderColor: '#000',
		borderWidth: 1,
		paddingVertical: 5,
		paddingHorizontal: 30,
		position: 'absolute',
		right: 20,
		bottom: 0,
	},
	otherBtnText: {
		alignSelf: 'center',
	},
});
