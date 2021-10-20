import React from 'react';
import { Link } from 'react-router-dom';
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AdminSidebar = () => {
	return (
		<div className="sidebar" data-color="orange">
			{/* Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow" */}
			<div className="logo">
				<Link
					to="http://www.creative-tim.com"
					className="simple-text logo-mini"
				>
					ART
				</Link>
				<Link
					to="http://www.creative-tim.com"
					className="simple-text logo-normal"
				>
					ART GALLERY
				</Link>
			</div>
			<PerfectScrollbar>
				<div className="sidebar-wrapper" id="sidebar-wrapper">
					<ul className="nav">
						<li className="active ">
							<Link to="./dashboard.html">
								<i className="now-ui-icons design_app"></i>
								<p>Dashboard</p>
							</Link>
						</li>
						<li>
							<Link to="./icons.html">
								<i className="now-ui-icons education_atom"></i>
								<p>Icons</p>
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
						</li>
					</ul>
				</div>
			</PerfectScrollbar>
		</div>
	);
};

export default AdminSidebar;
