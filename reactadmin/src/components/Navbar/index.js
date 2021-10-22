import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';

const AdminNavbar = () => {
	const [isHamburgerClicked, setIsHamburgerClicked] = useState(false);
	const [isThreeDotsClicked, setIsThreeDotsClicked] = useState(false);

	const toggleNavbarMobile = () => {
		setIsHamburgerClicked((prevState) => !prevState);
		document.body.classList.toggle('nav-open');
		document.querySelector('.sidebar').focus();
	};

	const toggleThreeDotsClick = () => {
		setIsThreeDotsClicked((prevState) => !prevState);
	};

	return (
		<>
			<nav
				className={`navbar navbar-expand-lg bg-primary navbar-absolute ${
					isThreeDotsClicked ? 'bg-white' : 'navbar-transparent'
				}`}
			>
				<div className="container-fluid">
					<div className="navbar-wrapper">
						<div className="navbar-toggle">
							<button
								type="button"
								className={`navbar-toggler ${
									isHamburgerClicked ? 'toggled' : ''
								}`}
								onClick={toggleNavbarMobile}
							>
								<span className="navbar-toggler-bar bar1"></span>
								<span className="navbar-toggler-bar bar2"></span>
								<span className="navbar-toggler-bar bar3"></span>
							</button>
						</div>
						<Link className="navbar-brand" to="#pablo">
							Dashboard
						</Link>
					</div>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navigation"
						aria-controls="navigation-index"
						aria-expanded="false"
						aria-label="Toggle navigation"
						onClick={toggleThreeDotsClick}
					>
						<span className="navbar-toggler-bar navbar-kebab"></span>
						<span className="navbar-toggler-bar navbar-kebab"></span>
						<span className="navbar-toggler-bar navbar-kebab"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-end"
						id="navigation"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" to="#pablo">
									<i className="now-ui-icons media-2_sound-wave"></i>
									<p>
										<span className="d-lg-none d-md-block">Stats</span>
									</p>
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									id="navbarDropdownMenuLink"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
									to="#"
								>
									<i className="now-ui-icons location_world"></i>
									<p>
										<span className="d-lg-none d-md-block">Some Actions</span>
									</p>
								</Link>
								<div
									className="dropdown-menu dropdown-menu-right"
									aria-labelledby="navbarDropdownMenuLink"
								>
									<Link className="dropdown-item" to="#">
										Action
									</Link>
									<Link className="dropdown-item" to="#">
										Another action
									</Link>
									<Link className="dropdown-item" to="#">
										Something else here
									</Link>
								</div>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="#pablo">
									<i className="now-ui-icons users_single-02"></i>
									<p>
										<span className="d-lg-none d-md-block">Account</span>
									</p>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>

			{isHamburgerClicked && <Modal onClick={toggleNavbarMobile} />}
		</>
	);
};

export default AdminNavbar;
