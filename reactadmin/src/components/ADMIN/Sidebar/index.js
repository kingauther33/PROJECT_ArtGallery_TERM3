import React from 'react';
import styles from '../../../styles/AdminStyle.module.css';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
	return (
		<div className={`${styles['sidebar']}`} data-color="orange">
			{/* Tip 1: You can change the color of the sidebar using: data-color="blue | green | orange | red | yellow" */}
			<div className={styles['logo']}>
				<Link
					to="#"
					className={`${styles['simple-text']} ${styles['logo-mini']}`}
				>
					ART
				</Link>
				<Link
					to="#"
					className={`${styles['simple-text']} ${styles['logo-normal']}`}
				>
					ArtGallery
				</Link>
			</div>
			<div
				className={`${styles['sidebar-wrapper']}  ${styles['ps']}`}
				id={styles['sidebar-wrapper']}
			>
				<ul className={styles['nav']}>
					<li className={styles['active']}>
						<Link to="./dashboard.html">
							<i
								className={`${styles['now-ui-icons']} ${styles['design_app']}`}
							></i>
							<p>Dashboard</p>
						</Link>
					</li>
					<li>
						<Link to="./icons.html">
							<i
								className={`${styles['now-ui-icons']} ${styles['education_atom']}`}
							></i>
							<p>Icons</p>
						</Link>
					</li>
					<li>
						<Link to="./map.html">
							<i
								className={`${styles['now-ui-icons']} ${styles['location_map-big']}`}
							></i>
							<p>Maps</p>
						</Link>
					</li>
					<li>
						<Link to="./notifications.html">
							<i
								className={`${styles['now-ui-icons']} ${styles['ui-1_bell-53']}`}
							></i>
							<p>Notifications</p>
						</Link>
					</li>
					<li>
						<Link to="./user.html">
							<i
								className={`${styles['now-ui-icons']} ${styles['users_single-02']}`}
							></i>
							<p>User Profile</p>
						</Link>
					</li>
					<li>
						<Link to="./tables.html">
							<i
								className={`${styles['now-ui-icons']} ${styles['design_bullet-list-67']}`}
							></i>
							<p>Table List</p>
						</Link>
					</li>
					<li>
						<Link to="./typography.html">
							<i
								className={`${styles['now-ui-icons']} ${styles['text_caps-small']}`}
							></i>
							<p>Typography</p>
						</Link>
					</li>
					<li className={styles['active-pro']}>
						<Link to="./upgrade.html">
							<i
								className={`${styles['now-ui-icons']} ${styles['arrows-1_cloud-download-93']}`}
							></i>
							<p>Upgrade to PRO</p>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default AdminSidebar;
