import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import images from '../../assets';
import LoginContext from 'stores/login-context';
const Header = () => {
	const loginCtx = useContext(LoginContext);

	const logoutHandler = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('role');
		localStorage.removeItem('lastName');
		localStorage.removeItem('firstName');
		localStorage.removeItem('id');
		window.location.reload();
	};

	return (
		<header>
			<div className="header-main center">
				<div className="header-menu">
					<Link to="/home">
						<img src={images.logo} alt="Logo" width="70" />
					</Link>
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
						{loginCtx.isLoggedIn && loginCtx.role === 'Artist' && (
							<li>
								<Link className="header__a" to="/upload-details">
									Upload
								</Link>
							</li>
						)}
					</ul>
					{!loginCtx.isLoggedIn ? (
						<Link to="/login" type="button" className="btn-header">
							<span>Dang nhap</span>
						</Link>
					) : (
						<>
							<div className="dropdown">
								<button
									className="btn btn-secondary dropdown-toggle"
									type="button"
									id="dropdownMenuButton1"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									{`${loginCtx.lastName} ${loginCtx.firstName}`}
								</button>
								<ul
									className="dropdown-menu"
									aria-labelledby="dropdownMenuButton1"
								>
									<li className="d-flex">
										<Link className="dropdown-item h6" to="/profile">
											<i
												className="fas fa-user me-3"
												style={{ width: '16px' }}
											></i>
											Profile
										</Link>
									</li>
									<li className="d-flex">
										<Link className="dropdown-item h6" to="/deposit">
											<i
												className="fab fa-btc me-3"
												style={{ width: '16px' }}
											></i>
											Deposit
										</Link>
									</li>
									<li className="d-flex">
										<Link
											className="dropdown-item h6"
											to="#"
											onClick={logoutHandler}
										>
											<i
												className="fas fa-sign-out-alt me-3"
												style={{ width: '16px' }}
											></i>
											Logout
										</Link>
									</li>
								</ul>
							</div>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
