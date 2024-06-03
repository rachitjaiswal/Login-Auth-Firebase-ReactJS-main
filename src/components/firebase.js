// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK6lSk_g5et4mqey5aK5_DTpMDqjgBiV4",
  authDomain: "login-auth-73819.firebaseapp.com",
  projectId: "login-auth-73819",
  storageBucket: "login-auth-73819.appspot.com",
  messagingSenderId: "111952802482",
  appId: "1:111952802482:web:1a349063a3c22ac9aacfab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;