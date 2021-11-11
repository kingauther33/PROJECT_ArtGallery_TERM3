import React from 'react';

const LoginContext = React.createContext({
	isLoggedIn: false,
	role: '',
	token: '',
	lastName: '',
	firstName: '',
	setLoginState: () => {},
});

export default LoginContext;
