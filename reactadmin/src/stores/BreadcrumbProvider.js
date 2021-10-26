import { useState } from 'react';

import BreadcrumbContext from './breadcrumb-context';

const defaultBreadCrumbState = {
	link: '',
	name: '',
	icon: '',
};

const BreadcrumbProvider = (props) => {
	const [breadCrumbState, setBreadCrumbState] = useState(
		defaultBreadCrumbState
	);

	const breadCrumbContextValue = {
		link: breadCrumbState.link,
		name: breadCrumbState.name,
		icon: breadCrumbState.icon,
		setBreadCrumbState: setBreadCrumbState,
	};

	return (
		<BreadcrumbContext.Provider value={breadCrumbContextValue}>
			{props.children}
		</BreadcrumbContext.Provider>
	);
};

export default BreadcrumbProvider;
