import React from 'react';
import { Link } from 'react-router-dom';
import AdminSidebar from 'components/Sidebar';
import AdminNavbar from 'components/Navbar/index';

import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const AdminLayout = (props) => {
	return (
		<>
			<div className="wrapper">
				<AdminSidebar />
				<PerfectScrollbar>
					<div className="main-panel" id="main-panel">
						{/* <canvas id="bigDashboardChart"></canvas> */}
						<AdminNavbar />
						{props.children}
						<footer className="footer">
							<div className=" container-fluid">
								<nav>
									<ul>
										<li>
											<Link to="https://www.creative-tim.com">
												Creative Tim
											</Link>
										</li>
										<li>
											<Link to="http://presentation.creative-tim.com">
												About Us
											</Link>
										</li>
										<li>
											<Link to="http://blog.creative-tim.com">Blog</Link>
										</li>
									</ul>
								</nav>
								<div className="copyright" id="copyright">
									&copy;{' '}
									<script>
										document.getElementById('copyright').appendChild(document.createTextNode(new
										Date().getFullYear()))
									</script>
									, Designed by{' '}
									<Link to="https://www.invisionapp.com" target="_blank">
										Invision
									</Link>
									. Coded by{' '}
									<Link to="https://www.creative-tim.com" target="_blank">
										Creative Tim
									</Link>
									.
								</div>
							</div>
						</footer>
					</div>
				</PerfectScrollbar>
			</div>
		</>
	);
};

export default AdminLayout;
