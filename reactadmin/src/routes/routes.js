import NoLayout from 'layout/NoLayout';
import AdminLayout from 'layout/AdminLayout';
import AdminDashboard from 'pages/Dashboard';
import ManageUser from 'pages/User/ManageUser';
import AddUser from 'pages/User/AddUser';
import EditUser from 'pages/User/EditUser';
import Login from 'pages/Login';
import CustomerRequest from 'pages/CustomerRequest';
import Aunction from 'pages/Aunction';
import ArtworkSaleRequest from 'pages/ArtworkSaleRequest';
import ArtworkSaleRequestDetail from 'pages/ArtworkSaleRequest/ArtworkSaleRequestDetail';

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

const CustomerRequestRoute = {
	path: '/customer-request',
	layout: AdminLayout,
	page: CustomerRequest,
};

const AunctionRoute = {
	path: '/manage-aunction',
	layout: AdminLayout,
	page: Aunction,
};

const ArtworkSaleRequestRoute = {
	path: '/artwork-sale-request',
	layout: AdminLayout,
	page: ArtworkSaleRequest,
};

const ArtworkSaleRequestDetailRoute = {
	path: '/artwork-sale-request/:id',
	layout: AdminLayout,
	page: ArtworkSaleRequestDetail,
};

export const routes = [
	AdminDashboardRoute,
	ManageUserRoute,
	AddUserRoute,
	EditUserRoute,
	LoginRoute,
	CustomerRequestRoute,
	AunctionRoute,
	ArtworkSaleRequestDetailRoute,
	ArtworkSaleRequestRoute,
];
