import React, { useState, useEffect } from 'react';
import LoginContext from './login-context';

const initialLoginState = {
	isLoggedIn: false,
	role: '',
	token: '',
	lastName: '',
	firstName: '',
};

const LoginProvider = (props) => {
	const [loginState, setLoginState] = useState(initialLoginState);

	const loginContext = {
		isLoggedIn: loginState.isLoggedIn,
		role: loginState.role,
		token: loginState.token,
		lastName: loginState.lastName,
		firstName: loginState.firstName,
		setLoginState: setLoginState,
	};

	useEffect(() => {
		if (localStorage.getItem('token') && localStorage.getItem('role')) {
			setLoginState({
				isLoggedIn: true,
				token: localStorage.getItem('token'),
				role: localStorage.getItem('role'),
				lastName: localStorage.getItem('lastName'),
				firstName: localStorage.getItem('firstName'),
			});
		}

		return;
	}, []);

	return (
		<LoginContext.Provider value={loginContext}>
			{props.children}
		</LoginContext.Provider>
	);
};

export default LoginProvider;
