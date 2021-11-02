import React, { useState } from 'react';

import UserDataContext from './userdata-context';

const defaultUserDataState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	role: '',
	deposit: 0,
	createdAt: new Date(),
};

const UserDataProvider = (props) => {
	const [dataContext, setDataContext] = useState(defaultUserDataState);

	const dataContextValue = {
		firstName: dataContext.firstName,
		lastName: dataContext.lastName,
		email: dataContext.email,
		password: dataContext.password,
		confirmPassword: dataContext.confirmPassword,
		role: dataContext.role,
		deposit: dataContext.deposit,
		createdAt: dataContext.createdAt,
		setDataContext: setDataContext,
	};

	return (
		<UserDataContext.Provider value={dataContextValue}>
			{props.children}
		</UserDataContext.Provider>
	);
};

export default UserDataProvider;
