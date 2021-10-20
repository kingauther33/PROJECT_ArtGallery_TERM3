import AdminLayout from '../layout/AdminLayout';
import AdminDashboard from './../pages/Admin/Dashboard';

const AdminDashboardRoute = {
	path: '/admin-dashboard', // URL trên browser
	layout: AdminLayout, // LAYOUT ứng với từng ROUTE
	page: AdminDashboard, // PAGE ứng với ROUTE đó
};

export const routes = [AdminDashboardRoute];
