import React from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets';
const Header = () => {
	const loginHandler = () => {};

	return (
		<header>
<<<<<<< HEAD
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
=======
			<div className='header-main'>
				<div className='header-menu'>
					<img src={images.Homepage.banner} alt="" width='70' height='50'/>
					<ul className='header-nav'>
						<li><Link className='header__a' to='' >Trang chu</Link></li>
						<li><Link className='header__a' to=''>Nghe Si</Link></li>
						<li><Link className='header__a' to=''>Tac pham</Link></li>
						<li><Link className='header__a' to=''>Contact</Link></li>
						<li><Link className='header__a' to='/about-us'>About</Link></li>
						<button type='button'  className='btn-header'><span>Dang nhap</span></button>

>>>>>>> a47bafd135e6c24dac455979847ce9094da63d88
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
