const BASE_URL = 'https://localhost:44379/api/';


export const ProductApi = {
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
};

export const HeaderOptions = {
    headers: {
        'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		Authorization: `Bearer ${localStorage.getItem('token')}`,
		Accept: 'application/json',
    }
}