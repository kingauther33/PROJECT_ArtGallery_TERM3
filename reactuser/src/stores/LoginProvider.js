import React, { useState, useEffect } from 'react';
import LoginContext from './login-context';

const initialLoginState = {
	isLoggedIn: false,
	role: '',
	token: '',
	lastName: '',
	firstName: '',
	id: 0,
};

const LoginProvider = (props) => {
	const [loginState, setLoginState] = useState(initialLoginState);

	const loginContext = {
		isLoggedIn: loginState.isLoggedIn,
		role: loginState.role,
		token: loginState.token,
		lastName: loginState.lastName,
		firstName: loginState.firstName,
		id: loginState.id,
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
				id: localStorage.getItem('id'),
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
