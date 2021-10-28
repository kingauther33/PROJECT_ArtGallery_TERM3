import NoLayout from 'layout/NoLayout';
import AdminLayout from 'layout/AdminLayout';
import AdminDashboard from 'pages/Dashboard';
import ManageUser from 'pages/User/ManageUser';
import AddUser from 'pages/User/AddUser';
import EditUser from 'pages/User/AddUser';
import Login from 'pages/Login';

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
	path: '/manage-user/add-user',
	layout: AdminLayout,
	page: AddUser,
};

const EditUserRoute = {
	path: '/manage-user/edit-user/:id',
	layout: AdminLayout,
	page: EditUser,
};

const LoginRoute = {
	path: '/login',
	layout: NoLayout,
	page: Login,
};

export const routes = [
	AdminDashboardRoute,
	ManageUserRoute,
	AddUserRoute,
	EditUserRoute,
	LoginRoute,
];
