import React from 'react';

import { Route, Redirect } from 'react-router-dom';
import Login from 'pages/Login';

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

	if (
		!localStorage.getItem('token') ||
		localStorage.getItem('role') !== 'Admin'
	) {
		return (
			<>
				<Route exact={exact} path="/login">
					<Login />
				</Route>
				<Redirect to="/login" />
			</>
		);
	}

	return (
		<>
			<Route exact={exact} path={path}>
				{routeWrapper(layout, page)(rest)}
			</Route>
		</>
	);
};

export default ArtGalleryRoutes;
