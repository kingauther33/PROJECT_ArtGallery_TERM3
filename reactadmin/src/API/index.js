const BASE_URL = 'https://localhost:44379/api/';

export const API = {
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
	},
	users: {
		url: BASE_URL + 'Users',
		params: {},
		method: 'GET',
	},
};
