// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_PGZDU8Dbgra7rjU5YB6UUhRJKS0xP2U",
  authDomain: "pantry-app-b0201.firebaseapp.com",
  projectId: "pantry-app-b0201",
  storageBucket: "pantry-app-b0201.appspot.com",
  messagingSenderId: "1070898030673",
  appId: "1:1070898030673:web:a91aa45fe62d141c757070"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)
export {app, firestore}