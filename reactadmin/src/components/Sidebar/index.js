import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';
import BreadCrumbContext from 'stores/breadcrumb-context';

const sideBarItems = [
	{
		link: '/admin-dashboard',
		name: 'Dashboard',
		icon: 'design_app',
	},
	{
		link: '/manage-user',
		name: 'User',
		icon: 'users_single-02',
	},
	{
		link: '/customer-request',
		name: 'Customer Request',
		icon: 'users_circle-08',
	},
	{
		link: '/artwork-sale-request',
		name: 'Artwork Sale Request',
		icon: 'business_money-coins',
	},
	{
		link: '/manage-aunction',
		name: 'Aunction',
		icon: 'business_money-coins',
	},
];

const AdminSidebar = () => {
	const location = useLocation();
	const breadCrumbCtx = useContext(BreadCrumbContext);

	const pageChangeHandler = (item) => {
		breadCrumbCtx.setBreadCrumbState(item);
	};

	return (
		<div className="sidebar" data-color="orange">
			{/* Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow" */}
			<div className="logo">
				<Link to="#" className="simple-text logo-mini">
					ART
				</Link>
				<Link to="#" className="simple-text logo-normal">
					ART GALLERY
				</Link>
			</div>

			{/* SIDEBAR WRAPPER */}
			<PerfectScrollbar>
				<div className="sidebar-wrapper" id="sidebar-wrapper">
					<ul className="nav">
						{sideBarItems.map((item, index) => (
							<li
								className={
									location.pathname.split('/')[1] === item.link.split('/')[1]
										? 'active'
										: ''
								}
								key={index}
							>
								<Link
									to={item.link}
									onClick={pageChangeHandler.bind(null, item)}
								>
									<i className={`now-ui-icons ${item.icon}`}></i>
									<p>{item.name}</p>
								</Link>
							</li>
						))}
						{/* <li className="active">
							<Link to="/admin-dashboard">
								<i className="now-ui-icons design_app"></i>
								<p>Dashboard</p>
							</Link>
						</li>
						<li>
							<Link to="/manage-user">
								<i className="now-ui-icons education_atom"></i>
								<p>Users</p>
							</Link>
						</li>
						<li>
							<Link to="./map.html">
								<i className="now-ui-icons location_map-big"></i>
								<p>Maps</p>
							</Link>
						</li>
						<li>
							<Link to="./notifications.html">
								<i className="now-ui-icons ui-1_bell-53"></i>
								<p>Notifications</p>
							</Link>
						</li>
						<li>
							<Link to="./user.html">
								<i className="now-ui-icons users_single-02"></i>
								<p>User Profile</p>
							</Link>
						</li>
						<li>
							<Link to="./tables.html">
								<i className="now-ui-icons design_bullet-list-67"></i>
								<p>Table List</p>
							</Link>
						</li>
						<li>
							<Link to="./typography.html">
								<i className="now-ui-icons text_caps-small"></i>
								<p>Typography</p>
							</Link>
						</li>
						<li className="active-pro">
							<Link to="./upgrade.html">
								<i className="now-ui-icons arrows-1_cloud-download-93"></i>
								<p>Upgrade to PRO</p>
							</Link>
						</li> */}
					</ul>
				</div>
			</PerfectScrollbar>
		</div>
	);
};

export default AdminSidebar;
