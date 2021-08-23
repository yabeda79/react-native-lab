/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUserSelector, isAuthenticatedSelector } from '../redux/selectors';
import { signIn, signOut } from '../redux/actions/auth/actions';
import { IUser } from '../redux/initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_AUTH } from '../AsyncStorage';

interface IUseAuth {
	login: (user: IUser) => void;
	logout: () => void;
	user: IUser | null;
	isAuthenticated: boolean;
}

export const useAuth = (): IUseAuth => {
	const user = useSelector(getUserSelector);
	const isAuthenticated = useSelector(isAuthenticatedSelector);
	const dispatch = useDispatch();

	const login = useCallback(async (userProp: IUser) => {
		dispatch(signIn(userProp));

		console.log(isAuthenticated);

		await AsyncStorage.setItem(ASYNC_STORAGE_AUTH, JSON.stringify(userProp));
	}, []);

	const logout = useCallback(async () => {
		dispatch(signOut());

		await AsyncStorage.removeItem(ASYNC_STORAGE_AUTH);
	}, []);

	return { login, logout, user, isAuthenticated };
};
