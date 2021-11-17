import React from 'react';
import images from '../../assets';
import {Link} from "react-router-dom";

const Footer = () => {
	return( <div>
		<footer className="footer">
			<div className="footer__center center">
				<div className="footer__row">
					<div className="footer__col">
						<img className="logo-footer" src={images.logo} alt="logo"/>

						<div className="footer__info">we connect art lovers with talented artists.</div>

					</div>
					<div className="footer__col">
						<div className="footer__group">
							<div className="footer__head ">The company
								<svg className="icon icon-arrow-bottom">

								</svg>
							</div>
							<div className="footer__body">
								<div className="footer__menu">
									<a className="footer__link" href="/artwork">Artwork</a>
									<a className="footer__link" href="/about-us">About Us</a>
									<a className="footer__link" href="/activity">Activity</a>
								</div>
							</div>
						</div>
						<div className="footer__group">
							<div className="footer__head">Need help?
								<svg className="icon icon-arrow-bottom">

								</svg>
							</div>
							<div className="footer__body">
								<div className="footer__menu">
									<a className="footer__link" href="/contact-us">Contact Us</a>
									<a className="footer__link" href="">Facebook</a>
									<a className="footer__link" href="">Twitter</a>
									<a className="footer__link" href="">Instagram</a>
								</div>
							</div>
						</div>

					</div>
					<div className="footer__col">
						<div className="footer__category">Join Newsletter</div>
						<div className="footer__text">Follow us to get the earliest artwork
							resource
						</div>

					</div>
				</div>
				<div className="footer__foot">
					<div className="footer__copyright">Copyright © 2021 UI8 LLC. All rights reserved</div>

				</div>
			</div>
		</footer>
	</div>
);

};

export default Footer;
