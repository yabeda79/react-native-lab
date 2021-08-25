export interface IState {
	user: IUser | null;
}

export const initialState: IState = {
	user: null,
};

export interface IUser {
	token: string;
	username: string;
	email: string;
	description: string;
	isAdmin: boolean;
	profileImg: string;
	dateOfBirth: string;
	// dateOfBirth: Date;
}
