import 'styles/App.scss';

import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { routes } from 'routes/routes';
import ArtGalleryRoutes from './routes';
import Error404 from 'pages/Error404/index';
import BreadcrumbProvider from 'stores/BreadcrumbProvider';
import UserDataProvider from 'stores/UserDataProvider';

function App() {
	return (
		<UserDataProvider>
			<BreadcrumbProvider>
				<BrowserRouter>
					<Switch>
						<Redirect from="/" to="admin-dashboard" exact />
						{routes.map((route, index) => (
							<ArtGalleryRoutes
								key={index}
								path={route.path}
								page={route.page}
								layout={route.layout}
								exact={true}
							/>
						))}
						{/* ARRAY MAP */}

						<Route path="/404" component={Error404} exact />
						<Redirect from="*" to="/404" />
					</Switch>
				</BrowserRouter>
			</BreadcrumbProvider>
		</UserDataProvider>
	);
}

export default App;
