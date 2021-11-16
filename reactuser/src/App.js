import './styles/App.scss';

import React, { useState, component } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import ArtGalleryRoutes from './routes';
import Error404 from './pages/Error404/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginProvider from 'stores/LoginProvider';

function App() {
	const id = localStorage.getItem('id');

	return (
		<LoginProvider>
			<BrowserRouter>
				<Switch>
					<Redirect from="/" to="/home" exact />
					{id ? (
						<Redirect from="/profile" to={`/profile/${id}`} exact />
					) : (
						<Redirect from="/profile/:id" to="/home" exact />
					)}

					{/* ARRAY MAP */}
					{routes.map((route, index) => (
						<ArtGalleryRoutes
							key={index}
							path={route.path}
							page={route.page}
							layout={route.layout}
							exact={true}
						/>
					))}

					<Route path="/404" component={Error404} exact />
					<Redirect from="*" to="/404" />
				</Switch>
			</BrowserRouter>
		</LoginProvider>
	);
}

export default App;
