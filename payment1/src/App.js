import './styles/App.scss';
import React, { useState } from 'react';

import StripeContainer from '../../payment1/src/Components/StripeContainer';
import sup1 from './Assets/support.png';

function App() {
	const [showItem, setShowItem] = useState(false)


  return (
    <div className="App">
			<h1>The Spatula Store</h1>
			{showItem ? <StripeContainer/> : 
			<> 
			<h3>$10.00</h3> 
			<img src={sup1} alt="support"/>
			<button className="button" onClick={() => setShowItem(true)}>Purchase</button>
			</>}
		</div>
  );
}

export default App;
