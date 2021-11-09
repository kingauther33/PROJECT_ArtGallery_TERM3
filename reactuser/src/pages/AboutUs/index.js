import React from 'react';
import styles from './about.module.css';

const AboutUs = () => {
	return(
		<div className='about'>
			<section className='banner'>
				<div className='banner-text'>
					<h2>About Us</h2>
				</div>
			</section>
			<div className='row'>
				<div className='col-lg-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
					exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
					occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
				<div className='col-lg-5'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
					labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
					in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		</div>
	)
};

export default AboutUs;
