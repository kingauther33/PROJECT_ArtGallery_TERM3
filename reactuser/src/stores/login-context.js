import React from 'react';

const LoginContext = React.createContext({
	isLoggedIn: false,
	role: '',
	token: '',
	lastName: '',
	firstName: '',
	id: 0,
	setLoginState: () => {},
});

export default LoginContext;
