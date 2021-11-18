const BASE_URL = 'https://localhost:44379/api/';

export const API = {
	getArtworks: {
		url: BASE_URL + 'Artworks',
		params: {},
		method: 'GET',
	},

	getArtworkComments: {
		url: BASE_URL + 'ArtworkComments',
		params: {},
		method: 'GET',
	},

	getAunctionLogs: {
		url: BASE_URL + 'AunctionLogs',
		params: {},
		method: 'GET',
	},

	getAunctions: {
		url: BASE_URL + 'Aunctions',
		params: {},
		method: 'GET',
	},

	getCategories: {
		url: BASE_URL + 'Categories',
		params: {},
		method: 'GET',
	},

	getDepositLogs: {
		url: BASE_URL + 'DepositLogs',
		method: 'GET',
	},
	login: {
		url: BASE_URL + 'Login',
		params: JSON.stringify({
			email: '',
			password: '',
		}),
		method: 'POST',
	},
	post_artwork: {
		url: BASE_URL + 'Artworks',
		params: JSON.stringify({
			name: '',
			description: '',
			fileImage: '',
			year: 0,
			author: '',
			location: '',
			categoryId: 0,
			createdAt: Date.now(),
		}),
		method: 'POST',
	},

	getUserById: {
		url: BASE_URL + 'Users/', // + id
		params: {},
		method: 'GET',
	},

	getArtworkByUser: {
		url: BASE_URL + 'Artworks/GetArtworkByPerson/', // + id
		params: {},
		method: 'GET',
	},

	editArtworkStatus: {
		url: BASE_URL + 'Artworks/', // + id
		params: {
			id: 0,
			status: 0,
		},
		method: 'PUT',
	},

	createCustomerRequest: {
		url: BASE_URL + 'CustomerRequests', // + id
		params: {
			customerId: 0,
		},
		method: 'POST',
	},

	getCustomerRequestByPersonId: {
		url: BASE_URL + 'CustomerRequests/GetCustomerRequestByPersonId/', // + id
		params: {
			customerId: 0,
		},
		method: 'POST',
	},
	post_Register: {
		url: BASE_URL + 'Users/Register',
		params: JSON.stringify({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			createdAt: Date.now(),
		}),
		method: 'POST',
	},
};

export const HeaderOptions = {
	headers: {
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${localStorage.getItem('token')}`,
		Accept: 'application/json',
	},
};
