// ADMIN
import AdminLayout from '../layout/AdminLayout';
import AdminDashboard from './../pages/Admin/Dashboard';

// USER
import UserLayout from '../layout/UserLayout';
import HomePage from '../pages/User/HomePage';
import AboutUs from './../pages/User/AboutUs';

// ADMIN
const AdminDashboardRoute = {
	path: '/admin-dashboard', // URL trên browser
	layout: AdminLayout, // LAYOUT ứng với từng ROUTE
	page: AdminDashboard, // PAGE ứng với ROUTE đó
};

// USER
const HomePageRoute = {
	path: '/homepage', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: HomePage, // PAGE ứng với ROUTE đó
};

const AboutUsRoute = {
	path: '/about-us', // URL trên browser
	layout: AdminLayout, // LAYOUT ứng với từng ROUTE
	page: AboutUs, // PAGE ứng với ROUTE đó
};

export const routes = [
	// ADMIN
	AdminDashboardRoute,

	// USER
	HomePageRoute,
	AboutUsRoute,
];
