import './styles/App.scss';

import React, { useState, component } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import ArtGalleryRoutes from './routes';
import Error404 from './pages/Error404/index';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Redirect from="/" to="/home" exact />
				{routes.map((route, index) => (
					<ArtGalleryRoutes
						key={index}
						path={route.path}
						page={route.page}
						layout={route.layout}
						exact
					/>
				))}
				{/* ARRAY MAP */}
				<Route path="/404" component={Error404} exact />
				<Redirect from="*" to="/404" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
