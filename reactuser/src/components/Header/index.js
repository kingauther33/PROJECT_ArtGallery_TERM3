import React from 'react';
import {Link} from "react-router-dom";
import  $ from 'jquery' ;
import images from '../../assets'
const Header = () => {

	return (<div className='container'>
		<header>
			<div className='header-main'>
				<div className='header-menu'>
					<img src={images.Homepage.banner} alt="" width='70' height='50'/>
					<ul className='header-nav'>
						<li><Link className='header__a' to='' >Trang chu</Link></li>
						<li><Link className='header__a' to=''>Nghe Si</Link></li>
						<li><Link className='header__a' to=''>Tac pham</Link></li>
						<li><Link className='header__a' to=''>Contact</Link></li>
						<li><Link className='header__a' to=''>About</Link></li>
						<button type='button'  className='btn-header'><span>Dang nhap</span></button>

					</ul>
				</div>
			</div>
		</header>
	</div>

);
};

export default Header;
