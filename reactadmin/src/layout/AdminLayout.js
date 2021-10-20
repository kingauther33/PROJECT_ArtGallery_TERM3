import React from 'react';
import AdminSidebar from '../components/ADMIN/Sidebar';
import styles from '../styles/AdminStyle.module.css';
import { Link } from 'react-router-dom';

const AdminLayout = (props) => {
	return (
		<>
			<div className={styles['wrapper']}>
				<AdminSidebar />
				{props.children}
				<div className={styles['main-panel']} id={styles['main-panel']}>
					{/*  Navbar  */}
					<nav
						className={`${styles['navbar']} navbar-expand-lg ${styles['navbar-transparent']} ${styles['bg-primary']} ${styles['navbar-absolute']}`}
					>
						<div className="container-fluid">
							<div className={styles['navbar-wrapper']}>
								<div className={styles['navbar-toggle']}>
									<button type="button" className={styles['navbar-toggler']}>
										<span
											className={`${styles['navbar-toggler-bar']} ${styles['bar1']}`}
										></span>
										<span
											className={`${styles['navbar-toggler-bar']} ${styles['bar2']}`}
										></span>
										<span
											className={`${styles['navbar-toggler-bar']} ${styles['bar3']}`}
										></span>
									</button>
								</div>
								<Link className={styles['navbar-brand']} to="#pablo">
									Dashboard
								</Link>
							</div>
							<button
								className={styles['navbar-toggler']}
								type="button"
								data-toggle="collapse"
								data-target="#navigation"
								aria-controls="navigation-index"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span
									className={`${styles['navbar-toggler-bar']} ${styles['navbar-kebab']}`}
								></span>
								<span
									className={`${styles['navbar-toggler-bar']} ${styles['navbar-kebab']}`}
								></span>
								<span
									className={`${styles['navbar-toggler-bar']} ${styles['navbar-kebab']}`}
								></span>
							</button>
							<div
								className="collapse navbar-collapse justify-content-end"
								id="navigation"
							>
								<form>
									<div className="input-group no-border">
										<input
											type="text"
											value=""
											className="form-control"
											placeholder="Search..."
										/>
										<div className="input-group-append">
											<div className="input-group-text">
												<i className="now-ui-icons ui-1_zoom-bold"></i>
											</div>
										</div>
									</div>
								</form>
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
											to="#"
											className="nav-link dropdown-toggle"
											id="navbarDropdownMenuLink"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											<i className="now-ui-icons location_world"></i>
											<p>
												<span className="d-lg-none d-md-block">
													Some Actions
												</span>
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
					{/* End Navbar  */}
					<div className="panel-header panel-header-lg">
						<canvas id="bigDashboardChart"></canvas>
					</div>
					<div className="content">
						<div className="row">
							<div className="col-lg-4">
								<div className="card card-chart">
									<div className="card-header">
										<h5 className="card-category">Global Sales</h5>
										<h4 className="card-title">Shipped Products</h4>
										<div className="dropdown">
											<button
												type="button"
												className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret"
												data-toggle="dropdown"
											>
												<i className="now-ui-icons loader_gear"></i>
											</button>
											<div className="dropdown-menu dropdown-menu-right">
												<Link className="dropdown-item" to="#">
													Action
												</Link>
												<Link className="dropdown-item" to="#">
													Another action
												</Link>
												<Link className="dropdown-item" to="#">
													Something else here
												</Link>
												<Link className="dropdown-item text-danger" to="#">
													Remove Data
												</Link>
											</div>
										</div>
									</div>
									<div className="card-body">
										<div className="chart-area">
											<canvas id="lineChartExample"></canvas>
										</div>
									</div>
									<div className="card-footer">
										<div className="stats">
											<i className="now-ui-icons arrows-1_refresh-69"></i> Just
											Updated
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card card-chart">
									<div className="card-header">
										<h5 className="card-category">2018 Sales</h5>
										<h4 className="card-title">All products</h4>
										<div className="dropdown">
											<button
												type="button"
												className="btn btn-round btn-outline-default dropdown-toggle btn-simple btn-icon no-caret"
												data-toggle="dropdown"
											>
												<i className="now-ui-icons loader_gear"></i>
											</button>
											<div className="dropdown-menu dropdown-menu-right">
												<Link className="dropdown-item" to="#">
													Action
												</Link>
												<Link className="dropdown-item" to="#">
													Another action
												</Link>
												<Link className="dropdown-item" to="#">
													Something else here
												</Link>
												<Link className="dropdown-item text-danger" to="#">
													Remove Data
												</Link>
											</div>
										</div>
									</div>
									<div className="card-body">
										<div className="chart-area">
											<canvas id="lineChartExampleWithNumbersAndGrid"></canvas>
										</div>
									</div>
									<div className="card-footer">
										<div className="stats">
											<i className="now-ui-icons arrows-1_refresh-69"></i> Just
											Updated
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="card card-chart">
									<div className="card-header">
										<h5 className="card-category">Email Statistics</h5>
										<h4 className="card-title">24 Hours Performance</h4>
									</div>
									<div className="card-body">
										<div className="chart-area">
											<canvas id="barChartSimpleGradientsNumbers"></canvas>
										</div>
									</div>
									<div className="card-footer">
										<div className="stats">
											<i className="now-ui-icons ui-2_time-alarm"></i> Last 7
											days
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6">
								<div className="card  card-tasks">
									<div className="card-header ">
										<h5 className="card-category">Backend development</h5>
										<h4 className="card-title">Tasks</h4>
									</div>
									<div className="card-body ">
										<div className="table-full-width table-responsive">
											<table className="table">
												<tbody>
													<tr>
														<td>
															<div className="form-check">
																<label className="form-check-label">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		checked
																	/>
																	<span className="form-check-sign"></span>
																</label>
															</div>
														</td>
														<td className="text-left">
															Sign contract for "What are conference organizers
															afraid of?"
														</td>
														<td className="td-actions text-right">
															<button
																type="button"
																rel="tooltip"
																title=""
																className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
																data-original-title="Edit Task"
															>
																<i className="now-ui-icons ui-2_settings-90"></i>
															</button>
															<button
																type="button"
																rel="tooltip"
																title=""
																className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
																data-original-title="Remove"
															>
																<i className="now-ui-icons ui-1_simple-remove"></i>
															</button>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check">
																<label className="form-check-label">
																	<input
																		className="form-check-input"
																		type="checkbox"
																	/>
																	<span className="form-check-sign"></span>
																</label>
															</div>
														</td>
														<td className="text-left">
															Lines From Great Russian Literature? Or E-mails
															From My Boss?
														</td>
														<td className="td-actions text-right">
															<button
																type="button"
																rel="tooltip"
																title=""
																className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
																data-original-title="Edit Task"
															>
																<i className="now-ui-icons ui-2_settings-90"></i>
															</button>
															<button
																type="button"
																rel="tooltip"
																title=""
																className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
																data-original-title="Remove"
															>
																<i className="now-ui-icons ui-1_simple-remove"></i>
															</button>
														</td>
													</tr>
													<tr>
														<td>
															<div className="form-check">
																<label className="form-check-label">
																	<input
																		className="form-check-input"
																		type="checkbox"
																		checked
																	/>
																	<span className="form-check-sign"></span>
																</label>
															</div>
														</td>
														<td className="text-left">
															Flooded: One year later, assessing what was lost
															and what was found when Link ravaging rain swept
															through metro Detroit
														</td>
														<td className="td-actions text-right">
															<button
																type="button"
																rel="tooltip"
																title=""
																className="btn btn-info btn-round btn-icon btn-icon-mini btn-neutral"
																data-original-title="Edit Task"
															>
																<i className="now-ui-icons ui-2_settings-90"></i>
															</button>
															<button
																type="button"
																rel="tooltip"
																title=""
																className="btn btn-danger btn-round btn-icon btn-icon-mini btn-neutral"
																data-original-title="Remove"
															>
																<i className="now-ui-icons ui-1_simple-remove"></i>
															</button>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div className="card-footer ">
										<hr />
										<div className="stats">
											<i className="now-ui-icons loader_refresh spin"></i>{' '}
											Updated 3 minutes ago
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="card">
									<div className="card-header">
										<h5 className="card-category">All Persons List</h5>
										<h4 className="card-title"> Employees Stats</h4>
									</div>
									<div className="card-body">
										<div className="table-responsive">
											<table className="table">
												<thead className=" text-primary">
													<th>Name</th>
													<th>Country</th>
													<th>City</th>
													<th className="text-right">Salary</th>
												</thead>
												<tbody>
													<tr>
														<td>Dakota Rice</td>
														<td>Niger</td>
														<td>Oud-Turnhout</td>
														<td className="text-right">$36,738</td>
													</tr>
													<tr>
														<td>Minerva Hooper</td>
														<td>Curaçao</td>
														<td>Sinaai-Waas</td>
														<td className="text-right">$23,789</td>
													</tr>
													<tr>
														<td>Sage Rodriguez</td>
														<td>Netherlands</td>
														<td>Baileux</td>
														<td className="text-right">$56,142</td>
													</tr>
													<tr>
														<td>Doris Greene</td>
														<td>Malawi</td>
														<td>Feldkirchen in Kärnten</td>
														<td className="text-right">$63,542</td>
													</tr>
													<tr>
														<td>Mason Porter</td>
														<td>Chile</td>
														<td>Gloucester</td>
														<td className="text-right">$78,615</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<footer className="footer">
						<div className=" container-fluid ">
							<nav>
								<ul>
									<li>
										<Link to="https://www.creative-tim.com">Creative Tim</Link>
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
			</div>
		</>
	);
};

export default AdminLayout;
