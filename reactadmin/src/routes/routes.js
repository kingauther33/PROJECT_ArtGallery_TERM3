import AdminLayout from 'layout/AdminLayout';
import AdminDashboard from 'pages/Dashboard';
import ManageUser from 'pages/User/ManageUser';
import AddUser from 'pages/User/AddUser';
import EditUser from 'pages/User/AddUser';

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

const AddUserRoute = {
	path: '/add-user',
	layout: AdminLayout,
	page: AddUser,
};

const EditUserRoute = {
	path: '/edit-user/:id',
	layout: AdminLayout,
	page: EditUser,
};

export const routes = [
	AdminDashboardRoute,
	ManageUserRoute,
	AddUserRoute,
	EditUserRoute,
];
