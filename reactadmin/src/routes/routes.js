import AdminLayout from 'layout/AdminLayout';
import AdminDashboard from 'pages/Dashboard';
import ManageUser from 'pages/ManageUser';

const AdminDashboardRoute = {
	path: '/admin-dashboard', // URL trên browser
	layout: AdminLayout, // LAYOUT ứng với từng ROUTE
	page: AdminDashboard, // PAGE ứng với ROUTE đó
};

const ManageUserRoute = {
	path: '/manage-user',
	layout: AdminLayout,
	page: ManageUser,
};

export const routes = [AdminDashboardRoute, ManageUserRoute];
