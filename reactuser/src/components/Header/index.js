import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets';
const Header = () => {
	const loginHandler = () => {};

	return (
		<header>
			<div className="header-main center">
				<div className="header-menu">
					<img src={images.logo} alt="Logo" width="70" />
					<ul className="header-nav">
						<li>
							<Link className="header__a" to="/home">
								Home
							</Link>
						</li>
						<li>
							<Link className="header__a" to="">
								Artist
							</Link>
						</li>
						<li>
							<Link className="header__a" to="/artwork">
								Artwork
							</Link>
						</li>
						<li>
							<Link className="header__a" to="/contact-us">
								Contact us
							</Link>
						</li>
						<li>
							<Link className="header__a" to="/about-us">
								About us
							</Link>
						</li>
						<li>
							<Link className="header__a" to="/upload-details">
								Upload
							</Link>
						</li>
					</ul>
					<button type="button" className="btn-header" onClick={loginHandler}>
						<span>Dang nhap</span>
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
