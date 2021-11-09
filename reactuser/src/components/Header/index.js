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
							<Link className="header__a" to="">
								Trang chu
							</Link>
						</li>
						<li>
							<Link className="header__a" to="">
								Nghe Si
							</Link>
						</li>
						<li>
							<Link className="header__a" to="">
								Tac pham
							</Link>
						</li>
						<li>
							<Link className="header__a" to="">
								Contact
							</Link>
						</li>
						<li>
							<Link className="header__a" to="">
								About
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
