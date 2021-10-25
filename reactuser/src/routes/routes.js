// USER
import UserLayout from '../layout/UserLayout';
import HomePage from '../pages/HomePage';
import AboutUs from './../pages/AboutUs';
import search from './../pages/Search';
import Profile from './../pages/Profile';
import ProfileEdit from './../pages/Profile';
import item from './../pages/Item';
import Activity from './../pages/Activity';


// USER
const HomePageRoute = {
	path: '/homepage', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: HomePage, // PAGE ứng với ROUTE đó
};

const AboutUsRoute = {
	path: '/about-us', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: AboutUs, // PAGE ứng với ROUTE đó
};

const SearchRoute = {
	path: '/search', // URL trên browser
	layout: UserLayout, //LAYOUT ứng với từng ROUTE
	page: search, // PAGE ứng với ROUTE đó
};

const ProfileRoute = {
	path: '/profile', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: Profile, // PAGE ứng với ROUTE đó
};

const ProfileEditRoute = {
	path: '/profile-edit', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: ProfileEdit, // PAGE ứng với ROUTE đó
};

const ItemRoute = {
	path: '/item', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: item, // PAGE ứng với ROUTE đó
};

const ActivityRoute = {
	path: '/activity', // URL trên browser
	layout: UserLayout, // LAYOUT ứng với từng ROUTE
	page: Activity, // PAGE ứng với ROUTE đó
};

export const routes = [
	// USER
	HomePageRoute,
	AboutUsRoute,
	SearchRoute,
	ProfileRoute,
	ProfileEditRoute,
	ItemRoute,
	ActivityRoute,
];
