import React from 'react';

import { Route, useLocation, Redirect } from 'react-router-dom';
import Profile from 'pages/Profile';

const routeWrapper = (Layout, Page) => {
	const LayoutSwitcher = (props) => (
		<Layout>
			<Page {...props} />
		</Layout>
	);

	return LayoutSwitcher;
};

const ArtGalleryRoutes = (props) => {
	const { layout, page, path, exact, ...rest } = props;

	return (
		<Route exact={exact} path={path}>
			{routeWrapper(layout, page)(rest)}
		</Route>
	);
};

export default ArtGalleryRoutes;
