const BASE_URL = 'https://localhost:44379/api/';

export const API = {
	login: {
		url: BASE_URL + 'Login',
		params: JSON.stringify({
			email: '',
			password: '',
		}),
		method: 'POST',
	},
	get_users: {
		url: BASE_URL + 'Users',
		params: {},
		method: 'GET',
	},
	get_user_by_id: {
		url: BASE_URL + 'Users/', // + id
		params: {},
		method: 'GET',
	},
	post_user: {
		url: BASE_URL + 'Users',
		params: JSON.stringify({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			role: '',
			deposit: 0,
			createdAt: Date.now(),
		}),
		method: 'POST',
	},
	delete_user: {
		url: BASE_URL + 'Users/', // + id
		params: {},
		method: 'DELETE',
	},
	edit_user: {
		url: BASE_URL + 'Users/', // + id
		params: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			role: '',
			deposit: 0,
			createdAt: Date.now(),
		},
		method: 'PUT',
	},

	get_customer_requests: {
		url: BASE_URL + 'CustomerRequests',
		params: {},
		method: 'GET',
	},

	edit_customer_report: {
		url: BASE_URL + 'CustomerRequests/', // + id
		params: {
			status: 0,
			response: '',
		},
		method: 'POST',
	},

	get_aunctions: {
		url: BASE_URL + 'Aunctions',
		params: {},
		method: 'GET',
	},

	get_artwork_sale_requests: {
		url: BASE_URL + 'Artworks/GetArtworkSaleRequests',
		params: {},
		method: 'GET',
	},

	get_artwork_by_id: {
		url: BASE_URL + 'Artworks/', // + id
		params: {},
		method: 'GET',
	},

	getCategories: {
		url: BASE_URL + 'Categories',
		params: {},
		method: 'GET',
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
