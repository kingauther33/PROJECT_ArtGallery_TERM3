// USER
import UserLayout from 'layout/UserLayout';
import HomePage from 'pages/HomePage';
import AboutUs from 'pages/AboutUs';
import search from 'pages/Search/search';
import Profile from 'pages/Profile';
import ProfileEdit from 'pages/Profile/Profile-edit';
import Item from 'pages/Item/Item';
import Activity from 'pages/Activity/Activity';
import UploadDetails from 'pages/Upload/Upload-details';
import UploadVariants from 'pages/Upload/Upload-variants';
import ContactUs from 'pages/ContactUs';
import Deposit from 'pages/Deposit/index';
import NoLayout from 'layout/NoLayout';
import Login from 'pages/Login';
import Register from '../pages/Login/Register';

// USER
const HomePageRoute = {
	path: '/home', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: HomePage, // PAGE ứng với ROUTE đó
};

const AboutUsRoute = {
	path: '/about-us', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: AboutUs, // PAGE ứng với ROUTE đó
};

const ContactUsRoute = {
	path: '/contact-us', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: ContactUs, // PAGE ứng với ROUTE đó
};

const ArtworkRoute = {
	path: '/artwork', // URL trên browser
	layout: UserLayout, //LAYOUT ứng với từng ROUTE
	page: search, // PAGE ứng với ROUTE đó
};

const ProfileRoute = {
	path: '/profile/:id', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: Profile, // PAGE ứng với ROUTE đó
};

const ProfileEditRoute = {
	path: '/profile-edit', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: ProfileEdit, // PAGE ứng với ROUTE đó
};

const ItemRoute = {
	path: '/item/:id', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: Item, // PAGE ứng với ROUTE đó
};

const ActivityRoute = {
	path: '/activity', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: Activity, // PAGE ứng với ROUTE đó
};

const UploadDetailsRoute = {
	path: '/upload-details', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: UploadDetails, // PAGE ứng với ROUTE đó
};

const UploadVariantsRoute = {
	path: '/upload-variants', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: UploadVariants, // PAGE ứng với ROUTE đó
};

const DepositRoute = {
	path: '/deposit',
	layout: UserLayout,
	page: Deposit,
};

const LoginRoute = {
	path: '/login',
	layout: NoLayout,
	page: Login,
};
const RegisterRoute = {
	path: '/register',
	layout: NoLayout,
	page: Register,
};

export const routes = [
	// USER
	HomePageRoute,
	AboutUsRoute,
	ContactUsRoute,
	ArtworkRoute,
	ProfileRoute,
	ProfileEditRoute,
	ItemRoute,
	ActivityRoute,
	UploadDetailsRoute,
	UploadVariantsRoute,
	DepositRoute,
	LoginRoute,
	RegisterRoute,
];
