// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFRZ_yHmPw7n-QMPp_QwWBldSVxV6G_Do",
  authDomain: "react45060-rociof.firebaseapp.com",
  projectId: "react45060-rociof",
  storageBucket: "react45060-rociof.appspot.com",
  messagingSenderId: "512107955670",
  appId: "1:512107955670:web:d71894d4832b2748725077"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection(db,'productos'); 