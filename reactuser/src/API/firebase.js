import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyC_LMjWZZ-fFt8EhKfva-HfkENPluawNjA',
	authDomain: 'fir-artgallery-storage.firebaseapp.com',
	projectId: 'fir-artgallery-storage',
	storageBucket: 'fir-artgallery-storage.appspot.com',
	messagingSenderId: '899413675906',
	appId: '1:899413675906:web:88d516874b9f52e041499b',
	measurementId: 'G-P4YXGG1H7X',
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
