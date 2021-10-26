import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
	return( <div>
		<footer className='footer'>
			<div className="footer-main">
				<div className="footer-row">
					<div className="footer-col">
						<h4 className='text-footer'>Folow Us</h4>
						<div className="social-links">
							<Link to=''><i className='fab fa-facebook'></i></Link>
							<Link to=''><i className='fab fa-facebook'></i></Link>
							<Link to=''><i className='fab fa-facebook'></i></Link>
							<Link to=''><i className='fab fa-facebook'></i></Link>

						</div>
					</div>
					<div className="footer-col">
						<h4 className='text-footer'>Company</h4>
						<ul className='footer-ul'>
							<li className='footer-li'><Link to=''>About us</Link></li>
							<li className='footer-li'><Link to=''>Contact</Link></li>
							<li className='footer-li'><Link to=''>Privacy policy</Link></li>
							<li className='footer-li'><Link to=''>affiliate program</Link></li>
						</ul>
					</div>
					<div className="footer-col">
						<h4 className='text-footer'>Get help</h4>
						<ul className='footer-ul'>

						</ul>
					</div>
					<div className="footer-col">
						<h4 className='text-footer'>Online Shop</h4>
						<ul className='footer-ul'>
							<li className='footer-li'><Link to=''>Artist</Link></li>
							<li className='footer-li'><Link to=''>Atwork</Link></li>

						</ul>
					</div>
				</div>

			</div>

		</footer>
	</div>
);

};

export default Footer;
