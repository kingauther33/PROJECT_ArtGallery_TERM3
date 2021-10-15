import './App.css';
import './styles/global_style.css';
import './styles/_typography.css';
import './styles/_font.css';

import React from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import ArtGalleryRoutes from './routes';
import Error404 from './pages/Error404/index';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				{routes.map((route, index) => (
					<ArtGalleryRoutes
						key={index}
						path={route.path}
						page={route.page}
						layout={route.layout}
						exact={true}
					/>
				))}
				<Redirect from="/" to="homepage" />

				<Route path="/404">
					<Error404 />
				</Route>
				<Redirect from="*" to="/404" />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
