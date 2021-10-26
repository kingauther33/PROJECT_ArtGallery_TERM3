import React from 'react';

const BreadCrumbContext = React.createContext({
	link: '',
	name: '',
	icon: '',
	setBreadCrumbState: () => {},
});

export default BreadCrumbContext;
