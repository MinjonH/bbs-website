// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDs54CgXALcN09U6Nox1zjIOBpN2X-_Gak',
	authDomain: 'bbs-website-2389d.firebaseapp.com',
	projectId: 'bbs-website-2389d',
	storageBucket: 'bbs-website-2389d.appspot.com',
	messagingSenderId: '639485515631',
	appId: '1:639485515631:web:e805de56b6c810b79aba9a',
	measurementId: 'G-HQQMWSTLDS',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
