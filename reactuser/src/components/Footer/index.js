import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
	return( <div>
		<footer className="footer">
			<div className="footer__center center">
				<div className="footer__row">
					<div className="footer__col">
						<img className="some-icon" src="img/logo-dark.png" alt="logo"/>

						<div className="footer__info">The New Creative Economy.</div>

					</div>
					<div className="footer__col">
						<div className="footer__group">
							<div className="footer__head">Crypter.
								<svg className="icon icon-arrow-bottom">

								</svg>
							</div>
							<div className="footer__body">
								<div className="footer__menu"><a className="footer__link"
																 href="search01.html">Discover</a><a
									className="footer__link" href="connect-wallet.html">Connect wallet</a></div>
							</div>
						</div>
						<div className="footer__group">
							<div className="footer__head">Info
								<svg className="icon icon-arrow-bottom">

								</svg>
							</div>
							<div className="footer__body">
								<div className="footer__menu"><a className="footer__link" href="faq.html">FAQ</a><a
									className="footer__link" href="upload-variants.html">Create item</a></div>
							</div>
						</div>
					</div>
					<div className="footer__col">
						<div className="footer__category">Join Newsletter</div>
						<div className="footer__text">Subscribe our newsletter to get more free design course and
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
