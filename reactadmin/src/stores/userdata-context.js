import React from 'react';

const UserDataContext = React.createContext({
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	role: '',
	deposit: 0,
	createdAt: new Date(),
});

export default UserDataContext;
