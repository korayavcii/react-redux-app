
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCzBx4ib1rirh8_laJntPznQKZNpHndox4",
    authDomain: "react-redux-toolkit-fire-dbba8.firebaseapp.com",
    projectId: "react-redux-toolkit-fire-dbba8",
    storageBucket: "react-redux-toolkit-fire-dbba8.appspot.com",
    messagingSenderId: "936788246921",
    appId: "1:936788246921:web:76f3ed18b3e840ea40a158"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app)

export {auth,db}