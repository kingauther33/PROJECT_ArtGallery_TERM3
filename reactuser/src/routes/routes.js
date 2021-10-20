// USER
import UserLayout from '../layout/UserLayout';
import HomePage from '../pages/User/HomePage';
import AboutUs from './../pages/User/AboutUs';

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

export const routes = [
	// USER
	HomePageRoute,
	AboutUsRoute,
];
