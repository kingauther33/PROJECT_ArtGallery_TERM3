import './styles/App.scss';

import React, { useState } from 'react';
import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';
import { routes } from './routes/routes';
import ArtGalleryRoutes from './routes';
import Error404 from './pages/Error404/index';

import StripeContainer from './components/Payment/StripeContainer';
import sup1 from './assets/support.png';

function App() {
	const [showItem, setShowItem] = useState(false)

	return (
		<div className="App">
			<h1>The Spatula Store</h1>
			{showItem ? <StripeContainer/> : 
			<> 
			<h3>$10.00</h3> 
			<img src={sup1} alt="support"/>
			<button onClick={() => setShowItem(true)}>Purchase</button>
			</>}
		</div>

		// <BrowserRouter>
		// 	<Switch>
		// 		<Redirect from="/" to="homepage" exact />
		// 		{routes.map((route, index) => (
		// 			<ArtGalleryRoutes
		// 				key={index}
		// 				path={route.path}
		// 				page={route.page}
		// 				layout={route.layout}
		// 				exact
		// 			/>
		// 		))}
		// 		{/* ARRAY MAP */}
		// 		<Route path="/404" component={Error404} exact />
		// 		<Redirect from="*" to="/404" />
		// 	</Switch>
		// </BrowserRouter>
	);
}

export default App;
