// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRWJsgzo4By_vhbSKl5Vi9SBTkq_zKgro",
  authDomain: "pulsewire-c11bf.firebaseapp.com",
  projectId: "pulsewire-c11bf",
  storageBucket: "pulsewire-c11bf.firebasestorage.app",
  messagingSenderId: "711609045382",
  appId: "1:711609045382:web:aaf3adab8b0afb4d7e5c07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;